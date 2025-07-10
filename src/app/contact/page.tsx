"use client"
import React, { useState } from 'react'
import { ArrowUpRight } from "lucide-react"

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
    <div className="flex flex-col items-start justify-start px-8 pb-8 space-y-8 max-w-3xl" style={{paddingTop: '64px'}}>
      <h1 className="text-3xl font-normal text-foreground">Contact</h1>
      
      <p className="text-lg text-foreground">
        If you have a question, want to collaborate, or simply to say hi, feel free to reach out.
      </p>
      
      <ul className="space-y-2 text-lg">
        <li>
          <a
            href="mailto:cm4@ualberta.ca"
            className="text-blue-600 hover:underline"
          >
            Email <ArrowUpRight className="inline w-5 h-5" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/connormorrrison/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn <ArrowUpRight className="inline w-5 h-5" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/connormorrrison"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub <ArrowUpRight className="inline w-5 h-5" />
          </a>
        </li>
      </ul>
      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col space-y-4 text-lg"
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-4 py-2 text-lg text-muted-foreground bg-background dark:bg-input/30 border border-gray-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring"
        />
        <input
          type="email"
          placeholder="Email*"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 text-lg text-muted-foreground bg-background dark:bg-input/30 border border-gray-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring"
        />
        <textarea
          placeholder="Message*"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          className="w-full px-4 py-2 text-lg text-muted-foreground bg-background dark:bg-input/30 border border-gray-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring h-32 resize-none"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="px-6 py-2 text-lg font-normal text-white bg-blue-600 border border-gray-300 dark:border-zinc-700 rounded-lg hover:bg-blue-700 disabled:opacity-50 shadow-none"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'sent' && <p className="text-green-600">Message sent!</p>}
        {status === 'error' && <p className="text-red-600">Failed to send.</p>}
      </form>
    </div>
  )
}