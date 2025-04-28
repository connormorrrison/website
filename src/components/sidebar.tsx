// src/components/sidebar.tsx

"use client"

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Sidebar() {
  const [isPinned, setIsPinned] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  // Ref to sidebar container (not strictly needed here but kept for consistency)
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Distance threshold in px for hover-trigger
  const HOVER_THRESHOLD = 200

  const menuItems = [
    { name: 'Home',     path: '/'        },
    { name: 'About',    path: '/about'   },
    { name: 'Projects', path: '/projects'},
    { name: 'Blog',     path: '/blog'    },
    { name: 'Books',    path: '/books'   },
    { name: 'Contact',  path: '/contact' },
  ]

  // Toggle pinned state on click (ignoring clicks on links or the theme toggle)
  const handleSidebarClick = (e: React.MouseEvent) => {
    if (
      (e.target as HTMLElement).tagName !== 'A' &&
      !e.currentTarget.querySelector('.theme-toggle')?.contains(e.target as Node)
    ) {
      setIsPinned(!isPinned)
      if (isPinned && !isHovered) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }
  }

  // Show/hide on hover when unpinned, using the updated threshold
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

  return (
    <div ref={sidebarRef} className="relative h-full">
      <Card
        onClick={handleSidebarClick}
        className={`
          relative flex flex-col
          w-48 h-[calc(100vh-4rem)] mt-8 p-4 rounded-xl shadow-md
          hover:shadow-lg transition-all duration-300 cursor-pointer
          ${isVisible ? 'ml-8 opacity-100' : '-ml-48 opacity-0'}
        `}
      >
        {/* Pin indicator */}
        <div
          className={`
            absolute bottom-4 right-4
            h-2 w-2 rounded-full
            ${isPinned ? 'bg-green-500' : 'bg-gray-300'}
          `}
          title={isPinned ? 'Sidebar is pinned' : 'Click to pin sidebar'}
        />

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-1">
            {menuItems.map(item => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="block px-4 py-2 rounded-lg text-base font-medium hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme toggle */}
        <div className="pt-4 theme-toggle">
          <ThemeToggle />
        </div>
      </Card>
    </div>
  )
}
