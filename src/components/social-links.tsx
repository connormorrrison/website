"use client"

import React from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialLinks() {
  return (
    <div className="absolute top-6 right-6 flex space-x-4 z-10">
      {/* Email button */}
      <Button
        asChild
        variant="outline"
        size="icon"
        aria-label="Email"
        className="rounded-full w-10 h-10 flex items-center justify-center text-blue-600"
      >
        <a href="mailto:cm4@ualberta.ca">
          <Mail className="w-5 h-5" />
        </a>
      </Button>

      {/* LinkedIn button */}
      <Button
        asChild
        variant="outline"
        size="icon"
        aria-label="LinkedIn"
        className="rounded-full w-10 h-10 flex items-center justify-center text-blue-600"
      >
        <a
          href="https://www.linkedin.com/in/connormorrrison/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </Button>

      {/* GitHub button */}
      <Button
        asChild
        variant="outline"
        size="icon"
        aria-label="GitHub"
        className="rounded-full w-10 h-10 flex items-center justify-center text-blue-600"
      >
        <a
          href="https://github.com/connormorrrison"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5" />
        </a>
      </Button>
    </div>
  )
}
