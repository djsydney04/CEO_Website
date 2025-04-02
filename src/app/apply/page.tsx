'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/navigation'

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-white text-[#545454]">
      <Navigation />
      
      <div className="pt-20 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 pt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Path</h1>
            <p className="text-lg text-gray-600">
              Select which program you'd like to apply for based on your interests and goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-0 relative">
            {/* Vertical divider */}
            <div className="hidden md:block absolute top-10 bottom-10 left-1/2 w-px bg-gray-200"></div>
            
            {/* Orbit Side */}
            <div className="p-8 md:pr-12 space-y-6 flex flex-col">
              <div className="flex-1 space-y-6">
                <div className="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                </div>
                
                <h2 className="text-3xl font-bold">Chapman Orbit</h2>
                <p className="text-gray-600 text-lg">For students actively building startups</p>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">Who Should Apply?</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Students with an existing startup idea or prototype
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Entrepreneurs looking for mentorship and resources
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Technical or business-minded founders ready to build
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Students committed to making real progress on their ventures
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">What You'll Gain:</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium">Mentorship</div>
                      <div className="text-sm text-gray-500">Connect with experienced founders</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium">Resources</div>
                      <div className="text-sm text-gray-500">Tools to accelerate your startup</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium">Network</div>
                      <div className="text-sm text-gray-500">Invaluable connections</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium">Funding Help</div>
                      <div className="text-sm text-gray-500">Pitch development and guidance</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <Link href="https://forms.gle/iBmW3Tv3bUJRK1Vr8" target="_blank">
                  <Button className="w-full bg-[#545454] hover:bg-[#444444] text-white py-6 text-lg">
                    Apply to Orbit
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Launch Fund Side */}
            <div className="p-8 md:pl-12 space-y-6 flex flex-col">
              <div className="flex-1 space-y-6">
                <div className="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                </div>
                
                <h2 className="text-3xl font-bold">The Launch Fund</h2>
                <p className="text-gray-600 text-lg">For aspiring VCs & finance-minded entrepreneurs</p>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">Who Should Apply?</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Students interested in venture capital and investing
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Finance and business majors looking for real experience
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Those who want to learn startup evaluation and due diligence
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Students eager to build connections in the investment world
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">What You'll Gain:</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium">VC Knowledge</div>
                      <div className="text-sm text-gray-500">Real-world investing skills</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium">Due Diligence</div>
                      <div className="text-sm text-gray-500">Learn to evaluate startups</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium">Industry Insights</div>
                      <div className="text-sm text-gray-500">From seasoned investors</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium">Network</div>
                      <div className="text-sm text-gray-500">Connect with the VC ecosystem</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <Link href="https://forms.gle/iBmW3Tv3bUJRK1Vr8" target="_blank">
                  <Button className="w-full bg-[#545454] hover:bg-[#444444] text-white py-6 text-lg">
                    Apply to Launch Fund
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 