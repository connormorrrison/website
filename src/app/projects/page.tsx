"use client"
import React from "react"
import { Badge } from "@/components/ui/badge"
import { Tile } from "@/components/ui/tile"

const projects = [
  {
    title: "MockTrade",
    description:
      "Full-stack trading simulator with real-time data, JWT auth, and interactive dashboards.",
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
    <div className="px-8 pb-8 space-y-8 max-w-3xl" style={{paddingTop: '64px'}}>
      <h1 className="text-3xl font-normal text-foreground">Projects</h1>

      {/* Projects List */}
      <div className="grid grid-cols-1 gap-6">
        {projects.map((proj) => {
          return (
            <Tile
              key={proj.title}
              borderStyle={proj.underConstruction ? "dashed" : "solid"}
              className="max-w-3xl flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-normal text-foreground mb-2">{proj.title}</h2>
                <p className="text-lg text-foreground mb-2">{proj.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.techs.map((t) => (
                    <Badge key={t} text={t} />
                  ))}
                </div>
              </div>

              <div className="mt-2 flex space-x-4 text-lg text-blue-600">
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
            </Tile>
          )
        })}
      </div>
    </div>
  )
}
