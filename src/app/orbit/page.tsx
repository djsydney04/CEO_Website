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
                <div className="inline-block mb-4">
                  <span className="text-black/80 text-sm font-medium bg-white/70 px-4 py-2 rounded-lg border border-black/10 shadow-sm">
                    Founders Track
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
                  Chapman Orbit
                </h1>
                <div className="h-[3px] w-32 bg-black/20 mb-10"></div>
                <div className="max-w-2xl relative">
                  <p className="text-lg text-black/80 mb-8 leading-relaxed">
                    Built by students. Run by builders. Chapman Orbit is a student-led program for Chapman's most driven founders. Unlike traditional university incubators, Orbit isn't faculty-run —it's designed by students who are actively building real products. Whether you're coding an MVP, testing with early users, or figuring out how to get your first 100 customers, Orbit is your launchpad to work shoulder-to-shoulder with other students.
                  </p>
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf6SHi4DtuZp7pueAYpuPHtSh7f4mv-jIKPt0UjemnKFUbL6Q/viewform?usp=sharing">
                    <Button className="bg-black text-white px-8 py-3 rounded-xl 
                                    shadow-[2px_2px_0px_rgba(0,0,0,0.1)]
                                    hover:shadow-[4px_4px_0px_rgba(0,0,0,0.1)]
                                    hover:translate-x-[-2px] hover:translate-y-[-2px]
                                    transition-all duration-200
                                    border border-black/90">
                      Apply to Orbit
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>
            </section>

            {/* What Makes Orbit Different */}
            <section className="mb-24">
              <ScrollAnimation type="fade">
                <h2 className="text-3xl font-bold text-black mb-4 tracking-tight">What Makes Orbit Different</h2>
                <p className="text-lg text-black/80 mb-12 leading-relaxed">A peer-driven space focused on doing, not just planning.</p>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                  {[
                    {
                      title: "Student-Run, Student-Tested",
                      description: "Orbit is organized by student founders for student founders. That means no bureaucracy, no fluff—just weekly deep dives with peers who are in the trenches with you."
                    },
                    {
                      title: "Bias towards action",
                      description: "We focus on fast cycles, live product demos, and practical traction."
                    },
                    {
                      title: "Early-Stage Ready",
                      description: "We're a good fit for builders who are still early, but already making real progress—whether that's a prototype, early users, or solid customer research."
                    }
                  ].map((item, index) => (
                    <div key={index} 
                         className={`bg-white/40 backdrop-blur-sm rounded-xl p-8 space-y-4 
                                   hover:bg-white/50 transition-all duration-300
                                   border-2 border-black/10
                                   shadow-[4px_4px_10px_rgba(0,0,0,0.05)]
                                   hover:shadow-[6px_6px_12px_rgba(0,0,0,0.08)]
                                   relative overflow-hidden`}>
                      {/* Grid Background */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
                      
                      <h3 className="text-xl font-semibold text-black tracking-tight relative">{item.title}</h3>
                      <p className="text-black/80 leading-relaxed relative">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </section>

            {/* Who Should Apply */}
            <section className="mb-24">
              <ScrollAnimation type="fade">
                <div className="max-w-2xl mb-12">
                  <h2 className="text-3xl font-bold text-black mb-4 tracking-tight">Who Should Apply</h2>
                  <p className="text-lg text-black/80 leading-relaxed">
                    Whether you're writing code, talking to customers, or just shipped something last week—we want to hear from you.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-8">
                    {[
                      {
                        title: "Product Builders",
                        description: "You've got a working prototype and are now focused on testing, UX, and user feedback."
                      },
                      {
                        title: "Technical Founders",
                        description: "You're building solo or with a small team and want support on business model, growth, and pitching."
                      }
                    ].map((item, index) => (
                      <div key={index} 
                           className="bg-white/40 backdrop-blur-sm rounded-xl p-8 space-y-4 
                                    hover:bg-white/50 transition-all duration-300
                                    border-2 border-black/10
                                    shadow-[4px_4px_10px_rgba(0,0,0,0.05)]
                                    hover:shadow-[6px_6px_12px_rgba(0,0,0,0.08)]
                                    relative overflow-hidden">
                        {/* Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
                        
                        <h3 className="text-xl font-semibold text-black tracking-tight relative">{item.title}</h3>
                        <p className="text-black/80 leading-relaxed relative">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-8">
                    {[
                      {
                        title: "Market Validators",
                        description: "You're focused on refining your value proposition, identifying your target customers, and building a go-to-market strategy that drives early traction."
                      },
                      {
                        title: "Business Developers",
                        description: "You've nailed the vision and the market—but need help finding your technical counterpart."
                      }
                    ].map((item, index) => (
                      <div key={index} 
                           className="bg-white/40 backdrop-blur-sm rounded-xl p-8 space-y-4 
                                    hover:bg-white/50 transition-all duration-300
                                    border-2 border-black/10
                                    shadow-[4px_4px_10px_rgba(0,0,0,0.05)]
                                    hover:shadow-[6px_6px_12px_rgba(0,0,0,0.08)]
                                    relative overflow-hidden">
                        {/* Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
                        
                        <h3 className="text-xl font-semibold text-black tracking-tight relative">{item.title}</h3>
                        <p className="text-black/80 leading-relaxed relative">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            </section>

            {/* How Orbit Works */}
            <section className="mb-24">
              <ScrollAnimation type="fade">
                <div className="max-w-2xl mb-12">
                  <h2 className="text-3xl font-bold text-black mb-4 tracking-tight">How Orbit Works</h2>
                  <p className="text-lg text-black/80 leading-relaxed">
                    A high-speed, hands-on track that prioritizes product and traction.
                  </p>
                </div>
                
                <div className="space-y-16">
                  {[
                    {
                      number: "1",
                      title: "Apply & Get In",
                      description: "We look for builders who are ready to move past the idea phase. Think: working prototypes, user interviews, first customers."
                    },
                    {
                      number: "2",
                      title: "Weekly Founder Sessions",
                      description: "Live workshops and peer reviews on:",
                      items: [
                        "Product: MVP strategy, user research, testing",
                        "Growth: customer acquisition, marketing, retention",
                        "Fundraising: pitch prep, investor decks, cap tables"
                      ],
                      footer: "You'll meet founders who share real traction, failures, and next steps—not just polished slides."
                    },
                    {
                      number: "3",
                      title: "Demo Days",
                      description: "Showcase your progress to a crowd of students, founders, alumni, investors, and local startup operators."
                    }
                  ].map((step, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white font-semibold mr-4 
                                      shadow-[2px_2px_0px_rgba(0,0,0,0.1)]">
                          {step.number}
                        </div>
                        <h3 className="text-2xl font-semibold text-black tracking-tight">{step.title}</h3>
                      </div>
                      <div className="ml-16">
                        <p className="text-lg text-black/80 leading-relaxed mb-8">
                          {step.description}
                        </p>
                        {step.items && (
                          <div className="grid md:grid-cols-3 gap-6 mb-8">
                            {step.items.map((item, i) => (
                              <div key={i} 
                                   className="bg-white/40 backdrop-blur-sm rounded-lg p-4 
                                            border-2 border-black/10
                                            shadow-[2px_2px_0px_rgba(0,0,0,0.05)]
                                            relative overflow-hidden">
                                {/* Grid Background */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
                                
                                <p className="text-black/80 relative">{item}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        {step.footer && (
                          <p className="text-lg text-black/80 leading-relaxed">
                            {step.footer}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </section>

            {/* Speakers & Mentors */}
            <section className="mb-24">
              <ScrollAnimation type="fade">
                <div className="max-w-2xl mb-12">
                  <h2 className="text-3xl font-bold text-black mb-4 tracking-tight">Speakers & Mentors</h2>
                  <p className="text-lg text-black/80 leading-relaxed">
                    We bring in alumni and operators who've actually built something.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    "Founders who've launched and scaled",
                    "Engineers and PMs from breakout startups",
                    "Investors who have funded top companies at the earliest stages"
                  ].map((text, index) => (
                    <div key={index} 
                         className="bg-white/40 backdrop-blur-sm rounded-xl p-6 
                                  hover:bg-white/50 transition-all duration-300
                                  border-2 border-black/10
                                  shadow-[4px_4px_10px_rgba(0,0,0,0.05)]
                                  hover:shadow-[6px_6px_12px_rgba(0,0,0,0.08)]
                                  relative overflow-hidden">
                      {/* Grid Background */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
                      
                      <p className="text-black/80 leading-relaxed relative">{text}</p>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 