'use client'

import { useEffect } from 'react'

export default function BlogPage() {
  useEffect(() => {
    window.location.replace('https://connormorrison.substack.com')
  }, [])

  return null
}
