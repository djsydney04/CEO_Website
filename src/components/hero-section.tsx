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
    <div className="min-h-screen bg-white text-black [&_*:not(button)]:!text-black">
      <Navigation />

      {/* Split Hero Section */}
      <section className="min-h-[90vh] pt-24 md:pt-28">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center min-h-[80vh]">
            {/* Text Content */}
            <ScrollAnimation type="slide-right" className="order-1 md:order-none space-y-6 md:space-y-10">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 md:mb-6 tracking-tight">
                Chapman Entrepreneurs Organization
                </h1>
                <p className="text-lg md:text-xl text-black leading-relaxed mb-6">
                  We believe in fearless execution, rapid iteration, and relentless problem-solving.
                </p>
                <Link href="/apply" className="block w-full md:w-auto">
                  <Button 
                    className="w-full md:w-auto bg-black hover:bg-black/80 text-white !text-white text-lg px-10 py-3 shadow-md hover:shadow-lg transition-all rounded-xl"
                  >
                    Apply Now
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
            
            {/* Cube - Show on all screens with adjusted size */}
            <ScrollAnimation type="fade" delay={0.3} className="order-2 md:order-none flex justify-center items-center w-full">
              <div className="w-full max-w-[300px] md:max-w-[600px] aspect-square scale-75 md:scale-100">
                <CodeCube />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Two Tracks Section - Redesigned */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation type="fade" className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6">Our Programs</h2>
            <p className="text-base md:text-lg text-black leading-relaxed mb-6">
              Whether you're a founder building the next big thing, an aspiring investor, or just want to stay connected with the entrepreneurial community, we have a program designed for you.
            </p>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white rounded-xl p-6 md:p-8 border border-black/10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all h-full flex flex-col">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-black/5 p-2 md:p-3 rounded-xl mr-3 md:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path>
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                    <path d="M12 2v2"></path>
                    <path d="M12 22v-2"></path>
                    <path d="m17 20.66-1-1.73"></path>
                    <path d="M11 10.27 7 3.34"></path>
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-black">Orbit</h3>
              </div>
              <p className="text-sm md:text-base text-black/80 mb-4">
                Chapman Orbit is our founder-focused cohort, designed for innovators, creators, and individuals with unique talents who are actively building something impactful. Whether you're a technical founder developing a prototype, a creative mind disrupting an industry, or someone with a special skill set solving real problems, Orbit is your launchpad.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black/40 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2"></div>
                  <span className="text-sm md:text-base text-black/80">Hands-on product development</span>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black/40 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2"></div>
                  <span className="text-sm md:text-base text-black/80">Expert mentorship</span>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black/40 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2"></div>
                  <span className="text-sm md:text-base text-black/80">Founder community</span>
                </div>
              </div>
              <div className="mt-auto space-y-2 md:space-y-3">
                <Link href="/orbit" className="block">
                  <Button variant="outline" className="w-full border-black text-black hover:bg-black/5 text-sm md:text-base py-2 md:py-3">
                    Learn More
                  </Button>
                </Link>
                <a href="https://cotton-pea-590.notion.site/1ca3b389b4ca80538086ce34809da29b?pvs=105" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-black hover:bg-black/80 text-white text-sm md:text-base py-2 md:py-3">
                    Apply Now
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 border border-black/10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all h-full flex flex-col">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-black/5 p-2 md:p-3 rounded-xl mr-3 md:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-black">Launch Ventures</h3>
                <span className="ml-2 px-2 py-0.5 bg-black/5 text-black/70 text-xs rounded-full whitespace-nowrap">Coming Soon</span>
              </div>
              <p className="text-sm md:text-base text-black/80 mb-6 md:mb-8">
                Join our venture capital program to learn about early-stage investing through hands-on experience. Work with real startups, learn from VCs, and develop your investment thesis.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black/40 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2"></div>
                  <span className="text-sm md:text-base text-black/80">Learn from active VCs</span>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black/40 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2"></div>
                  <span className="text-sm md:text-base text-black/80">Evaluate real startups</span>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black/40 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2"></div>
                  <span className="text-sm md:text-base text-black/80">Build investment skills</span>
                </div>
              </div>
              <div className="mt-auto space-y-2 md:space-y-3">
                <Link href="/launch-ventures" className="block">
                  <Button variant="outline" className="w-full border-black text-black hover:bg-black/5 text-sm md:text-base py-2 md:py-3">
                    Learn More
                  </Button>
                </Link>
                <a href="https://www.notion.so/1ca3b389b4ca80838ba6e65b2f49823f?pvs=106" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-black hover:bg-black/80 text-white text-sm md:text-base py-2 md:py-3">
                    Express Interest
                  </Button>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 border border-black/10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all h-full flex flex-col">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-black/5 p-2 md:p-3 rounded-xl mr-3 md:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-black">General Member</h3>
              </div>
              <p className="text-sm md:text-base text-black/80 mb-6 md:mb-8">
                For students who want to stay close to the action. A great entry point if you're still exploring or want to learn from the sidelines before jumping in.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black/40 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2"></div>
                  <span className="text-sm md:text-base text-black/80">Access to speaker events</span>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black/40 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2"></div>
                  <span className="text-sm md:text-base text-black/80">Join panel discussions</span>
                </div>
              </div>
              <div className="mt-auto">
                <a href="https://cotton-pea-590.notion.site/1cc3b389b4ca8027afa7e5219f777f1c?pvs=105" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-white hover:bg-black/5 text-black !text-black font-medium border border-black/20 text-sm md:text-base py-2 md:py-3">
                    Join Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Speaker Logos Section */}
          <div className="mt-36">
            <SpeakerLogos />
          </div>

          {/* Our Philosophy Section */}
          <div className="mt-28">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <div className="inline-block mb-4">
                  <span className="bg-black/5 text-black px-6 py-2 rounded-full text-sm font-medium border border-black/10 shadow-sm">Our Philosophy</span>
                </div>
                <h3 className="text-4xl font-bold text-black mb-6 leading-tight">How We Approach Entrepreneurship</h3>
                <div className="max-w-3xl">
                  <p className="text-xl text-black leading-relaxed mb-4">
                    Building something great isn't easy—but every challenge is a chance to learn and grow. If you're ready to dive in, embrace real-world experiences, and transform obstacles into opportunities, you're in the right place. We celebrate determination and resilience, and our programs are built on the entrepreneurial principles that power successful startups.
                  </p>
                  <p className="text-xl text-black leading-relaxed">Here's how we make it happen:</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Learn by Doing */}
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md hover:shadow-lg border border-black/10 transform transition-all duration-300 hover:-translate-y-1">
                  <div className="text-black/20 text-7xl font-bold mb-8 font-mono">01</div>
                  <h3 className="text-2xl font-semibold text-black mb-4 tracking-tight">Learn by Doing</h3>
                  <div className="h-[2px] w-16 bg-black/10 mb-6"></div>
                  <p className="text-lg text-black font-light leading-relaxed">
                    We roll up our sleeves, create real products, gather real feedback, and refine until we succeed—or fail fast and move on. This demands grit and relentless action.
                  </p>
                </div>

                {/* Quality Network */}
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md hover:shadow-lg border border-black/10 transform transition-all duration-300 hover:-translate-y-1">
                  <div className="text-black/20 text-7xl font-bold mb-8 font-mono">02</div>
                  <h3 className="text-2xl font-semibold text-black mb-4 tracking-tight">Quality Network</h3>
                  <div className="h-[2px] w-16 bg-black/10 mb-6"></div>
                  <p className="text-lg text-black font-light leading-relaxed">
                    Your network can make or break your venture. We connect you with founders, investors, and experts. Meaningful connections only form when you bring something tangible to offer.
                  </p>
                </div>

                {/* Fast Execution */}
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md hover:shadow-lg border border-black/10 transform transition-all duration-300 hover:-translate-y-1">
                  <div className="text-black/20 text-7xl font-bold mb-8 font-mono">03</div>
                  <h3 className="text-2xl font-semibold text-black mb-4 tracking-tight">Fast Execution</h3>
                  <div className="h-[2px] w-16 bg-black/10 mb-6"></div>
                  <p className="text-lg text-black font-light leading-relaxed">
                    In the startup world, speed is everything. We don't do "one day." We do "right now." Our method focuses on rapid iteration, constant testing, and immediate pivots.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 