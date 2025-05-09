'use client'

import { ReactNode } from 'react'
import { motion, useScroll, useTransform, useAnimation, useInView, Variants } from 'framer-motion'
import { useRef, useEffect } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  type?: 'fade' | 'slide-up' | 'slide-right' | 'scale' | 'float'
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
}

export function ScrollAnimation({
  children,
  type = 'fade',
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = '',
  once = true
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const controls = useAnimation()
  
  // Variants for different animation types
  const variants: Variants = {
    hidden: {
      opacity: type === 'fade' || type === 'slide-up' || type === 'slide-right' || type === 'scale' ? 0 : 1,
      y: type === 'slide-up' ? 70 : 0,
      x: type === 'slide-right' ? -70 : 0,
      scale: type === 'scale' ? 0.8 : 1,
      rotateX: type === 'fade' ? 10 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: duration * 1.2,
        delay,
        ease: [0.2, 0.65, 0.3, 0.9], // Enhanced smooth easing
        opacity: {
          duration: duration * 1.5,
          ease: [0.2, 0.65, 0.3, 0.9]
        },
        y: {
          type: "spring",
          damping: 15,
          stiffness: 100
        },
        scale: {
          type: "spring",
          damping: 20,
          stiffness: 100
        }
      }
    },
    floating: {
      y: [0, -15, 0],
      rotate: [0, -1, 0, 1, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'easeInOut'
      }
    }
  }

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
      if (type === 'float') {
        controls.start('floating')
      }
    }
  }, [isInView, controls, type])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ParallaxSection({
  children,
  speed = 0.5,
  className = ''
}: {
  children: ReactNode
  speed?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])
  
  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  delay = 0.1,
  className = ''
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: delay
      }
    }
  }
  
  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  index = 0,
  className = ''
}: {
  children: ReactNode
  index?: number
  className?: string
}) {
  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: index * 0.1
      }
    }
  }
  
  return (
    <motion.div
      variants={item}
      className={className}
    >
      {children}
    </motion.div>
  )
} 