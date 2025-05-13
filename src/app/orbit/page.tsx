import type { Metadata } from 'next'
import OrbitPageContent from './OrbitPageContent'

export const metadata: Metadata = {
  title: 'Chapman Orbit',
  description: 'Join Chapman Orbit, a student-led program for Chapman's most driven founders. Work alongside other student builders to launch and grow your startup.',
  openGraph: {
    title: 'Chapman Orbit',
    description: 'Join Chapman Orbit, a student-led program for Chapman's most driven founders. Work alongside other student builders to launch and grow your startup.',
    url: 'https://chapmanentrepreneurs.org/orbit',
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
    title: 'Chapman Orbit',
    description: 'Join Chapman Orbit, a student-led program for Chapman's most driven founders. Work alongside other student builders to launch and grow your startup.',
    images: ['/@CEOPreview.png'],
  },
}

export default function OrbitPage() {
  return <OrbitPageContent />
} 