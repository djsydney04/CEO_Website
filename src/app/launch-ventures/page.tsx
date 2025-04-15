'use client'

import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'
import { ScrollAnimation } from '@/components/scroll-animation'
import Image from 'next/image'

export default function LaunchVenturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section - Clean Apple-inspired design */}
            <div className="mb-12 md:mb-16">
              <ScrollAnimation type="fade">
                <div className="inline-block mb-3 md:mb-4">
                  <span className="text-black text-xs md:text-sm font-medium">Coming Soon — Investor Track</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 md:mb-6 leading-tight tracking-tight">
                  Launch Ventures
                </h1>
                <div className="h-[1px] w-16 bg-black/30 mb-6 md:mb-10"></div>
                <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
                  <div className="w-full">
                    <p className="text-lg md:text-xl text-black/90">
                      For aspiring venture capitalists and finance-minded students interested in learning how early-stage investing works. Coming next semester.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Main Info - Simplified and focused content */}
            <div className="mb-16 md:mb-20">
              <ScrollAnimation type="fade">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-5">About Launch Ventures</h2>
                <p className="text-base md:text-lg text-black/80 mb-8 md:mb-10">
                  Launch Ventures is the venture side of our organization, dedicated to students who want to learn how investing really works behind the scenes. 
                  Think of it as a hands-on experience in venture capital, deal sourcing, and everything else you need to know about fueling the next generation of startups.
                </p>
                
                {/* Key features in concise format */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-12 md:mb-16">
                  <div className="space-y-3 md:space-y-4 bg-white p-6 md:p-0 rounded-xl md:rounded-none border border-black/10 md:border-0">
                    <div className="flex items-center gap-3 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3v18h18"></path>
                        <path d="m19 9-5 5-4-4-3 3"></path>
                      </svg>
                      <h3 className="text-lg md:text-xl font-semibold text-black">VC Workshops</h3>
                    </div>
                    <p className="text-sm md:text-base text-black/80">
                      Learn from practicing venture capitalists about spotting promising startups and evaluating investment opportunities.
                    </p>
                  </div>
                  
                  <div className="space-y-3 md:space-y-4 bg-white p-6 md:p-0 rounded-xl md:rounded-none border border-black/10 md:border-0">
                    <div className="flex items-center gap-3 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.29 7 12 12 20.71 7"></polyline>
                        <line x1="12" y1="22" x2="12" y2="12"></line>
                      </svg>
                      <h3 className="text-lg md:text-xl font-semibold text-black">Deal Analysis</h3>
                    </div>
                    <p className="text-sm md:text-base text-black/80">
                      Develop skills to research markets, evaluate startups, and make investment recommendations based on real data.
                    </p>
                  </div>
                  
                  <div className="space-y-3 md:space-y-4 bg-white p-6 md:p-0 rounded-xl md:rounded-none border border-black/10 md:border-0">
                    <div className="flex items-center gap-3 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      <h3 className="text-lg md:text-xl font-semibold text-black">Industry Network</h3>
                    </div>
                    <p className="text-sm md:text-base text-black/80">
                      Connect with active investors, founders, and fellow aspiring VCs while building relationships that could shape your career.
                    </p>
                  </div>
                </div>
                
                {/* Brief program content */}
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">What You'll Learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-10 md:gap-y-6 mb-8 md:mb-10">
                  <div className="bg-white p-6 md:p-0 rounded-xl md:rounded-none border border-black/10 md:border-0">
                    <ul className="space-y-4 md:space-y-3">
                      <li className="flex items-start gap-3 md:gap-2">
                        <span className="w-1.5 h-1.5 bg-black/60 rounded-full mt-2"></span>
                        <span className="text-sm md:text-base text-black/80">VC fundamentals and fund structures</span>
                      </li>
                      <li className="flex items-start gap-3 md:gap-2">
                        <span className="w-1.5 h-1.5 bg-black/60 rounded-full mt-2"></span>
                        <span className="text-sm md:text-base text-black/80">Deal sourcing and screening techniques</span>
                      </li>
                      <li className="flex items-start gap-3 md:gap-2">
                        <span className="w-1.5 h-1.5 bg-black/60 rounded-full mt-2"></span>
                        <span className="text-sm md:text-base text-black/80">Due diligence and investment decisions</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 md:p-0 rounded-xl md:rounded-none border border-black/10 md:border-0">
                    <ul className="space-y-4 md:space-y-3">
                      <li className="flex items-start gap-3 md:gap-2">
                        <span className="w-1.5 h-1.5 bg-black/60 rounded-full mt-2"></span>
                        <span className="text-sm md:text-base text-black/80">Financial modeling for early-stage companies</span>
                      </li>
                      <li className="flex items-start gap-3 md:gap-2">
                        <span className="w-1.5 h-1.5 bg-black/60 rounded-full mt-2"></span>
                        <span className="text-sm md:text-base text-black/80">Term sheet structuring and negotiation</span>
                      </li>
                      <li className="flex items-start gap-3 md:gap-2">
                        <span className="w-1.5 h-1.5 bg-black/60 rounded-full mt-2"></span>
                        <span className="text-sm md:text-base text-black/80">Portfolio management and investor relations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            
            {/* Interest Button Section */}
            <div className="border-t border-black/10 pt-12 md:pt-16">
              <ScrollAnimation type="fade">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">Express Interest</h2>
                  <p className="text-base md:text-lg text-black/80 max-w-xl mx-auto mb-6 md:mb-8 px-4 md:px-0">
                    Launch Ventures will be accepting applications next semester. Express your interest now to be notified when applications open.
                  </p>
                  
                  <a href="https://www.notion.so/1ca3b389b4ca80838ba6e65b2f49823f?pvs=106" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full md:w-auto bg-black hover:bg-black/80 text-white !text-white px-8 md:px-12 py-3 rounded-xl shadow-sm hover:shadow-md transition-all">
                      Express Interest
                    </Button>
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 