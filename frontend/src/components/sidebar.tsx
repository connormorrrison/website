"use client"
import React, { useState, useEffect, useRef } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Home, User, BookOpen, Briefcase, Folder, Code, Mail } from 'lucide-react'
import { scrollToSection } from '@/lib/scroll'

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const menuItems = [
    { name: 'Home',       id: 'home',       href: '#home',       icon: Home },
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

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-10% 0px -60% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  if (!isMounted || isMobile) {
    return null
  }

  return (
    <div ref={sidebarRef} className="relative" style={{ height: '100vh' }}>
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
    </div>
  )
}
