// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  // configure transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  // send mail
  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `New contact from ${name}`,
      text: message,
      html: `<p>${message.replace(/\n/g, '<br>')}</p>
             <p>— ${name} (${email})</p>`,
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Mail error', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
