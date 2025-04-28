"use client"

import Image from "next/image"
import Link from "next/link"
import CellularAutomata from "@/components/cellular-automata"

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
        items-center
        justify-start
        space-y-8
        pt-16
        pb-20
        px-8
      "
    >
      {/* 1. Heading */}
      <h1 className="text-5xl font-normal text-center">
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

      {/* 4. Tech stack (centered) */}
      <div className="w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((t) => (
            <span key={t} className="px-3 py-1 border rounded">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* 5. Social links as text + arrow */}
      <div className="flex space-x-6 text-lg font-normal">
        <Link
          href="mailto:cm4@ualberta.ca"
          className="text-blue-600 hover:underline"
        >
          Email ↗
        </Link>
        <Link
          href="https://www.linkedin.com/in/connormorrrison/"
          className="text-blue-600 hover:underline"
        >
          LinkedIn ↗
        </Link>
        <Link
          href="https://github.com/connormorrrison"
          className="text-blue-600 hover:underline"
        >
          GitHub ↗
        </Link>
      </div>

      <CellularAutomata />
    </div>
  )
}
