"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button2 } from '@/components/button-2'
import { ThemeToggle } from '@/components/theme-toggle'
import { PanelRightClose, PanelRightOpen, Home, User, Folder, PenTool, Star, Mail } from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()
  const [isPinned, setIsPinned] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isCollapsing, setIsCollapsing] = useState(false)
  const [justPinned, setJustPinned] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const DESKTOP_HOVER_THRESHOLD = 200
  const MOBILE_HOVER_THRESHOLD = 50

  const menuItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Projects', path: '/projects', icon: Folder },
    { name: 'Blog', path: '/blog', icon: PenTool },
    { name: 'Curations', path: '/curations', icon: Star },
    { name: 'Contact', path: '/contact', icon: Mail },
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
        const isMobile = window.innerWidth < 768
        const threshold = isMobile ? MOBILE_HOVER_THRESHOLD : DESKTOP_HOVER_THRESHOLD
        const isNearLeftEdge = e.clientX <= threshold
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
          w-48 p-4 rounded-xl border shadow-none bg-background/30 dark:bg-input/30
          transition-all duration-300
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          height: 'calc(100vh - 64px)',
          marginTop: '32px',
          marginLeft: isVisible ? '32px' : '-192px',
          borderColor: 'light-dark(oklch(0.922 0 0), oklch(1 0 0 / 10%))'
        }}
      >
        <Button2
          onClick={handlePinClick}
          aria-label={isPinned ? 'Unpin sidebar' : 'Pin sidebar'}
          className="pin-button absolute bottom-4 right-4"
        >
          {showCollapseIcon ? (
            <PanelRightOpen className="transition-transform duration-200" style={{width: '1.25rem', height: '1.25rem'}} />
          ) : (
            <PanelRightClose className="transition-transform duration-200" style={{width: '1.25rem', height: '1.25rem'}} />
          )}
        </Button2>

        <nav className="flex-1">
          <ul className="space-y-1">
            {menuItems.map(item => {
              const isActive = pathname === item.path
              return (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`block px-4 py-2 rounded-xl text-lg font-normal transition-colors ${
                      isActive
                        ? '!bg-blue-600/8 !text-blue-600'
                        : '!text-foreground hover:bg-blue-600/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="pt-4 theme-toggle">
          <ThemeToggle />
        </div>
      </Card>
    </div>
  )
}