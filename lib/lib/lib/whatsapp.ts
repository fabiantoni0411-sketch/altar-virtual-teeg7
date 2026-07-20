/**
 * Integração com a Meta WhatsApp Cloud API.
 *
 * Pré-requisitos (feitos uma vez, fora do código):
 *  1. Criar um app no Meta for Developers (business.facebook.com/developers)
 *  2. Ativar o produto "WhatsApp" no app
 *  3. Obter: WHATSAPP_PHONE_NUMBER_ID, WHATSAPP_ACCESS_TOKEN (token permanente
 *     de usuário do sistema, não o token temporário de 24h)
 *  4. Configurar o número de destino (o do templo) como destinatário de teste
 *     ou, em produção, qualquer número pode receber mensagens de template
 *     aprovadas / mensagens de sessão dentro da janela de 24h.
 *
 * Para simplificar, aqui enviamos uma mensagem de texto livre. Isso só
 * funciona se houver uma janela de conversa aberta (24h) com o número de
 * destino, OU se for usado um "message template" pré-aprovado pela Meta.
 * Em produção recomendamos criar um template chamado `nova_vela_admin`
 * para garantir entrega mesmo fora da janela de 24h.
 */

interface NewCandleWhatsappData {
  nome: string;
  cor: string;
  orixa: string;
  cidade: string;
  estado: string;
  dataHora: string;
  pedido: string;
  linkPainel: string;
}

const GRAPH_API_VERSION = "v20.0";

export async function sendWhatsappNotification(data: NewCandleWhatsappData) {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const toNumber = process.env.WHATSAPP_ADMIN_NUMBER; // ex: 5511978384284

  if (!phoneNumberId || !accessToken || !toNumber) {
    console.warn("[whatsapp] variáveis de ambiente ausentes — notificação não enviada");
    return { skipped: true };
  }

  const body = `🔔 Nova vela aguardando aprovação

👤 Nome: ${data.nome}
🕯️ Vela: ${data.cor} — ${data.orixa}
📍 Cidade/UF: ${data.cidade}/${data.estado}
🕒 ${data.dataHora}

📝 Pedido: ${data.pedido}

🔗 Painel: ${data.linkPainel}`;

  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_API_VERSION}/${phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: toNumber,
          type: "text",
          text: { body },
        }),
      }
    );

    const json = await res.json();
    if (!res.ok) {
      console.error("[whatsapp] erro ao enviar:", json);
      return { ok: false, error: json };
    }
    return { ok: true, result: json };
  } catch (err) {
    console.error("[whatsapp] falha de rede:", err);
    return { ok: false, error: err };
  }
}

// Função de teste usada pelo botão "Enviar teste" no painel admin
export async function sendWhatsappTest(toNumberOverride?: string) {
  return sendWhatsappNotification({
    nome: "Teste do Painel",
    cor: "Branca",
    orixa: "Oxalá",
    cidade: "Osasco",
    estado: "SP",
    dataHora: new Date().toLocaleString("pt-BR"),
    pedido: "Esta é uma mensagem de teste enviada pelo painel administrativo.",
    linkPainel: process.env.NEXT_PUBLIC_SITE_URL
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/admin`
      : "https://altar.teeg7.com.br/admin",
  });
}
