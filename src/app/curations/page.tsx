"use client"

import React from "react"
import Link from "next/link"

interface Item {
  title: string
  url: string
  description: string
}

interface Section {
  label: string
  items: Item[]
}

export default function CurationsPage() {
  const sections: Section[] = [
    {
      label: "Books",
      items: [
        {
          title: "Zero to One: Notes on Startups, or How to Build the Future",
          url: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
          description: "Peter Thiel’s take on building monopolies through innovation."
        },
        {
          title: "Boom: Bubbles and the End of Stagnation",
          url: "https://www.amazon.com/Boom-Bubbles-Stagnation-Byrne-Hobart/dp/1953953476",
          description: "Why progress stalled since the 1970s, and how bubbles can break us out of stagnation."
        },
        {
          title: "Sapiens: A Brief History of Humankind",
          url: "https://www.amazon.com/Sapiens-History-Humankind-Yuval-Harari/dp/0062316095",
          description: "An exploration of human history and evolution."
        },
        {
          title: "Principles of Building AI Agents",
          url: "https://www.amazon.com/Principles-Building-Agents-Sam-Bhagwat/dp/B0DYH5GHDD",
          description: "A hands-on guide to architecting intelligent agentic systems."
        },
        {
          title: "The Almanack of Naval Ravikant: A Guide to Wealth and Happiness",
          url: "https://www.amazon.com/Almanack-Naval-Ravikant-Wealth-Happiness-ebook/dp/B08FF8MTM6",
          description: "Naval’s distilled wisdom on decision-making, habits, and long-term thinking."
        },
      ]
    },
    {
      label: "Essays & Articles",
      items: [
        {
          title: "The Techno-Optimist Manifesto",
          url: "https://a16z.com/the-techno-optimist-manifesto/",
          description: "Marc Andreessen argues that technology and open markets drive all innovation and progress."
        },
        {
          title: "How To Be Successful by Sam Altman",
          url: "https://blog.samaltman.com/how-to-be-successful",
          description: "13 insights from Sam Altman on achieving outlier success."
        },
        {
          title: "The Secular Systemic Shift: Deflation, Technology And Demographics",
          url: "https://seekingalpha.com/article/4399567-the-secular-systemic-shift-deflation-technology-and-demographics",
          description: "Analysis of how deflationary forces underpin a paradigm shift in economic systems."
        },
      ]
    },
    {
      label: "Videos",
      items: [
        {
          title: "Steve Jobs' 2005 Stanford Commencement Address",
          url: "https://www.youtube.com/watch?v=UF8uR6Z6KLc",
          description: "One of the most inspiring speeches on following your intuition and staying hungry."
        },
        {
          title: "Peter Thiel: You Are Not a Lottery Ticket",
          url: "https://www.youtube.com/watch?v=iZM_JmZdqCw&t=1358s",
          description: "Thiel explores whether success is driven by luck or design."
        },
        {
          title: "Wanderers - A Short Film by Erik Wernquist",
          url: "https://www.youtube.com/watch?v=YH3c1QZzRK4",
          description: "A vision of humanity's expansion into the Solar System."
        },
      ]
    },
    {
      label: "Miscellaneous",
      items: [
        // add future items here
      ]
    }
  ]

  const renderList = (items: Item[]) => (
    <ul className="space-y-2 text-lg">
      {items.map((item, i) => (
        <li key={item.url + i} className="relative group">
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline focus:outline-none focus:ring"
          >
            {item.title} ↗
          </Link>
          <span
            className="
              pointer-events-none
              absolute
              bottom-full
              left-1/2
              transform -translate-x-1/2
              mb-2
              max-w-xs
              hidden
              group-hover:block
              group-focus:block
              bg-gray-800
              dark:bg-gray-200
              text-white
              dark:text-gray-900
              text-sm
              px-3
              py-2
              rounded
              shadow-lg
              transition-opacity
              duration-150
              opacity-0
              group-hover:opacity-100
              group-focus:opacity-100
              z-10
            "
            role="tooltip"
          >
            {item.description}
          </span>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="flex flex-col items-start justify-start p-8 space-y-6">
      <h1 className="text-3xl font-normal">Curations</h1>
      {sections.map(section => (
        <div key={section.label} className="space-y-4">
          <h2 className="text-xl font-normal">{section.label}</h2>
          {renderList(section.items)}
        </div>
      ))}
    </div>
  )
}
