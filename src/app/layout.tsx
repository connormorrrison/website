// src/app/layout.tsx

import "./globals.css"
import Sidebar from "@/components/sidebar"

export const metadata = {
  title: "Your Website Title",
  description: "Your website description",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-8">{children}</main>
      </body>
    </html>
  )
}
