// src/app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name = '', email = '', message = '' } = await req.json()

  const trimmedEmail   = email.trim()
  const trimmedMessage = message.trim()
  const trimmedName    = name.trim()

  if (!trimmedEmail || !trimmedMessage) {
    return NextResponse.json(
      { error: 'Email and message are required' },
      { status: 400 }
    )
  }

  const { ICLOUD_USER, ICLOUD_PASS, EMAIL_TO } = process.env
  if (!ICLOUD_USER || !ICLOUD_PASS || !EMAIL_TO) {
    console.error('Missing SMTP env vars')
    return NextResponse.json(
      { error: 'Mail server not configured' },
      { status: 500 }
    )
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.me.com',
    port: 587,
    secure: false,      // STARTTLS
    requireTLS: true,
    auth: {
      user: ICLOUD_USER,
      pass: ICLOUD_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${ICLOUD_USER}>`,
      replyTo: trimmedName
        ? `"${trimmedName}" <${trimmedEmail}>`
        : trimmedEmail,
      to: EMAIL_TO,
      subject: trimmedName
        ? `New contact from ${trimmedName}`
        : 'New contact',
      text: trimmedMessage,
      html: `
        <p>${trimmedMessage.replace(/\n/g, '<br>')}</p>
        <p>- ${trimmedName || trimmedEmail}${
          trimmedName ? ` (${trimmedEmail})` : ''
        }</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Mail error', err)
    return NextResponse.json(
      { error: 'Failed to send' },
      { status: 500 }
    )
  }
}
