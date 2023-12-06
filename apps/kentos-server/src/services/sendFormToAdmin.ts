import type { FormData } from "../models/forms.ts";
export const sendFormToAdmin = async ({
  name,
  email,
  message,
}: FormData): Promise<Response> => {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      },
      body: JSON.stringify({
        from: "Kentos LLC <admin@kurthiga.com>",
        to: [email],
        subject: `new student ${name}`,
        html: `<strong>${message} from ${email}!</strong>`,
      }),
    });

    if (res.ok) {
      const data = await res.json();

      return new Response(data, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      const errorData = await res.json();
      throw new Error(
        `API request failed with status ${res.status}: ${errorData.message}`
      );
    }
  } catch (error) {
    console.error("Error sending form to admin:", error.message);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
