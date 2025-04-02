'use client'

import { Navigation } from './navigation'
import CodeCube from './code-cube'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from './footer'

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white text-[#545454]">
      <Navigation />

      {/* Split Hero Section */}
      <section className="min-h-[90vh] pt-20">
        <div className="container mx-auto px-4 h-full">
          <div className="grid md:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Text Content */}
            <div className="space-y-10">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
                Chapman Entrepreneurs Organization
              </h1>
                <p className="text-xl text-gray-600 leading-relaxed mt-6">
                  We believe in fearless execution, rapid iteration, and relentless problem-solving.
                </p>
              </div>
              
              <div className="pt-4">
                <Link href="/apply">
              <Button 
                    className="bg-[#545454] hover:bg-[#444444] text-white text-lg px-10 py-3 shadow-md hover:shadow-lg transition-all"
              >
                Apply Now
              </Button>
                </Link>
              </div>
            </div>
            
            {/* Cube */}
            <div className="w-full aspect-square">
              <CodeCube />
            </div>
          </div>
        </div>
      </section>

      {/* Two Tracks Section - Redesigned */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-[#f0f0f0] text-[#545454] px-6 py-2 rounded-full text-sm font-medium border border-gray-200 shadow-sm">Our Programs</span>
            </div>
            <h2 className="text-4xl font-bold mb-8 text-[#545454] leading-tight">
              Introducing Our Two Tracks
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At Chapman CEO, we believe in getting real work done—no fluff, no filler, just solid progress toward building startups and understanding what it takes to raise and invest capital.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
            {/* Orbit Track - Enhanced design */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:translate-y-[-8px] group">
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-800 to-gray-600"></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#545454]">Chapman Orbit</h3>
                      <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold mt-1 inline-block">For Founders</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 font-medium">For Students Actively Building Startups</p>
                  
                  <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed">
                      Chapman Orbit is our founder-focused cohort, designed for those who are already doing something real with their idea. If you're tinkering away at a prototype, rallying potential users, or even looking at early funding, Orbit is your home base.
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Key Benefits</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-700 mr-2"></div>
                        <span className="text-sm">Mentorship</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-700 mr-2"></div>
                        <span className="text-sm">Pitch Development</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-700 mr-2"></div>
                        <span className="text-sm">Prototype Support</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-700 mr-2"></div>
                        <span className="text-sm">Founder Network</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-700 mr-2"></div>
                        <span className="text-sm">User Acquisition</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-700 mr-2"></div>
                        <span className="text-sm">Funding Resources</span>
                      </div>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Ideal For</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Startup Founders</span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Product Builders</span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Technical Innovators</span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Student Entrepreneurs</span>
                    </div>
                  </div>

                  <Link href="/orbit" className="block mt-auto">
                    <Button 
                      className="w-full bg-[#545454] hover:bg-[#444444] text-white py-3 text-base font-medium transition-all duration-300 group-hover:shadow-md"
                    >
                      Learn More About Orbit
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Launch Fund Track - Enhanced design */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:translate-y-[-8px] group">
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-800 to-gray-600"></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                        <line x1="7" y1="7" x2="7.01" y2="7"></line>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#545454]">The Launch Fund</h3>
                      <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold mt-1 inline-block">For Investors</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 font-medium">For Aspiring VCs & Finance-Minded Entrepreneurs</p>
                  
                  <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed">
                      The Launch Fund is the venture side of our organization, dedicated to students who want to learn how investing really works behind the scenes. Think of it as a crash course in venture capital, deal sourcing, and everything else you need to know about fueling the next generation of startups.
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Key Benefits</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-700 mr-2"></div>
                        <span className="text-sm">VC Workshops</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-700 mr-2"></div>
                        <span className="text-sm">Industry Insights</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-700 mr-2"></div>
                        <span className="text-sm">Deal Assessment</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-700 mr-2"></div>
                        <span className="text-sm">Investor Network</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-700 mr-2"></div>
                        <span className="text-sm">Due Diligence</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-700 mr-2"></div>
                        <span className="text-sm">Market Research</span>
                      </div>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Ideal For</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Aspiring VCs</span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Finance Students</span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">MBA Candidates</span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Angel Investors</span>
                    </div>
                  </div>

                  <Link href="/launch-fund" className="block mt-auto">
                    <Button 
                      className="w-full bg-[#545454] hover:bg-[#444444] text-white py-3 text-base font-medium transition-all duration-300 group-hover:shadow-md"
                    >
                      Learn More About Launch Fund
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Approach Section - Redesigned */}
          <div className="mt-28">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <div className="inline-block mb-4">
                  <span className="bg-[#f0f0f0] text-[#545454] px-6 py-2 rounded-full text-sm font-medium border border-gray-200 shadow-sm">Our Philosophy</span>
                </div>
                <h3 className="text-4xl font-bold text-[#545454] mb-6 leading-tight">How We Approach Entrepreneurship</h3>
                <div className="max-w-3xl">
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    We don't sugarcoat the journey—it's going to be hard. If you're here for theories, lofty ideas, or a leisurely experience, this is not the place for you. We only welcome those ready to build, fail, iterate, and come back stronger. Underachievers or anyone lacking the drive to make things happen should not bother applying.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We've built our programs around core entrepreneurial principles that mirror how successful startups operate in the real world. Here's how we do it:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Learn by Doing */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent rounded-2xl transform -rotate-1 transition-transform group-hover:rotate-0"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                      </div>
                      <span className="text-4xl font-bold text-gray-200">01</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-[#545454] mb-4">Learn by Doing</h4>
                    <p className="text-gray-600">
                      We roll up our sleeves, create real products, gather real feedback, and refine until we succeed—or fail fast and move on. This demands grit and relentless action.
                    </p>
                  </div>
                </div>

                {/* Quality Network */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent rounded-2xl transform rotate-1 transition-transform group-hover:rotate-0"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </div>
                      <span className="text-4xl font-bold text-gray-200">02</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-[#545454] mb-4">Quality Network</h4>
                    <p className="text-gray-600">
                      Your network can make or break your venture. We connect you with founders, investors, and experts. Meaningful connections only form when you bring something tangible to offer.
                    </p>
                  </div>
                </div>

                {/* Fast Execution */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent rounded-2xl transform -rotate-1 transition-transform group-hover:rotate-0"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                          <line x1="16" y1="8" x2="2" y2="22"></line>
                          <line x1="17.5" y1="15" x2="9" y2="15"></line>
                        </svg>
                      </div>
                      <span className="text-4xl font-bold text-gray-200">03</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-[#545454] mb-4">Fast Execution</h4>
                    <p className="text-gray-600">
                      In the startup world, speed is everything. We don't do "one day." We do "right now." Our method focuses on rapid iteration, constant testing, and immediate pivots.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex justify-center">
                <div className="inline-flex items-center gap-4 bg-gray-50 rounded-full px-6 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                  <span className="text-sm text-gray-500">These principles guide everything we do at Chapman CEO</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Program Structure - Modified */}
          <div className="mt-28 bg-gray-50 rounded-3xl p-12 shadow-inner">
            <div className="text-center mb-14">
              <div className="inline-block mb-4">
                <span className="bg-[#f0f0f0] text-[#545454] px-6 py-2 rounded-full text-sm font-medium border border-gray-200 shadow-sm">Program Flow</span>
              </div>
              <h3 className="text-3xl font-bold text-[#545454] mb-6 leading-tight">How the Programs Work</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Both tracks follow a structured yet flexible approach designed to maximize your growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-md relative group hover:shadow-lg transition-all">
                <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-[#545454] flex items-center justify-center text-white font-bold text-lg">1</div>
                <h4 className="text-xl font-semibold text-[#545454] mt-2 mb-4">Application & Selection</h4>
                <p className="text-gray-600 leading-relaxed">We carefully select students who demonstrate commitment, initiative, and the potential to build something meaningful.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md relative group hover:shadow-lg transition-all">
                <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-[#545454] flex items-center justify-center text-white font-bold text-lg">2</div>
                <h4 className="text-xl font-semibold text-[#545454] mt-2 mb-4">Weekly Sessions</h4>
                <p className="text-gray-600 leading-relaxed">Participate in workshops, mentor meetings, and peer feedback sessions to accelerate your progress.</p>
              </div>
            </div>

            {/* Program Content */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-[#545454] mb-6">Program Content & Workshops</h4>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                      <path d="M20 7h-9"></path>
                      <path d="M14 17H5"></path>
                      <circle cx="17" cy="17" r="3"></circle>
                      <circle cx="7" cy="7" r="3"></circle>
                    </svg>
                    <h5 className="font-medium text-[#545454]">Bootstrapping & Resources</h5>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 pl-8">
                    <li>• Lean Startup Methodology</li>
                    <li>• Resource Optimization</li>
                    <li>• Financial Planning</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <h5 className="font-medium text-[#545454]">Tech & Innovation</h5>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 pl-8">
                    <li>• Emerging Technologies</li>
                    <li>• Product Development</li>
                    <li>• Technical Architecture</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                      <path d="M12 20v-6M6 20V10M18 20V4"></path>
                    </svg>
                    <h5 className="font-medium text-[#545454]">Growth & Marketing</h5>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 pl-8">
                    <li>• User Acquisition</li>
                    <li>• Brand Development</li>
                    <li>• Growth Strategy</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="bg-white p-8 rounded-xl shadow-md relative group hover:shadow-lg transition-all">
                <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-[#545454] flex items-center justify-center text-white font-bold text-lg">3</div>
                <h4 className="text-xl font-semibold text-[#545454] mt-2 mb-4">Demo Day</h4>
                <p className="text-gray-600 leading-relaxed">Showcase your work to the Chapman community, local investors, and industry professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <div className="mt-28 max-w-6xl mx-auto bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#545454] mb-6">Supported By</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to collaborate with leading organizations that share our commitment to fostering entrepreneurship
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-16 opacity-70">
          <div className="h-16 w-32 bg-gray-200 rounded"></div>
          <div className="h-16 w-32 bg-gray-200 rounded"></div>
          <div className="h-16 w-32 bg-gray-200 rounded"></div>
          <div className="h-16 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 