import { Resend } from "resend";

// Usamos Resend como provedor de e-mail transacional (fácil de configurar,
// funciona bem com Vercel). Pode ser trocado por SendGrid/Postmark
// mantendo a mesma assinatura de função.
const resend = new Resend(process.env.RESEND_API_KEY);

export interface NewCandleNotificationData {
  nome: string;
  cor: string;
  orixa: string;
  cidade: string;
  estado: string;
  dataHora: string;
  trechoPedido: string;
  linkPainel: string;
}

export async function sendNewCandleEmail(
  toEmails: string[],
  data: NewCandleNotificationData
) {
  if (!toEmails.length) return { skipped: true };

  const subject = "🔔 Nova vela aguardando aprovação — Altar Virtual TEEG7";

  const html = `
    <div style="font-family: Georgia, serif; background:#0B1447; padding:32px; color:#FDFDFD;">
      <h2 style="color:#D4AF6A;">🔔 Nova vela aguardando aprovação</h2>
      <p><strong>Nome:</strong> ${escapeHtml(data.nome)}</p>
      <p><strong>Vela:</strong> ${escapeHtml(data.cor)} — ${escapeHtml(data.orixa)}</p>
      <p><strong>Cidade/UF:</strong> ${escapeHtml(data.cidade)}/${escapeHtml(data.estado)}</p>
      <p><strong>Data/Hora:</strong> ${escapeHtml(data.dataHora)}</p>
      <p><strong>Pedido:</strong> ${escapeHtml(data.trechoPedido)}</p>
      <p style="margin-top:24px;">
        <a href="${data.linkPainel}" style="background:#D4AF6A;color:#0B1447;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:bold;">
          Abrir painel administrativo
        </a>
      </p>
      <p style="opacity:0.7;margin-top:32px;font-size:12px;">Templo Espírita Estrela Guia e Caboclo Sete Pedras do Mar (TEEG7)</p>
    </div>
  `;

  try {
    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM || "Altar Virtual TEEG7 <altar@teeg7.com.br>",
      to: toEmails,
      subject,
      html,
    });
    return { ok: true, result };
  } catch (err) {
    console.error("[email] falha ao enviar notificação:", err);
    return { ok: false, error: err };
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
