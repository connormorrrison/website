"use client"

import Image from "next/image"
import Link from "next/link"
import ContributionGraph from "@/components/contribution-graph"
import React from "react"

const Badge = ({ text }: { text: string }) => (
  <span className="px-3 py-1 rounded-full text-base font-normal bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-zinc-700">
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
        pt-16
        pb-20
        px-8
      "
    >
      {/* 1. Heading */}
      <h1 className="text-5xl font-normal text-left">
        Hi, I’m Connor
      </h1>

      {/* 2. Intro paragraph */}
      <p className="max-w-3xl text-lg text-left">
        I’m an aspiring software engineer building at the intersection of 
        computer science and finance. I studied at both the University of 
        British Columbia (Incoming) and University of Alberta. Focused on full-stack development, 
        data analysis, and fintech applications.
      </p>

      {/* 3. Button row */}
      <div className="flex space-x-6">
        <Link
          href="/projects"
          className="px-6 py-2 border rounded-full hover:shadow transition"
        >
          View Projects ↗
        </Link>
        <Link
          href="/contact"
          className="px-6 py-2 border rounded-full hover:shadow transition"
        >
          Contact Me ↗
        </Link>
      </div>

      {/* 4. Tech stack: constrain to prose width */}
      <div className="max-w-3xl">
        <h2 className="text-2xl font-medium text-left mb-4">Tech Stack</h2>
        <div className="flex flex-wrap justify-start gap-3">
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
