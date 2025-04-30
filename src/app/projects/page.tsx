"use client"
import React from "react"

const projects = [
  {
    title: "MockTrade",
    description:
      "Full-stack trading simulator with real-time data, JWT auth, and interactive dashboards.",
    techs: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    url: "https://www.mocktrade.ca",
    githubUrl: "https://github.com/connormorrrison/MockTrade",
  },
  {
    title: "Personal Website",
    description:
      "Next.js + Tailwind CSS portfolio site with dark/light theme toggle and animated transitions.",
    techs: ["Next.js", "Tailwind CSS", "ShadCN UI"],
    url: "/",
    githubUrl: "https://github.com/connormorrrison/personal-website",
  },
]

export default function ProjectsPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-normal">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="
              p-4
              rounded-xl
              border border-gray-200
              shadow-sm
              hover:shadow
              transition
              flex flex-col justify-between
            "
          >
            <div>
              <h2 className="text-xl font-medium mb-2">{proj.title}</h2>
              <p className="text-sm mb-2">{proj.description}</p>
              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.techs.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 border rounded text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-2 flex space-x-4 text-blue-600">
              <a
                href={proj.url}
                target={proj.url.startsWith("http") ? "_blank" : undefined}
                rel={proj.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hover:underline"
              >
                View&nbsp;↗
              </a>
              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub&nbsp;↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
