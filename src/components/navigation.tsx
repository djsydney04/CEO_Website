'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from './ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/orbit', label: 'Orbit' },
    { href: '/launch-fund', label: 'Launch Ventures' },
    { href: 'https://substack.com/@chapmanentrepreneurshiporg', label: 'Stack', external: true },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white md:border-none border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/CEO_.svg"
              alt="Chapman Entrepreneurs Organization Logo" 
              width={120} 
              height={45} 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors hover:text-[#545454] text-gray-500"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#545454] relative ${
                    pathname === link.href 
                      ? 'text-[#545454] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#545454]' 
                      : 'text-gray-500'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
            
            <Link href="/apply">
              <Button 
                className="bg-[#545454] hover:bg-[#444444] text-white hover:shadow-md transition-all px-5"
              >
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 bg-[#545454] transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span 
                className={`w-full h-0.5 bg-[#545454] transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`w-full h-0.5 bg-[#545454] transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`text-[#545454] hover:text-[#444444] transition-colors py-2 ${
                      pathname === link.href ? 'font-semibold' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/apply" onClick={() => setIsOpen(false)}>
                  <Button 
                    className="w-full bg-[#545454] hover:bg-[#444444] text-white hover:shadow-md transition-all px-5 py-2"
                  >
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
} 