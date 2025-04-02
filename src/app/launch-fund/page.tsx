import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LaunchFundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-[#545454] mb-6">The Launch Fund</h1>
              <div className="h-1 w-32 bg-gray-200 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">
                For Aspiring VCs & Finance-Minded Entrepreneurs
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-xl mb-16 border border-gray-100 transform transition-all">
              <p className="text-lg text-gray-700 leading-relaxed">
                The Launch Fund is the venture side of our organization, dedicated to students who want to learn how investing really works behind the scenes. 
                Think of it as a crash course in venture capital, deal sourcing, and everything else you need to know about fueling the next generation of startups.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                <h3 className="text-xl font-semibold text-[#545454] mb-4">Workshops with Real VCs</h3>
                <div className="h-1 w-12 bg-gray-200 mb-6"></div>
                <p className="text-gray-600">
                  Interact directly with seasoned venture capitalists who'll share how they spot winners, evaluate pitches, and close deals.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                <h3 className="text-xl font-semibold text-[#545454] mb-4">Hands-On Projects</h3>
                <div className="h-1 w-12 bg-gray-200 mb-6"></div>
                <p className="text-gray-600">
                  Dive into projects that teach you how to research markets, size up opportunities, and make investment recommendations.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                <h3 className="text-xl font-semibold text-[#545454] mb-4">Sourcing & Networking</h3>
                <div className="h-1 w-12 bg-gray-200 mb-6"></div>
                <p className="text-gray-600">
                  Rub shoulders with founders, connect with local funds, and learn how to spot promising companies. You might even help real funds source their next big investment.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                If you see your future on the venture side—scouting deals, shaping investment theses, and backing tomorrow's disruptors—the Launch Fund will help you build that skill set and network right now.
              </p>
              <Button className="bg-[#545454] hover:bg-[#444444] text-white text-lg px-12 py-3 shadow-md hover:shadow-lg transition-all">
                Apply to Launch Fund
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 