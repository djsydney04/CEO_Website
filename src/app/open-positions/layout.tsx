import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Open Positions',
}

export default function OpenPositionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 