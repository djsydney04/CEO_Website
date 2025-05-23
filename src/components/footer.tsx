import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h4 className="text-lg font-bold mb-4">Chapman CEO</h4>
            <p className="text-black text-sm">
              We exist to ignite a movement of student-led startups through fearless execution.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><Link href="/orbit" className="text-black hover:text-black text-sm">Chapman Orbit</Link></li>
              <li><Link href="/open-positions" className="text-black hover:text-black text-sm">Open Positions</Link></li>
              <li><Link href="/coffee-chat" className="text-black hover:text-black text-sm">Coffee Chat</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-black text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Ceoclub@chapman.edu
              </li>
              <li className="flex items-center text-black text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Orange, CA
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-black mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/chapman__entrepreneurs/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-black/5 text-black border border-black/20 p-2 rounded-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://x.com/chapman_ceo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-black/5 text-black border border-black/20 p-2 rounded-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M20 4l-6.768 6.768"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/chapman-entrepreneurship-organization/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-black/5 text-black border border-black/20 p-2 rounded-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-black/10 text-center">
          <p className="text-black text-sm">© {new Date().getFullYear()} Chapman Entrepreneurs Organization. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 