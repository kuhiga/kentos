import { SmtpClient } from "https://deno.land/x/smtp/mod.ts";

import type { FormData } from "../models/forms.ts";
export const sendFormToAdmin = async ({
  name,
  email,
  message,
}: FormData): Promise<string> => {
  const client = new SmtpClient();
  await client.connectTLS({
    hostname: "smtp.gmail.com",
    port: 465,
    username: Deno.env.get("email_username"),
    password: Deno.env.get("email_password"),
  });

  await client.send({
    from: Deno.env.get("email_username")!,
    to: "kurthiga@gmail.com",
    subject: "Test email",
    content: `name is ${name}, email is ${email}, message is ${message}`,
    // html: "<a href='https://github.com'>Github</a>",
  });

  await client.close();
  return name;
};
