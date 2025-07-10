import React from "react"
import { cn } from "@/lib/utils"

interface TileProps {
  children: React.ReactNode
  className?: string
  borderStyle?: "solid" | "dashed"
}

export const Tile = ({ children, className, borderStyle = "solid" }: TileProps) => {
  const borderClass = borderStyle === "dashed" 
    ? "border border-dashed border-gray-300 dark:border-zinc-700"
    : "border border-gray-300 dark:border-zinc-700"

  return (
    <div className={cn(
      "w-full p-4 rounded-xl bg-background dark:bg-input/30",
      borderClass,
      className
    )}>
      {children}
    </div>
  )
}