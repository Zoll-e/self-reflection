import mailgun from "mailgun-js";

interface EmailData {
  name: string;
  message: string;
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const mg = mailgun({
    apiKey: "d08406c64435e011b96902cdccc5e00e-181449aa-83894f28",
    domain: "sandbox10e715abc7894d76ac4a98212de2c650.mailgun.org",
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
