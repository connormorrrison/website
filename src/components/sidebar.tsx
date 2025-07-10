// src/components/sidebar.tsx
"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Sidebar() {
  const [isPinned, setIsPinned] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [isCollapsing, setIsCollapsing] = useState(false)
  const [justPinned, setJustPinned] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const HOVER_THRESHOLD = 200

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Curations', path: '/curations' },
    { name: 'Contact', path: '/contact' },
  ]

  // This function now only gets called by the button
  const togglePin = () => {
    const currentlyPinned = isPinned
    setIsPinned(!currentlyPinned)
    if (currentlyPinned) {
      setIsCollapsing(true)
      if (!isHovered) {
        setIsVisible(false)
      }
    } else {
      setIsVisible(true)
      setJustPinned(true)
    }
  }

  // Event handler for the pin button
  const handlePinClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    togglePin()
  }

  const handleTransitionEnd = () => {
    if (isCollapsing) {
      setIsCollapsing(false)
    }
  }

  const handleMouseLeave = () => {
    if (justPinned) {
      setJustPinned(false)
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isPinned) {
        const isNearLeftEdge = e.clientX <= HOVER_THRESHOLD
        setIsHovered(isNearLeftEdge)
        setIsVisible(isNearLeftEdge)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isPinned])

  const showCollapseIcon = (isPinned && !justPinned) || isCollapsing

  return (
    <div ref={sidebarRef} className="relative h-full">
      <Card
        onTransitionEnd={handleTransitionEnd}
        onMouseLeave={handleMouseLeave}
        className={`
          relative flex flex-col
          w-48 p-4 rounded-xl
          transition-all duration-300
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          height: 'calc(100vh - 64px)', // 32px top + 32px bottom = 64px total
          marginTop: '32px',
          marginLeft: isVisible ? '32px' : '-192px' // -192px = negative width of sidebar
        }}
      >
        <Button
          onClick={handlePinClick}
          variant="outline"
          size="icon"
          aria-label={isPinned ? 'Unpin sidebar' : 'Pin sidebar'}
          className="pin-button absolute bottom-4 right-4 rounded-full w-10 h-10 flex items-center justify-center"
        >
          {showCollapseIcon ? (
            <ChevronLeft className="w-5 h-5 transition-transform duration-200" />
          ) : (
            <ChevronRight className="w-5 h-5 transition-transform duration-200" />
          )}
        </Button>

        <nav className="flex-1">
          <ul className="space-y-1">
            {menuItems.map(item => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="block px-4 py-2 rounded-lg text-lg font-normal hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pt-4 theme-toggle">
          <ThemeToggle />
        </div>
      </Card>
    </div>
  )
}