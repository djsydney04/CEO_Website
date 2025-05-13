'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ScrollAnimation, StaggerContainer, StaggerItem } from './scroll-animation'

const mentors = [
  {
    name: "Katie Mitic",
    title: "CEO & Co-Founder",
    company: "Something Else. (Makers of Kally)",
    companyLink: "https://drinkkally.com",
    image: "/team/KatieMitic.jpeg",
    linkedin: "https://www.linkedin.com/in/katiemitic/",
    previous: "Facebook, Yahoo, Ebay, Yahoo"
  },
  {
    name: "Alexander Jekowsky",
    title: "CEO & Founder",
    company: "Cents",
    companyLink: "https://www.trycents.com/",
    image: "/team/AlexJekowsky.jpeg",
    linkedin: "https://www.linkedin.com/in/ajekowsky/",
    previous: "Ulyngo"
  },
  {
    name: "Cole Rubin",
    title: "CEO & Co-Founder",
    company: "Conduit (YC W24)",
    companyLink: "https://www.conduit.ai/",
    image: "/team/ColeRubin.png",
    linkedin: "https://www.linkedin.com/in/colerubin/",
    previous: "Chapman Alum 21'"
  },
  {
    name: "Ray Chan",
    title: "Managing Director",
    company: "K5 Ventures",
    companyLink: "https://k5ventures.com/",
    image: "/team/RayChan.jpg",
    linkedin: "https://www.linkedin.com/in/raymondtchan/",
    previous: "Netsoft, Chapman Professor"
  }
]

export default function MentorGrid() {
  return (
    <section className="relative">
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center mb-16">Our Mentors</h2>
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <StaggerItem key={index} index={index}>
              <div className="flex flex-col h-full">
                {/* Enhanced Image Container */}
                <div className={`
                  relative aspect-square w-full mb-6 overflow-hidden
                  border border-black/10
                  bg-white/40
                  transition-all duration-300
                  hover:shadow-[4px_4px_16px_rgba(0,0,0,0.08)]
                  group
                  after:content-['']
                  after:absolute
                  after:inset-0
                  after:bg-gradient-to-b
                  after:from-black/0
                  after:to-black/5
                  after:opacity-0
                  after:transition-opacity
                  after:duration-300
                  hover:after:opacity-100
                  before:content-['']
                  before:absolute
                  before:inset-0
                  before:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),rgba(0,0,0,0.05))]
                  before:opacity-0
                  before:transition-opacity
                  before:duration-300
                  hover:before:opacity-100
                  [&_img]:transition-all
                  [&_img]:duration-500
                  hover:[&_img]:scale-[1.03]
                  [perspective:1000px]
                `}>
                  {/* Grid Texture Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-50" />
                  
                  {/* Enhanced Image */}
                  <div className="relative w-full h-full transform transition-transform duration-300 group-hover:scale-[1.02] [transform-style:preserve-3d]">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      quality={100}
                      className="object-cover relative z-10"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      priority
                      style={{
                        objectFit: 'cover',
                        imageRendering: 'crisp-edges',
                        WebkitFontSmoothing: 'antialiased',
                        backfaceVisibility: 'hidden'
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  {/* Position Tag */}
                  <div className="inline-block mb-4">
                    <span className="bg-black/5 text-black px-6 py-2 hand-drawn text-sm font-medium sketch-text">
                      {mentor.title}
                    </span>
                  </div>

                  {/* Company */}
                  <Link 
                    href={mentor.companyLink} 
                    target="_blank" 
                    className="text-black hover:text-black/80 font-medium mb-2 sketch-text"
                  >
                    {mentor.company}
                  </Link>

                  {/* Previous Companies */}
                  {mentor.previous && (
                    <p className="text-sm text-black/60 mb-4 sketch-text">
                      Previously: {mentor.previous}
                    </p>
                  )}

                  {/* LinkedIn Icon */}
                  <div className="mt-auto">
                    <Link
                      href={mentor.linkedin}
                      target="_blank"
                      className="bg-white/60 hover:bg-white/80 text-black/70 hover:text-black/90 
                               border border-black/10 p-2 rounded-lg transition-colors duration-200 inline-block"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
} 