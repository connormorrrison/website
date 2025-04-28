"use client"

import React from "react"

export default function ContactPage() {
  return (
    <div className="flex flex-col items-start justify-start p-8 space-y-4">
      <h1 className="text-3xl font-normal">Contact</h1>

      <p className="text-lg">
        I’d love to connect. If you have a question, want to collaborate, or simply say hi, feel free to reach out.
      </p>

      <ul className="space-y-2 text-lg">
        <li>
          <a
            href="mailto:cm4@ualberta.ca"
            className="text-blue-600 hover:underline"
          >
            Email ↗
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/connormorrrison/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn ↗
          </a>
        </li>
        <li>
          <a
            href="https://github.com/connormorrrison"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub ↗
          </a>
        </li>
      </ul>
    </div>
  )
}
