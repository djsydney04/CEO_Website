'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ScrollAnimation } from '@/components/scroll-animation'
import type { Metadata } from 'next'
import OpenPositionsPageContent from './OpenPositionsPageContent'

export const metadata: Metadata = {
  title: 'Open Positions',
  description: 'Join our leadership team at Chapman Entrepreneurs Organization. Find open positions and apply to help shape the future of entrepreneurship at Chapman.',
  openGraph: {
    title: 'Open Positions',
    description: 'Join our leadership team at Chapman Entrepreneurs Organization. Find open positions and apply to help shape the future of entrepreneurship at Chapman.',
    url: 'https://chapmanentrepreneurs.org/open-positions',
    siteName: 'Chapman Entrepreneurs Organization',
    images: [
      {
        url: '/@CEOPreview.png',
        width: 1200,
        height: 630,
        alt: 'Chapman Entrepreneurs Organization Preview'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Positions',
    description: 'Join our leadership team at Chapman Entrepreneurs Organization. Find open positions and apply to help shape the future of entrepreneurship at Chapman.',
    images: ['/@CEOPreview.png'],
  },
}

export default function OpenPositionsPage() {
  return <OpenPositionsPageContent />
} 