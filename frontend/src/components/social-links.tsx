"use client"
import React from "react"
import { motion } from "motion/react"
import { LucideGithub, LucideLinkedin, Mail } from "lucide-react"
import { Button2 } from "@/components/button-2"

export default function SocialLinks() {
  return (
    <motion.div className="absolute flex z-10" style={{top: '32px', right: '32px', gap: '12px'}} initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.6 }}>
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
          <LucideLinkedin style={{width: '1.25rem', height: '1.25rem'}} />
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
          <LucideGithub style={{width: '1.25rem', height: '1.25rem'}} />
        </a>
      </Button2>
    </motion.div>
  )
}