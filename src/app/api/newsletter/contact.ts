// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { fullName, email, message } = req.body;

  if (!fullName || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail', // or 'hotmail', 'outlook', use SMTP if needed
    auth: {
      user: process.env.SMTP_USER, // your email
      pass: process.env.SMTP_PASS, // your email app password
    },
  });

  try {
    await transporter.sendMail({
      from: `"${fullName}" <${email}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL, // your company email
      subject: 'New Contact Form Message',
      text: message,
      html: `<p><strong>From:</strong> ${fullName} (${email})</p><p><strong>Message:</strong><br/>${message}</p>`,
    });

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Email send error:', err);
    return res.status(500).json({ message: 'Something went wrong while sending the message.' });
  }
}
