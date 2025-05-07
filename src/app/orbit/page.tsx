'use client'

import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { ScrollAnimation } from '@/components/scroll-animation'
import { BackgroundGrid } from '@/components/background-grid'

export default function OrbitPage() {
  return (
    <div className="min-h-screen bg-white relative">
      <BackgroundGrid />
      <Navigation />
      
      <main className="pt-28 pb-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <section className="mb-24">
              <ScrollAnimation type="fade">
                <div className="inline-block mb-4 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-black/5">
                  <span className="text-black text-sm font-medium">Founders Track</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4 leading-tight">
                  Chapman Orbit
                </h1>
                <div className="h-[2px] w-24 bg-black/30 mb-10"></div>
                <div className="max-w-2xl">
                  <p className="text-lg text-black/80 mb-8 leading-relaxed">
                    Built by students. Run by builders. Chapman Orbit is a student-led program for Chapman's most driven founders. Unlike traditional university incubators, Orbit isn't faculty-run —it's designed by students who are actively building real products. Whether you're coding an MVP, testing with early users, or figuring out how to get your first 100 customers, Orbit is your launchpad to work shoulder-to-shoulder with other students.
                  </p>
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf6SHi4DtuZp7pueAYpuPHtSh7f4mv-jIKPt0UjemnKFUbL6Q/viewform?usp=sharing">
                    <Button className="bg-black hover:bg-black/80 text-white !text-white px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all">
                      Apply to Orbit
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>
            </section>

            {/* What Makes Orbit Different */}
            <section className="mb-24">
              <ScrollAnimation type="fade">
                <h2 className="text-3xl font-bold text-black mb-4">What Makes Orbit Different</h2>
                <p className="text-lg text-black/80 mb-12">A peer-driven space focused on doing, not just planning.</p>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 space-y-4 hover:bg-white/60 transition-all border border-black/5">
                    <h3 className="text-xl font-semibold text-black">Student-Run, Student-Tested</h3>
                    <p className="text-black/80">
                      Orbit is organized by student founders for student founders. That means no bureaucracy, no fluff—just weekly deep dives with peers who are in the trenches with you.
                    </p>
                  </div>

                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 space-y-4 hover:bg-white/60 transition-all border border-black/5">
                    <h3 className="text-xl font-semibold text-black">Bias towards action</h3>
                    <p className="text-black/80">
                      We focus on fast cycles, live product demos, and practical traction.
                    </p>
                  </div>

                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 space-y-4 hover:bg-white/60 transition-all border border-black/5">
                    <h3 className="text-xl font-semibold text-black">Early-Stage Ready</h3>
                    <p className="text-black/80">
                      We're a good fit for builders who are still early, but already making real progress—whether that's a prototype, early users, or solid customer research.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </section>

            {/* Who Should Apply */}
            <section className="mb-24">
              <ScrollAnimation type="fade">
                <div className="max-w-2xl mb-12">
                  <h2 className="text-3xl font-bold text-black mb-4">Who Should Apply</h2>
                  <p className="text-lg text-black/80">
                    Whether you're writing code, talking to customers, or just shipped something last week—we want to hear from you.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-8">
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 space-y-4 hover:bg-white/60 transition-all border border-black/5">
                      <h3 className="text-xl font-semibold text-black">Product Builders</h3>
                      <p className="text-black/80">
                        You've got a working prototype and are now focused on testing, UX, and user feedback.
                      </p>
                    </div>
                    
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 space-y-4 hover:bg-white/60 transition-all border border-black/5">
                      <h3 className="text-xl font-semibold text-black">Technical Founders</h3>
                      <p className="text-black/80">
                        You're building solo or with a small team and want support on business model, growth, and pitching.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 space-y-4 hover:bg-white/60 transition-all border border-black/5">
                      <h3 className="text-xl font-semibold text-black">Market Validators</h3>
                      <p className="text-black/80">
                        You're focused on refining your value proposition, identifying your target customers, and building a go-to-market strategy that drives early traction.
                      </p>
                    </div>
                    
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 space-y-4 hover:bg-white/60 transition-all border border-black/5">
                      <h3 className="text-xl font-semibold text-black">Business Developers</h3>
                      <p className="text-black/80">
                        You've nailed the vision and the market—but need help finding your technical counterpart.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </section>

            {/* How Orbit Works */}
            <section className="mb-24">
              <ScrollAnimation type="fade">
                <div className="max-w-2xl mb-12">
                  <h2 className="text-3xl font-bold text-black mb-4">How Orbit Works</h2>
                  <p className="text-lg text-black/80">
                    A high-speed, hands-on track that prioritizes product and traction.
                  </p>
                </div>
                
                <div className="space-y-16">
                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-semibold mr-4">1</div>
                      <h3 className="text-2xl font-semibold text-black">Apply & Get In</h3>
                    </div>
                    <p className="text-lg text-black/80 ml-14">
                      We look for builders who are ready to move past the idea phase. Think: working prototypes, user interviews, first customers.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-semibold mr-4">2</div>
                      <h3 className="text-2xl font-semibold text-black">Weekly Founder Sessions</h3>
                    </div>
                    <div className="ml-14">
                      <p className="text-lg text-black/80 mb-8">Live workshops and peer reviews on:</p>
                      <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-black/5">
                          <p className="text-black/80">Product: MVP strategy, user research, testing</p>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-black/5">
                          <p className="text-black/80">Growth: customer acquisition, marketing, retention</p>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-black/5">
                          <p className="text-black/80">Fundraising: pitch prep, investor decks, cap tables</p>
                        </div>
                      </div>
                      <p className="text-lg text-black/80">
                        You'll meet founders who share real traction, failures, and next steps—not just polished slides.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-semibold mr-4">3</div>
                      <h3 className="text-2xl font-semibold text-black">Demo Days</h3>
                    </div>
                    <p className="text-lg text-black/80 ml-14">
                      Showcase your progress to a crowd of students, founders, alumni, investors, and local startup operators.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </section>

            {/* Speakers & Mentors */}
            <section className="mb-24">
              <ScrollAnimation type="fade">
                <div className="max-w-2xl mb-12">
                  <h2 className="text-3xl font-bold text-black mb-4">Speakers & Mentors</h2>
                  <p className="text-lg text-black/80">
                    We bring in alumni and operators who've actually built something.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 hover:bg-white/60 transition-all border border-black/5">
                    <p className="text-black/80">Founders who've launched and scaled</p>
                  </div>
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 hover:bg-white/60 transition-all border border-black/5">
                    <p className="text-black/80">Engineers and PMs from breakout startups</p>
                  </div>
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 hover:bg-white/60 transition-all border border-black/5">
                    <p className="text-black/80">Investors who have funded top companies at the earliest stages</p>
                  </div>
                </div>
              </ScrollAnimation>
            </section>

            {/* Final CTA */}
            <section className="mb-24">
              <ScrollAnimation type="fade">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-black/5">
                  <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold text-black mb-4">Still Building? Good.</h2>
                    <p className="text-lg text-black/80 mb-6">
                      Orbit is where Chapman's builders come to work—not just talk. If you're iterating fast and looking for a student-first community to grow with, we'd love to see what you're building.
                    </p>
                    <p className="text-lg font-medium text-black mb-8">
                      Applications Open September 15th.
                    </p>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf6SHi4DtuZp7pueAYpuPHtSh7f4mv-jIKPt0UjemnKFUbL6Q/viewform?usp=sharing">
                      <Button className="bg-black hover:bg-black/80 text-white !text-white px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all">
                        Apply to Orbit
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 