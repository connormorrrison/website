import React from "react"
import { cn } from "@/lib/utils"

interface Text3Props {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span" | "p" | "a" | React.ComponentType<any>
  variant?: "default" | "muted" | "blue" | "green" | "red"
  [key: string]: any
}

export const Text3 = ({ children, className, as: Component = "h3", variant = "default", ...props }: Text3Props) => {
  const variantClasses = {
    default: "text-foreground",
    muted: "text-muted-foreground", 
    blue: "text-blue-600",
    green: "text-green-600",
    red: "text-red-600"
  }

  return (
    <Component
      className={cn(
        "text-lg font-normal",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}