import nodemailer from "npm:nodemailer";
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
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 8443,
      auth: {
        user: username,
        pass: password,
      },
    });
    await transporter.sendMail({
      from: username,
      to: "kurthiga@gmail.com",
      subject: "Test email",
      text: `name is ${name}, email is ${email}, message is ${message}`,
      // html: "<a href='https://github.com'>Github</a>",
    });

    return name;
  } catch (error) {
    throw error;
  }
};
