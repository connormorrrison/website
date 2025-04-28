"use client"

import React from 'react'
import { Github, Linkedin } from 'lucide-react'

export default function SocialLinks() {
  return (
    <div className="absolute top-6 right-6 flex space-x-4 z-10">
      {/* LinkedIn button */}
      <a
        href="https://www.linkedin.com/in/connormorrrison/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="
          w-10 h-10
          flex items-center justify-center
          rounded-md
          border border-gray-300
          hover:bg-gray-100
          transition
        "
      >
        <Linkedin className="w-5 h-5" />
      </a>

      {/* GitHub button */}
      <a
        href="https://github.com/connormorrrison"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="
          w-10 h-10
          flex items-center justify-center
          rounded-md
          border border-gray-300
          hover:bg-gray-100
          transition
        "
      >
        <Github className="w-5 h-5" />
      </a>
    </div>
  )
}
