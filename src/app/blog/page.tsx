// src/app/blog/page.tsx
'use client'

import { useEffect } from 'react'

export default function BlogPage() {
  useEffect(() => {
    // swap this entry for Substack so back() returns to home
    window.location.replace('https://connormorrison.substack.com')
  }, [])

  return null
}
