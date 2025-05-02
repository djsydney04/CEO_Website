import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://chapmanentrepreneurs.org'),
  title: {
    template: '%s | Chapman CEO',
    default: 'Chapman CEO',
  },
  description: "Chapman Entrepreneurship Organization",
  icons: {
    icon: '/CeoSymbol.svg',
    apple: '/CeoSymbol.svg',
  },
  openGraph: {
    title: {
      template: '%s | Chapman CEO',
      default: 'Chapman CEO',
    },
    description: 'Chapman Entrepreneurship Organization',
    images: ['@CEOPreview.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s | Chapman CEO',
      default: 'Chapman CEO',
    },
    description: 'Chapman Entrepreneurship Organization',
    images: ['@CEOPreview.png'],
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