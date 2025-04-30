"use client"

import React from "react"
import Link from "next/link"

interface Resource {
  title: string
  url: string
  description: string
}

export default function ResourcesPage() {
  const books: Resource[] = [
    {
      title: "Zero to One: Notes on Startups, or How to Build the Future",
      url: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
      description:
      "Peter Thiel’s take on building monopolies through innovation—great for thinking big."
    },
    {
      title: "Boom: Bubbles and the End of Stagnation",
      url: "https://www.amazon.com/Boom-Bubbles-Stagnation-Byrne-Hobart/dp/1953953476",
      description:
        "An analysis of economic bubbles and their aftermath—helps me understand market cycles."
    },
    {
      title: "The Almanack of Naval Ravikant: A Guide to Wealth and Happiness",
      url: "https://www.amazon.com/Almanack-Naval-Ravikant-Wealth-Happiness-ebook/dp/B08FF8MTM6",
      description:
        "Naval’s distilled wisdom on decision-making, habits, and long-term thinking."
    },
    {
      title: "Principles of Building AI Agents",
      url: "https://www.amazon.com/Principles-Building-Agents-Sam-Bhagwat/dp/B0DYH5GHDD",
      description:
        "A hands-on guide to architecting intelligent agentic systems."
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        url: "https://www.amazon.com/Sapiens-History-Humankind-Yuval-Harari/dp/0062316095",
        description:
          "An exploration of human history and evolution—great for understanding our place in the world."
      }
  ]

  const misc: Resource[] = [
    {
      title: "Steve Jobs' 2005 Stanford Commencement Address",
      url: "https://www.youtube.com/watch?v=UF8uR6Z6KLc",
      description:
        "One of the most inspiring speeches on following your intuition and staying hungry."
    },
    {
        title: "Peter Thiel: You Are Not a Lottery Ticket",
        url: "https://www.youtube.com/watch?v=iZM_JmZdqCw&t=1358s",
        description:
          "Peter Thiel explores whether success is driven by luck or design by tracing society’s shift from deterministic certainty to open-ended uncertainty."
      },
      {
        title: "The Techno-Optimist Manifesto",
        url: "https://a16z.com/the-techno-optimist-manifesto/",
        description:
          "Marc Andreessen's premier manifesto. It argues technology and open markets drive all innovation and societal progress."
      },
      {
        title: "Wanderers - A Short Film by Erik Wernquist",
        url: "https://www.youtube.com/watch?v=YH3c1QZzRK4",
        description:
          "Wanderers is a vision of humanity's expansion into the Solar System, based on scientific ideas and concepts of what our future in space might look like"
      },
      {
        title: "How To Be Successful by Sam Altman",
        url: "https://blog.samaltman.com/how-to-be-successful",
        description:
          "13 insights from Sam Altman on achieving outlier success."
      },
      {
        title: "The Secular Systemic Shift: Deflation, Technology And Demographics",
        url: "https://seekingalpha.com/article/4399567-the-secular-systemic-shift-deflation-technology-and-demographics",
        description: "An in-depth analysis of how technological and demographic deflationary forces underpin a paradigm shift in economic, social, and political systems."
      }
  ]

  const renderList = (items: Resource[]) => (
    <ul className="space-y-2 text-lg">
      {items.map((item) => (
        <li key={item.url} className="relative group">
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {item.title} ↗
          </Link>

          {/* tooltip */}
          <span
            className="
              pointer-events-none 
              absolute 
              bottom-full 
              left-1/2 
              transform -translate-x-1/2 
              mb-2 
              w-64 
              hidden 
              group-hover:block 
              bg-gray-800 
              text-white 
              text-sm 
              leading-snug 
              px-3 
              py-2 
              rounded 
              shadow-lg
              z-10
            "
          >
            {item.description}
          </span>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="flex flex-col items-start justify-start p-8 space-y-6">
      <h1 className="text-3xl font-normal">Resources</h1>
      <div className="space-y-4">
        <h2 className="text-xl font-normal">Books</h2>
        {renderList(books)}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-normal">Other</h2>
        {renderList(misc)}
      </div>
    </div>
  )
}
