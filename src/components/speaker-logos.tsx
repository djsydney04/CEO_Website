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
    <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
      <h2 className="text-3xl font-bold text-center text-[#545454] mb-3">Speakers and Mentors From Top Industry Leaders</h2>
      <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
        We bring in experts from leading brands to share real-world entrepreneurial experience and industry best practices.
      </p>
      
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {companies.map((company) => (
          <div key={company.id} className="group">
            <div className="relative w-44 h-32 flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300 opacity-75 group-hover:opacity-100">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              
              {/* Subtle hover effect */}
              <motion.div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50/5 to-transparent rounded-xl"></div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 