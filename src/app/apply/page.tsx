'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ScrollAnimation } from '@/components/scroll-animation'

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="mb-24">
              <ScrollAnimation type="fade">
                <div className="inline-block mb-4">
                  <span className="text-black text-sm font-medium">Application Portal</span>
                </div>
                <h1 className="text-6xl font-bold text-black mb-6 leading-tight tracking-tight">
                  Join Chapman CEO
                </h1>
                <div className="h-[1px] w-16 bg-black/30 mb-10"></div>
                <div className="max-w-2xl">
                  <p className="text-lg text-black/80 mb-12">
                    Choose your path to entrepreneurship. Whether you're a founder, an innovator with unique talents, or interested in Launch Ventures, we're here to support your journey.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            {/* Application Options */}
            <div className="grid md:grid-cols-3 gap-8 mb-32">
              {/* Orbit Application */}
              <ScrollAnimation type="fade">
                <div className="bg-white rounded-xl p-8 border border-black/10 shadow-[0_4px_20px_-4px_rgba(84,84,84,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(84,84,84,0.15)] transition-all relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-white via-black/5 to-white opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                  <div className="relative h-full flex flex-col">
                    <h2 className="text-2xl font-bold text-black mb-4">Apply to Orbit</h2>
                    <p className="text-black/80 mb-6">
                      For founders and individuals with unique talents who are actively building something impactful. Get the resources, mentorship, and community you need to turn your innovative ideas into successful ventures.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></div>
                        <span className="text-black/80">Hands-on product development</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></div>
                        <span className="text-black/80">Expert mentorship and guidance</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></div>
                        <span className="text-black/80">Join our founder community</span>
                      </div>
                    </div>
                    <div className="mt-auto pt-8 -mb-2 -mr-2">
                      <a href="https://cotton-pea-590.notion.site/1cc3b389b4ca8027afa7e5219f777f1c?pvs=105" target="_blank" rel="noopener noreferrer" className="flex justify-end">
                        <Button className="bg-black hover:bg-black/80 text-white !text-white px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all">
                        Apply Now
                      </Button>
                    </a>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Launch Fund Interest */}
              <ScrollAnimation type="fade">
                <div className="bg-white rounded-xl p-8 border border-black/10 shadow-[0_4px_20px_-4px_rgba(84,84,84,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(84,84,84,0.15)] transition-all relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-white via-black/5 to-white opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                  <div className="relative h-full flex flex-col">
                    <h2 className="text-2xl font-bold text-black mb-4">Express Interest in Launch Ventures</h2>
                    <p className="text-black/80 mb-6">
                      Opening next semester. Join our venture capital program to learn about early-stage investing, deal analysis, and startup evaluation.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></div>
                        <span className="text-black/80">VC workshops and mentorship</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></div>
                        <span className="text-black/80">Deal analysis and evaluation</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></div>
                        <span className="text-black/80">Investment community access</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></div>
                        <span className="text-black/80">Early application access</span>
                      </div>
                    </div>
                    <div className="mt-auto pt-8 -mb-2 -mr-2">
                      <a href="https://cotton-pea-590.notion.site/1cb3b389b4ca80f0933cf2aa55839077?pvs=105" target="_blank" rel="noopener noreferrer" className="flex justify-end">
                        <Button className="bg-white hover:bg-black/5 text-black !text-black font-medium border border-black/20 px-6 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all">
                        Express Interest
                      </Button>
                    </a>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* General Member */}
              <ScrollAnimation type="fade">
                <div className="bg-white rounded-xl p-8 border border-black/10 shadow-[0_4px_20px_-4px_rgba(84,84,84,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(84,84,84,0.15)] transition-all relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-white via-black/5 to-white opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                  <div className="relative h-full flex flex-col">
                    <h2 className="text-2xl font-bold text-black mb-4">Join as General Member</h2>
                    <p className="text-black/80 mb-6">
                      For students who want to stay close to the action. A great entry point if you're still exploring or want to learn from the sidelines before jumping in.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></div>
                        <span className="text-black/80">Access to select speaker events</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></div>
                        <span className="text-black/80">Join panel discussions</span>
                      </div>
                    </div>
                    <div className="mt-auto pt-8 -mb-2 -mr-2">
                      <a href="https://cotton-pea-590.notion.site/1cc3b389b4ca8027afa7e5219f777f1c?pvs=105" target="_blank" rel="noopener noreferrer" className="flex justify-end">
                        <Button className="bg-white hover:bg-black/5 text-black !text-black font-medium border border-black/20 px-6 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all">
                        Join Now
                      </Button>
                    </a>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Additional Info */}
            <div className="mb-32">
              <ScrollAnimation type="fade">
                <div className="max-w-xl">
                  <h2 className="text-3xl font-bold text-black mb-4">What Happens Next</h2>
                  <p className="text-lg text-black/80 mb-8">
                    After you submit your application or express interest, here's what you can expect:
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-medium mr-4 flex-shrink-0">1</div>
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">Confirmation</h3>
                        <p className="text-black/80">You'll receive an immediate confirmation of your submission.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-medium mr-4 flex-shrink-0">2</div>
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">Review Process</h3>
                        <p className="text-black/80">Our team will review your submission within 5 business days.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-medium mr-4 flex-shrink-0">3</div>
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">Next Steps</h3>
                        <p className="text-black/80">We'll reach out to schedule a conversation or provide additional information about upcoming opportunities.</p>
                      </div>
                    </div>
                  </div>
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