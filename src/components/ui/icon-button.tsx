import React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface IconButtonProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
  "aria-label": string
  className?: string
  asChild?: boolean
  isExternal?: boolean
}

export const IconButton = ({ 
  children, 
  onClick, 
  "aria-label": ariaLabel, 
  className,
  asChild = false,
  isExternal = false,
  ...props 
}: IconButtonProps) => {
  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={ariaLabel}
      onClick={onClick}
      asChild={asChild}
      className={cn(
        "rounded-full w-10 h-10 flex items-center justify-center shadow-none border-gray-300 dark:border-zinc-700 bg-background/30 dark:bg-input/30",
        isExternal && "text-blue-600",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}