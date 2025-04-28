// src/app/layout.tsx

import "./globals.css"
import Sidebar from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import PageTransition from "@/components/page-transition"
import SocialLinks from "@/components/social-links"

export const metadata = {
  title: "Connor Morrison",
  description: "Software Engineer",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex h-screen overflow-hidden relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <aside className="h-screen sticky top-0">
            <Sidebar />
          </aside>

          <SocialLinks />

          <main className="flex-1 p-8 overflow-auto">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
