"use server";
import nodemailer from "nodemailer";
import { ContactFormValues, ContactFormResponse } from "@/lib/types/contact";

export async function sendContactMail(
  data: ContactFormValues
): Promise<ContactFormResponse> {
  const { name, email, message } = data;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `📬 New Contact Form Message - ${name}`,
    text: `
You have a new message:

👤 Sender: ${name}
📧 Email: ${email}

📝 Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully." };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email.");
  }
}
