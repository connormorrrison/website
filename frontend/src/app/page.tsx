"use client"
import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { motion } from "motion/react"
import { Badge } from "@/components/badge"
import { Button2 } from "@/components/button-2"
import { Button1 } from "@/components/button-1"
import { TextField } from "@/components/text-field"
import { Tile } from "@/components/tile"
import { Text1 } from "@/components/text-1"
import { Text2 } from "@/components/text-2"
import { Text3 } from "@/components/text-3"
import { ImageLightbox } from "@/components/image-lightbox"
import { ImageCarousel } from "@/components/image-carousel"
import { CustomCursorEffect } from "@/components/custom-cursor-effect"

import { scrollToSection } from "@/lib/scroll"
import { Mail, Folder, User, MapPin, Plane, ChevronDown, LayoutGrid, X } from "lucide-react"

type Project = {
  title: string
  subtitle: string
  tags?: string[]
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
    subtitle: "MockTrade is a full-stack stock trading simulator for users to practice trading with virtual cash, track performance, and compete on a leaderboard.",
    tags: ["Personal Project"],
    bullets: [
      "Built and deployed a full-stack stock trading simulator at mocktrade.ca where users practice trading with virtual cash, track portfolio performance, and compete on a real-time leaderboard.",
      "Developed a FastAPI backend with a domain-driven architecture, Supabase PostgreSQL database, and Yahoo Finance integration for live market data, trade execution, and portfolio analytics.",
      "Implemented Google OAuth and JWT authentication, interactive portfolio charts, watchlists, market indices tracking, and user profile pages with activity history.",
    ],
    techs: ["React", "TypeScript", "TailwindCSS", "FastAPI", "Python", "Supabase", "Recharts"],
    timeline: "Nov 2024 – Present",
    url: "https://www.mocktrade.ca",
    githubUrl: "https://github.com/connormorrrison/MockTrade",
    images: ["/images/projects/mocktrade/picture-1.png", "/images/projects/mocktrade/picture-2.png"],
  },
  {
    title: "Benevity Automated Campaign Kits MVP",
    subtitle: "Benevity Automated Campaign Kits MVP is an AI-powered platform for auto-generating humanitarian campaign kits from emerging global crises.",
    tags: ["Academic Project", "CPSC 319 - Software Engineering Project"],
    bullets: [
      "Architected a modular data ingestion engine with pluggable source adapters for Google News, WHO Disease Outbreak News, RSS feeds, and GDACS, with a multi-phase article scraping pipeline using Server-Sent Events streaming, parallel LLM relevance scoring via ThreadPoolExecutor, and real-time progress reporting.",
      "Developed an LLM-powered event discovery endpoint using Google Gemini Flash that auto-discovers emerging humanitarian crises with 24-hour in-memory caching, and integrated Benevity cause auto-linking in the campaign generation flow.",
      "Designed and built a complete custom UI component library (15+ components) and a multi-page React SPA with an advanced campaign draft editor featuring inline citation editing via CSS Custom Highlight API, drag-and-drop image reordering, and auto-save.",
      "Built a real-time scrape progress visualization system with segmented phase bars, animated flip-text log viewer, and SVG radial progress ring, plus a full accessibility settings system with dark mode, adjustable font sizes, high contrast, and color blindness simulation filters.",
      "Created Alembic database migrations to evolve the CampaignKit schema, implemented RESTful CRUD API endpoints, and designed a Zustand-based campaign store for client-side persistence with localStorage.",
    ],
    techs: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "PostgreSQL", "Google Gemini", "Zustand", "SSE", "Alembic"],
    timeline: "Jan 2025 – Apr 2025",
    url: "",
    githubUrl: "",
    images: [
      "/images/projects/benevity/benevity-image-1.jpeg",
      "/images/projects/benevity/benevity-image-2.jpeg",
      "/images/projects/benevity/benevity-image-3.jpeg",
      "/images/projects/benevity/benevity-image-4.jpeg",
      "/images/projects/benevity/benevity-image-5.jpeg",
      "/images/projects/benevity/benevity-image-6.jpeg"
    ],
  },
  {
    title: "ChecKin",
    subtitle: "ChecKin is an AI-powered health check-in platform designed for caretakers to monitor and manage elderly patients.",
    tags: ["Hackathon", "UBC BizTech ProduHacks 2026"],
    bullets: [
      "Built the entire Next.js frontend application from scratch, including project scaffolding, component architecture, and a reusable UI component library (buttons, cards, inputs, progress bars, navigation, scroll-reveal animations).",
      "Designed and implemented a caretaker dashboard with AI-generated insight tiles (mood trends, sleep, medication, social), follow-up note management with pending/addressed states, and recent session summaries.",
      "Implemented a multi-step patient onboarding wizard (8 steps) collecting contact info, call frequency, time preferences, health context, mood baselines, symptoms, and trusted contacts with animated transitions.",
      "Built session detail views displaying analysis results (mood scores, urgency levels, concerns, visual observations) with color-coded urgency indicators, collapsible transcript sections, and a full settings page with scheduling controls and trusted contact CRUD.",
      "Implemented a typed API client layer with functions for sessions, contacts, follow-ups, analyses, notifications, and SMS invites, and authored a comprehensive frontend integration guide documenting the full architecture and API contracts.",
    ],
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    timeline: "Mar 2026",
    url: "",
    githubUrl: "https://github.com/connormorrrison/checkin",
    images: ["/images/projects/checkin/checkin-picture-1.jpeg", "/images/projects/checkin/checkin-picture-2.jpeg", "/images/projects/checkin/checkin-picture-3.jpeg", "/images/projects/checkin/checkin-picture-4.jpeg"],
  },
  {
    title: "Solomon",
    subtitle: "Solomon is a prediction market trading platform integrating Polymarket to track and execute Bitcoin binary options trades.",
    tags: ["Personal Project"],
    underConstruction: true,
    bullets: [
      "Building a full-stack trading platform integrating Polymarket's CLOB and Gamma APIs to discover and track Bitcoin directional binary options contracts in real-time.",
      "Built a market discovery pipeline that searches Polymarket's prediction market universe for active BTC Up/Down contracts with smart slug-based search and caching.",
      "Engineered a 4-layer safeguard system enforcing pause state, cash reserve, daily loss limits, and per-trade caps, with all execution running in dry-run simulation mode and full P&L tracking.",
      "Created a React dashboard with live balance charts, trade activity logs, active positions tracking, and runtime settings control backed by a FastAPI REST API.",
    ],
    techs: ["Python", "FastAPI", "React", "TypeScript", "WebSockets", "Polymarket API", "Recharts", "Tailwind CSS"],
    timeline: "Mar 2025 – Present",
    url: "",
    githubUrl: "",
    images: [],
  },
  {
    title: "Stock Management DSL",
    subtitle: "Stock Management DSL is a domain-specific language and terminal UI for querying, managing, and analyzing stock portfolios.",
    tags: ["Academic Project", "CPSC 410 - Advanced Software Engineering"],
    bullets: [
      "Built the complete Report Generation system with a modular architecture — ReportCalculator (financial computations), ReportFormatter (box-drawing table rendering), and ReportCreator (orchestration layer) — including a REST API endpoint that aggregates live portfolio, watchlist, and market data.",
      "Developed a financial calculation engine computing market value, gain/loss, return percentages, and portfolio-level account overviews, with a rich terminal UI renderer using Unicode box-drawing tables, dynamic column widths, and configurable field filtering via a SHOW clause.",
      "Built the frontend REPORT command handler in the terminal component with box-table rendering functions, column definitions, and value formatters, and refined the dashboard layout for improved usability.",
      "Authored a comprehensive test suite with 20+ test cases covering calculator logic, formatted and unformatted output, field filtering, and edge cases such as empty portfolios and missing market data.",
    ],
    techs: ["TypeScript", "Next.js", "React", "Python", "Flask", "Tailwind CSS", "pytest"],
    timeline: "Jan 2025 – Apr 2025",
    url: "",
    githubUrl: "",
    images: [],
  },
  {
    title: "InsightUBC",
    subtitle: "InsightUBC is a full-stack educational data analytics platform for querying and visualizing university course data.",
    tags: ["Academic Project", "CPSC 310 - Introduction to Software Engineering"],
    bullets: [
      "Designed and implemented a complete query validation and execution engine in TypeScript, supporting recursive WHERE clause evaluation (AND/OR/NOT/GT/LT/EQ/IS), GROUP BY aggregation with composite keys, APPLY operations (MAX, MIN, AVG, SUM, COUNT) using Decimal.js precision arithmetic, and multi-key directional sorting.",
      "Built the entire React + TypeScript frontend as sole frontend developer, featuring three interactive Chart.js visualizations (average grade by course, pass/fail rate distributions, top professors) with cascading dropdown state management and dynamic data fetching.",
      "Developed a custom UI component library wrapping shadcn/ui and Radix UI primitives, with full dataset management UI including ZIP file upload, dataset listing, and deletion with cascading state resets.",
      "Authored 100+ JSON test fixtures and a comprehensive test suite covering valid queries, invalid queries, boundary conditions, and REST API integration tests using Mocha, Chai, Supertest, Vitest, and React Testing Library.",
    ],
    techs: ["TypeScript", "React", "Tailwind CSS", "Chart.js", "Express.js", "Mocha", "Chai", "Vitest"],
    timeline: "Sep 2024 – Dec 2024",
    url: "",
    githubUrl: "",
    images: [],
  },
  {
    title: "ParkShare",
    subtitle: "ParkShare is a peer-to-peer parking marketplace for users to find, book, and rent out parking spots.",
    tags: ["Hackathon", "UBC BizTech KickStart 2025"],
    bullets: [
      "Architected and implemented the complete FastAPI REST API with JWT authentication, bcrypt password hashing, CRUD endpoints for parking spots and bookings, time-overlap conflict detection, and double-booking prevention.",
      "Engineered a runtime availability calculation engine that dynamically subtracts confirmed and pending bookings from recurring weekly base intervals using a cursor-based time-slot subtraction algorithm.",
      "Built a multi-step booking and payment flow with a 3-step wizard (date selection, time selection, payment), calendar integration, and real-time time validation on the frontend.",
      "Redesigned the dashboard and search pages with Google Static Maps tiles, availability-aware filtering, operating-hours display, and responsive grid layouts using Framer Motion animations.",
      "Built the TypeScript API client layer, Zustand state management integration, and AuthProvider with auth-reset race condition fix.",
    ],
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "Supabase", "Google Maps API", "Zustand"],
    timeline: "Nov 2025",
    url: "",
    githubUrl: "",
    images: ["/images/projects/parkshare/picture-1.png", "/images/projects/parkshare/picture-2.png"],
  },
  {
    title: "Jobnt",
    subtitle: "Jobnt is an AI-powered job application tool for parsing details and generating ATS-optimized LaTeX resumes.",
    tags: ["Hackathon", "nwPlus HackCamp 2025"],
    bullets: [
      "Scaffolded the entire Next.js frontend from scratch, configuring shadcn/ui, Tailwind CSS, dark mode theming, and motion animations, and built all UI components including Sidebar, InputBar, and DownloadButton.",
      "Built a complete frontend API service layer with TypeScript interfaces for document generation, LaTeX-to-PDF conversion, and end-to-end pipeline orchestration with async API calls, blob URL management, and error handling.",
      "Engineered the OpenAI prompt system for generating ATS-optimized LaTeX resumes with anti-hallucination guardrails and structured template definitions, migrating from the Responses API to the Chat Completions API.",
      "Resolved TeX Live 2024+ compatibility issues by implementing automatic DocumentMetadata injection, LaTeX content sanitization, and enhanced the PDF conversion pipeline with detailed error logging and log file parsing.",
    ],
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Flask", "Python", "OpenAI API", "LaTeX"],
    timeline: "Nov 2025",
    url: "",
    githubUrl: "",
    images: ["/images/projects/jobnt/picture-1.png", "/images/projects/jobnt/picture-2.png"],
  },
]

const skills = {
  languages: ["Python", "Java", "TypeScript", "C", "Rust", "Golang", "RISC-V"],
  frameworks: ["React", "Next.js", "Tailwind CSS", "FastAPI", "shadcn/ui"],
  libraries: ["pandas", "NumPy", "Matplotlib", "SciPy", "scikit-learn"],
  developerTools: ["PostgreSQL", "Linux", "Bash", "Git", "Claude Code", "Docker", "Google Cloud Platform (GCP)", "Visual Studio", "IntelliJ"],
}

export default function Home() {
  const [lightbox, setLightbox] = useState<{ images: string[], index: number } | null>(null)
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [portalMounted, setPortalMounted] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useEffect(() => {
    setPortalMounted(true)
    const main = document.querySelector('main')
    if (main) main.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  useEffect(() => {
    if (showAllProjects) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [showAllProjects])

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
    <div className="max-w-3xl mx-auto">

      {/* Home */}
      <section id="home" className="py-12" style={{ scrollMarginTop: '2rem' }}>
        <motion.div className="flex flex-col space-y-6" initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}>
          <Text1>Hi, I&apos;m Connor</Text1>

          <Text3 as="p">
            I&apos;m a computer science student at the{' '}
            <Text3 as="a" href="https://www.ubc.ca/" target="_blank" rel="noopener noreferrer" className="hover:underline" variant="blue">University of British Columbia</Text3>
            {' '}and a finance graduate from the{' '}
            <Text3 as="a" href="https://www.ualberta.ca/" target="_blank" rel="noopener noreferrer" className="hover:underline" variant="blue">University of Alberta</Text3>
            . I&apos;m building at the intersection of computer science and
            finance, focusing on software engineering, AI and machine learning, and fintech applications.
          </Text3>

          <Text3 as="p">Currently seeking Co-op opportunities for Fall 2026.</Text3>

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
            <Button2
              asChild
              text="Vancouver, BC"
              icon={<MapPin />}
              iconColor="green"
              aria-label="Vancouver, BC"
            >
              <a href="https://maps.google.com/?q=Vancouver,+BC" target="_blank" rel="noopener noreferrer" />
            </Button2>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-12" style={{ scrollMarginTop: '2rem' }}>
        <motion.div className="flex flex-col space-y-6" initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}>
          <Text1>About</Text1>

          <Text3 as="p">
            I&apos;m an aspiring software engineer building at the intersection of computer science and
            finance. I&apos;m passionate about financial markets, AI and machine learning, problem
            solving, and crafting elegant software.
          </Text3>

          <div>
            <Text3 as="p">I&apos;m currently reading:</Text3>
            <ul className="list-disc list-outside pl-8 space-y-1 mt-1">
              <li>
                <Text3 as="a" href="https://www.amazon.com/Boom-Bubbles-Stagnation-Byrne-Hobart/dp/1953953476" target="_blank" rel="noopener noreferrer" className="hover:underline" variant="blue">
                  Boom: Bubbles and the End of Stagnation
                </Text3>
              </li>
              <li>
                <Text3 as="a" href="https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850" target="_blank" rel="noopener noreferrer" className="hover:underline" variant="blue">
                  Cracking the Coding Interview
                </Text3>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <Text2 className="mb-2">Location</Text2>
            <div className="flex flex-wrap" style={{ gap: '12px' }}>
              <Button2
                asChild
                text="Vancouver, BC"
                icon={<MapPin />}
                iconColor="green"
                aria-label="Vancouver, BC"
              >
                <a href="https://maps.google.com/?q=Vancouver,+BC" target="_blank" rel="noopener noreferrer" />
              </Button2>
              <CustomCursorEffect cursor="🇺🇸">
                <Badge
                  text="Willing to relocate"
                  icon={<Plane />}
                  iconColor="blue"
                />
              </CustomCursorEffect>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Education */}
      <section id="education" className="py-12" style={{ scrollMarginTop: '2rem' }}>
        <motion.div className="flex flex-col space-y-6" initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}>
          <Text1>Education</Text1>

          <div className="flex flex-wrap" style={{ gap: '12px' }}>
            <Tile>
              <Text3>University of British Columbia</Text3>
              <Text3 as="p" variant="muted">Bachelor of Computer Science (BCS), Major in Computer Science (Co-op)</Text3>
            </Tile>
            <Tile>
              <Text3>University of Alberta</Text3>
              <Text3 as="p" variant="muted">Bachelor of Commerce (BCom), Major in Finance</Text3>
            </Tile>
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-12" style={{ scrollMarginTop: '2rem' }}>
        <motion.div className="flex flex-col space-y-6" initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}>
          <Text1>Experience</Text1>

          <Tile>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
              <div>
                <Text2>Software Developer</Text2>
                <Text3 variant="muted">Atria Community · Vancouver, BC</Text3>
              </div>
              <div className="sm:text-right flex-shrink-0">
                <Text3 variant="muted">Part-time</Text3>
                <Text3 variant="muted">Nov 2025 – Present</Text3>
              </div>
            </div>
          </Tile>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12" style={{ scrollMarginTop: '2rem' }}>
        <motion.div className="flex flex-col space-y-6" initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}>
          <div className="flex items-center justify-between">
            <Text1>Projects</Text1>
            <Button2
              text="Show All"
              icon={<LayoutGrid />}
              aria-label="Show All Projects"
              onClick={() => { setExpandedProject(null); setShowAllProjects(true) }}
            />
          </div>

            {/* List view — only rendered when modal is closed */}
            {!showAllProjects && (
              <div className="flex flex-col" style={{ gap: '12px' }}>
                {projects.map((proj) => {
                  const isExpanded = expandedProject === proj.title
                  return (
                    <motion.div
                      key={proj.title}
                      layoutId={`project-card-${proj.title}`}
                      transition={{ type: 'spring', stiffness: 200, damping: 26 }}
                      className="w-full p-4 rounded-xl shadow-none bg-background/30 dark:bg-input/30 border flex flex-col transition-colors hover:!bg-accent hover:!text-accent-foreground cursor-pointer"
                      style={{
                        borderColor: 'light-dark(oklch(0.922 0 0), oklch(1 0 0 / 10%))',
                        ...(proj.underConstruction ? { borderStyle: 'dashed' } : {}),
                      }}
                    >
                      {/* Collapsed header — always visible, clickable */}
                      <button
                        onClick={() => setExpandedProject(isExpanded ? null : proj.title)}
                        className="w-full flex items-start justify-between gap-4 text-left cursor-pointer"
                      >
                        <div className="flex flex-col gap-1 min-w-0">
                          <Text2>{proj.title}</Text2>
                          <Text3 variant="muted">{proj.subtitle}</Text3>
                          <div className="flex flex-wrap mt-1" style={{ gap: '6px' }}>
                            {proj.techs.map((t) => (
                              <Badge key={t} text={t} />
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0 mt-1">
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={16} className="text-muted-foreground" />
                          </motion.div>
                        </div>
                      </button>

                      {/* Expanded content */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isExpanded ? 'auto' : 0,
                          opacity: isExpanded ? 1 : 0,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="pt-4">
                          {(proj.tags || proj.timeline) && (
                            <div className="mb-3 sm:hidden">
                              {proj.tags && (
                                <div className="flex flex-wrap gap-2 mb-1">
                                  {proj.tags.map((t) => (
                                    <Badge key={t} text={t} />
                                  ))}
                                </div>
                              )}
                              <Text3 variant="muted">{proj.timeline}</Text3>
                            </div>
                          )}
                          {proj.tags && (
                            <div className="mb-3 hidden sm:flex flex-wrap gap-2">
                              {proj.tags.map((t) => (
                                <Badge key={t} text={t} />
                              ))}
                            </div>
                          )}

                          {proj.bullets.length > 0 && (
                            <ul className="list-disc list-outside pl-8 space-y-1 mb-3">
                              {proj.bullets.map((b, i) => (
                                <li key={i}><Text3>{b}</Text3></li>
                              ))}
                            </ul>
                          )}

                          <div className="flex flex-wrap mb-4" style={{ gap: '8px' }}>
                            {proj.techs.map((t) => (
                              <Badge key={t} text={t} />
                            ))}
                          </div>

                          {!proj.underConstruction && proj.images.length > 0 && (
                            <div className="mb-4">
                              <ImageCarousel
                                images={proj.images}
                                alt={proj.title}
                                onImageClick={(i) => setLightbox({ images: proj.images, index: i })}
                              />
                            </div>
                          )}

                          {!proj.underConstruction && (proj.githubUrl || proj.url) && (
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
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            )}
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12" style={{ scrollMarginTop: '2rem' }}>
        <motion.div className="flex flex-col space-y-6" initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}>
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
            <Text2 className="mb-2">Frameworks</Text2>
            <div className="flex flex-wrap" style={{ gap: '12px' }}>
              {skills.frameworks.map((fw) => (
                <Badge key={fw} text={fw} />
              ))}
            </div>
          </div>

          <div className="w-full">
            <Text2 className="mb-2">Developer Tools</Text2>
            <div className="flex flex-wrap" style={{ gap: '12px' }}>
              {skills.developerTools.map((tool) => (
                <Badge key={tool} text={tool} />
              ))}
            </div>
          </div>

          <div className="w-full">
            <Text2 className="mb-2">Libraries</Text2>
            <div className="flex flex-wrap" style={{ gap: '12px' }}>
              {skills.libraries.map((lib) => (
                <Badge key={lib} text={lib} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12" style={{ scrollMarginTop: '2rem' }}>
        <motion.div className="flex flex-col space-y-6" initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}>
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
        </motion.div>
      </section>

      {/* Full-screen projects grid modal */}
      {portalMounted && showAllProjects && ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-auto">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowAllProjects(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />

          {/* Close button — Button2 at same position as GitHub icon */}
          <motion.div
            className="fixed z-50"
            style={{ top: '32px', right: '32px' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25, delay: 0.1 }}
          >
            <Button2
              aria-label="Close"
              onClick={() => setShowAllProjects(false)}
            >
              <X style={{ width: '1.25rem', height: '1.25rem' }} />
            </Button2>
          </motion.div>

          {/* Masonry — zooms in like image lightbox */}
          <motion.div
            className="relative z-10 w-full max-w-5xl px-8 py-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map((proj) => (
                <div
                  key={proj.title}
                  className="p-4 rounded-xl bg-background/30 dark:bg-input/30 border flex flex-col"
                  style={{
                    borderColor: 'light-dark(oklch(0.922 0 0), oklch(1 0 0 / 10%))',
                    ...(proj.underConstruction ? { borderStyle: 'dashed' } : {}),
                  }}
                >
                  {/* Screenshot carousel */}
                  {proj.images.length > 0 && (
                    <div className="mb-3 -mx-1 -mt-1">
                      <ImageCarousel
                        images={proj.images}
                        alt={proj.title}
                        onImageClick={(i) => { setShowAllProjects(false); setLightbox({ images: proj.images, index: i }) }}
                      />
                    </div>
                  )}

                  <Text2>{proj.title}</Text2>
                  <Text3 variant="muted" className="mt-1">{proj.timeline}</Text3>
                  <Text3 variant="muted" className="mt-1">{proj.subtitle}</Text3>

                  {/* Tech badges */}
                  <div className="flex flex-wrap mt-3" style={{ gap: '6px' }}>
                    {proj.techs.map((t) => (
                      <Badge key={t} text={t} />
                    ))}
                  </div>

                  {proj.tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {proj.tags.map((t) => (
                        <Badge key={t} text={t} />
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  {(proj.githubUrl || proj.url) && (
                    <div className="flex gap-4 mt-3">
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
                </div>
              ))}
            </div>
          </motion.div>
        </div>,
        document.body
      )}

      <ImageLightbox
        images={lightbox?.images ?? null}
        index={lightbox?.index ?? 0}
        onClose={() => setLightbox(null)}
      />

    </div>
  )
}
