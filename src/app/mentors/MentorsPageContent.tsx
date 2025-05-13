'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ScrollAnimation } from '@/components/scroll-animation'
import { BackgroundGrid } from '@/components/background-grid'
import MentorGrid from '@/components/MentorGrid'

export default function MentorsPageContent() {
  return (
    <div className="min-h-screen bg-white relative">
      <BackgroundGrid />
      <Navigation />
      
      <main className="pt-28 pb-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <MentorGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 