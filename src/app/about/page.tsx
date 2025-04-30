"use client"

import React from "react"

const Badge = ({ text }: { text: string }) => (
  <span className="px-3 py-1 rounded-full text-base font-medium bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-zinc-700">
    {text}
  </span>
)

export default function AboutPage() {
  return (
    <div className="flex flex-col items-start justify-start p-8 space-y-8 max-w-3xl">
      <h1 className="text-3xl font-normal">About</h1>

      {/* Education */}
      <div className="flex flex-col space-y-4 w-full">
        <h2 className="text-xl font-semibold">Education</h2>

        <div className="w-full p-4 rounded-2xl border border-gray-200 shadow-sm bg-white dark:bg-zinc-900">
          <h3 className="text-base font-medium">University of Alberta</h3>
          <p className="text-base text-gray-700 dark:text-gray-300">Major in Finance</p>
        </div>

        <div className="w-full p-4 rounded-2xl border border-gray-200 shadow-sm bg-white dark:bg-zinc-900">
          <h3 className="text-base font-medium">University of Saskatchewan</h3>
          <p className="text-base text-gray-700 dark:text-gray-300">Major in Computer Science</p>
        </div>
      </div>

      {/* Languages */}
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-3">Languages</h2>
        <div className="flex flex-wrap gap-2">
          {["Python", "Java", "TypeScript", "C", "SQL", "Golang", "RISC-V"].map((lang) => (
            <Badge key={lang} text={lang} />
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-3">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {["PostgreSQL", "Linux", "Git", "GitHub"].map((tech) => (
            <Badge key={tech} text={tech} />
          ))}
        </div>
      </div>

      {/* Libraries & Frameworks */}
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-3">Libraries & Frameworks</h2>
        <div className="flex flex-wrap gap-2">
          {["React", "Next.js", "Tailwind CSS"].map((lib) => (
            <Badge key={lib} text={lib} />
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-3">Interests</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Financial markets",
            "Software tooling",
            "Macroeconomics",
            "Startups",
            "Design systems",
          ].map((interest) => (
            <Badge key={interest} text={interest} />
          ))}
        </div>
      </div>
    </div>
  )
}
