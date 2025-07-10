"use client"
import Link from "next/link"
import ContributionGraph from "@/components/contribution-graph"
import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const Badge = ({ text }: { text: string }) => (
  <span className="px-3 py-1 rounded-full text-lg font-normal bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-zinc-700">
    {text}
  </span>
)

export default function Home() {
  const techs = [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Python",
    "PostgreSQL",
    "Git",
    "FastAPI",
    "Vercel",
    "Linux / Bash",
    "Pandas"
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
      {/* 1. Heading */}
      <h1 className="text-3xl font-normal text-left">
        Hi, I'm Connor
      </h1>

      {/* 2. Intro paragraph */}
      <p className="max-w-3xl text-lg text-left">
        I'm a computer science student at the University of British Columbia and a 
        finance graduate from the University of Alberta, building at the intersection 
        of computer science and finance. I'm focused on software engineering, ML/AI, and fintech applications.
      </p>

      {/* 3. Button row */}
      {/* Changed to use flex-wrap and gap-2 for consistent spacing with the tech stack badges */}
      <div className="flex flex-wrap gap-2">
        {/* Link components are assumed to be from Next.js, for a standalone React app
         these would typically be anchor tags or a custom routing solution. */}
        <Link href="/projects" passHref>
          <Button
            variant="outline"
            size="default"
            className="rounded-full h-16 px-10 text-lg font-normal"
            aria-label="View Projects"
          >
            View Projects <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
        <Link href="/contact" passHref>
          <Button
            variant="outline"
            size="default"
            className="rounded-full h-16 px-10 text-lg font-normal"
            aria-label="Contact Me"
          >
            Contact Me <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>

      {/* 4. Tech stack: constrain to prose width */}
      <div className="max-w-3xl">
        <h2 className="text-2xl font-normal text-left mb-3">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-start gap-2">
          {techs.map((tech) => (
            <Badge key={tech} text={tech} />
          ))}
        </div>
      </div>

      {/* 5. Contribution graph */}
      <div className="w-full mt-10">
        {/* ContributionGraph component is assumed to be defined elsewhere */}
        <ContributionGraph />
      </div>
    </div>
  )
}