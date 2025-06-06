"use server";
import nodemailer from "nodemailer";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export async function sendContactMail(data: ContactFormValues) {
  const { name, email, message } = data;

  // SMTP ayarlarıyla bir e-posta gönderici (transporter) oluşturuluyor
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // SMTP sunucu adresi
    port: Number(process.env.EMAIL_PORT), // SMTP portu
    secure: false, // Genelde 587 portu için false olur (TLS için)
    auth: {
      user: process.env.EMAIL_USER, // Gönderen e-posta adresi
      pass: process.env.EMAIL_PASS, // SMTP için şifre veya uygulama şifresi
    },
  });
  // E-posta içeriği hazırlanıyor
  const mailOptions = {
    from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_USER}>`, // Kimden geldiği (isim ve e-posta)
    to: process.env.EMAIL_USER, // Kendimize ya da sabit bir alıcıya gönderebiliriz
    subject: `📬 Yeni İletişim Formu Mesajı - ${name}`, // E-posta başlığı
    text: `
Yeni bir mesaj aldınız:

👤 Gönderen: ${name}
📧 E-posta: ${email}

📝 Mesaj:
${message}
    `,
  };

  try {
    // E-posta gönderiliyor
    await transporter.sendMail(mailOptions);
    console.log("E-posta başarıyla gönderildi.");
  } catch (error) {
    console.error("E-posta gönderilirken hata oluştu:", error);
    throw new Error("E-posta gönderilemedi.");
  }
}
