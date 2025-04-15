'use client'

import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { ScrollAnimation, StaggerContainer, StaggerItem, ParallaxSection } from '@/components/scroll-animation'
import { ApplySection } from '@/components/apply-section'
import { ApproachSection } from '@/components/approach-section'

export default function OrbitPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="mb-24">
              <ScrollAnimation type="fade">
                <div className="inline-block mb-4">
                  <span className="text-black text-sm font-medium">Founders Track</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4 leading-tight">
                  Chapman Orbit
                </h1>
                <div className="h-[1px] w-16 bg-black/30 mb-10"></div>
                <div className="max-w-2xl">
                  <p className="text-lg text-black/80 mb-8">
                    Chapman Orbit is our founder-focused cohort, designed for innovators, creators, and individuals with unique talents who are actively building something impactful. Whether you're a technical founder developing a prototype, a creative mind disrupting an industry, or someone with a special skill set solving real problems, Orbit is your launchpad.
                  </p>
                  <Link href="https://cotton-pea-590.notion.site/1cc3b389b4ca8027afa7e5219f777f1c?pvs=105">
                    <Button className="bg-black hover:bg-black/80 text-white !text-white px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all">
                      Apply to Orbit
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>

            {/* Main Intro */}
            <div className="mt-16 mb-24">
              <h2 className="text-3xl font-bold text-black mb-4">What Makes Orbit Different</h2>
              <p className="text-lg text-black/80">Our approach is designed to accelerate your startup's growth</p>
            </div>

            {/* Program Features */}
            <div className="mb-24">
              <ScrollAnimation type="fade">
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="space-y-5">
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
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
                    <h3 className="text-xl font-semibold text-black">Real-World Product Development</h3>
                    <p className="text-black/80">
                      We focus on getting you from idea to tangible progress. Come prepared to show what you've built—or are actively building.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-black">Meaningful Support</h3>
                    <p className="text-black/80">
                      Gain access to mentorship, pitch prep, and industry insights to help you move your startup from "cool idea" to "early-stage business."
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v4"></path>
                        <path d="M20 12H4"></path>
                        <path d="M12 18v4"></path>
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-black">Measurable Milestones</h3>
                    <p className="text-black/80">
                      It's all about traction. You'll get to share your wins (like user sign-ups, funding news, or prototype launches) in an environment where you can learn from others doing the same.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Who Should Apply */}
            <div className="mb-24">
              <ScrollAnimation type="fade">
                <div className="max-w-xl mb-12">
                  <h2 className="text-3xl font-bold text-black mb-4">Who Should Apply</h2>
                  <p className="text-lg text-black/80">
                    We're looking for students at various stages of the startup journey
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="mt-1 mr-4 text-black flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">Product Builders</h3>
                        <p className="text-black/80">
                          Students who already have a working prototype or MVP that needs refining and user testing. You've moved beyond the idea stage and are ready for expert feedback.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="mt-1 mr-4 text-black flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">Technical Founders</h3>
                        <p className="text-black/80">
                          Students with programming or technical skills who need business guidance and a framework for product-market fit. You've built something interesting but need help on the business side.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg className="mt-1 mr-4 text-black flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                        <line x1="16" y1="8" x2="2" y2="22"></line>
                        <line x1="17.5" y1="15" x2="9" y2="15"></line>
                      </svg>
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">Market Validators</h3>
                        <p className="text-black/80">
                          Founders who have begun talking to potential customers and are validating their business assumptions. You're gathering feedback, refining your value proposition, and getting ready to scale.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="mt-1 mr-4 text-black flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                      </svg>
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">Business Developers</h3>
                        <p className="text-black/80">
                          Non-technical founders with strong business acumen who need technical guidance and connections to builders. You understand the market but need help bringing your vision to life.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* How Orbit Works */}
            <section className="mb-24">
              <ScrollAnimation type="fade">
                <div className="max-w-xl mb-12">
                  <h2 className="text-3xl font-bold text-black mb-4">How Orbit Works</h2>
                  <p className="text-lg text-black/80">
                    Our founder-focused program follows a proven path to help you build and launch your startup
                  </p>
                </div>
                
                <div className="space-y-20">
                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-semibold mr-4">1</div>
                      <h3 className="text-2xl font-semibold text-black">Application & Selection</h3>
                    </div>
                    <p className="text-lg text-black/80 ml-14">
                      We look for founders who have moved beyond the idea stage and are actively building. Show us your prototype, early users, or market research.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-semibold mr-4">2</div>
                      <h3 className="text-2xl font-semibold text-black">Weekly Founder Sessions</h3>
                    </div>
                    <p className="text-lg text-black/80 ml-14 mb-12">
                      Join intensive workshops, get 1-on-1 mentorship, and collaborate with fellow founders to overcome challenges and accelerate growth.
                    </p>
                    
                    <div className="ml-14 grid md:grid-cols-3 gap-8">
                      <div>
                        <h4 className="text-lg font-medium text-black mb-3">Product Development</h4>
                        <ul className="space-y-2 text-black/80">
                          <li className="flex items-center">
                            <span className="w-1 h-1 bg-black/60 rounded-full mr-2"></span>
                            MVP Strategy & Testing
                          </li>
                          <li className="flex items-center">
                            <span className="w-1 h-1 bg-black/60 rounded-full mr-2"></span>
                            User Research Methods
                          </li>
                          <li className="flex items-center">
                            <span className="w-1 h-1 bg-black/60 rounded-full mr-2"></span>
                            Iterative Design Process
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium text-black mb-3">Growth & Traction</h4>
                        <ul className="space-y-2 text-black/80">
                          <li className="flex items-center">
                            <span className="w-1 h-1 bg-black/60 rounded-full mr-2"></span>
                            Customer Acquisition
                          </li>
                          <li className="flex items-center">
                            <span className="w-1 h-1 bg-black/60 rounded-full mr-2"></span>
                            Marketing Strategy
                          </li>
                          <li className="flex items-center">
                            <span className="w-1 h-1 bg-black/60 rounded-full mr-2"></span>
                            Sales & Retention
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium text-black mb-3">Fundraising</h4>
                        <ul className="space-y-2 text-black/80">
                          <li className="flex items-center">
                            <span className="w-1 h-1 bg-black/60 rounded-full mr-2"></span>
                            Pitch Development
                          </li>
                          <li className="flex items-center">
                            <span className="w-1 h-1 bg-black/60 rounded-full mr-2"></span>
                            Investor Relations
                          </li>
                          <li className="flex items-center">
                            <span className="w-1 h-1 bg-black/60 rounded-full mr-2"></span>
                            Deal Structure & Terms
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Guest Speakers Section */}
                    <div className="ml-14 mt-16">
                      <h4 className="text-2xl font-semibold text-black mb-8">Guest Speakers & Industry Experts</h4>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl p-8 border border-black/10 shadow-[0_4px_20px_-4px_rgba(84,84,84,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(84,84,84,0.15)] transition-all relative group">
                          <div className="absolute inset-0 bg-gradient-to-b from-white via-black/5 to-white opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                          <div className="relative">
                            <h5 className="text-xl font-semibold text-black mb-4">Founder Stories</h5>
                            <p className="text-black/80 mb-8">Learn directly from successful entrepreneurs who've been in your shoes</p>
                            <div className="space-y-4">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></div>
                                <span className="text-black/80">Real startup journeys and pivotal moments</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></div>
                                <span className="text-black/80">Practical lessons and actionable advice</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></div>
                                <span className="text-black/80">Interactive Q&A sessions</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-xl p-8 border border-black/10 shadow-[0_4px_20px_-4px_rgba(84,84,84,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(84,84,84,0.15)] transition-all relative group">
                          <div className="absolute inset-0 bg-gradient-to-b from-white via-black/5 to-white opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                          <div className="relative">
                            <h5 className="text-xl font-semibold text-black mb-4">Industry Insights</h5>
                            <p className="text-black/80 mb-8">Deep dives into market trends and technical expertise</p>
                            <div className="space-y-4">
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></div>
                                <span className="text-black/80">Market analysis and opportunity mapping</span>
                              </div>
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></div>
                                <span className="text-black/80">Technical workshops with product leaders</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-semibold mr-4">3</div>
                      <h3 className="text-2xl font-semibold text-black">Demo Days</h3>
                    </div>
                    <p className="text-lg text-black/80 ml-14">
                      Present your startup to Chapman's network of entrepreneurs and industry leaders. Get valuable feedback and connections to help grow your venture.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </section>

            {/* Apply Section */}
            <div className="mb-24">
              <ApplySection />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 