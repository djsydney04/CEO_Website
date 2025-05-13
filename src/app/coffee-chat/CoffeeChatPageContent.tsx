'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ScrollAnimation } from '@/components/scroll-animation'
import { BackgroundGrid } from '@/components/background-grid'
import CoffeeChat from '@/components/CoffeeChat'

export default function CoffeeChatPageContent() {
  return (
    <div className="min-h-screen bg-white relative">
      <BackgroundGrid />
      <Navigation />
      
      <main className="pt-28 pb-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <section className="mb-24">
              <ScrollAnimation type="fade">
                <div className="inline-block mb-4 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-black/5">
                  <span className="text-black text-sm font-medium">Connect With Us</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4 leading-tight">
                  Coffee Chat
                </h1>
                <div className="h-[2px] w-24 bg-black/30 mb-10"></div>
                <div className="max-w-2xl">
                  <p className="text-lg text-black/80 mb-8 leading-relaxed">
                    Want to learn more about Chapman CEO and our programs? Schedule a coffee chat with our team leaders. We'd love to hear about your entrepreneurial journey and help you find the right path within our community.
                  </p>
                </div>
              </ScrollAnimation>
            </section>

            {/* Coffee Chat Section */}
            <CoffeeChat showHeader={false} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 