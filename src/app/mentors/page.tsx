import type { Metadata } from 'next'
import MentorsPageContent from './MentorsPageContent'

export const metadata: Metadata = {
  title: 'Our Mentors | Chapman Entrepreneurs Organization',
  description: 'Connect with our experienced mentors who bring diverse expertise from various industries and backgrounds. Learn from industry leaders at Chapman Entrepreneurs Organization.',
  openGraph: {
    title: 'Our Mentors | Chapman Entrepreneurs Organization',
    description: 'Connect with our experienced mentors who bring diverse expertise from various industries and backgrounds. Learn from industry leaders at Chapman Entrepreneurs Organization.',
    url: 'https://chapmanentrepreneurs.org/mentors',
    siteName: 'Chapman Entrepreneurs Organization',
    images: [
      {
        url: '/og-mentors.jpg',
        width: 1200,
        height: 630,
        alt: 'Chapman Entrepreneurs Organization Mentors'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Mentors | Chapman Entrepreneurs Organization',
    description: 'Connect with our experienced mentors who bring diverse expertise from various industries and backgrounds. Learn from industry leaders at Chapman Entrepreneurs Organization.',
    images: ['/og-mentors.jpg'],
  },
}

export default function MentorsPage() {
  return <MentorsPageContent />
} 