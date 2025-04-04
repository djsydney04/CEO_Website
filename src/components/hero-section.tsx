'use client'

import { Navigation } from './navigation'
import CodeCube from './code-cube'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { ScrollAnimation, StaggerContainer, StaggerItem, ParallaxSection } from './scroll-animation'
import { SpeakerLogos } from './speaker-logos'

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white text-[#545454]">
      <Navigation />

      {/* Split Hero Section */}
      <section className="min-h-[90vh] pt-20">
        <div className="container mx-auto px-4 h-full">
          <div className="grid md:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Text Content */}
            <ScrollAnimation type="slide-right" className="space-y-10">
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
            </ScrollAnimation>
            
            {/* Cube */}
            <ScrollAnimation type="fade" delay={0.3} className="w-full aspect-square">
              <CodeCube />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Two Tracks Section - Redesigned */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation type="fade" className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-[#545454] mb-6">Our Programs</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether you're a founder building the next big thing, an aspiring investor, or just want to stay connected with the entrepreneurial community, we have a program designed for you.
            </p>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-gray-50 p-3 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path>
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
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
                <h3 className="text-xl font-bold text-[#545454]">Orbit</h3>
              </div>
              <p className="text-gray-600 mb-6">For students who are actively building startups and want to take their venture to the next level.</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#545454]/60 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-600">Weekly workshops and peer feedback sessions</span>
                </div>
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#545454]/60 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-600">Access to industry mentors</span>
                </div>
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#545454]/60 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-600">Demo Day opportunities</span>
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="flex gap-4">
                  <Link href="/orbit">
                    <Button variant="outline" className="border-[#545454] text-[#545454] hover:bg-[#545454]/5">
                      Learn More
                    </Button>
                  </Link>
                  <a href="https://cotton-pea-590.notion.site/1ca3b389b4ca80538086ce34809da29b?pvs=105" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#545454] hover:bg-[#444444] text-white">
                      Apply Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-gray-50 p-3 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#545454]">Launch Fund</h3>
                <span className="ml-2 px-2 py-0.5 bg-gray-100 text-[#545454]/70 text-xs rounded-full">Coming Soon</span>
              </div>
              <p className="text-gray-600 mb-6">For aspiring venture capitalists and finance-minded students interested in learning how early-stage investing works.</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#545454]/60 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-600">VC mentorship sessions</span>
                </div>
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#545454]/60 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-600">Startup evaluation practice</span>
                </div>
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#545454]/60 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-600">Investment community access</span>
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="flex gap-4">
                  <Link href="/launch-fund">
                    <Button variant="outline" className="border-[#545454] text-[#545454] hover:bg-[#545454]/5">
                      Learn More
                    </Button>
                  </Link>
                  <Link href="/launch-fund">
                    <Button className="bg-[#545454] hover:bg-[#444444] text-white">
                      Express Interest
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-gray-50 p-3 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#545454]">General Member</h3>
              </div>
              <p className="text-gray-600 mb-6">For students who want to stay close to the action and learn from the entrepreneurial community without the full program commitment.</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#545454]/60 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-600">Access to speaker events</span>
                </div>
                <div className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#545454]/60 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-600">Join panel discussions</span>
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="flex gap-4">
                  <a href="https://cotton-pea-590.notion.site/1cc3b389b4ca8027afa7e5219f777f1c?pvs=105" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-white hover:bg-gray-50 text-[#545454] border border-[#545454]/20">
                      Join Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Speaker Logos Section */}
          <div className="mt-28">
            <SpeakerLogos />
          </div>

          {/* Our Philosophy Section */}
          <div className="mt-28">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <div className="inline-block mb-4">
                  <span className="bg-[#f0f0f0] text-[#545454] px-6 py-2 rounded-full text-sm font-medium border border-gray-200 shadow-sm">Our Philosophy</span>
                </div>
                <h3 className="text-4xl font-bold text-[#545454] mb-6 leading-tight">How We Approach Entrepreneurship</h3>
                <div className="max-w-3xl">
                  <p className="text-xl text-gray-600 leading-relaxed mb-4">
                    Building something great isn't easy—but every challenge is a chance to learn and grow. If you're ready to dive in, embrace real-world experiences, and transform obstacles into opportunities, you're in the right place. We celebrate determination and resilience, and our programs are built on the entrepreneurial principles that power successful startups.
                  </p>
                  <p className="text-xl text-gray-600 leading-relaxed">Here's how we make it happen:</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Learn by Doing */}
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-gray-50 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="text-[#545454]/20 text-7xl font-bold mb-8 font-mono">01</div>
                  <h3 className="text-2xl font-semibold text-[#545454] mb-4 tracking-tight">Learn by Doing</h3>
                  <div className="h-[2px] w-16 bg-[#545454]/10 mb-6"></div>
                  <p className="text-lg text-gray-600 font-light leading-relaxed">
                    We roll up our sleeves, create real products, gather real feedback, and refine until we succeed—or fail fast and move on. This demands grit and relentless action.
                  </p>
                </div>

                {/* Quality Network */}
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-gray-50 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="text-[#545454]/20 text-7xl font-bold mb-8 font-mono">02</div>
                  <h3 className="text-2xl font-semibold text-[#545454] mb-4 tracking-tight">Quality Network</h3>
                  <div className="h-[2px] w-16 bg-[#545454]/10 mb-6"></div>
                  <p className="text-lg text-gray-600 font-light leading-relaxed">
                    Your network can make or break your venture. We connect you with founders, investors, and experts. Meaningful connections only form when you bring something tangible to offer.
                  </p>
                </div>

                {/* Fast Execution */}
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-gray-50 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="text-[#545454]/20 text-7xl font-bold mb-8 font-mono">03</div>
                  <h3 className="text-2xl font-semibold text-[#545454] mb-4 tracking-tight">Fast Execution</h3>
                  <div className="h-[2px] w-16 bg-[#545454]/10 mb-6"></div>
                  <p className="text-lg text-gray-600 font-light leading-relaxed">
                    In the startup world, speed is everything. We don't do "one day." We do "right now." Our method focuses on rapid iteration, constant testing, and immediate pivots.
                  </p>
                </div>
              </div>
            </div>
          </div>

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
        </div>
      </section>
    </div>
  )
} 