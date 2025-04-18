'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const ThreeSceneClient = dynamic(
  () => import('./three-scene').then(mod => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="h-[600px] w-full bg-black/5 animate-pulse" />
    )
  }
)

export default function ThreeSceneWrapper() {
  return (
    <div className="relative">
      {!ThreeSceneClient && (
        <div className="h-[600px] w-full bg-black/5 animate-pulse" />
      )}
      
      {ThreeSceneClient && (
        <Suspense fallback={<div className="h-[600px] w-full bg-black/5 animate-pulse" />}>
          <ThreeSceneClient />
        </Suspense>
      )}
    </div>
  )
} 