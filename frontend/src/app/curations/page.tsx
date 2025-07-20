"use client"

import React from "react"
import { Text1 } from "@/components/text-1"
import { Text2 } from "@/components/text-2"
import { Text3 } from "@/components/text-3"
import { PageLayout } from "@/components/page-layout"

interface Item {
  title: string
  url: string
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
          url: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296"
        },
        {
          title: "Super Founders: What Data Reveals About Billion-Dollar Startups",
          url: "https://www.amazon.com/Super-Founders-Reveals-Billion-Dollar-Startups/dp/1541768426"
        },
        {
          title: "Boom: Bubbles and the End of Stagnation",
          url: "https://www.amazon.com/Boom-Bubbles-Stagnation-Byrne-Hobart/dp/1953953476"
        },
        {
          title: "Sapiens: A Brief History of Humankind",
          url: "https://www.amazon.com/Sapiens-History-Humankind-Yuval-Harari/dp/0062316095"
        },
        {
          title: "The Almanack of Naval Ravikant: A Guide to Wealth and Happiness",
          url: "https://www.amazon.com/Almanack-Naval-Ravikant-Wealth-Happiness-ebook/dp/B08FF8MTM6"
        },
        {
          title: "Principles of Building AI Agents",
          url: "https://www.amazon.com/Principles-Building-Agents-Sam-Bhagwat/dp/B0DYH5GHDD"
        }
      ]
    },
    {
      label: "Essays & Articles",
      items: [
        {
          title: "The Techno‑Optimist Manifesto",
          url: "https://a16z.com/the-techno-optimist-manifesto/"
        },
        {
          title: "How To Be Successful by Sam Altman",
          url: "https://blog.samaltman.com/how-to-be-successful"
        }
      ]
    },
    {
      label: "Videos",
      items: [
        {
          title: "Steve Jobs' 2005 Stanford Commencement Address",
          url: "https://www.youtube.com/watch?v=UF8uR6Z6KLc"
        },
        {
          title: "Peter Thiel: You Are Not a Lottery Ticket",
          url: "https://www.youtube.com/watch?v=iZM_JmZdqCw&t=1358s"
        },
        {
          title: "A.I., Mars and Immortality: Are We Dreaming Big Enough?",
          url: "https://youtu.be/vV7YgnPUxcU?si=q7kNJGhzBATbbfMc"
        },
        {
          title: "Wanderers – A Short Film by Erik Wernquist",
          url: "https://www.youtube.com/watch?v=YH3c1QZzRK4"
        },
        {
          title: "Founder's Fund Opening Video",
          url: "https://www.youtube.com/watch?v=Gvf547kGOXs"
        }
      ]
    },
    {
      label: "Miscellaneous",
      items: [
      ]
    }
  ]

  const renderList = (items: Item[]) => (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={item.url + i}>
          <Text3 as="a"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline focus:outline-none focus:ring"
            variant="blue"
          >
            {item.title} ↗
          </Text3>
        </li>
      ))}
    </ul>
  )

  return (
    <PageLayout>
      <Text1>Curations</Text1>

      {/* Sections */}
      {sections.map(section => (
        <div key={section.label}>
          <Text2 className="mb-2">{section.label}</Text2>
          {renderList(section.items)}
        </div>
      ))}
    </PageLayout>
  )
}
