"use client"

import Link from 'next/link'

export default function BooksPage() {
  const books = [
    { title: "Zero to One: Notes on Startups, or How to Build the Future", url: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296" },
    { title: "Boom: Bubbles and the End of Stagnation", url: "https://www.amazon.com/Boom-Bubbles-Stagnation-Byrne-Hobart/dp/1953953476" },
    { title: "The Almanack of Naval Ravikant: A Guide to Wealth and Happiness", url: "https://www.amazon.com/Almanack-Naval-Ravikant-Wealth-Happiness-ebook/dp/B08FF8MTM6" },
    { title: "Principles of Building AI Agents", url: "https://www.amazon.com/Principles-Building-Agents-Sam-Bhagwat/dp/B0DYH5GHDD/ref=sr_1_3?crid=3QOHS2AAYGLDF&dib=eyJ2IjoiMSJ9.MqQz9NKlDnRqh4Oq4TDMvOVaGqc3_bBGWbLzfULfZI6VvnzH9Yl9qWZn8zM0Sd7__HFgRrGUhC0pQ6s1i6q2HXamBTfSXAEjQWlM5i3FTYtIvos6anxFKtyfuwluWhC7yJlukqTeizprL3llLnuERwqQLNHB1ZHd_OcsP3YqHT8LCwkZ06YGRPoLdL2ERirJlP-Z8NzQGSyJUaU73D0yq1c30PHgzfAU8r59HCdhbvI.KMyXAtMaM2d7fVrmAGErDUVEi0v_wvUEK4u8MPFuDE8&dib_tag=se&keywords=building+with+AI+agents&qid=1745825552&s=books&sprefix=building+with+ai+agent%2Cstripbooks-intl-ship%2C163&sr=1-3" }
  ]

  return (
    <div className="flex flex-col items-start justify-start p-8 space-y-4">
      <h1 className="text-3xl font-normal">Books</h1>
      <ul className="space-y-2 text-lg">
        {books.map(book => (
          <li key={book.url}>
            <Link
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {book.title} ↗
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
