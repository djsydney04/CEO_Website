'use client'

import React from 'react'
import Image from 'next/image'

export function LoadingSpinner() {
  return (
    <Image 
      src="/LoadingScreen.gif"
      alt="Loading..." 
      width={200} 
      height={200}
      priority
    />
  )
}

export default LoadingSpinner; 