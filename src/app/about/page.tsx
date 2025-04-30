"use client"

import React from "react"

export default function AboutPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-normal">About</h1>

      <p className="text-lg max-w-prose leading-relaxed">
        I’m an aspiring software engineer driven by a love of computer science,
        financial markets, and startups. My studies at the University of Alberta
        and the University of Saskatchewan gave me a foundation in full-stack
        engineering and data-guided problem solving.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {[
          {
            heading: "Core Stack",
            items: [
              "React / Next.js / TypeScript",
              "Tailwind CSS / shadcn/ui",
              "FastAPI / PostgreSQL",
            ],
          },
          {
            heading: "Now Exploring",
            items: [
              "AI agents & LLM tooling",
              "Rust for systems work",
              "Serverless architectures",
            ],
          },
        ].map(({ heading, items }) => (
          <div
            key={heading}
            className="
              p-4
              rounded-xl
              border border-gray-200
              shadow-base
              hover:shadow
              transition
              flex flex-col justify-between
            "
          >
            <div>
              <h2 className="text-xl font-normal mb-2">{heading}</h2>
              <ul className="list-disc list-inside space-y-1 text-lg">
                {items.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
