import axios from "axios";

export const sendEmail = async (
  email: string,
  subject: string,
  html_content: string
): Promise<boolean> => {
  try {
    await axios.post(
      "/api/send-email",
      {
        email: email,
        subject: subject,
        htmlContent: html_content,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return true;
  } catch (error) {
    console.error("Error sending email", error);
    return false;
  }
};
