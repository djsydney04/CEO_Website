'use client'

import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { ScrollAnimation } from '@/components/scroll-animation'
import { BackgroundGrid } from '@/components/background-grid'
import { SpeakerLogos } from '@/components/speaker-logos'

export default function OrbitPage() {
  return (
    <div className="min-h-screen bg-white relative">
      <BackgroundGrid />
      <Navigation />
      
      {/* Paper texture overlay */}
      <div className="paper-texture"></div>
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <section className="mb-28">
              <ScrollAnimation type="fade">
                <div className="inline-block mb-4">
                  <span className="bg-black/5 text-black px-6 py-2 hand-drawn text-sm font-medium sketch-text">
                    Founders Track
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
                  Chapman Orbit
                </h1>
                <div className="sketch-divider w-24 mb-10"></div>
                <div className="max-w-2xl">
                  <p className="sketch-text text-lg text-black/80 mb-8 leading-relaxed">
                    Built by students. Run by builders. Chapman Orbit is a student-led program for Chapman's most driven founders. Unlike traditional university incubators, Orbit isn't faculty-run —it's designed by students who are actively building real products. Whether you're coding an MVP, testing with early users, or figuring out how to get your first 100 customers, Orbit is your launchpad to work shoulder-to-shoulder with other students.
                  </p>
                  <Link href="https://cotton-pea-590.notion.site/1ca3b389b4ca80538086ce34809da29b">
                    <Button className="bg-black text-white px-8 py-3 hand-drawn
                                    hover:bg-black/90 text-white !text-white
                                    transition-all duration-200">
                      Apply to Orbit
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>
            </section>

            {/* What Makes Orbit Different */}
            <section className="mb-28">
              <ScrollAnimation type="fade">
                <div className="mb-16">
                  <div className="inline-block mb-4">
                    <span className="bg-black/5 text-black px-6 py-2 hand-drawn text-sm font-medium sketch-text">
                      Our Approach
                    </span>
                  </div>
                  <h2 className="mb-8">What Makes Orbit Different</h2>
                  <div className="sketch-divider w-24 mb-8"></div>
                  <div className="max-w-3xl">
                    <p className="mb-6 sketch-text">
                      A peer-driven space focused on doing, not just planning.
                    </p>
                  </div>
                </div>

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
                         className="sketch-paper p-8 paper-fold">
                      <h3 className="text-xl font-semibold text-black mb-4 tracking-tight sketch-text">{item.title}</h3>
                      <p className="text-black/80 leading-relaxed sketch-text">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </section>

            {/* Who Should Apply */}
            <section className="mb-28">
              <ScrollAnimation type="fade">
                <div className="mb-16">
                  <div className="inline-block mb-4">
                    <span className="bg-black/5 text-black px-6 py-2 hand-drawn text-sm font-medium sketch-text">
                      Ideal Candidates
                    </span>
                  </div>
                  <h2 className="mb-8">Who Should Apply</h2>
                  <div className="sketch-divider w-24 mb-8"></div>
                  <div className="max-w-3xl">
                    <p className="mb-6 sketch-text">
                      Whether you're writing code, talking to customers, or just shipped something last week—we want to hear from you.
                    </p>
                  </div>
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
                           className="sketch-paper p-8 paper-fold">
                        <h3 className="text-xl font-semibold text-black mb-4 tracking-tight sketch-text">{item.title}</h3>
                        <p className="text-black/80 leading-relaxed sketch-text">
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
                           className="sketch-paper p-8 paper-fold">
                        <h3 className="text-xl font-semibold text-black mb-4 tracking-tight sketch-text">{item.title}</h3>
                        <p className="text-black/80 leading-relaxed sketch-text">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            </section>

            {/* How Orbit Works */}
            <section className="mb-28">
              <ScrollAnimation type="fade">
                <div className="mb-16">
                  <div className="inline-block mb-4">
                    <span className="bg-black/5 text-black px-6 py-2 hand-drawn text-sm font-medium sketch-text">
                      The Process
                    </span>
                  </div>
                  <h2 className="mb-8">How Orbit Works</h2>
                  <div className="sketch-divider w-24 mb-8"></div>
                  <div className="max-w-3xl">
                    <p className="mb-6 sketch-text">
                      A high-speed, hands-on track that prioritizes product and traction.
                    </p>
                  </div>
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
                        <div className="w-12 h-12 bg-black hand-drawn flex items-center justify-center text-white font-semibold mr-4">
                          {step.number}
                        </div>
                        <h3 className="text-2xl font-semibold text-black tracking-tight sketch-text">{step.title}</h3>
                      </div>
                      <div className="ml-16">
                        <p className="text-lg text-black/80 leading-relaxed mb-8 sketch-text">
                          {step.description}
                        </p>
                        {step.items && (
                          <div className="grid md:grid-cols-3 gap-6 mb-8">
                            {step.items.map((item, i) => (
                              <div key={i} 
                                   className="sketch-paper p-4 paper-fold">
                                <p className="text-black/80 sketch-text">{item}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        {step.footer && (
                          <p className="text-lg text-black/80 leading-relaxed sketch-text">
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
            <section className="mb-28">
              <SpeakerLogos />
            </section>

            {/* Apply Now CTA */}
            <section className="mb-28">
              <ScrollAnimation type="fade">
                <div className="sketch-paper p-16 paper-fold text-center">
                  <h2 className="mb-6 sketch-text">Ready to Join Orbit?</h2>
                  <div className="sketch-divider w-24 mx-auto mb-8"></div>
                  <p className="mb-8 sketch-text max-w-2xl mx-auto">
                    If you're ready to take your startup journey to the next level, we want to hear from you. Apply now to join our next cohort of founders.
                  </p>
                  <Link 
                    href="https://cotton-pea-590.notion.site/1ca3b389b4ca80538086ce34809da29b"
                    className="inline-block"
                  >
                    <Button className="bg-black text-white px-12 py-4 hand-drawn text-lg
                                    hover:bg-black/90 text-white !text-white
                                    transition-all duration-200">
                      Apply to Orbit
                    </Button>
                  </Link>
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