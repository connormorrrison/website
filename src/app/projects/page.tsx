"use client"
import React from "react"

const Badge = ({ text }: { text: string }) => (
  <span className="px-3 py-1 rounded-full text-base font-normal bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-zinc-700">
    {text}
  </span>
)

const projects = [
  {
    title: "MockTrade",
    description:
      "Full‑stack trading simulator with real‑time data, JWT auth, and interactive dashboards.",
    techs: ["React", "TypeScript", "FastAPI", "Python", "PostgreSQL"],
    url: "https://www.mocktrade.ca",
    githubUrl: "https://github.com/connormorrrison/MockTrade",
  },
  {
    title: "Personal Website",
    description:
      "Next.js + Tailwind CSS portfolio site with dark/light theme toggle and animated transitions.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "/",
    githubUrl: "https://github.com/connormorrrison/personal-website",
  },
  {
    title: "OpenCoding",
    description: "Under construction.",
    techs: ["Next.js", "TypeScript"],
    url: "",
    githubUrl: "",
    underConstruction: true,
  },
]

export default function ProjectsPage() {
  return (
    <div className="p-8 space-y-8 max-w-3xl">
      <h1 className="text-3xl font-normal">Projects</h1>

      <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
        {projects.map((proj) => {
          const borderStyle = proj.underConstruction
            ? "border border-dashed border-gray-300"
            : "border border-gray-200"

          return (
            <div
              key={proj.title}
              className={`max-w-[280px] w-full p-4 rounded-xl ${borderStyle} shadow-base hover:shadow transition flex flex-col justify-between`}
            >
              <div>
                <h2 className="text-xl font-normal mb-2">{proj.title}</h2>
                <p className="text-base mb-2">{proj.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.techs.map((t) => (
                    <Badge key={t} text={t} />
                  ))}
                </div>
              </div>

              <div className="mt-2 flex space-x-4 text-blue-600">
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  View ↗
                </a>
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
