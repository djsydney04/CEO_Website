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
      
      <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-12 flex-wrap">
        {companies.map((company) => (
          <div key={company.id} className="group w-1/2 sm:w-auto">
            <div className="relative w-32 sm:w-36 md:w-44 h-24 sm:h-28 md:h-32 flex items-center justify-center p-3 sm:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={176}
                height={128}
                className="w-full h-full object-contain opacity-75 group-hover:opacity-100 transition-all duration-300"
                quality={100}
                priority
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 