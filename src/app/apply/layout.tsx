import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply',
}

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 