import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { getCandleById } from "@/lib/candles-data";
import { validateName, validateRequestText, VALIDATION_MESSAGE } from "@/lib/content-filter";
import { sendNewCandleEmail } from "@/lib/email";
import { sendWhatsappNotification } from "@/lib/whatsapp";

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const ipHits = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const hits = (ipHits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  hits.push(now);
  ipHits.set(ip, hits);
  return hits.length <= RATE_LIMIT_MAX;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "desconhecido";
  const body = await req.json();
  const { nome, cidade, estado, email, corId, pedido } = body;

  const supabase = supabaseAdmin();

  const { data: blocked } = await supabase
    .from("blocked_users")
    .select("id")
    .or(`ip.eq.${ip},email.eq.${email ?? ""},nome.eq.${nome ?? ""}`)
    .limit(1);

  if (blocked && blocked.length > 0) {
    await logModeration({ nome, cidade, estado, pedido, acao: "bloqueado_filtro", motivo: "usuário bloqueado", ip });
    return NextResponse.json(
      {
        message:
          "No momento, este acesso não está autorizado a utilizar o Altar Virtual TEEG7. Este espaço é destinado a pedidos de fé, luz, caridade e boas intenções.",
      },
      { status: 403 }
    );
  }

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { message: "Muitos envios em pouco tempo. Por favor, tente novamente mais tarde." },
      { status: 429 }
    );
  }

  const nomeCheck = validateName(nome ?? "");
  if (!nomeCheck.valid) {
    return NextResponse.json({ message: nomeCheck.message }, { status: 400 });
  }

  const candleDef = getCandleById(corId);
  if (!cidade || !estado || !candleDef || !pedido) {
    return NextResponse.json({ message: "Por favor, preencha todos os campos obrigatórios." }, { status: 400 });
  }

  const { data: blockedWordsRows } = await supabase
    .from("blocked_words")
    .select("palavra")
    .eq("ativa", true);
  const blockedWords = (blockedWordsRows ?? []).map((r) => r.palavra as string);

  const filterResult = validateRequestText(pedido, blockedWords);
  if (!filterResult.allowed) {
    await logModeration({
      nome, cidade, estado, pedido,
      acao: "bloqueado_filtro",
      motivo: filterResult.reason ?? "conteúdo inadequado",
      ip,
    });
    return NextResponse.json({ message: VALIDATION_MESSAGE }, { status: 400 });
  }

  const { data: candle, error } = await supabase
    .from("candles")
    .insert({
      nome,
      cidade,
      estado,
      email: email || null,
      cor: candleDef.label,
      orixa: candleDef.orixa,
      tipo_vela: candleDef.tipo,
      pedido,
      status: "pendente",
      ip_address: ip,
    })
    .select()
    .single();

  if (error || !candle) {
    console.error("[api/candles] erro ao inserir:", error);
    return NextResponse.json({ message: "Não foi possível registrar sua vela. Tente novamente." }, { status: 500 });
  }

  notifyAdmins(candle).catch((err) => console.error("[api/candles] falha ao notificar:", err));

  return NextResponse.json({ ok: true, id: candle.id });
}

async function logModeration(entry: {
  nome?: string; cidade?: string; estado?: string; pedido?: string; acao: string; motivo?: string; ip: string;
}) {
  const supabase = supabaseAdmin();
  await supabase.from("moderation_logs").insert({
    nome: entry.nome,
    cidade: entry.cidade,
    estado: entry.estado,
    pedido: entry.pedido,
    acao: entry.acao,
    motivo: entry.motivo,
    ip_address: entry.ip,
  });
}

async function notifyAdmins(candle: any) {
  const supabase = supabaseAdmin();
  const { data: settings } = await supabase.from("notification_settings").select("*").single();
  if (!settings) return;

  const dataHora = new Date(candle.created_at).toLocaleString("pt-BR");
  const linkPainel = `${process.env.NEXT_PUBLIC_SITE_URL}/admin/dashboard`;
  const trechoPedido = candle.pedido.slice(0, 200);

  if (settings.email_ativo) {
    const emails = [settings.email_principal, ...(settings.emails_adicionais ?? [])].filter(Boolean);
    await sendNewCandleEmail(emails, {
      nome: candle.nome,
      cor: candle.cor,
      orixa: candle.orixa,
      cidade: candle.cidade,
      estado: candle.estado,
      dataHora,
      trechoPedido,
      linkPainel,
    });
  }

  if (settings.whatsapp_ativo) {
    await sendWhatsappNotification({
      nome: candle.nome,
      cor: candle.cor,
      orixa: candle.orixa,
      cidade: candle.cidade,
      estado: candle.estado,
      dataHora,
      pedido: trechoPedido,
      linkPainel,
    });
  }
}
