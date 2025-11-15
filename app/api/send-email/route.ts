import axios from "axios";

export async function POST(req: Request) {
  try {
    const { email, subject, htmlContent } = await req.json();

    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: process.env.APP_NAME,
          email: process.env.FROM_EMAIL,
        },
        to: [{ email }],
        subject,
        htmlContent,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "api-key": process.env.BREVO_API_KEY!,
        },
      }
    );

    return Response.json({ success: true });
  } catch (error) {
    console.error("Brevo error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
