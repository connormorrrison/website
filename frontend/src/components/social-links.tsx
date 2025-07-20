"use client"
import React from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button2 } from "@/components/button-2"

export default function SocialLinks() {
  return (
    <div className="absolute flex z-10" style={{top: '32px', right: '32px', gap: '12px'}}>
      {/* Email button */}
      <Button2
        asChild
        aria-label="Email"
        isExternal={true}
      >
        <a href="mailto:cm4@ualberta.ca">
          <Mail style={{width: '1.25rem', height: '1.25rem'}} />
        </a>
      </Button2>
      
      {/* LinkedIn button */}
      <Button2
        asChild
        aria-label="LinkedIn"
        isExternal={true}
      >
        <a
          href="https://www.linkedin.com/in/connormorrrison/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin style={{width: '1.25rem', height: '1.25rem'}} />
        </a>
      </Button2>
      
      {/* GitHub button */}
      <Button2
        asChild
        aria-label="GitHub"
        isExternal={true}
      >
        <a
          href="https://github.com/connormorrrison"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github style={{width: '1.25rem', height: '1.25rem'}} />
        </a>
      </Button2>
    </div>
  )
}