import nodemailer from "nodemailer";
import { SITE } from "./constants";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

interface ContactFormData {
  name: string;
  email: string;
  service: string;
  subject: string;
  message: string;
}

export function validateEnv() {
  return {
    host: requireEnv("SMTP_HOST"),
    port: Number(requireEnv("SMTP_PORT")),
    user: requireEnv("SMTP_USER"),
    pass: requireEnv("SMTP_PASS"),
    contactEmail: requireEnv("CONTACT_EMAIL"),
  };
}

export async function sendContactEmail(data: ContactFormData) {
  const env = validateEnv();

  const transporter = nodemailer.createTransport({
    host: env.host,
    port: env.port,
    secure: true,
    auth: {
      user: env.user,
      pass: env.pass,
    },
  });

  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeService = escapeHtml(data.service || "Not specified");
  const safeSubject = escapeHtml(data.subject);
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br>");

  await transporter.sendMail({
    from: `"${SITE.name}" <${env.user}>`,
    to: env.contactEmail,
    replyTo: data.email,
    subject: `[Website Contact] ${safeSubject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a365d;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 12px; background: #f7fafc; font-weight: bold; border: 1px solid #e2e8f0;">Name</td>
            <td style="padding: 8px 12px; border: 1px solid #e2e8f0;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: #f7fafc; font-weight: bold; border: 1px solid #e2e8f0;">Email</td>
            <td style="padding: 8px 12px; border: 1px solid #e2e8f0;">${safeEmail}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: #f7fafc; font-weight: bold; border: 1px solid #e2e8f0;">Service</td>
            <td style="padding: 8px 12px; border: 1px solid #e2e8f0;">${safeService}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background: #f7fafc; font-weight: bold; border: 1px solid #e2e8f0;">Subject</td>
            <td style="padding: 8px 12px; border: 1px solid #e2e8f0;">${safeSubject}</td>
          </tr>
        </table>
        <div style="margin-top: 16px; padding: 16px; background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h3 style="color: #1a365d; margin: 0 0 8px;">Message</h3>
          <p style="margin: 0; line-height: 1.6;">${safeMessage}</p>
        </div>
        <p style="margin-top: 16px; font-size: 12px; color: #718096;">
          This email was sent from the ${SITE.name} contact form.
        </p>
      </div>
    `,
  });
}
