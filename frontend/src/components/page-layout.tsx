import React from "react"
import { cn } from "@/lib/utils"

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export const PageLayout = ({ children, className }: PageLayoutProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-start px-8 pb-8 space-y-8 max-w-3xl",
        className
      )}
      style={{paddingTop: '64px'}}
    >
      {children}
    </div>
  )
}