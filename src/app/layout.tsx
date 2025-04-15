import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Chapman CEO",
  description: "Chapman Entrepreneurship Organization",
  icons: {
    icon: '/CEOSymbol.svg',
    apple: '/CEOSymbol.svg',
  },
  openGraph: {
    title: 'Chapman CEO',
    description: 'Chapman Entrepreneurship Organization',
    images: ['@CEOPreview.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chapman CEO',
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