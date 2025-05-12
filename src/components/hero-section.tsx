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
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Text Content */}
              <ScrollAnimation type="slide-right" className="order-1 md:order-none space-y-8">
                <div>
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">Chapman Entrepreneurs Organization</h1>
                  <p className="mt-6 sketch-text text-xl max-w-xl">
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
        </div>
      </section>

      {/* Two Tracks Section - Redesigned */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          <ScrollAnimation type="fade">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <div className="inline-block mb-4">
                  <span className="bg-black/5 text-black px-6 py-2 hand-drawn text-sm font-medium sketch-text">Our Programs</span>
                </div>
                <h2 className="mb-8">Choose Your Path</h2>
                <div className="sketch-divider w-24 mb-8"></div>
                <div className="max-w-3xl">
                  <p className="mb-6 sketch-text">
                    Whether you're a founder building the next big thing, an aspiring investor, or just want to stay connected with the entrepreneurial community, we have a program designed for you.
                  </p>
                </div>
              </div>

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
            </div>
          </ScrollAnimation>
          
          {/* Speaker Logos Section */}
          <div className="mt-28">
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

          {/* Meet Our Team Section */}
          <div className="mt-28">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation type="fade">
                <div className="mb-16">
                  <div className="inline-block mb-4">
                    <span className="bg-black/5 text-black px-6 py-2 hand-drawn text-sm font-medium sketch-text">Coffee Chats</span>
                  </div>
                  <h2 className="mb-8">Meet Our Leadership Team</h2>
                  <div className="sketch-divider w-24 mb-8"></div>
                  <div className="max-w-3xl">
                    <p className="mb-6 sketch-text">
                      Have questions about CEO? Want to learn more about our programs? Schedule a casual conversation with our team leads about entrepreneurship at Chapman.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                  {[
                    {
                      name: 'Grant Werlin',
                      role: 'President',
                      calendly: 'https://calendly.com/werlinandco/30min',
                      linkedin: 'https://www.linkedin.com/in/grant-werlin-9851852b7/',
                      image: '/MemberHeadShot/grant.jpeg',
                      imagePosition: 'object-[center_15%]'
                    },
                    {
                      name: 'Dylan Mitic',
                      role: 'Co-Head of Orbit',
                      calendly: 'https://calendly.com/dylanmitic/30min?share_attribution=expiring_link',
                      linkedin: 'https://www.linkedin.com/in/dylanmitic/',
                      twitter: 'https://x.com/DylanMitic',
                      image: '/MemberHeadShot/dylan.jpg',
                      imagePosition: 'object-center'
                    },
                    {
                      name: 'Michael Ferro',
                      role: 'Co-Head of Orbit',
                      calendly: 'https://calendly.com/ferrojm11/30min?share_attribution=expiring_link',
                      linkedin: 'https://www.linkedin.com/in/ferrom/',
                      twitter: 'https://x.com/MichaelFerro',
                      image: '/MemberHeadShot/michael.jpg',
                      imagePosition: 'object-[center_15%]'
                    }
                  ].map((member, index) => (
                    <div key={index} className="sketch-paper p-8 paper-fold">
                      <div className="flex flex-col">
                        <div className={`
                          relative aspect-square w-full mb-6 overflow-hidden
                          border border-black/10
                          bg-white/40 backdrop-blur-sm
                          transition-all duration-300
                          hover:shadow-[4px_4px_16px_rgba(0,0,0,0.08)]
                          group
                        `}>
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className={`object-cover relative z-10 transition-transform duration-300 group-hover:scale-[1.02] ${member.imagePosition}`}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority
                          />
                        </div>
                        
                        <div className="flex flex-col items-start">
                          <h3 className="text-xl font-semibold text-black mb-1 tracking-tight sketch-text">{member.name}</h3>
                          <p className="text-black/70 text-sm mb-6 sketch-text">{member.role}</p>
                          
                          <div className="flex flex-col gap-3 w-full">
                            <a
                              href={member.calendly}
                              className="px-5 py-2.5 text-sm bg-black inline-block
                                       w-full text-center font-medium"
                              style={{
                                backgroundColor: "black",
                                color: "white",
                                borderRadius: "8px",
                                border: "1px solid rgba(0,0,0,0.9)"
                              }}
                              target="_blank"
                            >
                              <span style={{color: "white"}}>Schedule a Chat</span>
                            </a>
                            <div className="flex gap-2">
                              {member.linkedin && (
                                <Link 
                                  href={member.linkedin} 
                                  target="_blank" 
                                  className="bg-white/60 hover:bg-white/80 text-black/70 hover:text-black/90 
                                           border border-black/10 p-2 rounded-lg transition-colors duration-200"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                  </svg>
                                </Link>
                              )}
                              {member.twitter && (
                                <Link 
                                  href={member.twitter} 
                                  target="_blank" 
                                  className="bg-white/60 hover:bg-white/80 text-black/70 hover:text-black/90 
                                           border border-black/10 p-2 rounded-lg transition-colors duration-200"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M20 4l-6.768 6.768"></path>
                                  </svg>
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 