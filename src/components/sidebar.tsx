// src/components/sidebar.tsx

import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Sidebar() {
  const menuItems = [
    { name: 'Home',     path: '/'        },
    { name: 'About',    path: '/about'   },
    { name: 'Projects', path: '/projects'},
    { name: 'Blog',     path: '/blog'    },
    { name: 'Books',    path: '/books'   },
    { name: 'Contact',  path: '/contact' },
  ]

  return (
    <Card className="flex flex-col w-48 h-[calc(100vh-4rem)] mt-8 ml-8 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
      <nav className="flex-1">
        <ul className="space-y-1">
          {menuItems.map(item => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="block px-4 py-2 rounded-lg text-base font-semibold hover:bg-gray-100"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="pt-4">
        <ThemeToggle />
      </div>
    </Card>
  )
}
