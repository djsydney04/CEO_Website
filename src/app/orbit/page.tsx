import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { SolarSystem } from '@/components/solar-system'

export default function OrbitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
              <div className="md:w-2/3">
                <div className="bg-gray-100 text-[#545454] inline-block px-4 py-1 rounded-full text-sm font-medium border border-gray-200 shadow-sm mb-4">
                  Founders Track
                </div>
                <h1 className="text-5xl font-bold text-[#545454] mb-6 leading-tight">Chapman Orbit</h1>
                <div className="h-1 w-20 bg-gray-300 mb-6"></div>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  For students who are actively building startups and ready to take their venture to the next level through mentorship, resources, and community.
                </p>
                <Link href="/apply">
                  <Button className="bg-[#545454] hover:bg-[#444444] text-white text-lg px-10 py-3 shadow-md hover:shadow-lg transition-all">
                    Apply Now
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/3">
                <SolarSystem />
              </div>
            </div>

            {/* Main Intro */}
            <div className="bg-white rounded-2xl p-10 shadow-xl mb-16 border border-gray-100 transform transition-all">
              <h2 className="text-2xl font-bold text-[#545454] mb-4">Your Launchpad for Real Startup Growth</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Chapman Orbit is our founder-focused cohort, designed for those who are already doing something real with their idea. 
                If you're tinkering away at a prototype, rallying potential users, or even looking at early funding, Orbit is your home base.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This isn't about theorizing—it's about building, testing, and iterating until you find what works. With Orbit, you'll join a community of like-minded founders all sharing the same journey.
              </p>
            </div>

            {/* Program Features */}
            <h2 className="text-3xl font-bold text-center text-[#545454] mb-10">What Makes Orbit Different</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="bg-gray-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                    <path d="M12 2v2"></path>
                    <path d="M12 22v-2"></path>
                    <path d="m17 20.66-1-1.73"></path>
                    <path d="M11 10.27 7 3.34"></path>
                    <path d="m20.66 17-1.73-1"></path>
                    <path d="m3.34 7 1.73 1"></path>
                    <path d="M22 12h-2"></path>
                    <path d="M2 12h2"></path>
                    <path d="m20.66 7-1.73 1"></path>
                    <path d="m3.34 17 1.73-1"></path>
                    <path d="m17 3.34-1 1.73"></path>
                    <path d="m7 20.66 1-1.73"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#545454] mb-4">Real-World Product Development</h3>
                <div className="h-1 w-12 bg-gray-200 mb-6"></div>
                <p className="text-gray-600">
                  We focus on getting you from idea to tangible progress. Come prepared to show what you've built—or are actively building.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="bg-gray-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#545454] mb-4">Meaningful Support</h3>
                <div className="h-1 w-12 bg-gray-200 mb-6"></div>
                <p className="text-gray-600">
                  Gain access to mentorship, pitch prep, and industry insights to help you move your startup from "cool idea" to "early-stage business."
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="bg-gray-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4"></path>
                    <path d="M20 12H4"></path>
                    <path d="M12 18v4"></path>
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#545454] mb-4">Measurable Milestones</h3>
                <div className="h-1 w-12 bg-gray-200 mb-6"></div>
                <p className="text-gray-600">
                  It's all about traction. You'll get to share your wins (like user sign-ups, funding news, or prototype launches) in an environment where you can learn from others doing the same.
                </p>
              </div>
            </div>

            {/* Who Should Apply */}
            <div className="bg-white rounded-2xl p-10 shadow-xl mb-16 border border-gray-100">
              <h2 className="text-3xl font-bold text-[#545454] mb-8 text-center">Who Should Apply</h2>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-[#545454]">Product Builders</h3>
                    </div>
                    <p className="text-gray-600">Students who already have a working prototype or MVP that needs refining and user testing.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                          <line x1="16" y1="8" x2="2" y2="22"></line>
                          <line x1="17.5" y1="15" x2="9" y2="15"></line>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-[#545454]">Market Validators</h3>
                    </div>
                    <p className="text-gray-600">Founders who have begun talking to potential customers and are validating their business assumptions.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-[#545454]">Technical Founders</h3>
                    </div>
                    <p className="text-gray-600">Students with programming or technical skills who need business guidance and a framework for product-market fit.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                          <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-[#545454]">Business Developers</h3>
                    </div>
                    <p className="text-gray-600">Non-technical founders with strong business acumen who need technical guidance and connections to builders.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Schedule */}
            <div className="bg-white rounded-2xl p-10 shadow-xl mb-16 border border-gray-100">
              <h2 className="text-3xl font-bold text-[#545454] mb-8 text-center">Program Structure</h2>
              
              <div className="space-y-10">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold text-[#545454] flex-shrink-0 mx-auto md:mx-0">01</div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#545454] mb-3 text-center md:text-left">Application & Selection</h3>
                    <p className="text-gray-600">We carefully select students who have demonstrated commitment to building their startups and have shown initial traction or a well-developed prototype.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold text-[#545454] flex-shrink-0 mx-auto md:mx-0">02</div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#545454] mb-3 text-center md:text-left">Weekly Sessions</h3>
                    <p className="text-gray-600">Participate in workshops, mentor meetings, and peer feedback sessions designed to help you refine your product, improve your go-to-market strategy, and prepare for customer acquisition.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold text-[#545454] flex-shrink-0 mx-auto md:mx-0">03</div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#545454] mb-3 text-center md:text-left">Milestone Reviews</h3>
                    <p className="text-gray-600">Present your progress at regular intervals to mentors and peers, getting actionable feedback and setting new goals for the next sprint.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold text-[#545454] flex-shrink-0 mx-auto md:mx-0">04</div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#545454] mb-3 text-center md:text-left">Demo Day</h3>
                    <p className="text-gray-600">Showcase your progress to the Chapman community, local investors, and industry professionals at our end-of-semester Demo Day event.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Apply CTA */}
            <div className="text-center bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-[#545454] mb-6">Ready to Launch Your Startup?</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                At Orbit, we prioritize founders who aren't just talking about it—they're out there making it happen. 
                If you've got the hustle, we've got the resources and community to help you level up.
              </p>
              <Link href="/apply">
                <Button className="bg-[#545454] hover:bg-[#444444] text-white text-lg px-12 py-3 shadow-md hover:shadow-lg transition-all">
                  Apply to Orbit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 