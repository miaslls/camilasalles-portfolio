import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { EmailData } from './types';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// FIXME: 🐞 error handling 🔻

export async function POST(req: Request) {
  const body: EmailData = await req.json();

  const mailOptions = {
    from: `Camila Salles <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO,
    cc: process.env.EMAIL_FROM,
    subject: 'FROM PORTFOLIO',
    text: body.textMessage,
    html: body.htmlMessage,
  };

  try {
    await transporter.sendMail(mailOptions).catch((error) => {
      throw new Error(error);
    });

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500 });
  }
}
