import mailgun from "mailgun-js";
import { mailgunApiKey, mailgunDomain } from "$env/dynamic/private";
interface EmailData {
  name: string;
  message: string;
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const mg = mailgun({
    apiKey: mailgunApiKey,
    domain: mailgunDomain,
  });

  try {
    const { name, message } = (await request.json()) as Partial<EmailData>;

    const data = {
      from: "Zoltán Debreceni <'debrecenizoltan19@gmail.com'>",
      to: "debrecenizoltan19@gmail.com",
      subject: name,
      text: message,
    };

    await mg.messages().send(data);

    return new Response(String("random"));
  } catch (error) {
    console.log(error);
    return new Response(String(error));
  }
}
