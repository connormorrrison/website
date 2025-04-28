// src/components/theme-toggle.tsx
"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // wait until after hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  // render nothing on the server (or until mounted) so there's
  // no mismatch between SSR HTML and the first client paint
  if (!mounted) {
    return null
  }

  // choose the icon based on the actual resolved theme
  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </Button>
  )
}
