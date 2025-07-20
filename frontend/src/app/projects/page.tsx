"use client"
import React from "react"
import { Badge } from "@/components/badge"
import { Tile } from "@/components/tile"
import { Text1 } from "@/components/text-1"
import { Text2 } from "@/components/text-2"
import { Text3 } from "@/components/text-3"
import { PageLayout } from "@/components/page-layout"

const projects = [
  {
    title: "MockTrade",
    description:
      "Full-stack trading simulator with real-time stock data, buy/sell execution, account authentication and management, portfolio tracking, and transaction history.",
    techs: ["React", "TypeScript", "FastAPI", "Python", "PostgreSQL"],
    url: "https://www.mocktrade.ca",
    githubUrl: "https://github.com/connormorrrison/MockTrade",
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
    <PageLayout>
      <Text1>Projects</Text1>

      {/* Projects List */}
      <div className="flex flex-wrap" style={{gap: '24px'}}>
        {projects.map((proj) => {
          return (
            <Tile
              key={proj.title}
              borderStyle={proj.underConstruction ? "dashed" : "solid"}
              className="max-w-3xl flex flex-col justify-between"
            >
              <div>
                <Text2 className="mb-2">{proj.title}</Text2>
                <Text3 as="p" className="mb-2">{proj.description}</Text3>

                <div className="flex flex-wrap mb-2" style={{gap: '12px'}}>
                  {proj.techs.map((t) => (
                    <Badge key={t} text={t} />
                  ))}
                </div>
              </div>

              <div className="mt-2 flex" style={{gap: '12px'}}>
                <Text3 as="a"
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  variant="blue"
                >
                  View ↗
                </Text3>
                <Text3 as="a"
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  variant="blue"
                >
                  GitHub ↗
                </Text3>
              </div>
            </Tile>
          )
        })}
      </div>
    </PageLayout>
  )
}
