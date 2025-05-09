import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/scroll-animation';

interface CoffeeChatProps {
  variant?: 'landing' | 'page';
}

export default function CoffeeChat({ variant = 'page' }: CoffeeChatProps) {
  const teamMembers = [
    {
      name: 'Grant Werlin',
      role: 'President',
      calendly: 'https://calendly.com/werlinandco/30min',
      linkedin: 'https://www.linkedin.com/in/grant-werlin-9851852b7/',
      image: '/MemberHeadShot/grant.jpeg'
    },
    {
      name: 'Dylan Mitic',
      role: 'Co-Head of Orbit',
      calendly: 'https://calendly.com/dylanmitic/30min?share_attribution=expiring_link',
      linkedin: 'https://www.linkedin.com/in/dylanmitic/',
      twitter: 'https://x.com/DylanMitic',
      image: '/MemberHeadShot/dylan.jpg'
    },
    {
      name: 'Michael Ferro',
      role: 'Co-Head of Orbit',
      calendly: 'https://calendly.com/ferrojm11/30min?share_attribution=expiring_link',
      linkedin: 'https://www.linkedin.com/in/ferrom/',
      twitter: 'https://x.com/MichaelFerro',
      image: '/MemberHeadShot/michael.jpg'
    }
  ];

  const isLanding = variant === 'landing';

  return (
    <section className={`relative ${isLanding ? 'py-8' : 'py-10'}`}>
      {/* Enhanced Graph Paper Background with Sketch Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white bg-[linear-gradient(rgba(0,0,0,0.02)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,0,0,0.02)_1.5px,transparent_1.5px)] bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="container mx-auto px-4">
        {isLanding ? (
          <ScrollAnimation type="slide-up" className="max-w-2xl mx-auto text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-black/70 text-sm font-medium bg-white/70 px-4 py-2 rounded-lg border border-black/10 shadow-sm">Let's Chat</span>
            </div>
            <h2 className="text-2xl font-medium text-black mb-4 tracking-tight">Got an idea? Want to learn more?</h2>
            <p className="text-base text-black/80 mb-2 leading-relaxed">
              Whether you're a current member working on an idea, interested in Orbit, or just want to learn more about CEO—we're here to help.
            </p>
            <p className="text-sm text-black/60 font-light">
              Schedule a casual conversation with our team leads about entrepreneurship at Chapman.
            </p>
          </ScrollAnimation>
        ) : (
          <ScrollAnimation type="slide-up" className="mb-12">
            <div className="inline-block mb-4">
              <span className="text-black/80 text-sm font-medium bg-white/70 px-4 py-2 rounded-lg border border-black/10 shadow-sm">Connect With Us</span>
            </div>
            <h2 className="text-4xl font-bold text-black mb-6 tracking-tight">Coffee Chat</h2>
            <div className="max-w-2xl">
              <p className="text-lg text-black/80 mb-3 leading-relaxed">
                Whether you're working on a startup idea, curious about Orbit, or want to get more involved with CEO—we'd love to chat.
              </p>
              <p className="text-base text-black/70 leading-relaxed">
                Book a time with our team leads to discuss your entrepreneurial journey, get feedback on your ideas, or learn more about our programs.
              </p>
            </div>
          </ScrollAnimation>
        )}

        <StaggerContainer className={`grid md:grid-cols-3 gap-6 ${isLanding ? 'max-w-5xl' : 'max-w-6xl'} mx-auto`}>
          {teamMembers.map((member, index) => (
            <StaggerItem key={index} index={index}>
              <div 
                className={`
                  flex flex-col items-center p-6 rounded-xl 
                  bg-white/40 backdrop-blur-sm
                  border-2 border-black/10
                  ${isLanding 
                    ? 'shadow-[4px_4px_10px_rgba(0,0,0,0.05)]' 
                    : 'shadow-[6px_6px_12px_rgba(0,0,0,0.08)]'
                  }
                  transition-all duration-300 hover:bg-white/50
                  hover:shadow-[8px_8px_16px_rgba(0,0,0,0.12)]
                  relative overflow-hidden
                `}
              >
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
                
                <div className={`relative ${isLanding ? 'w-20 h-20' : 'w-28 h-28'} mb-4`}>
                  <div className="absolute inset-0 border-2 border-black/10 rounded-full" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                    sizes={isLanding ? "(max-width: 768px) 80px, 80px" : "(max-width: 768px) 112px, 112px"}
                    priority
                  />
                </div>
                <h3 className={`${isLanding ? 'text-base' : 'text-lg'} font-medium text-black mb-1 tracking-tight`}>{member.name}</h3>
                <p className="text-black/70 text-sm mb-4">{member.role}</p>
                <div className="flex gap-3 flex-wrap justify-center items-center">
                  <Link
                    href={member.calendly}
                    className={`
                      ${isLanding ? 'px-4 py-1.5 text-sm' : 'px-4 py-2 text-sm'} 
                      bg-black text-white rounded-lg 
                      shadow-[2px_2px_0px_rgba(0,0,0,0.1)]
                      hover:shadow-[4px_4px_0px_rgba(0,0,0,0.1)]
                      hover:translate-x-[-2px] hover:translate-y-[-2px]
                      transition-all duration-200
                      border border-black/90
                    `}
                    target="_blank"
                  >
                    Schedule a Chat
                  </Link>
                  <div className="flex gap-2">
                    {member.linkedin && (
                      <Link 
                        href={member.linkedin} 
                        target="_blank" 
                        className="bg-white/60 hover:bg-white/80 text-black/70 hover:text-black/90 
                                 border border-black/10 p-1.5 rounded-lg transition-colors duration-200
                                 shadow-[1px_1px_0px_rgba(0,0,0,0.05)]
                                 hover:shadow-[2px_2px_0px_rgba(0,0,0,0.1)]"
                      >
                        <svg className={`${isLanding ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </Link>
                    )}
                    {member.twitter && (
                      <Link 
                        href={member.twitter} 
                        target="_blank" 
                        className="bg-white/60 hover:bg-white/80 text-black/70 hover:text-black/90 
                                 border border-black/10 p-1.5 rounded-lg transition-colors duration-200
                                 shadow-[1px_1px_0px_rgba(0,0,0,0.05)]
                                 hover:shadow-[2px_2px_0px_rgba(0,0,0,0.1)]"
                      >
                        <svg className={`${isLanding ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M20 4l-6.768 6.768"></path>
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
} 