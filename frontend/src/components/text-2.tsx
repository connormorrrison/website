import React from "react"
import { cn } from "@/lib/utils"

interface Text2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span"
}

export const Text2 = ({ children, className, as: Component = "h2", ...props }: Text2Props) => {
  return (
    <Component
      className={cn(
        "text-xl font-normal text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}