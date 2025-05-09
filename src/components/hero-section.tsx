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

      {/* Paper texture overlay */}
      <div className="paper-texture"></div>

      {/* Split Hero Section */}
      <section className="min-h-[90vh] pt-24 md:pt-28">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center min-h-[80vh]">
            {/* Text Content */}
            <ScrollAnimation type="slide-right" className="order-1 md:order-none space-y-8">
              <div>
                <h1>Chapman Entrepreneurs Organization</h1>
                <p className="mt-6 sketch-text text-xl">
                  We believe in fearless execution, rapid iteration, and relentless problem-solving.
                </p>
                <Link href="/apply" className="block w-full md:w-auto mt-8">
                  <Button 
                    className="w-full md:w-auto bg-black hover:bg-black/90 text-white !text-white text-lg px-10 py-3 hand-drawn"
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
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation type="fade" className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2>Our Programs</h2>
            <div className="sketch-divider w-24 mx-auto my-6"></div>
            <p className="mt-4 max-w-3xl mx-auto sketch-text">
              Whether you're a founder building the next big thing, an aspiring investor, or just want to stay connected with the entrepreneurial community, we have a program designed for you.
            </p>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="sketch-paper p-8 paper-fold">
              <div className="flex items-center mb-6">
                <div className="bg-black/5 p-3 hand-drawn mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path>
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                    <path d="M12 2v2"></path>
                    <path d="M12 22v-2"></path>
                    <path d="m17 20.66-1-1.73"></path>
                    <path d="M11 10.27 7 3.34"></path>
                  </svg>
                </div>
                <h3 className="sketch-text">Orbit</h3>
              </div>
              <p className="mb-6 sketch-text">
                Chapman Orbit is our founder-focused cohort, designed for innovators, creators, and individuals with unique talents who are actively building something impactful. Whether you're a technical founder developing a prototype, a creative mind disrupting an industry, or someone with a special skill set solving real problems, Orbit is your launchpad.
              </p>
              <div className="mt-auto space-y-4">
                <Link href="/orbit" className="block">
                  <Button variant="outline" className="w-full border-black text-black hover:bg-black/5 text-base py-3 hand-drawn">
                    Learn More
                  </Button>
                </Link>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf6SHi4DtuZp7pueAYpuPHtSh7f4mv-jIKPt0UjemnKFUbL6Q/viewform?usp=sharing" className="block">
                  <Button className="w-full bg-black hover:bg-black/90 text-white text-base py-3 hand-drawn">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>

            <div className="sketch-paper p-8 paper-fold">
              <div className="flex items-center mb-6">
                <div className="bg-black/5 p-3 hand-drawn mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="sketch-text">General Member</h3>
              </div>
              <p className="mb-6 sketch-text">
                For students who want to stay close to the action. A great entry point if you're still exploring or want to learn from the sidelines before jumping in.
              </p>
              <div className="space-y-4 mb-8">
                <div className="sketch-list-item">
                  <span className="text-black/80 sketch-text">Access to speaker events</span>
                </div>
                <div className="sketch-list-item">
                  <span className="text-black/80 sketch-text">Join panel discussions</span>
                </div>
              </div>
              <div className="mt-auto">
                <a href="https://cotton-pea-590.notion.site/1cc3b389b4ca8027afa7e5219f777f1c?pvs=105" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-white hover:bg-black/5 text-black !text-black font-medium border-black text-base py-3 hand-drawn">
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
                  <span className="bg-black/5 text-black px-6 py-2 hand-drawn text-sm font-medium sketch-text">Our Philosophy</span>
                </div>
                <h2 className="mb-8">How We Approach Entrepreneurship</h2>
                <div className="sketch-divider w-24 mb-8"></div>
                <div className="max-w-3xl">
                  <p className="mb-6 sketch-text">
                    Building something great isn't easy—but every challenge is a chance to learn and grow. If you're ready to dive in, embrace real-world experiences, and transform obstacles into opportunities, you're in the right place. We celebrate determination and resilience, and our programs are built on the entrepreneurial principles that power successful startups.
                  </p>
                  <p className="sketch-text">Here's how we make it happen:</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="sketch-paper p-8 md:p-10 paper-fold">
                  <div className="text-black/20 text-7xl font-bold mb-8 font-mono">01</div>
                  <h3 className="mb-4 sketch-text">Learn by Doing</h3>
                  <div className="sketch-divider w-16 mb-6"></div>
                  <p className="sketch-text">
                    We roll up our sleeves, create real products, gather real feedback, and refine until we succeed—or fail fast and move on. This demands grit and relentless action.
                  </p>
                </div>

                <div className="sketch-paper p-8 md:p-10 paper-fold">
                  <div className="text-black/20 text-7xl font-bold mb-8 font-mono">02</div>
                  <h3 className="mb-4 sketch-text">Quality Network</h3>
                  <div className="sketch-divider w-16 mb-6"></div>
                  <p className="sketch-text">
                    Your network can make or break your venture. We connect you with founders, investors, and experts. Meaningful connections only form when you bring something tangible to offer.
                  </p>
                </div>

                <div className="sketch-paper p-8 md:p-10 paper-fold">
                  <div className="text-black/20 text-7xl font-bold mb-8 font-mono">03</div>
                  <h3 className="mb-4 sketch-text">Fast Execution</h3>
                  <div className="sketch-divider w-16 mb-6"></div>
                  <p className="sketch-text">
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