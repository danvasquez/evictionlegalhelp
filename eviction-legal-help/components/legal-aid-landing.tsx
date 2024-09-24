'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"

// Template for customizable content
const template = {
  companyName: "Lakeshore Legal Aid",
  welcomeHeading: "Free Legal Help for Eviction",
  welcomeContent: "We provide free legal assistance to those facing eviction. Our experienced attorneys are here to help you understand your rights and guide you through the legal process.",
  ctaText: "Get Free Legal Help Now",
  ctaLink: "/form"
}

export function LegalAidLanding({ content = template }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">{content.companyName}</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4">{content.welcomeHeading}</h2>
          <p className="text-lg mb-6">{content.welcomeContent}</p>
          <Button asChild className="w-full text-lg py-3">
            <Link href={content.ctaLink}>{content.ctaText}</Link>
          </Button>
        </div>
      </main>

      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} {content.companyName}. All rights reserved.
        </div>
      </footer>
    </div>
  )
}