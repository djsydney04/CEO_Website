import HeroSection from '../components/hero-section'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <Footer />
    </div>
  )
} 