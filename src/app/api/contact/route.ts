import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, service, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"KM Online Solutions" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Website Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a365d;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 12px; background: #f7fafc; font-weight: bold; border: 1px solid #e2e8f0;">Name</td>
              <td style="padding: 8px 12px; border: 1px solid #e2e8f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; background: #f7fafc; font-weight: bold; border: 1px solid #e2e8f0;">Email</td>
              <td style="padding: 8px 12px; border: 1px solid #e2e8f0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; background: #f7fafc; font-weight: bold; border: 1px solid #e2e8f0;">Service</td>
              <td style="padding: 8px 12px; border: 1px solid #e2e8f0;">${service || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; background: #f7fafc; font-weight: bold; border: 1px solid #e2e8f0;">Subject</td>
              <td style="padding: 8px 12px; border: 1px solid #e2e8f0;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f7fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #1a365d; margin: 0 0 8px;">Message</h3>
            <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="margin-top: 16px; font-size: 12px; color: #718096;">
            This email was sent from the KM Online Solutions contact form.
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    const message =
      error instanceof Error ? error.message : "Unknown error";
    return Response.json(
      { error: `Failed to send your message. ${message}` },
      { status: 500 }
    );
  }
}
