import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://chapmanentrepreneurs.org'),
  title: {
    template: '%s | Chapman Entrepreneurs Organization',
    default: 'Chapman Entrepreneurs Organization',
  },
  description: "Chapman Entrepreneurs Organization",
  icons: {
    icon: '/CeoSymbol.svg',
    apple: '/CeoSymbol.svg',
  },
  openGraph: {
    type: 'website',
    title: {
      template: '%s | Chapman Entrepreneurs Organization',
      default: 'Chapman Entrepreneurs Organization',
    },
    description: 'Chapman Entrepreneurs Organization',
    url: 'https://chapmanentrepreneurs.org',
    siteName: 'Chapman Entrepreneurs Organization',
    images: [
      {
        url: '/@CEOPreview.png',
        width: 1200,
        height: 630,
        alt: 'Chapman Entrepreneurs Organization Preview'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s | Chapman Entrepreneurs Organization',
      default: 'Chapman Entrepreneurs Organization',
    },
    description: 'Chapman Entrepreneurs Organization',
    images: ['/@CEOPreview.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-black`}>
        <ClientLayout>
          <main className="min-h-screen bg-white">
            {children}
          </main>
        </ClientLayout>
      </body>
    </html>
  )
} 