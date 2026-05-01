"use client"
import React, { useState, useEffect } from "react"
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
import { Mail, Folder, User, MapPin, Plane } from "lucide-react"

type Project = {
  title: string
  subtitle: React.ReactNode
  tags?: string[]
  techs: string[]
  timeline: string
  url: string
  githubUrl: string
  videoUrl: string
  images: string[]
  underConstruction?: boolean
  featured?: boolean
  repoNote?: string
}

const projects: Project[] = [
  {
    title: "MockTrade",
    subtitle: "MockTrade is a full-stack stock trading simulator where users practice buying and selling real stocks with virtual cash. Users can track portfolio performance through interactive charts, monitor market indices, build watchlists, and compete on a real-time leaderboard.",
    featured: true,
    techs: ["React", "TypeScript", "TailwindCSS", "Python", "FastAPI", "PostgreSQL"],
    timeline: "November 2024 – Present",
    url: "https://www.mocktrade.ca",
    githubUrl: "https://github.com/connormorrrison/mocktrade",
    videoUrl: "",
    images: ["/images/projects/mocktrade/mocktrade-1.jpeg", "/images/projects/mocktrade/mocktrade-2.jpeg", "/images/projects/mocktrade/mocktrade-3.jpeg"],
  },
  {
    title: "Benevity Automated Campaign Kits",
    subtitle: <>Capstone project for CPSC 319 (Software Engineering Project), built in partnership with <Text3 as="a" href="https://benevity.com/" target="_blank" rel="noopener noreferrer" className="hover:underline" variant="blue">Benevity</Text3>. An AI-powered platform that monitors global crises in real-time and generates donation campaign kits from verified news sources. Features LLM-powered event discovery, citation-grounded campaign copy generation via Gemini AI, Benevity API nonprofit matching, and a draft-to-publish workflow.</>,
    featured: true,
    techs: ["React", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL", "Google Vertex AI"],
    timeline: "January 2026 – April 2026",
    url: "",
    githubUrl: "",
    videoUrl: "https://youtu.be/HZ8bRtzengA?si=SV84M4Z5gHjKcsuE",
    images: [
      "/images/projects/benevity/benevity-1.jpeg",
      "/images/projects/benevity/benevity-2.jpeg",
      "/images/projects/benevity/benevity-3.jpeg",
      "/images/projects/benevity/benevity-4.jpeg",
      "/images/projects/benevity/benevity-5.jpeg"
    ],
  },
  {
    title: "CodeScope",
    subtitle: "CodeScope is a VS Code extension built as a capstone project for CPSC 410 (Advanced Software Engineering) that provides real-time program analysis for TypeScript/JavaScript functions. It visualizes data flows as interactive Mermaid diagrams, estimates runtime complexity through dynamic execution, detects structural duplicates across the workspace, locates function usages, and generates natural-language summaries via LLM.",
    techs: ["TypeScript", "VS Code Extension API", "TypeScript Compiler API", "Chart.js", "Jest"],
    timeline: "February 2026 – April 2026",
    url: "",
    githubUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=nzqVAuRsM2A",
    images: ["/images/projects/codescope/codescope-1.jpeg", "/images/projects/codescope/codescope-2.jpeg", "/images/projects/codescope/codescope-3.jpeg"],
  },
  {
    title: "ParkShare",
    subtitle: "ParkShare is a full-stack parking spot rental marketplace built at UBC BizTech's KickStart hackathon. Hosts can list available parking spaces with custom weekly availability schedules and hourly pricing, while renters search, browse, and book spots in real time through an interactive Google Maps interface. Users can manage bookings and listings from a personal dashboard.",
    techs: ["React", "Next.js", "TypeScript", "TailwindCSS", "Python", "FastAPI", "Supabase"],
    timeline: "November 2025",
    url: "",
    githubUrl: "https://github.com/connormorrrison/kickstart-project",
    videoUrl: "https://www.youtube.com/watch?v=s0aw6kmadjw",
    images: ["/images/projects/parkshare/parkshare-1.jpeg", "/images/projects/parkshare/parkshare-2.jpeg", "/images/projects/parkshare/parkshare-3.jpeg", "/images/projects/parkshare/parkshare-4.jpeg"],
  },
  {
    title: "ChecKin",
    subtitle: "Project description.",
    techs: ["Technology 1", "Technology 2", "Technology 3"],
    timeline: "Date – Date",
    url: "#",
    githubUrl: "#",
    videoUrl: "#",
    images: ["/images/projects/checkin/checkin-1.jpeg", "/images/projects/checkin/checkin-2.jpeg", "/images/projects/checkin/checkin-3.jpeg", "/images/projects/checkin/checkin-4.jpeg"],
  },
  {
    title: "Jobnt",
    subtitle: "Project description.",
    techs: ["Technology 1", "Technology 2", "Technology 3"],
    timeline: "Date – Date",
    url: "#",
    githubUrl: "#",
    videoUrl: "#",
    images: [],
  },
  {
    title: "InsightUBC",
    subtitle: "Project description.",
    techs: ["Technology 1", "Technology 2", "Technology 3"],
    timeline: "Date – Date",
    url: "#",
    githubUrl: "#",
    videoUrl: "#",
    images: [],
  },
  {
    title: "Stock Management DSL",
    subtitle: "Project description.",
    techs: ["Technology 1", "Technology 2", "Technology 3"],
    timeline: "Date – Date",
    url: "#",
    githubUrl: "#",
    videoUrl: "#",
    images: [],
  },
  {
    title: "Solomon",
    subtitle: "Project description.",
    underConstruction: true,
    techs: ["Technology 1", "Technology 2", "Technology 3"],
    timeline: "Date – Date",
    url: "#",
    githubUrl: "#",
    videoUrl: "#",
    images: [],
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

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useEffect(() => {
    const main = document.querySelector('main')
    if (main) main.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

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
              <Text2>University of British Columbia</Text2>
              <Text3 as="p" variant="muted">Bachelor of Computer Science (BCS), Major in Computer Science (Co-op)</Text3>
              <div className="flex flex-wrap mt-2" style={{ gap: '6px' }}>
                <Badge text="Introduction to Software Engineering" />
                <Badge text="Advanced Software Engineering" />
                <Badge text="Software Engineering Project" />
                <Badge text="Introduction to Computer Networking" />
                <Badge text="Introduction to Artificial Intelligence" />
              </div>
            </Tile>
            <Tile>
              <Text2>University of Alberta</Text2>
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
          <Text1>Projects</Text1>

          <div className="flex flex-col" style={{ gap: '12px' }}>
            {projects.map((proj) => {
              const hasImages = !proj.underConstruction && proj.images.length > 0
              const hasLinks = !proj.underConstruction && (proj.githubUrl || proj.url || proj.videoUrl)

              return (
                <Tile
                  key={proj.title}
                  borderStyle={proj.underConstruction ? 'dashed' : 'solid'}
                >
                  {/* Image carousel */}
                  {hasImages && (
                    <div className="rounded-lg overflow-hidden mb-4">
                      <ImageCarousel
                        images={proj.images}
                        alt={proj.title}
                        onImageClick={(i) => setLightbox({ images: proj.images, index: i })}
                      />
                    </div>
                  )}

                  {/* Title + timeline */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                    <Text2>{proj.title}</Text2>
                    <Text3 variant="muted" className="flex-shrink-0 whitespace-nowrap">{proj.timeline}</Text3>
                  </div>

                  {/* Subtitle */}
                  <Text3 variant="muted" className="mt-1">{proj.subtitle}</Text3>

                  {/* Tech badges */}
                  <div className="flex flex-wrap mt-3" style={{ gap: '6px' }}>
                    {proj.techs.map((t) => (
                      <Badge key={t} text={t} />
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-4 mt-3">
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
                    {proj.videoUrl && (
                      <Text3 as="a"
                        href={proj.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        variant="blue"
                      >
                        Video ↗
                      </Text3>
                    )}
                    {!hasLinks && !proj.videoUrl && proj.repoNote && (
                      <Text3 variant="muted">{proj.repoNote}</Text3>
                    )}
                  </div>
                </Tile>
              )
            })}
          </div>
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

      <ImageLightbox
        images={lightbox?.images ?? null}
        index={lightbox?.index ?? 0}
        onClose={() => setLightbox(null)}
      />

    </div>
  )
}
