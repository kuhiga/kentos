import type { FormData } from '@kentos/libs';
export const sendFormToAdmin = async ({
  firstName,
  lastName,
  email,
  message,
}: FormData): Promise<Response> => {
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
      },
      body: JSON.stringify({
        from: 'Talk Story English <admin@mail.talkstoryenglish.com>',
        to: [Deno.env.get('ADMIN_EMAIL') ?? 'kurthigaa@gmail.com'],
        subject: `New student form submission from ${firstName} ${lastName}`,
        html: `<body><div><div><div>New Contact Form Submission</div><p><strong>Name:</strong> ${firstName} ${lastName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p></div></div></body>`,
      }),
    });

    if (res.ok) {
      const data = await res.json();

      return new Response(data, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      const errorData = await res.json();
      throw new Error(
        `API request failed with status ${res.status}: ${errorData.message}`
      );
    }
  } catch (error) {
    console.error('Error sending form to admin:', error.message);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
