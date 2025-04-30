"use client"

import Image from "next/image"
import Link from "next/link"
import ContributionGraph from "@/components/contribution-graph"

export default function Home() {
  const techs = [
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "FastAPI",
    "PostgreSQL",
    "Git",
  ]

  return (
    <div
      className="
        flex flex-col
        w-full h-full
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
      <p className="max-w-prose text-lg text-left">
        I’m an aspiring software engineer passionate about computer science,
        financial markets, and startups. I studied at both the University of
        Alberta and the University of the Saskatchewan, building a strong foundation
        in full-stack development, data analysis, and project management.
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

      {/* 4. Tech stack (left-aligned) */}
      <div className="w-full">
        <h2 className="text-2xl font-medium text-left mb-4">Tech Stack</h2>
        <div className="flex flex-wrap justify-start gap-3">
          {techs.map((t) => (
            <span key={t} className="px-3 py-1 border rounded">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* 5. Contribution graph with extra top margin */}
      <div className="w-full mt-10">
        <ContributionGraph />
      </div>
    </div>
  )
}
