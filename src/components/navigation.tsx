'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export function Navigation() {
  const pathname = usePathname()
  
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/orbit', label: 'Orbit' },
    { href: '/launch-fund', label: 'Launch Ventures' },
    { href: 'https://substack.com/@chapmanentrepreneurshiporg', label: 'Stack', isExternal: true },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/CEO_.svg"
            alt="Chapman Entrepreneurs Organization Logo" 
            width={120} 
            height={45} 
            className="h-10 w-auto"
          />
        </Link>
        
        <div className="flex items-center ml-auto">
          {navItems.map((item) => (
            item.isExternal ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors hover:text-[#545454] text-gray-500 px-5"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#545454] relative px-5 ${
                  pathname === item.href 
                    ? 'text-[#545454] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#545454]' 
                    : 'text-gray-500'
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
          
          <Link href="/apply" className="ml-8">
            <Button 
              className="bg-[#545454] hover:bg-[#444444] text-white hover:shadow-md transition-all px-5"
            >
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
} 