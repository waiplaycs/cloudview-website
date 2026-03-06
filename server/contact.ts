/**
 * 聯絡表單通知處理器
 * 發送電郵 (Gmail) 及 Telegram 通知
 */

import nodemailer from "nodemailer";

export interface ContactPayload {
  name: string;
  phone: string;
  unitType: string;
  message: string;
}

const UNIT_LABELS: Record<string, string> = {
  studio: "開放式 (196–220呎)",
  "1br": "一房 (292–445呎)",
  "2br": "兩房 (445–620呎)",
  "3br": "三房 (620–868呎)",
};

export async function sendContactNotification(payload: ContactPayload): Promise<{ ok: boolean; errors: string[] }> {
  const errors: string[] = [];
  const unitLabel = UNIT_LABELS[payload.unitType] ?? payload.unitType ?? "未選擇";
  const now = new Date().toLocaleString("zh-HK", { timeZone: "Asia/Hong_Kong" });

  // ── 電郵通知 ──────────────────────────────────────────────
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const notifyEmail = process.env.NOTIFY_EMAIL;

  if (gmailUser && gmailPass && notifyEmail) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailPass },
      });

      await transporter.sendMail({
        from: `"雲向 Cloudview 查詢" <${gmailUser}>`,
        to: notifyEmail,
        subject: `【新查詢】${payload.name} — 雲向 Cloudview`,
        html: `
          <div style="font-family:sans-serif;max-width:520px;margin:0 auto;color:#222;">
            <h2 style="background:#1a3a5c;color:#fff;padding:16px 20px;margin:0;font-size:18px;">
              🏢 雲向 Cloudview — 新查詢通知
            </h2>
            <table style="width:100%;border-collapse:collapse;margin-top:0;">
              <tr style="background:#f5f5f5;">
                <td style="padding:10px 16px;font-weight:bold;width:120px;">姓名</td>
                <td style="padding:10px 16px;">${payload.name}</td>
              </tr>
              <tr>
                <td style="padding:10px 16px;font-weight:bold;">聯絡電話</td>
                <td style="padding:10px 16px;"><a href="tel:${payload.phone}">${payload.phone}</a></td>
              </tr>
              <tr style="background:#f5f5f5;">
                <td style="padding:10px 16px;font-weight:bold;">感興趣戶型</td>
                <td style="padding:10px 16px;">${unitLabel}</td>
              </tr>
              <tr>
                <td style="padding:10px 16px;font-weight:bold;">查詢內容</td>
                <td style="padding:10px 16px;">${payload.message || "（無）"}</td>
              </tr>
              <tr style="background:#f5f5f5;">
                <td style="padding:10px 16px;font-weight:bold;">提交時間</td>
                <td style="padding:10px 16px;">${now}</td>
              </tr>
            </table>
            <p style="padding:12px 16px;font-size:12px;color:#888;border-top:1px solid #eee;">
              此郵件由雲向 Cloudview 網站自動發送
            </p>
          </div>
        `,
      });
    } catch (e) {
      errors.push(`Email error: ${e}`);
      console.error("[contact] Email failed:", e);
    }
  } else {
    console.warn("[contact] Email env vars not configured, skipping email.");
  }

  // ── Telegram 通知 ─────────────────────────────────────────
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (botToken && chatId) {
    try {
      const text =
        `🏢 <b>雲向 Cloudview — 新查詢</b>\n\n` +
        `👤 <b>姓名：</b>${payload.name}\n` +
        `📞 <b>電話：</b>${payload.phone}\n` +
        `🏠 <b>戶型：</b>${unitLabel}\n` +
        `💬 <b>查詢：</b>${payload.message || "（無）"}\n` +
        `🕐 <b>時間：</b>${now}`;

      const res = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
        }
      );

      if (!res.ok) {
        const body = await res.text();
        errors.push(`Telegram error: ${res.status} ${body}`);
        console.error("[contact] Telegram failed:", body);
      }
    } catch (e) {
      errors.push(`Telegram error: ${e}`);
      console.error("[contact] Telegram failed:", e);
    }
  } else {
    console.warn("[contact] Telegram env vars not configured, skipping Telegram.");
  }

  return { ok: errors.length === 0, errors };
}
