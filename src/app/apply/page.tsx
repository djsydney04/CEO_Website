'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ScrollAnimation } from '@/components/scroll-animation'

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Paper texture overlay */}
      <div className="paper-texture"></div>
      
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="mb-24">
              <ScrollAnimation type="fade">
                <div className="inline-block mb-4">
                  <span className="text-black text-sm font-medium hand-drawn px-4 py-2 sketch-text">Application Portal</span>
                </div>
                <h1>Join Chapman CEO</h1>
                <div className="sketch-divider w-16 mb-10"></div>
                <div className="max-w-2xl">
                  <p className="sketch-text text-xl">
                    Choose your path to entrepreneurship. Whether you're a founder, an innovator with unique talents, or interested in Launch Ventures, we're here to support your journey.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            {/* Application Options */}
            <div className="grid md:grid-cols-3 gap-8 mb-32">
              {/* Orbit Application */}
              <ScrollAnimation type="fade">
                <div className="sketch-paper p-8 paper-fold">
                  <div className="relative h-full flex flex-col">
                    <h3 className="mb-4 sketch-text">Apply to Orbit</h3>
                    <p className="mb-6 sketch-text">
                      Join our founder-focused cohort designed for innovators, creators, and individuals with unique talents who are actively building something impactful.
                    </p>
                    <div className="space-y-4">
                      <div className="sketch-list-item">
                        <span className="text-black/80 sketch-text">Hands-on product development</span>
                      </div>
                      <div className="sketch-list-item">
                        <span className="text-black/80 sketch-text">Expert mentorship</span>
                      </div>
                      <div className="sketch-list-item">
                        <span className="text-black/80 sketch-text">Founder community</span>
                      </div>
                      <div className="sketch-list-item">
                        <span className="text-black/80 sketch-text">Weekly workshops</span>
                      </div>
                    </div>
                    <div className="mt-auto pt-8">
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSf6SHi4DtuZp7pueAYpuPHtSh7f4mv-jIKPt0UjemnKFUbL6Q/viewform?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex justify-end">
                        <Button className="bg-black hover:bg-black/90 text-white !text-white px-6 py-2.5 hand-drawn">
                          Apply Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* General Member */}
              <ScrollAnimation type="fade">
                <div className="sketch-paper p-8 paper-fold">
                  <div className="relative h-full flex flex-col">
                    <h3 className="mb-4 sketch-text">Join as General Member</h3>
                    <p className="mb-6 sketch-text">
                      For students who want to stay close to the action. A great entry point if you're still exploring or want to learn from the sidelines before jumping in.
                    </p>
                    <div className="space-y-4">
                      <div className="sketch-list-item">
                        <span className="text-black/80 sketch-text">Access to select speaker events</span>
                      </div>
                      <div className="sketch-list-item">
                        <span className="text-black/80 sketch-text">Join panel discussions</span>
                      </div>
                    </div>
                    <div className="mt-auto pt-8">
                      <a href="https://cotton-pea-590.notion.site/1cc3b389b4ca8027afa7e5219f777f1c?pvs=105" target="_blank" rel="noopener noreferrer" className="flex justify-end">
                        <Button className="bg-white hover:bg-black/5 text-black !text-black font-medium border-black px-6 py-2.5 hand-drawn">
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
                  <h2 className="mb-4">What Happens Next</h2>
                  <div className="sketch-divider w-16 mb-8"></div>
                  <p className="mb-8 sketch-text">
                    After you submit your application or express interest, here's what you can expect:
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-black hand-drawn flex items-center justify-center text-white font-medium mr-4 flex-shrink-0">1</div>
                      <div>
                        <h3 className="mb-2 sketch-text">Confirmation</h3>
                        <p className="sketch-text">You'll receive an immediate confirmation of your submission.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-black hand-drawn flex items-center justify-center text-white font-medium mr-4 flex-shrink-0">2</div>
                      <div>
                        <h3 className="mb-2 sketch-text">Review Process</h3>
                        <p className="sketch-text">Our team will review your submission within 5 business days.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-black hand-drawn flex items-center justify-center text-white font-medium mr-4 flex-shrink-0">3</div>
                      <div>
                        <h3 className="mb-2 sketch-text">Next Steps</h3>
                        <p className="sketch-text">We'll reach out to schedule a conversation or provide additional information about upcoming opportunities.</p>
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