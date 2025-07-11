import React from "react"

interface BadgeProps {
  text: string
  icon?: React.ReactNode
}

export const Badge = ({ text, icon }: BadgeProps) => (
  <span className="px-3 py-1 rounded-full text-lg font-normal text-foreground bg-background/30 dark:bg-input/30 border border-gray-300 dark:border-zinc-700 flex items-center gap-2 flex-shrink-0">
    {icon}
    {text}
  </span>
)