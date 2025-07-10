"use client"
import React from "react"
import { Badge } from "@/components/ui/badge"
import { Tile } from "@/components/ui/tile"

export default function AboutPage() {
  return (
    <div className="flex flex-col items-start justify-start px-8 pb-8 space-y-8 max-w-3xl" style={{paddingTop: '64px'}}>
      <h1 className="text-3xl font-normal">About</h1>
      
      {/* Bio */}
      <div className="w-full">
        <h2 className="text-xl font-normal mb-2">Bio</h2>
        <p className="text-lg">
          Aspiring software engineer building at the intersection of computer
          science and finance. I'm passionate about capital and prediction markets, decentralized
          technologies, and crafting elegant software for the fintech space.
        </p>
      </div>

      {/* Education */}
      <div className="flex flex-col space-y-4 w-full">
        <h2 className="text-xl font-normal">Education</h2>
        <Tile>
          <h3 className="text-lg font-normal">University of British Columbia</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">Major in Computer Science</p>
        </Tile>
        <Tile>
          <h3 className="text-lg font-normal">University of Alberta</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">Major in Finance</p>
        </Tile>
      </div>

      {/* Languages */}
      <div className="w-full">
        <h2 className="text-xl font-normal mb-3">Languages</h2>
        <div className="flex flex-wrap gap-2">
          {["Python", "Java", "TypeScript", "C", "Rust", "Golang", "RISC-V"].map((lang) => (
            <Badge key={lang} text={lang} />
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="w-full">
        <h2 className="text-xl font-normal mb-3">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {["PostgreSQL", "Linux", "Bash", "Git", "Claude Code"].map((tech) => (
            <Badge key={tech} text={tech} />
          ))}
        </div>
      </div>

      {/* Libraries & Frameworks */}
      <div className="w-full">
        <h2 className="text-xl font-normal mb-3">Libraries & Frameworks</h2>
        <div className="flex flex-wrap gap-2">
          {["React", "Next.js", "Tailwind CSS", "FastAPI", "Pandas", "NumPy", "Matplotlib", "SciPy", "SciKit-Learn"].map((lib) => (
            <Badge key={lib} text={lib} />
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="w-full">
        <h2 className="text-xl font-normal mb-3">Interests</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Software Engineering",
            "ML/AI",
            "Fintech",
            "Capital Markets",
            "Prediction Markets",
            "Web3",
            "Startups",
            "SaaS",
            "UI/UX"
          ].map((interest) => (
            <Badge key={interest} text={interest} />
          ))}
        </div>
      </div>
    </div>
  )
}