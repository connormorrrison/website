"use client"
import React, { useState } from 'react'
import { TextField } from "@/components/text-field"
import { Button1 } from "@/components/button-1"
import { Text1 } from "@/components/text-1"
import { Text3 } from "@/components/text-3"
import { PageLayout } from "@/components/page-layout"

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      })
      if (!res.ok) throw new Error('Mail failed')
      setStatus('sent')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <PageLayout>
      <Text1>Contact</Text1>
      
      <Text3 as="p">
        If you have a question, want to collaborate, or simply to say hi, feel free to reach out.
      </Text3>
      
      {/* Contact Methods */}
      <ul className="space-y-2">
        <li>
          <Text3 as="a"
            href="mailto:cm4@ualberta.ca"
            className="hover:underline"
            variant="blue"
          >
            Email ↗
          </Text3>
        </li>
        <li>
          <Text3 as="a"
            href="https://www.linkedin.com/in/connormorrrison/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            variant="blue"
          >
            LinkedIn ↗
          </Text3>
        </li>
        <li>
          <Text3 as="a"
            href="https://github.com/connormorrrison"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            variant="blue"
          >
            GitHub ↗
          </Text3>
        </li>
      </ul>
      
      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col space-y-4"
      >
        <TextField
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          type="email"
          placeholder="Email*"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <TextField
          variant="large"
          placeholder="Message*"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
        <Button1
          type="submit"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </Button1>
        {status === 'sent' && <Text3 as="p" variant="green">Message sent!</Text3>}
        {status === 'error' && <Text3 as="p" variant="red">Failed to send.</Text3>}
      </form>
    </PageLayout>
  )
}