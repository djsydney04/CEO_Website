import React from 'react'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chapman CEO",
  description: "Chapman Entrepreneurs Organization - Building the next generation of founders and innovators.",
  icons: {
    icon: '/SymbolLogo.png',
    apple: '/SymbolLogo.png',
  },
  openGraph: {
    title: 'Chapman CEO',
    description: 'Chapman Entrepreneurs Organization - Building the next generation of founders and innovators.',
    images: [
      {
        url: '/SymbolLogo.png',
        width: 800,
        height: 800,
        alt: 'Chapman CEO Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chapman CEO',
    description: 'Chapman Entrepreneurs Organization - Building the next generation of founders and innovators.',
    images: ['/SymbolLogo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-white">
          {children}
        </main>
      </body>
    </html>
  )
} 