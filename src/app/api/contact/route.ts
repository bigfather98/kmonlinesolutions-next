import { sendContactEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";
    if (!rateLimit(ip, 5, 60_000)) {
      return Response.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const { name, email, service, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 }
      );
    }

    await sendContactEmail({ name, email, service, subject, message });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return Response.json(
      { error: `Failed to send your message. ${msg}` },
      { status: 500 }
    );
  }
}
