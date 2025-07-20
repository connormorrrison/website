import React from "react"
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
  // Set default colors based on iconColor prop
  const defaultIconColor = iconColor === "blue" ? "text-blue-600" : iconColor === "green" ? "text-green-600" : iconColor
  const defaultHoverColor = hoverIconColor || (iconColor === "blue" ? "text-blue-700" : iconColor === "green" ? "text-green-700" : "text-gray-700")

  return (
    <span 
      className={cn(
        `px-3 py-1 text-lg rounded-full font-normal border flex items-center gap-2 flex-shrink-0 shadow-none bg-background/30 dark:bg-input/30 text-foreground`,
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