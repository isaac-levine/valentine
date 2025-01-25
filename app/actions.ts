"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendValentineEmail(formData: FormData) {
  const recipientEmail = formData.get("recipientEmail") as string;
  const recipientName = formData.get("recipientName") as string;
  const message = formData.get("message") as string;

  const { error } = await resend.emails.send({
    from: "Valentine <valentine@boilerbase.io>",
    to: [recipientEmail],
    subject: "Will you be my Valentine?",
    html: `
        <h1>Happy Valentine's Day, ${recipientName}!</h1>
        <p>You've received a special message:</p>
        <p>${message}</p>
        <p>Will you be my Valentine?</p>
        <p style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          Sent with <a href="https://sendavalentine.vercel.app" style="color: #ff69b4; text-decoration: none;">sendavalentine.vercel.app</a> ❤️
        </p>
      `,
  });

  if (error) {
    return { success: false, message: error.message };
  }

  return { success: true, message: "Valentine email sent successfully!" };
}
