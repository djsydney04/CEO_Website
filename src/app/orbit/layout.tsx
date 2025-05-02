import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chapman Orbit',
}

export default function OrbitLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 