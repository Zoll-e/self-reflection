import { Resend } from "resend";
import { env } from "$env/dynamic/private";
import type { RequestHandler } from "./$types";

interface EmailData {
  name: string;
  message: string;
}

export const POST: RequestHandler = async ({ request }) => {
  try {
    
    const MAILGUN_API_KEY = env.MAILGUN_API_KEY;
    
    if (!MAILGUN_API_KEY) {
      const allEnvKeys = Object.keys(env).sort();
      const apiRelatedKeys = allEnvKeys.filter(key => 
        key.includes('RESEND') || 
        key.includes('API') || 
        key.includes('MAIL') ||
        key.includes('EMAIL')
      );
      
      console.error("RESEND_API_KEY is not set in environment variables");
      console.error("All environment variable keys:", allEnvKeys);
      console.error("API/Email related keys:", apiRelatedKeys);
      
      return new Response(JSON.stringify({ 
        error: "Email service not configured",
        message: "RESEND_API_KEY environment variable is missing. Please set it in Vercel project settings.",
        debug: {
          availableKeys: allEnvKeys.length,
          apiRelatedKeys: apiRelatedKeys
        }
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const resend = new Resend(MAILGUN_API_KEY);

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
