import React from "react"
import { cn } from "@/lib/utils"

interface Button1Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const Button1 = ({ className, children, ...props }: Button1Props) => {
  return (
    <button
      className={cn(
        "h-10 px-6 py-2 text-lg font-normal text-white bg-blue-600 border rounded-xl hover:bg-blue-700 disabled:opacity-50 shadow-none flex items-center justify-center",
        className
      )}
      style={{ borderColor: 'light-dark(oklch(0.922 0 0), oklch(1 0 0 / 10%))' }}
      {...props}
    >
      {children}
    </button>
  )
}