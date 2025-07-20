"use client"
import Link from "next/link"
import ContributionGraph from "@/components/contribution-graph"
import React from "react"
import { Badge } from "@/components/badge"
import { Button2 } from "@/components/button-2"
import { Text1 } from "@/components/text-1"
import { Text2 } from "@/components/text-2"
import { Text3 } from "@/components/text-3"
import { PageLayout } from "@/components/page-layout"
import { Mail, Folder, User, MapPin } from "lucide-react"

export default function Home() {
  const techs = [
    "Python",
    "Java",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "FastAPI",
    "PostgreSQL",
    "Pandas",
    "NumPy",
    "Linux"
  ]

  return (
    <PageLayout>
      {/* Intro */}
      <div className="flex items-center flex-wrap" style={{gap: '32px'}}>
        <Text1>
          Hi, I&apos;m Connor
        </Text1>

      </div>

      <Text3 as="p" className="max-w-3xl">
        I&apos;m a computer science student at the University of British Columbia and a finance graduate 
        from the University of Alberta. I&apos;m building at the intersection of computer science and 
        finance, focusing on software engineering, AI and machine learning, and fintech applications.
      </Text3>

      {/* Actions */}
      <div className="flex flex-wrap" style={{gap: '12px'}}>
        <Button2 
          asChild
          text="About Me"
          icon={<User />}
          aria-label="About Me"
        >
          <Link href="/about" />
        </Button2>
        <Button2 
          asChild
          text="View Projects"
          icon={<Folder />}
          aria-label="View Projects"
        >
          <Link href="/projects" />
        </Button2>
        <Button2 
          asChild
          text="Contact Me"
          icon={<Mail />}
          aria-label="Contact Me"
        >
          <Link href="/contact" />
        </Button2>
        <Badge 
          text="Vancouver, BC"
          icon={<MapPin />}
          iconColor="green"
        />
      </div>

      {/* Tech Stack */}
      <div className="max-w-3xl">
        <Text2 className="mb-2">
          Tech Stack
        </Text2>
        <div className="flex flex-wrap justify-start" style={{gap: '12px'}}>
          {techs.map((tech) => (
            <Badge key={tech} text={tech} />
          ))}
        </div>
      </div>

      {/* Contribution Graph */}
      <div className="w-full">
        <ContributionGraph />
      </div>
    </PageLayout>
  )
}