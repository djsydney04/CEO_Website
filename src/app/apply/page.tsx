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
                  <span className="text-[#545454] text-sm font-medium">Application Portal</span>
                </div>
                <h1 className="text-6xl font-bold text-[#545454] mb-6 leading-tight tracking-tight">
                  Join Chapman CEO
                </h1>
                <div className="h-[1px] w-16 bg-[#545454]/30 mb-10"></div>
                <div className="max-w-2xl">
                  <p className="text-xl text-[#545454]/90 mb-8">
                    Choose your path to entrepreneurship. Whether you're ready to apply for Orbit or interested in Launch Ventures, we're here to support your journey.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            {/* Application Options */}
            <div className="grid md:grid-cols-3 gap-8 mb-32">
              {/* Orbit Application */}
              <ScrollAnimation type="fade">
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(84,84,84,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(84,84,84,0.15)] transition-all relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-white via-[#545454]/5 to-white opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                  <div className="relative">
                    <h2 className="text-2xl font-bold text-[#545454] mb-4">Apply to Orbit</h2>
                    <p className="text-[#545454]/80 mb-6">
                      For founders who are actively building and ready to take their startup to the next level through mentorship, resources, and community.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#545454]/40 rounded-full mr-3 mt-2"></div>
                        <span className="text-[#545454]/80">Weekly founder sessions and workshops</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#545454]/40 rounded-full mr-3 mt-2"></div>
                        <span className="text-[#545454]/80">One-on-one mentorship</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#545454]/40 rounded-full mr-3 mt-2"></div>
                        <span className="text-[#545454]/80">Access to founder network</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#545454]/40 rounded-full mr-3 mt-2"></div>
                        <span className="text-[#545454]/80">Demo Day presentation opportunity</span>
                      </div>
                    </div>
                    <a href="https://cotton-pea-590.notion.site/1ca3b389b4ca80538086ce34809da29b?pvs=105" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-[#545454] hover:bg-[#444444] text-white px-8 py-3 rounded-xl shadow-sm hover:shadow-md transition-all">
                        Apply Now
                      </Button>
                    </a>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Launch Fund Interest */}
              <ScrollAnimation type="fade">
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(84,84,84,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(84,84,84,0.15)] transition-all relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-white via-[#545454]/5 to-white opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                  <div className="relative">
                    <h2 className="text-2xl font-bold text-[#545454] mb-4">Express Interest in Launch Ventures</h2>
                    <p className="text-[#545454]/80 mb-6">
                      Opening next semester. Join our venture capital program to learn about early-stage investing, deal analysis, and startup evaluation.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#545454]/40 rounded-full mr-3 mt-2"></div>
                        <span className="text-[#545454]/80">VC workshops and mentorship</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#545454]/40 rounded-full mr-3 mt-2"></div>
                        <span className="text-[#545454]/80">Deal analysis and evaluation</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#545454]/40 rounded-full mr-3 mt-2"></div>
                        <span className="text-[#545454]/80">Investment community access</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#545454]/40 rounded-full mr-3 mt-2"></div>
                        <span className="text-[#545454]/80">Early application access</span>
                      </div>
                    </div>
                    <a href="https://cotton-pea-590.notion.site/1cb3b389b4ca80f0933cf2aa55839077?pvs=105" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-white hover:bg-gray-50 text-[#545454] border border-[#545454]/20 px-8 py-3 rounded-xl shadow-sm hover:shadow-md transition-all">
                        Express Interest
                      </Button>
                    </a>
                  </div>
                </div>
              </ScrollAnimation>

              {/* General Member */}
              <ScrollAnimation type="fade">
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(84,84,84,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(84,84,84,0.15)] transition-all relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-white via-[#545454]/5 to-white opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                  <div className="relative">
                    <h2 className="text-2xl font-bold text-[#545454] mb-4">Join as General Member</h2>
                    <p className="text-[#545454]/80 mb-6">
                      For students who want to stay close to the action. A great entry point if you're still exploring or want to learn from the sidelines before jumping in.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#545454]/40 rounded-full mr-3 mt-2"></div>
                        <span className="text-[#545454]/80">Access to select speaker events</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#545454]/40 rounded-full mr-3 mt-2"></div>
                        <span className="text-[#545454]/80">Join panel discussions</span>
                      </div>
                    </div>
                    <a href="https://cotton-pea-590.notion.site/1cc3b389b4ca8027afa7e5219f777f1c?pvs=105" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-white hover:bg-gray-50 text-[#545454] border border-[#545454]/20 px-8 py-3 rounded-xl shadow-sm hover:shadow-md transition-all">
                        Join Now
                      </Button>
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Additional Info */}
            <div className="mb-32">
              <ScrollAnimation type="fade">
                <div className="max-w-xl">
                  <h2 className="text-3xl font-bold text-[#545454] mb-4">What Happens Next</h2>
                  <p className="text-lg text-[#545454]/80 mb-8">
                    After you submit your application or express interest, here's what you can expect:
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#545454] rounded-full flex items-center justify-center text-white font-medium mr-4 flex-shrink-0">1</div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#545454] mb-2">Confirmation</h3>
                        <p className="text-[#545454]/80">You'll receive an immediate confirmation of your submission.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#545454] rounded-full flex items-center justify-center text-white font-medium mr-4 flex-shrink-0">2</div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#545454] mb-2">Review Process</h3>
                        <p className="text-[#545454]/80">Our team will review your submission within 5 business days.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#545454] rounded-full flex items-center justify-center text-white font-medium mr-4 flex-shrink-0">3</div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#545454] mb-2">Next Steps</h3>
                        <p className="text-[#545454]/80">We'll reach out to schedule a conversation or provide additional information about upcoming opportunities.</p>
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