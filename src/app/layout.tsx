// src/app/layout.tsx
import "./globals.css"
import Sidebar from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import PageTransition from "@/components/page-transition"
import SocialLinks from "@/components/social-links"

export const metadata = {
  title: "Connor Morrison",
  description: "Software Engineer",
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar />

          {/* always-visible social links */}
          <SocialLinks />

          <main className="flex-1 p-8">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
