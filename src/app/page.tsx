"use client"
import Link from "next/link"
import ContributionGraph from "@/components/contribution-graph"
import React from "react"
import { Badge } from "@/components/ui/badge"
import { Mail, Folder, User } from "lucide-react"

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
        I&apos;m a computer science student at the University of British Columbia and a 
        finance graduate from the University of Alberta, building at the intersection 
        of computer science and finance. I&apos;m focused on software engineering, ML/AI, 
        and fintech applications. Currently in Vancouver, BC.
      </p>

      {/* Actions */}
      <div className="flex flex-wrap" style={{gap: '12px'}}>
        <Link href="/about">
          <Badge 
            text="About Me" 
            icon={<User style={{width: '1.0rem', height: '2.0rem'}} />} 
          />
        </Link>
        <Link href="/projects">
          <Badge 
            text="View Projects" 
            icon={<Folder style={{width: '1.0rem', height: '2.0rem'}} />} 
          />
        </Link>
        <Link href="/contact">
          <Badge 
            text="Contact Me" 
            icon={<Mail style={{width: '1.0rem', height: '2.0rem'}} />} 
          />
        </Link>
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