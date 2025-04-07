'use client'

import Image from 'next/image'
import { ScrollAnimation, StaggerContainer, StaggerItem } from './scroll-animation'
import { motion } from 'framer-motion'

export function SpeakerLogos() {
  // Company information for the logos
  const companies = [
    { id: 1, name: "Kally", logo: "/SpeakerLogos/1.svg" },
    { id: 2, name: "Xbox", logo: "/SpeakerLogos/2.svg" },
    { id: 3, name: "Billabong", logo: "/SpeakerLogos/3.svg" },
    { id: 4, name: "New Logo", logo: "/SpeakerLogos/Untitled design (3).svg" },
    { id: 5, name: "Cents", logo: "/SpeakerLogos/CentsLogo.svg" }
  ]
  
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-10 shadow-xl border border-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#545454] mb-2 sm:mb-3">Speakers and Mentors From Top Industry Leaders</h2>
      <p className="text-base sm:text-lg text-center text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
        We bring in experts from leading brands to share real-world entrepreneurial experience and industry best practices.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center">
        {companies.map((company) => (
          <div key={company.id} className="w-full max-w-[160px] md:max-w-[200px]">
            <div className="relative aspect-[3/2] w-full bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 md:p-6 flex items-center justify-center">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 160px, 200px"
                quality={95}
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 