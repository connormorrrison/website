"use client"
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Home, User, BookOpen, Briefcase, Folder, Code, Mail } from 'lucide-react'
import { scrollToSection } from '@/lib/scroll'

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const menuItems = [
    { name: 'Intro',      id: 'home',       href: '#home',       icon: Home },
    { name: 'About',      id: 'about',      href: '#about',      icon: User },
    { name: 'Education',  id: 'education',  href: '#education',  icon: BookOpen },
    { name: 'Experience', id: 'experience', href: '#experience', icon: Briefcase },
    { name: 'Projects',   id: 'projects',   href: '#projects',   icon: Folder },
    { name: 'Skills',     id: 'skills',     href: '#skills',     icon: Code },
    { name: 'Contact',    id: 'contact',    href: '#contact',    icon: Mail },
  ]

  useEffect(() => {
    setIsMounted(true)
    setIsMobile(window.innerWidth < 768)

    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const intersectingRef = useRef(new Set<string>())

  useEffect(() => {
    const main = document.querySelector('main')
    const sections = document.querySelectorAll('section[id]')

    const pickActive = () => {
      // If scrolled to bottom, activate the last section
      if (main && main.scrollTop + main.clientHeight >= main.scrollHeight - 10) {
        const lastSection = sections[sections.length - 1]
        if (lastSection) {
          setActiveSection(lastSection.id)
          return
        }
      }
      // Otherwise pick the topmost intersecting section by DOM order
      for (const section of sections) {
        if (intersectingRef.current.has(section.id)) {
          setActiveSection(section.id)
          break
        }
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            intersectingRef.current.add(entry.target.id)
          } else {
            intersectingRef.current.delete(entry.target.id)
          }
        }
        pickActive()
      },
      { rootMargin: '-10% 0px -60% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))

    const handleScroll = () => pickActive()
    main?.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      main?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isMounted || isMobile) {
    return null
  }

  return (
    <motion.div ref={sidebarRef} className="relative" style={{ height: '100vh' }} initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.6 }}>
      <div className="flex flex-col" style={{ height: '100vh', paddingTop: '32px', paddingBottom: '32px', paddingLeft: '32px', width: '192px' }}>
        <nav className="flex-1">
          <ul className="space-y-1">
            {menuItems.map(item => {
              const isActive = activeSection === item.id
              const IconComponent = item.icon
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}
                    className={`flex items-center gap-3 px-4 py-2 rounded-xl text-lg font-normal transition-colors ${
                      isActive
                        ? '!bg-blue-600/8 !text-blue-600'
                        : '!text-foreground hover:bg-blue-600/5'
                    }`}
                  >
                    <IconComponent size={18} className="flex-shrink-0" />
                    {item.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

      </div>
      <div className="absolute theme-toggle" style={{ bottom: '32px', left: '32px' }}>
        <ThemeToggle />
      </div>
    </motion.div>
  )
}
