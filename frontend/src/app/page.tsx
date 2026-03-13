"use client"
import React, { useState } from "react"
import { Badge } from "@/components/badge"
import { Button2 } from "@/components/button-2"
import { Button1 } from "@/components/button-1"
import { TextField } from "@/components/text-field"
import { Tile } from "@/components/tile"
import { Text1 } from "@/components/text-1"
import { Text2 } from "@/components/text-2"
import { Text3 } from "@/components/text-3"
import { ImageLightbox } from "@/components/image-lightbox"
import { scrollToSection } from "@/lib/scroll"
import { Mail, Folder, User, MapPin, Plane } from "lucide-react"

type Project = {
  title: string
  subtitle: string
  tag?: string
  bullets: string[]
  techs: string[]
  timeline: string
  url: string
  githubUrl: string
  images: string[]
  underConstruction?: boolean
}

const projects: Project[] = [
  {
    title: "MockTrade",
    subtitle: "Full-Stack Stock Trading Simulator",
    bullets: [
      "Built and deployed a full-stack stock trading simulator at mocktrade.ca where users practice trading with virtual cash, track portfolio performance, and compete on a real-time leaderboard.",
      "Developed a FastAPI backend with a domain-driven architecture, Supabase PostgreSQL database, and Yahoo Finance integration for live market data, trade execution, and portfolio analytics.",
      "Implemented Google OAuth and JWT authentication, interactive portfolio charts, watchlists, market indices tracking, and user profile pages with activity history.",
    ],
    techs: ["React", "TypeScript", "TailwindCSS", "FastAPI", "Python", "Supabase", "Recharts"],
    timeline: "Nov 2024 – Present",
    url: "https://www.mocktrade.ca",
    githubUrl: "https://github.com/connormorrrison/MockTrade",
    images: ["/images/projects/mocktrade-picture-1.png", "/images/projects/mocktrade-picture-2.png"],
  },
  {
    title: "Benevity Automated Campaign Kits MVP",
    subtitle: "AI-Powered Humanitarian Campaign Generation Platform",
    tag: "Group Project",
    bullets: [
      "Designed and built a RAG pipeline using Google Vertex AI (Gemini 2.5 Pro + text-embedding-005) to generate structured humanitarian campaign kits from scraped news articles, including citation validation to prevent LLM hallucinations.",
      "Engineered a multi-source news ingestion engine aggregating 13+ RSS feeds (BBC, Al Jazeera, UN News, ReliefWeb), WHO Disease Outbreak News API, GDACS disaster alerts, and Google News with automated deduplication and URL decoding.",
      "Implemented a real-time streaming architecture using Server-Sent Events and NDJSON for a multi-phase article scraping and LLM relevance filtering pipeline with 8 concurrent worker threads.",
      "Integrated Benevity's REST API with OAuth 2.0 client credentials flow, token caching, and automatic refresh to link generated campaign kits to verified humanitarian nonprofits.",
      "Deployed containerized services via Docker Compose on Google Cloud (Cloud SQL PostgreSQL, Cloud SQL Proxy, Vertex AI) with Alembic database migrations running automatically on startup.",
    ],
    techs: ["Python", "TypeScript", "FastAPI", "React", "Google Vertex AI", "Gemini 2.5 Pro", "Docker", "GCP", "PostgreSQL", "RAG", "SSE"],
    timeline: "Jan 2025 – Apr 2025",
    url: "",
    githubUrl: "",
    images: [],
  },
  {
    title: "Solomon",
    subtitle: "Algorithmic Prediction Market Trading Bot",
    bullets: [
      "Designed and built a full-stack autonomous trading system integrating Binance WebSocket streams with Polymarket's CLOB/Gamma APIs to trade Bitcoin directional binary options in real-time.",
      "Implemented a composite scoring engine combining RSI, MACD, Bollinger Bands, momentum, and volume signals with configurable weights to generate directional conviction scores.",
      "Built a sub-second market discovery pipeline that searches Polymarket's prediction market universe for active 5-minute BTC Up/Down contracts, reducing discovery latency from 20+ seconds to under 1 second via smart slug-based search and caching.",
      "Engineered a 4-layer risk management system enforcing pause state, cash reserve, daily loss limits, and per-day trade caps; all execution runs in dry-run simulation mode with full P&L tracking.",
      "Created a React 19 / TypeScript dashboard with live balance charts, trade activity logs, active positions tracking, and runtime settings control backed by a FastAPI REST API.",
      "Wrote 65KB of unit and integration tests covering indicators, scoring logic, safety guards, and pipeline behavior using pytest and Vitest.",
    ],
    techs: ["Python", "FastAPI", "React", "TypeScript", "NumPy", "WebSockets", "Polymarket API", "Binance API", "Recharts", "Tailwind CSS", "pytest"],
    timeline: "Mar 2025 – Present",
    url: "",
    githubUrl: "",
    images: [],
  },
  {
    title: "Stock Management DSL",
    subtitle: "Domain-Specific Language for Portfolio Management",
    tag: "Group Project · CPSC 410",
    bullets: [
      "Built a domain-specific language that allows users to view their current portfolio with daily updated statistics, perform complex queries over holdings, and browse and buy stocks based on user-defined filters.",
      "Developed a Python/Flask backend with ANTLR-generated lexer and parser for the custom DSL grammar, integrating YFinance API for live market data and daily portfolio valuation.",
      "Built a Next.js frontend that interprets DSL output and renders portfolio views, query results, and stock browsing interfaces.",
    ],
    techs: ["TypeScript", "Next.js", "React", "Python", "Flask", "YFinance API", "ANTLR"],
    timeline: "Jan 2025 – Apr 2025",
    url: "",
    githubUrl: "",
    images: [],
  },
  {
    title: "InsightUBC",
    subtitle: "Full-Stack Educational Data Analytics Platform",
    tag: "Group Project · CPSC 310",
    bullets: [
      "Engineered a custom query language engine in TypeScript supporting logical operators (AND/OR/NOT), comparison filters, wildcard string matching, GROUP BY transformations, and 5 aggregate functions across datasets with 5,000+ records.",
      "Designed and implemented a RESTful Express.js API with 4 endpoints for dataset CRUD operations and query execution, including custom error types mapped to appropriate HTTP status codes.",
      "Built a React + TypeScript frontend with Tailwind CSS and Radix UI components, featuring 3 interactive Chart.js data visualizations (grade distributions, pass/fail rates, top instructors) with dynamic department/course filtering.",
      "Implemented a file-based persistence layer with in-memory caching, processing ZIP archives containing JSON course data and HTML room data via JSZip and parse5.",
      "Wrote a comprehensive test suite (1,050+ lines) using Mocha, Chai, and Supertest across 30+ test datasets covering edge cases, error scenarios, and full HTTP endpoint integration tests.",
    ],
    techs: ["TypeScript", "React", "Node.js", "Express.js", "Chart.js", "Tailwind CSS", "Radix UI", "Mocha", "Chai"],
    timeline: "Sep 2024 – Dec 2024",
    url: "",
    githubUrl: "",
    images: [],
  },
  {
    title: "ParkShare",
    subtitle: "Peer-to-Peer Parking Marketplace",
    bullets: [
      "Built a peer-to-peer parking spot marketplace at UBC KickStart where hosts list available spots and renters search, book, and pay for hourly parking through an interactive map interface.",
      "Developed a FastAPI backend with Supabase, implementing an interval scheduling algorithm that dynamically calculates real-time availability by subtracting confirmed bookings from host-defined time windows.",
      "Integrated Google Maps API for location search, static map previews, and spot visualization, with Zustand for client-side state management and a multi-step booking and payment flow.",
    ],
    techs: ["Next.js", "React", "TypeScript", "TailwindCSS", "FastAPI", "Python", "Supabase", "Google Maps API"],
    timeline: "Nov 2025",
    url: "",
    githubUrl: "",
    images: ["/images/projects/parkshare-1.png", "/images/projects/parkshare-2.png"],
  },
  {
    title: "Jobnt",
    subtitle: "AI-Powered Job Application Tool",
    bullets: [
      "Built an AI-powered job application tool at BCS Hacks that takes a resume PDF and job description, then generates a tailored ATS-optimized LaTeX resume and cover letter using GPT-4.",
      "Developed a Flask backend pipeline that extracts text from uploaded PDFs with PyPDF2, scrapes job postings with BeautifulSoup, sends structured prompts to the OpenAI API, and compiles the generated LaTeX into downloadable PDFs server-side.",
    ],
    techs: ["Next.js", "React", "TypeScript", "Flask", "Python", "OpenAI API", "BeautifulSoup", "LaTeX"],
    timeline: "Nov 2025",
    url: "",
    githubUrl: "",
    images: ["/images/projects/jobnt-1.png", "/images/projects/jobnt-2.png"],
  },
]

const skills = {
  languages: ["Python", "Java", "TypeScript", "C", "Rust", "Golang", "RISC-V"],
  frameworks: ["React", "Next.js", "Tailwind CSS", "FastAPI", "Pandas", "NumPy", "Matplotlib", "SciPy", "SciKit-Learn"],
  technologies: ["PostgreSQL", "Linux", "Bash", "Git", "Claude Code"],
}

export default function Home() {
  const [lightbox, setLightbox] = useState<{ images: string[], index: number } | null>(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      })
      if (!res.ok) throw new Error('Mail failed')
      setStatus('sent')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="max-w-3xl px-4 md:px-8 mx-auto">

      {/* Home */}
      <section id="home" className="py-12" style={{ scrollMarginTop: '2rem' }}>
        <div className="flex flex-col space-y-6">
          <Text1>Hi, I&apos;m Connor</Text1>

          <Text3 as="p">
            I&apos;m a computer science student at the University of British Columbia and a finance graduate
            from the University of Alberta. I&apos;m building at the intersection of computer science and
            finance, focusing on software engineering, AI and machine learning, and fintech applications.
          </Text3>

          <div className="flex flex-wrap" style={{ gap: '12px' }}>
            <Button2
              text="About Me"
              icon={<User />}
              aria-label="About Me"
              onClick={() => scrollToSection('about')}
            />
            <Button2
              text="View Projects"
              icon={<Folder />}
              aria-label="View Projects"
              onClick={() => scrollToSection('projects')}
            />
            <Button2
              text="Contact Me"
              icon={<Mail />}
              aria-label="Contact Me"
              onClick={() => scrollToSection('contact')}
            />
            <Badge
              text="Vancouver, BC"
              icon={<MapPin />}
              iconColor="green"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12" style={{ scrollMarginTop: '2rem' }}>
        <div className="flex flex-col space-y-6">
          <Text1>About</Text1>

          <Text3 as="p">
            I&apos;m an aspiring software engineer building at the intersection of computer science and
            finance. I&apos;m passionate about financial markets, AI and machine learning, problem
            solving, and crafting elegant software.
          </Text3>

          <Text3 as="p">
            I&apos;m currently reading{' '}
            <Text3
              as="a"
              href="https://www.amazon.com/Boom-Bubbles-Stagnation-Byrne-Hobart/dp/1953953476"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              variant="blue"
            >
              Boom: Bubbles and the End of Stagnation
            </Text3>
            .
          </Text3>

          <div className="w-full">
            <Text2 className="mb-2">Location</Text2>
            <div className="flex flex-wrap" style={{ gap: '12px' }}>
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
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-12" style={{ scrollMarginTop: '2rem' }}>
        <div className="flex flex-col space-y-6">
          <Text1>Education</Text1>

          <div className="flex flex-wrap" style={{ gap: '12px' }}>
            <Tile>
              <Text3>University of British Columbia</Text3>
              <Text3 as="p" variant="muted">Bachelor of Computer Science (BCS), Major in Computer Science (Co-op)</Text3>
            </Tile>
            <Tile>
              <Text3>University of Alberta</Text3>
              <Text3 as="p" variant="muted">Bachelor of Commerce, Major in Finance</Text3>
            </Tile>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-12" style={{ scrollMarginTop: '2rem' }}>
        <div className="flex flex-col space-y-6">
          <Text1>Experience</Text1>

          <Tile>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-3">
              <div>
                <Text2>Software Developer</Text2>
                <Text3 variant="muted">Atria Community · Vancouver, BC</Text3>
              </div>
              <div className="sm:text-right flex-shrink-0">
                <Text3 variant="muted">Part-time</Text3>
                <Text3 variant="muted">Nov 2025 – Present</Text3>
              </div>
            </div>
            <ul className="list-disc list-outside pl-4 space-y-1">
              <li><Text3>Designed the entity-relationship diagram and database schema for a community organizing platform connecting Vancouver businesses and non-profits.</Text3></li>
              <li><Text3>Collaborated with the project lead on platform architecture and technical requirements during regular planning sessions.</Text3></li>
            </ul>
          </Tile>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12" style={{ scrollMarginTop: '2rem' }}>
        <div className="flex flex-col space-y-6">
          <Text1>Projects</Text1>

          <div className="flex flex-col" style={{ gap: '24px' }}>
            {projects.map((proj) => (
              <Tile
                key={proj.title}
                borderStyle={proj.underConstruction ? "dashed" : "solid"}
                className="flex flex-col"
              >
                {/* Header: title+subtitle left, meta right */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-3">
                  <div>
                    <Text2>{proj.title}</Text2>
                    {proj.subtitle && (
                      <Text3 variant="muted">{proj.subtitle}</Text3>
                    )}
                  </div>
                  {(proj.tag || proj.timeline) && (
                    <div className="sm:text-right flex-shrink-0">
                      {'tag' in proj && proj.tag && <Text3 variant="muted">{proj.tag}</Text3>}
                      {proj.timeline && <Text3 variant="muted">{proj.timeline}</Text3>}
                    </div>
                  )}
                </div>

                {/* Bullets */}
                {proj.bullets.length > 0 && (
                  <ul className="list-disc list-outside pl-4 space-y-1 mb-3">
                    {proj.bullets.map((b, i) => (
                      <li key={i}><Text3>{b}</Text3></li>
                    ))}
                  </ul>
                )}

                {/* Tech badges */}
                <div className="flex flex-wrap mb-4" style={{ gap: '8px' }}>
                  {proj.techs.map((t) => (
                    <Badge key={t} text={t} />
                  ))}
                </div>

                {/* Screenshots */}
                {!proj.underConstruction && (
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4">
                    {(proj.images.length > 0 ? proj.images : [null, null]).map((src, i) => (
                      <div
                        key={i}
                        className="rounded-lg border flex items-center justify-center overflow-hidden w-full sm:w-[260px] sm:flex-shrink-0"
                        style={{
                          borderColor: 'light-dark(oklch(0.922 0 0), oklch(1 0 0 / 10%))',
                          height: '160px',
                          background: 'light-dark(oklch(0.96 0 0), oklch(0.18 0 0))',
                        }}
                      >
                        {src ? (
                          <img
                            src={src}
                            alt={`${proj.title} screenshot ${i + 1}`}
                            className="w-full h-full object-cover cursor-zoom-in"
                            onClick={() => setLightbox({ images: proj.images, index: i })}
                          />
                        ) : (
                          <Text3 variant="muted">Screenshot {i + 1}</Text3>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Links */}
                {!proj.underConstruction && (
                  <div className="flex gap-4">
                    {proj.githubUrl && (
                      <Text3 as="a"
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        variant="blue"
                      >
                        GitHub ↗
                      </Text3>
                    )}
                    {proj.url && (
                      <Text3 as="a"
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        variant="blue"
                      >
                        Live Site ↗
                      </Text3>
                    )}
                  </div>
                )}
              </Tile>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12" style={{ scrollMarginTop: '2rem' }}>
        <div className="flex flex-col space-y-6">
          <Text1>Skills</Text1>

          <div className="w-full">
            <Text2 className="mb-2">Languages</Text2>
            <div className="flex flex-wrap" style={{ gap: '12px' }}>
              {skills.languages.map((lang) => (
                <Badge key={lang} text={lang} />
              ))}
            </div>
          </div>

          <div className="w-full">
            <Text2 className="mb-2">Frameworks &amp; Libraries</Text2>
            <div className="flex flex-wrap" style={{ gap: '12px' }}>
              {skills.frameworks.map((fw) => (
                <Badge key={fw} text={fw} />
              ))}
            </div>
          </div>

          <div className="w-full">
            <Text2 className="mb-2">Technologies</Text2>
            <div className="flex flex-wrap" style={{ gap: '12px' }}>
              {skills.technologies.map((tech) => (
                <Badge key={tech} text={tech} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12" style={{ scrollMarginTop: '2rem' }}>
        <div className="flex flex-col space-y-6">
          <Text1>Contact</Text1>

          <Text3 as="p">
            If you have a question, want to collaborate, or simply to say hi, feel free to reach out.
          </Text3>

          <ul className="space-y-2">
            <li>
              <Text3 as="a"
                href="mailto:cm4@ualberta.ca"
                className="hover:underline"
                variant="blue"
              >
                Email ↗
              </Text3>
            </li>
            <li>
              <Text3 as="a"
                href="https://www.linkedin.com/in/connormorrrison/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                variant="blue"
              >
                LinkedIn ↗
              </Text3>
            </li>
            <li>
              <Text3 as="a"
                href="https://github.com/connormorrrison"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                variant="blue"
              >
                GitHub ↗
              </Text3>
            </li>
          </ul>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col space-y-4"
          >
            <TextField
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <TextField
              type="email"
              placeholder="Email*"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <TextField
              variant="large"
              placeholder="Message*"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />
            <Button1
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </Button1>
            {status === 'sent' && <Text3 as="p" variant="green">Message sent!</Text3>}
            {status === 'error' && <Text3 as="p" variant="red">Failed to send.</Text3>}
          </form>
        </div>
      </section>

      <ImageLightbox
        images={lightbox?.images ?? null}
        index={lightbox?.index ?? 0}
        onClose={() => setLightbox(null)}
      />

    </div>
  )
}
