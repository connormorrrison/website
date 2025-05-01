"use client"
import React from "react"

const Badge = ({ text }: { text: string }) => (
  <span className="px-3 py-1 rounded-full text-base font-normal bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-zinc-700">
    {text}
  </span>
)

export default function AboutPage() {
  return (
    <div className="flex flex-col items-start justify-start p-8 space-y-8 max-w-3xl">
      <h1 className="text-3xl font-normal">About</h1>

      {/* Bio */}
      <div className="w-full">
        <h2 className="text-xl font-normal mb-2">Bio</h2>
        <p className="text-base">
          Aspiring software engineer building at the intersection of computer science and finance. I&#39;m passionate about decentralized finance, capital markets, and crafting elegant software for the fintech space.        </p>
      </div>

      {/* Education */}
      <div className="flex flex-col space-y-4 w-full">
        <h2 className="text-xl font-normal">Education</h2>
        <div className="w-full p-4 rounded-2xl border border-gray-200 shadow-base hover:shadow transition bg-white dark:bg-zinc-900">
          <h3 className="text-base font-normal">University of Alberta</h3>
          <p className="text-base text-gray-700 dark:text-gray-300">Major in Finance</p>
        </div>
        <div className="w-full p-4 rounded-2xl border border-gray-200 shadow-base hover:shadow transition bg-white dark:bg-zinc-900">
          <h3 className="text-base font-normal">University of Saskatchewan</h3>
          <p className="text-base text-gray-700 dark:text-gray-300">Major in Computer Science</p>
        </div>
      </div>

      {/* Languages */}
      <div className="w-full">
        <h2 className="text-xl font-normal mb-3">Languages</h2>
        <div className="flex flex-wrap gap-2">
          {["Python", "Java", "TypeScript", "C/C++", "SQL", "Golang", "RISC-V"].map((lang) => (
            <Badge key={lang} text={lang} />
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="w-full">
        <h2 className="text-xl font-normal mb-3">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {["PostgreSQL", "Unix/Linux", "Bash", "Git"].map((tech) => (
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
            "Fintech",
            "Decentralized Finance",
            "Capital Markets",
            "Startups",
            "SaaS",
            "AI Agents",
            "Product Design",
            "Economics"
          ].map((interest) => (
            <Badge key={interest} text={interest} />
          ))}
        </div>
      </div>
    </div>
  )
}
