"use client"

import React, { useRef, useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"

interface BadgeProps {
  text: string
  icon?: React.ReactNode
  iconColor?: "blue" | "green" | string
  hoverIconColor?: string
  gap?: string
  className?: string
}

export const Badge = ({
  text,
  icon,
  iconColor = "blue",
  hoverIconColor,
  className
}: BadgeProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  const [isWrapped, setIsWrapped] = useState(false)

  const checkWrap = useCallback(() => {
    if (!ref.current) return
    // Single-line badge height is roughly 1 line of text + padding.
    // If scrollHeight exceeds a single-line threshold, text has wrapped.
    const lineHeight = parseFloat(getComputedStyle(ref.current).lineHeight) || 20
    const paddingY = 8 // py-1 = 4px top + 4px bottom
    setIsWrapped(ref.current.scrollHeight > lineHeight + paddingY + 4)
  }, [])

  useEffect(() => {
    checkWrap()
    window.addEventListener("resize", checkWrap)
    return () => window.removeEventListener("resize", checkWrap)
  }, [checkWrap, text])

  // Set default colors based on iconColor prop
  const defaultIconColor = iconColor === "blue" ? "text-blue-600" : iconColor === "green" ? "text-green-600" : iconColor
  const defaultHoverColor = hoverIconColor || (iconColor === "blue" ? "text-blue-700" : iconColor === "green" ? "text-green-700" : "text-gray-700")

  return (
    <span
      ref={ref}
      className={cn(
        `px-3 py-1 text-lg font-normal border flex items-center gap-2 shadow-none bg-background/30 dark:bg-input/30 text-foreground`,
        isWrapped ? "rounded-3xl" : "rounded-full",
        className
      )}
      style={{ borderColor: 'light-dark(oklch(0.922 0 0), oklch(1 0 0 / 10%))' }}
    >
      {icon && React.isValidElement(icon) && React.cloneElement(icon as React.ReactElement<{ className?: string; style?: React.CSSProperties }>, {
        className: cn(defaultIconColor, `hover:${defaultHoverColor}`, "transition-colors"),
        style: { width: '1.25rem', height: '1.25rem' },
        ...(icon.props || {})
      })}
      <span>{text}</span>
    </span>
  )
}
