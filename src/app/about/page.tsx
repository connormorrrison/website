// src/app/about/page.tsx
"use client"

export default function AboutPage() {
  return (
    <div className="flex flex-col items-start justify-start p-8 space-y-8">
      {/* Title (same styling as “Books”) */}
      <h1 className="text-3xl font-normal">About</h1>

      {/* Intro blurb */}
      <p className="text-lg max-w-prose leading-relaxed">
        I’m an aspiring software engineer driven by a love of computer science,
        financial markets, and startups. My studies at the University of Alberta
        and the University of Saskatchewan gave me a foundation in full-stack
        engineering and data-guided problem solving.
      </p>

      {/* Quick-facts grid */}
      <div className="grid gap-6 sm:grid-cols-2 w-full">
        <section className="p-6 border rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Core Stack</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>React / Next.js / TypeScript</li>
            <li>Tailwind CSS / shadcn/ui</li>
            <li>FastAPI / PostgreSQL</li>
          </ul>
        </section>

        <section className="p-6 border rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Now Exploring</h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>AI agents & LLM tooling</li>
            <li>Rust for systems work</li>
            <li>Serverless architectures</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
