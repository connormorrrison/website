"use client"
import Link from "next/link"
import ContributionGraph from "@/components/contribution-graph"
import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, MapPin } from "lucide-react"

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
      {/* 1. Heading */}
      <h1 className="text-3xl font-normal text-foreground text-left">
        Hi, I&apos;m Connor
      </h1>

      {/* 2. Intro paragraph */}
      <p className="max-w-3xl text-lg text-foreground text-left">
        I&apos;m a computer science student at the University of British Columbia and a 
        finance graduate from the University of Alberta, building at the intersection 
        of computer science and finance. I&apos;m focused on software engineering, ML/AI, and fintech applications.
      </p>
      
      {/* Location */}
      <div className="flex items-center gap-2 text-lg text-foreground">
        <MapPin className="!w-10 !h-10" />
        <span>Vancouver, BC</span>
      </div>

      {/* 3. Button row */}
      {/* Changed to use flex-wrap and gap-2 for consistent spacing with the tech stack badges */}
      <div className="flex flex-wrap gap-2">
        {/* Link components are assumed to be from Next.js, for a standalone React app
         these would typically be anchor tags or a custom routing solution. */}
        <Link href="/projects" passHref>
          <Button
            variant="outline"
            size={null}
            className="rounded-full text-lg font-normal shadow-none border-gray-300 dark:border-zinc-700"
            style={{height: '3rem', paddingLeft: '1rem', paddingRight: '1rem'}}
            aria-label="View Projects"
          >
            View Projects <ArrowUpRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
        <Link href="/contact" passHref>
          <Button
            variant="outline"
            size={null}
            className="rounded-full text-lg font-normal shadow-none border-gray-300 dark:border-zinc-700"
            style={{height: '3rem', paddingLeft: '1rem', paddingRight: '1rem'}}
            aria-label="Contact Me"
          >
            Contact Me <ArrowUpRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>

      {/* 4. Tech stack: constrain to prose width */}
      <div className="max-w-3xl">
        <h2 className="text-xl font-normal text-foreground text-left mb-3">
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
        <ContributionGraph />
      </div>
    </div>
  )
}