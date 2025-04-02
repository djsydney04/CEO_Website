'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const CodeCubeClient = dynamic(() => import('./code-cube'), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-square bg-white animate-pulse" />
  )
})

export default function CodeCubeWrapper() {
  return (
    <Suspense fallback={
      <div className="w-full aspect-square bg-white animate-pulse" />
    }>
      <CodeCubeClient />
    </Suspense>
  )
} 