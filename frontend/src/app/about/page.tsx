"use client"
import React from "react"
import { Badge } from "@/components/badge"
import { Tile } from "@/components/tile"
import { Text1 } from "@/components/text-1"
import { Text2 } from "@/components/text-2"
import { Text3 } from "@/components/text-3"
import { PageLayout } from "@/components/page-layout"
import { MapPin, Plane } from "lucide-react"

export default function AboutPage() {
  return (
    <PageLayout>
      <Text1>About</Text1>
      
      {/* Bio */}
      <div className="w-full">
        <Text2 className="mb-2">Bio</Text2>
        <Text3 as="p">
          I&apos;m an aspiring software engineer building at the intersection of computer science and 
          finance. I&apos;m passionate about financial markets, AI and machine learning, problem 
          solving, and crafting elegant software.
        </Text3>
      </div>

      {/* Location */}
      <div className="w-full">
        <Text2 className="mb-2">Location</Text2>
        <div className="flex flex-wrap" style={{gap: '12px'}}>
          <Badge 
            text="Vancouver, BC" 
            icon={<MapPin />}
            iconColor="green"
          />
          <Badge 
            text="Willing to relocate" 
            icon={<Plane />}
            iconColor="blue"
          />
        </div>
      </div>

      {/* Education */}
      <div className="w-full">
        <Text2 className="mb-2">Education</Text2>
        <div className="flex flex-wrap" style={{gap: '12px'}}>
          <Tile>
            <Text3>University of British Columbia</Text3>
            <Text3 as="p" variant="muted">Major in Computer Science</Text3>
          </Tile>
          <Tile>
            <Text3>University of Alberta</Text3>
            <Text3 as="p" variant="muted">Major in Finance</Text3>
          </Tile>
        </div>
      </div>

      {/* Languages */}
      <div className="w-full">
        <Text2 className="mb-2">Languages</Text2>
        <div className="flex flex-wrap" style={{gap: '12px'}}>
          {["Python", "Java", "TypeScript", "C", "Rust", "Golang", "RISC-V"].map((lang) => (
            <Badge key={lang} text={lang} />
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="w-full">
        <Text2 className="mb-2">Technologies</Text2>
        <div className="flex flex-wrap" style={{gap: '12px'}}>
          {["PostgreSQL", "Linux", "Bash", "Git", "Claude Code"].map((tech) => (
            <Badge key={tech} text={tech} />
          ))}
        </div>
      </div>

      {/* Libraries & Frameworks */}
      <div className="w-full">
        <Text2 className="mb-2">Libraries & Frameworks</Text2>
        <div className="flex flex-wrap" style={{gap: '12px'}}>
          {["React", "Next.js", "Tailwind CSS", "FastAPI", "Pandas", "NumPy", "Matplotlib", "SciPy", "SciKit-Learn"].map((lib) => (
            <Badge key={lib} text={lib} />
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="w-full">
        <Text2 className="mb-2">Interests</Text2>
        <div className="flex flex-wrap" style={{gap: '12px'}}>
          {[
            "Software Engineering",
            "AI",
            "Machine Learning",
            "Fintech",
            "Financial Markets",
            "Decentralization",
            "Startups",
            "Product Development"
          ].map((interest) => (
            <Badge key={interest} text={interest} />
          ))}
        </div>
      </div>
    </PageLayout>
  )
}