'use client'

import { Navigation } from './navigation'
import CodeCube from './code-cube'
import { Button } from './ui/button'
import Link from 'next/link'

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
                <Link href="/orbit">
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
          <div className="max-w-6xl mx-auto mt-28">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="bg-[#f0f0f0] text-[#545454] px-6 py-2 rounded-full text-sm font-medium border border-gray-200 shadow-sm">Our Philosophy</span>
              </div>
              <h3 className="text-4xl font-bold text-[#545454] mb-6 leading-tight">How We Approach Entrepreneurship</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We've built our programs around core entrepreneurial principles that reflect how successful startups are actually built in today's world.
              </p>
            </div>
            
            {/* New horizontal timeline design */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 z-0"></div>
              
              {/* Timeline Items */}
              <div className="grid md:grid-cols-3 gap-10 relative z-10">
                {/* Principle 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-full border-4 border-[#545454] flex items-center justify-center mb-6 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  
                  <div className="bg-white rounded-xl p-8 shadow-lg w-full text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <h4 className="text-xl font-bold text-[#545454] mb-4">Learn by Doing</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      We don't waste time on theory alone. Build something real, get it in front of users, collect feedback, and iterate—that's how founders learn.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                        #hands-on
                      </span>
                      <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                        #experiential
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Principle 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-full border-4 border-[#545454] flex items-center justify-center mb-6 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  
                  <div className="bg-white rounded-xl p-8 shadow-lg w-full text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <h4 className="text-xl font-bold text-[#545454] mb-4">Quality Network</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Your network is your net worth. We connect you with founders, investors, and industry experts who've walked the path and can help you navigate challenges.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                        #connections
                      </span>
                      <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                        #mentorship
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Principle 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-full border-4 border-[#545454] flex items-center justify-center mb-6 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                      <line x1="16" y1="8" x2="2" y2="22"></line>
                      <line x1="17.5" y1="15" x2="9" y2="15"></line>
                    </svg>
                  </div>
                  
                  <div className="bg-white rounded-xl p-8 shadow-lg w-full text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <h4 className="text-xl font-bold text-[#545454] mb-4">Fast Execution</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Speed matters in startups. We emphasize rapid prototyping, quick iteration cycles, and efficient decision-making to help you move from idea to implementation fast.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                        #speed
                      </span>
                      <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                        #action
                      </span>
                    </div>
                  </div>
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
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
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
      
      {/* Footer Section - Modified to span full width */}
      <footer className="mt-28 pt-20 pb-10 bg-gray-900 text-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h4 className="text-lg font-bold mb-4">Chapman CEO</h4>
              <p className="text-gray-400 text-sm">
                We exist to ignite a movement of student-led startups through fearless execution.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><Link href="/orbit" className="text-gray-400 hover:text-white text-sm">Chapman Orbit</Link></li>
                <li><Link href="/launch-fund" className="text-gray-400 hover:text-white text-sm">Launch Fund</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  info@chapmanceo.com
                </li>
                <li className="flex items-center text-gray-400 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Orange, CA
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Chapman Entrepreneurs Organization. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 