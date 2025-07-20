import React from "react"
import { cn } from "@/lib/utils"

interface Text1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span"
}

export const Text1 = ({ children, className, as: Component = "h1", ...props }: Text1Props) => {
  return (
    <Component
      className={cn(
        "text-3xl font-normal text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}