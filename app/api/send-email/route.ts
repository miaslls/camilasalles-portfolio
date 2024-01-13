'use server';

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export async function POST(req: Request) {
  const body = await req.json();

  const mailOptions = {
    from: `Camila Salles <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO,
    cc: process.env.EMAIL_FROM,
    subject: 'FROM PORTFOLIO',
    text: body.textMessage,
    html: body.htmlMessage,
  };

  await transporter
    .sendMail(mailOptions)
    .then(() => {
      return NextResponse.json({ status: 200 });
    })
    .catch((error) => {
      console.error(error);
      return NextResponse.json({ status: 500 });
    });
}
