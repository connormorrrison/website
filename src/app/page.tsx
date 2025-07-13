"use client"
import Link from "next/link"
import ContributionGraph from "@/components/contribution-graph"
import React from "react"
import { Badge } from "@/components/ui/badge"
import { Mail, Folder, User, MapPin } from "lucide-react"

export default function Home() {
  const techs = [
    "Python",
    "TypeScript", 
    "Java",
    "React",
    "Next.js",
    "FastAPI",
    "PostgreSQL",
    "Pandas",
    "NumPy",
    "Tailwind CSS",
    "Linux"
  ]

  return (
    <div
      className="
        flex flex-col
        w-full h-full
        max-w-3xl
        items-start
        justify-start
        space-y-8
        px-8 pb-8
      "
      style={{paddingTop: '64px'}}
    >
      {/* Intro */}
      <div className="flex items-center flex-wrap" style={{gap: '32px'}}>
        <h1 className="text-3xl font-normal text-foreground text-left">
          Hi, I&apos;m Connor
        </h1>

      </div>

      <p className="max-w-3xl text-lg text-foreground text-left">
        I&apos;m a computer science student at the University of British Columbia and a finance graduate 
        from the University of Alberta. I&apos;m building at the intersection of computer science and 
        finance, focusing on software engineering, AI and machine learning, and fintech applications.
      </p>

      {/* Actions */}
      <div className="flex flex-wrap" style={{gap: '12px'}}>
        <Link href="/about" className="hover:bg-accent hover:text-accent-foreground transition-colors rounded-full">
          <Badge 
            text="About Me" 
            icon={<User className="text-blue-600" style={{width: '1.25rem', height: '1.25rem'}} />} 
          />
        </Link>
        <Link href="/projects" className="hover:bg-accent hover:text-accent-foreground transition-colors rounded-full">
          <Badge 
            text="View Projects" 
            icon={<Folder className="text-blue-600" style={{width: '1.25rem', height: '1.25rem'}} />} 
          />
        </Link>
        <Link href="/contact" className="hover:bg-accent hover:text-accent-foreground transition-colors rounded-full">
          <Badge 
            text="Contact Me" 
            icon={<Mail className="text-blue-600" style={{width: '1.25rem', height: '1.25rem'}} />} 
          />
        </Link>
        <Badge 
          text="Vancouver, BC" 
          icon={<MapPin className="text-green-600" style={{width: '1.25rem', height: '1.25rem'}} />} 
        />
      </div>

      {/* Tech Stack */}
      <div className="max-w-3xl">
        <h2 className="text-xl font-normal text-foreground text-left mb-3">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-start" style={{gap: '12px'}}>
          {techs.map((tech) => (
            <Badge key={tech} text={tech} />
          ))}
        </div>
      </div>

      {/* Contribution Graph */}
      <div className="w-full mt-10">
        <ContributionGraph />
      </div>
    </div>
  )
}