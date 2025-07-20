import React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Badge } from "./badge"

interface Button2Props {
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
  "aria-label": string
  className?: string
  asChild?: boolean
  isExternal?: boolean
  text?: string
  icon?: React.ReactNode
  iconColor?: "blue" | "green" | string
  hoverIconColor?: string
  gap?: string
}

export const Button2 = ({ 
  children, 
  onClick, 
  "aria-label": ariaLabel, 
  className,
  asChild = false,
  isExternal = false,
  text,
  icon,
  iconColor = "blue",
  hoverIconColor,
  gap,
  ...props 
}: Button2Props) => {
  // If text is provided, use Badge with interactive behavior
  if (text) {
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ className?: string; children?: React.ReactNode }>, {
        className: cn(
          "cursor-pointer rounded-full hover:bg-accent hover:text-accent-foreground transition-colors",
          (children.props as { className?: string }).className
        ),
        children: (
          <Badge 
            text={text} 
            icon={icon} 
            iconColor={iconColor}
            hoverIconColor={hoverIconColor}
            gap={gap}
            className={cn("cursor-pointer", className)}
          />
        )
      })
    }

    return (
      <button
        aria-label={ariaLabel}
        onClick={onClick}
        className="bg-transparent border-none p-0 m-0 cursor-pointer inline-flex rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
        style={{ lineHeight: 1 }}
        {...props}
      >
        <Badge 
          text={text} 
          icon={icon} 
          iconColor={iconColor}
          hoverIconColor={hoverIconColor}
          gap={gap}
          className={cn("cursor-pointer", className)}
        />
      </button>
    )
  }

  // Original Button2 behavior for icon-only buttons
  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={ariaLabel}
      onClick={onClick}
      asChild={asChild}
      className={cn(
        "rounded-full w-10 h-10 flex items-center justify-center shadow-none border bg-background/30 dark:bg-input/30 text-foreground",
        isExternal && "text-blue-600",
        className
      )}
      style={{ borderColor: 'light-dark(oklch(0.922 0 0), oklch(1 0 0 / 10%))' }}
      {...props}
    >
      {children}
    </Button>
  )
}