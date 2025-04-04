'use client'

import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'
import { ScrollAnimation } from '@/components/scroll-animation'
import Image from 'next/image'

export default function LaunchFundPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section - Clean Apple-inspired design */}
            <div className="mb-24">
              <ScrollAnimation type="fade">
                <div className="inline-block mb-4">
                  <span className="text-[#545454] text-sm font-medium">Coming Soon — Investor Track</span>
                </div>
                <h1 className="text-6xl font-bold text-[#545454] mb-6 leading-tight tracking-tight">
                  The Launch Fund
                </h1>
                <div className="h-[1px] w-16 bg-[#545454]/30 mb-10"></div>
                <div className="flex flex-col md:flex-row md:items-center gap-12">
                  <div className="w-full">
                    <p className="text-xl text-[#545454]/90 mb-6">
                      For aspiring venture capitalists and finance-minded students interested in learning how early-stage investing works. Coming next semester.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Main Info - Simplified and focused content */}
            <div className="mb-20">
              <ScrollAnimation type="fade">
                <h2 className="text-3xl font-bold text-[#545454] mb-5">About the Launch Fund</h2>
                <p className="text-lg text-[#545454]/80 mb-10">
                  The Launch Fund is the venture side of our organization, dedicated to students who want to learn how investing really works behind the scenes. 
                  Think of it as a hands-on experience in venture capital, deal sourcing, and everything else you need to know about fueling the next generation of startups.
                </p>
                
                {/* Key features in concise format */}
                <div className="grid md:grid-cols-3 gap-10 mb-16">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3v18h18"></path>
                        <path d="m19 9-5 5-4-4-3 3"></path>
                      </svg>
                      <h3 className="text-xl font-semibold text-[#545454]">VC Workshops</h3>
                    </div>
                    <p className="text-[#545454]/80">
                      Learn from practicing venture capitalists about spotting promising startups and evaluating investment opportunities.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.29 7 12 12 20.71 7"></polyline>
                        <line x1="12" y1="22" x2="12" y2="12"></line>
                      </svg>
                      <h3 className="text-xl font-semibold text-[#545454]">Deal Analysis</h3>
                    </div>
                    <p className="text-[#545454]/80">
                      Develop skills to research markets, evaluate startups, and make investment recommendations based on real data.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      <h3 className="text-xl font-semibold text-[#545454]">Industry Network</h3>
                    </div>
                    <p className="text-[#545454]/80">
                      Connect with active investors, founders, and fellow aspiring VCs while building relationships that could shape your career.
                    </p>
                  </div>
                </div>
                
                {/* Brief program content */}
                <h3 className="text-2xl font-semibold text-[#545454] mb-4">What You'll Learn</h3>
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 mb-10">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#545454]/60 rounded-full"></span>
                      <span className="text-[#545454]/80">VC fundamentals and fund structures</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#545454]/60 rounded-full"></span>
                      <span className="text-[#545454]/80">Deal sourcing and screening techniques</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#545454]/60 rounded-full"></span>
                      <span className="text-[#545454]/80">Due diligence and investment decisions</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#545454]/60 rounded-full"></span>
                      <span className="text-[#545454]/80">Financial modeling for early-stage companies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#545454]/60 rounded-full"></span>
                      <span className="text-[#545454]/80">Term sheet structuring and negotiation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#545454]/60 rounded-full"></span>
                      <span className="text-[#545454]/80">Portfolio management and investor relations</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
            
            {/* Interest Button Section */}
            <div className="border-t border-gray-100 pt-16 mb-20">
              <ScrollAnimation type="fade">
                <div className="mb-16 text-center">
                  <h2 className="text-3xl font-bold text-[#545454] mb-3">Express Interest</h2>
                  <p className="text-lg text-[#545454]/80 max-w-xl mx-auto mb-10">
                    The Launch Fund will be accepting applications next semester. Express your interest now to be notified when applications open.
                  </p>
                  
                  <a href="https://cotton-pea-590.notion.site/1cb3b389b4ca80f0933cf2aa55839077?pvs=105" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#545454] hover:bg-[#444444] text-white px-12 py-3 rounded-xl shadow-sm hover:shadow-md transition-all">
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