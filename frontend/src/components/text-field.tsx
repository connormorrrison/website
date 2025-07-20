import React from "react"
import { cn } from "@/lib/utils"

interface BaseTextFieldProps {
  className?: string
  variant?: "small" | "large"
}

interface SmallTextFieldProps extends BaseTextFieldProps, React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "small"
}

interface LargeTextFieldProps extends BaseTextFieldProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant: "large"
}

type TextFieldProps = SmallTextFieldProps | LargeTextFieldProps

export const TextField = ({ className, variant = "small", ...props }: TextFieldProps) => {
  const baseClasses = "w-full px-4 py-2 text-lg text-muted-foreground bg-background dark:bg-input/30 border border-gray-300 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring shadow-none"
  
  if (variant === "large") {
    return (
      <textarea
        className={cn(
          baseClasses,
          "h-32 resize-none",
          className
        )}
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    )
  }

  return (
    <input
      className={cn(
        baseClasses,
        "h-10",
        className
      )}
      {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
    />
  )
}