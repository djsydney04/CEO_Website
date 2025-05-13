import type { Metadata } from 'next'
import CoffeeChatPageContent from './CoffeeChatPageContent'

export const metadata: Metadata = {
  title: 'Coffee Chat',
  description: 'Schedule a casual conversation with our team leads about entrepreneurship at Chapman. Whether you're working on a startup idea or want to learn more about CEO, we'd love to chat.',
  openGraph: {
    title: 'Coffee Chat',
    description: 'Schedule a casual conversation with our team leads about entrepreneurship at Chapman. Whether you're working on a startup idea or want to learn more about CEO, we'd love to chat.',
    url: 'https://chapmanentrepreneurs.org/coffee-chat',
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
    title: 'Coffee Chat',
    description: 'Schedule a casual conversation with our team leads about entrepreneurship at Chapman. Whether you're working on a startup idea or want to learn more about CEO, we'd love to chat.',
    images: ['/@CEOPreview.png'],
  },
}

export default function CoffeeChatPage() {
  return <CoffeeChatPageContent />
} 