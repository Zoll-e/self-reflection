import mailgun from "mailgun-js";
interface EmailData {
  name: string;
  message: string;
}
const { MAILGUN_API_KEY, MAILGUN_DOMAIN } = import.meta.env;

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const mg = mailgun({
    apiKey: MAILGUN_API_KEY,
    domain: MAILGUN_DOMAIN,
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
