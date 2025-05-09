import HeroSection from '../components/hero-section'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import CoffeeChat from '@/components/CoffeeChat'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <CoffeeChat variant="landing" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 