import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { RocketLaunch } from '@/components/rocket-launch'

export default function LaunchFundPage() {
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
                  Investor Track
                </div>
                <h1 className="text-5xl font-bold text-[#545454] mb-6 leading-tight">The Launch Fund</h1>
                <div className="h-1 w-20 bg-gray-300 mb-6"></div>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  For aspiring venture capitalists and finance-minded students looking to understand how early-stage investing really works
                </p>
                <Link href="/apply">
                  <Button className="bg-[#545454] hover:bg-[#444444] text-white text-lg px-10 py-3 shadow-md hover:shadow-lg transition-all">
                    Apply Now
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/3">
                <RocketLaunch />
              </div>
            </div>

            {/* Main Intro */}
            <div className="bg-white rounded-2xl p-10 shadow-xl mb-16 border border-gray-100 transform transition-all">
              <h2 className="text-2xl font-bold text-[#545454] mb-4">Your Inside Track to Venture Capital</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Launch Fund is the venture side of our organization, dedicated to students who want to learn how investing really works behind the scenes. 
                Think of it as a crash course in venture capital, deal sourcing, and everything else you need to know about fueling the next generation of startups.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Unlike internships where you might just observe, our program puts you in the driver's seat—analyzing real deals, building investment theses, and making connections that could launch your VC career.
              </p>
            </div>

            {/* Program Features */}
            <h2 className="text-3xl font-bold text-center text-[#545454] mb-10">What Makes Launch Fund Different</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="bg-gray-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#545454] mb-4">Workshops with Real VCs</h3>
                <div className="h-1 w-12 bg-gray-200 mb-6"></div>
                <p className="text-gray-600">
                  Interact directly with seasoned venture capitalists who'll share how they spot winners, evaluate pitches, and close deals.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="bg-gray-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                    <line x1="12" y1="22" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#545454] mb-4">Hands-On Projects</h3>
                <div className="h-1 w-12 bg-gray-200 mb-6"></div>
                <p className="text-gray-600">
                  Dive into projects that teach you how to research markets, size up opportunities, and make investment recommendations.
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
                <h3 className="text-xl font-semibold text-[#545454] mb-4">Sourcing & Networking</h3>
                <div className="h-1 w-12 bg-gray-200 mb-6"></div>
                <p className="text-gray-600">
                  Rub shoulders with founders, connect with local funds, and learn how to spot promising companies. You might even help real funds source their next big investment.
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
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-[#545454]">Finance Students</h3>
                    </div>
                    <p className="text-gray-600">Students majoring in finance, economics, or business who want practical experience in venture investing to complement their theoretical knowledge.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 3v18h18"></path>
                          <path d="m19 9-5 5-4-4-3 3"></path>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-[#545454]">Data & Analytics Minds</h3>
                    </div>
                    <p className="text-gray-600">Those who love digging into data, identifying trends, and using quantitative skills to evaluate startups and markets.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-[#545454]">Aspiring VCs</h3>
                    </div>
                    <p className="text-gray-600">Students specifically interested in venture capital as a career path who want hands-on experience and connections in the industry.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-[#545454]">Networkers</h3>
                    </div>
                    <p className="text-gray-600">Natural connectors who enjoy building relationships and want to leverage those skills in the investment ecosystem.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white rounded-2xl p-10 shadow-xl mb-16 border border-gray-100">
              <h2 className="text-3xl font-bold text-[#545454] mb-8 text-center">What You'll Learn</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-[#545454] mb-4">Deal Evaluation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Founder assessment frameworks</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Cap table analysis</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Product-market fit evaluation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-[#545454] mb-4">Market Research</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Market sizing methodologies</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Competitive analysis techniques</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Trend identification</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-[#545454] mb-4">Industry Mechanics</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">VC fund structures</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Term sheet negotiation</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Investment syndication</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-[#545454] mb-4">Career Development</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">VC career path mapping</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Portfolio building</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-gray-600">Industry networking strategies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Apply CTA */}
            <div className="text-center bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-[#545454] mb-6">Ready to Join the Investor Track?</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                If you see your future on the venture side—scouting deals, shaping investment theses, and backing tomorrow's disruptors—the Launch Fund will help you build that skill set and network right now.
              </p>
              <Link href="/apply">
                <Button className="bg-[#545454] hover:bg-[#444444] text-white text-lg px-12 py-3 shadow-md hover:shadow-lg transition-all">
                  Apply to Launch Fund
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