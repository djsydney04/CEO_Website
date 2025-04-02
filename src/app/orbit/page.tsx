import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function OrbitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-[#545454] mb-6">Chapman Orbit</h1>
              <div className="h-1 w-32 bg-gray-200 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">
                For Students Actively Building Startups
              </p>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-xl mb-16 border border-gray-100 transform transition-all">
              <p className="text-lg text-gray-700 leading-relaxed">
                Chapman Orbit is our founder-focused cohort, designed for those who are already doing something real with their idea. 
                If you're tinkering away at a prototype, rallying potential users, or even looking at early funding, Orbit is your home base.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                <h3 className="text-xl font-semibold text-[#545454] mb-4">Real-World Product Development</h3>
                <div className="h-1 w-12 bg-gray-200 mb-6"></div>
                <p className="text-gray-600">
                  We focus on getting you from idea to tangible progress. Come prepared to show what you've built—or are actively building.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                <h3 className="text-xl font-semibold text-[#545454] mb-4">Meaningful Support</h3>
                <div className="h-1 w-12 bg-gray-200 mb-6"></div>
                <p className="text-gray-600">
                  Gain access to mentorship, pitch prep, and industry insights to help you move your startup from "cool idea" to "early-stage business."
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                <h3 className="text-xl font-semibold text-[#545454] mb-4">Measurable Milestones</h3>
                <div className="h-1 w-12 bg-gray-200 mb-6"></div>
                <p className="text-gray-600">
                  It's all about traction. You'll get to share your wins (like user sign-ups, funding news, or prototype launches) in an environment where you can learn from others doing the same.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                At Orbit, we prioritize founders who aren't just talking about it—they're out there making it happen. 
                If you've got the hustle, we've got the resources and community to help you level up.
              </p>
              <Button className="bg-[#545454] hover:bg-[#444444] text-white text-lg px-12 py-3 shadow-md hover:shadow-lg transition-all">
                Apply to Orbit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 