'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ScrollAnimation } from './scroll-animation'

export function SpeakerLogos() {
  // Company information for the logos
  const companies = [
    { id: 1, name: "Kally", logo: "/SpeakerLogos/1.svg" },
    { id: 2, name: "Xbox", logo: "/SpeakerLogos/2.svg" },
    { id: 3, name: "Billabong", logo: "/SpeakerLogos/3.svg" },
    { id: 4, name: "New Logo", logo: "/SpeakerLogos/Untitled design (3).svg" },
    { id: 5, name: "Cents", logo: "/SpeakerLogos/CentsLogo.svg" }
  ]

  // Double the array to create seamless loop
  const duplicatedCompanies = [...companies, ...companies]
  
  return (
    <div className="max-w-6xl mx-auto">
      <ScrollAnimation type="fade">
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="bg-black/5 text-black px-6 py-2 hand-drawn text-sm font-medium sketch-text">
              Featured Partners
            </span>
          </div>
          <h2 className="mb-8">Speakers & Mentors</h2>
          <div className="sketch-divider w-24 mb-8"></div>
          <div className="max-w-3xl">
            <p className="mb-6 sketch-text">
              We bring in experts from leading brands to share real-world entrepreneurial experience and industry best practices.
            </p>
          </div>
        </div>

        <div className="sketch-paper p-8 paper-fold">
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex gap-8"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {duplicatedCompanies.map((company) => (
                <div
                  key={`${company.id}-${company.name}`}
                  className="flex-shrink-0 w-[200px]"
                >
                  <div className="relative aspect-[3/2] w-full bg-white 
                                hover:shadow-md transition-all duration-300 p-4 md:p-6 
                                flex items-center justify-center border border-black/10">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      className="object-contain p-2"
                      sizes="200px"
                      quality={95}
                      priority
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
} 