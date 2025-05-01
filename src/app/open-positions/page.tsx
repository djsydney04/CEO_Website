'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ScrollAnimation } from '@/components/scroll-animation'

export default function OpenPositionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="mb-12">
              <ScrollAnimation type="fade">
                <div className="inline-block mb-4">
                  <span className="text-black text-sm font-medium">Leadership Opportunities</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight tracking-tight">
                  Open Positions
                </h1>
                <div className="h-[1px] w-16 bg-black/30 mb-10"></div>
                <p className="text-lg text-black/80 mb-8">
                  Join our leadership team and help shape the future of entrepreneurship at Chapman. Applications close May 4th.
                </p>
              </ScrollAnimation>
            </div>

            {/* Positions */}
            <div className="space-y-8">
              {/* VP of Recruitment */}
              <ScrollAnimation type="fade">
                <div className="bg-white rounded-xl p-8 border border-black/10 shadow-[0_4px_20px_-4px_rgba(84,84,84,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(84,84,84,0.15)] transition-all">
                  <h2 className="text-2xl font-bold text-black mb-4">Vice President of Recruitment</h2>
                  <p className="text-black/80 mb-6">
                    The VP of Recruitment is the first face most new members see and plays a crucial role in growing the organization.
                  </p>
                  <div className="space-y-3 mb-8">
                    <h3 className="text-lg font-semibold text-black">Key responsibilities:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Designing and executing the club's recruitment strategy each semester</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Hosting 1–2 information sessions at the beginning of each semester</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Building a recruitment pipeline</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Presenting in classes and other student org spaces to promote the club</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Managing the recruitment timeline and application window</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Overseeing the recruitment process, including reviewing applications and coordinating interview logistics</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>

              {/* VP of Orbit */}
              <ScrollAnimation type="fade">
                <div className="bg-white rounded-xl p-8 border border-black/10 shadow-[0_4px_20px_-4px_rgba(84,84,84,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(84,84,84,0.15)] transition-all">
                  <h2 className="text-2xl font-bold text-black mb-4">Vice President of Orbit</h2>
                  <p className="text-black/80 mb-6">
                    The VP of Orbit leads and manages the Orbit Cohort, which supports student founders through mentorship, accountability, and resources.
                  </p>
                  <div className="space-y-3 mb-8">
                    <h3 className="text-lg font-semibold text-black">Key responsibilities:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Running the Orbit Cohort program from application through completion</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Overseeing the cohort application and selection process</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Organizing founder-focused workshops or speaker sessions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Providing support and accountability to student entrepreneurs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>

              {/* VP of Marketing */}
              <ScrollAnimation type="fade">
                <div className="bg-white rounded-xl p-8 border border-black/10 shadow-[0_4px_20px_-4px_rgba(84,84,84,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(84,84,84,0.15)] transition-all">
                  <h2 className="text-2xl font-bold text-black mb-4">Vice President of Marketing</h2>
                  <p className="text-black/80 mb-6">
                    The VP of Marketing is responsible for maintaining and growing the club's digital and physical presence.
                  </p>
                  <div className="space-y-3 mb-8">
                    <h3 className="text-lg font-semibold text-black">Key responsibilities:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Managing and growing the club's social media accounts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Designing promotional materials</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Creating consistent, on-brand content to promote events and initiatives</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Maintaining and updating the email list and sending newsletters</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Tabling at campus events to increase awareness and drive recruitment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>

              {/* VP of Outreach */}
              <ScrollAnimation type="fade">
                <div className="bg-white rounded-xl p-8 border border-black/10 shadow-[0_4px_20px_-4px_rgba(84,84,84,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(84,84,84,0.15)] transition-all">
                  <h2 className="text-2xl font-bold text-black mb-4">Vice President of Outreach</h2>
                  <p className="text-black/80 mb-6">
                    The VP of Outreach is responsible for securing high-quality speakers and external connections for club events.
                  </p>
                  <div className="space-y-3 mb-8">
                    <h3 className="text-lg font-semibold text-black">Key responsibilities:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Identifying and reaching out to potential speakers, founders, and investors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Sending cold emails, DMs, and follow-ups to invite professionals to speak</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Developing and maintaining a "Speaker Outreach Playbook"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Coordinating with the VP of Marketing to promote confirmed speakers and events</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-black/40 rounded-full mr-3 mt-2"></span>
                        <span className="text-black/80">Hosting or interviewing speakers during panels or fireside chats</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Apply Button */}
              <ScrollAnimation type="fade">
                <div className="text-center mt-12">
                  <a href="https://chapmanentrepreneurs.slack.com/archives/C08HS1K1CGH/p1746062318711959" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-block">
                    <Button className="bg-black hover:bg-black/80 text-white !text-white px-12 py-3 text-lg rounded-xl shadow-md hover:shadow-lg transition-all">
                      Apply Now
                    </Button>
                  </a>
                  <p className="text-black/60 mt-4">Applications close May 4th</p>
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