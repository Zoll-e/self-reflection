import { Resend } from "resend";
import { RESEND_API_KEY } from "$env/static/private";
import type { RequestHandler } from "./$types";

interface EmailData {
  name: string;
  message: string;
}

if (!RESEND_API_KEY) {
  console.error("RESEND_API_KEY is not set in environment variables");
}

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

export const POST: RequestHandler = async ({ request }) => {
  try {
    if (!resend) {
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { name, message } = (await request.json()) as Partial<EmailData>;

    if (!name || !message) {
      return new Response(JSON.stringify({ error: "Name and message are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Self Reflection <onboarding@resend.dev>", // For production: verify your domain and use your email
      to: ["debrecenizoltan19@gmail.com"],
      subject: `Message from ${name}`,
      text: `From: ${name}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, id: data?.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
