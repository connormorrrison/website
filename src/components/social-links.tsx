"use client"
import React from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { IconButton } from "@/components/ui/icon-button"

export default function SocialLinks() {
  return (
    <div className="absolute flex space-x-4 z-10" style={{top: '32px', right: '32px'}}>
      {/* Email button */}
      <IconButton
        asChild
        aria-label="Email"
        isExternal={true}
      >
        <a href="mailto:cm4@ualberta.ca">
          <Mail className="w-5 h-5" />
        </a>
      </IconButton>
      
      {/* LinkedIn button */}
      <IconButton
        asChild
        aria-label="LinkedIn"
        isExternal={true}
      >
        <a
          href="https://www.linkedin.com/in/connormorrrison/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </IconButton>
      
      {/* GitHub button */}
      <IconButton
        asChild
        aria-label="GitHub"
        isExternal={true}
      >
        <a
          href="https://github.com/connormorrrison"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5" />
        </a>
      </IconButton>
    </div>
  )
}