import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";
import type { FormData } from "../models/forms.ts";
import SecretManager from "../utils/secretManager.ts";
export const sendFormToAdmin = async ({
  name,
  email,
  message,
}: FormData): Promise<string> => {
  const secretManager = new SecretManager("admin_email");
  try {
    const username = await secretManager.getSecret({
      secretName: "EMAIL_USERNAME",
    });
    const password = await secretManager.getSecret({
      secretName: "EMAIL_PASSWORD",
    });
    const client = new SmtpClient();
    await client.connectTLS({
      hostname: "smtp.gmail.com",
      port: 465,
      username,
      password,
    });

    await client.send({
      from: username,
      to: "kurthiga@gmail.com",
      subject: "Test email",
      content: `name is ${name}, email is ${email}, message is ${message}`,
      // html: "<a href='https://github.com'>Github</a>",
    });
    await client.close();
    return name;
  } catch (error) {
    throw error;
  }
};
