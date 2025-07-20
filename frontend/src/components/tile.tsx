import React from "react"
import { cn } from "@/lib/utils"

interface TileProps {
  children: React.ReactNode
  className?: string
  borderStyle?: "solid" | "dashed"
}

export const Tile = ({ children, className, borderStyle = "solid" }: TileProps) => {
  const borderClass = borderStyle === "dashed" 
    ? "border border-dashed"
    : "border"

  return (
    <div 
      className={cn(
        "w-full p-4 rounded-xl shadow-none bg-background/30 dark:bg-input/30",
        borderClass,
        className
      )}
      style={{ borderColor: 'light-dark(oklch(0.922 0 0), oklch(1 0 0 / 10%))' }}
    >
      {children}
    </div>
  )
}