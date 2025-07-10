import React from "react"

interface BadgeProps {
  text: string
}

export const Badge = ({ text }: BadgeProps) => (
  <span className="px-3 py-1 rounded-full text-lg font-normal text-foreground bg-background dark:bg-input/30 border border-gray-300 dark:border-zinc-700">
    {text}
  </span>
)