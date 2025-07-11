"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { IconButton } from '@/components/ui/icon-button'
import { ThemeToggle } from '@/components/theme-toggle'
import { PanelRightClose, PanelRightOpen } from 'lucide-react'

export default function Sidebar() {
  const [isPinned, setIsPinned] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
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
    setIsMounted(true)
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      setIsPinned(false)
      setIsVisible(false)
    }
  }, [])

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

  if (!isMounted) {
    return null
  }

  return (
    <div ref={sidebarRef} className="relative h-full">
      <Card
        onTransitionEnd={handleTransitionEnd}
        onMouseLeave={handleMouseLeave}
        className={`
          relative flex flex-col
          w-48 p-4 rounded-xl border border-gray-300 dark:border-zinc-700 bg-background/30 dark:bg-input/30 shadow-none
          transition-all duration-300
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          height: 'calc(100vh - 64px)',
          marginTop: '32px',
          marginLeft: isVisible ? '32px' : '-192px'
        }}
      >
        <IconButton
          onClick={handlePinClick}
          aria-label={isPinned ? 'Unpin sidebar' : 'Pin sidebar'}
          className="pin-button absolute bottom-4 right-4"
        >
          {showCollapseIcon ? (
            <PanelRightOpen className="w-5 h-5 transition-transform duration-200" />
          ) : (
            <PanelRightClose className="w-5 h-5 transition-transform duration-200" />
          )}
        </IconButton>

        <nav className="flex-1">
          <ul className="space-y-1">
            {menuItems.map(item => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="block px-4 py-2 rounded-lg text-lg font-normal text-foreground hover:bg-accent hover:text-accent-foreground"
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