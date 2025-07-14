import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Games - Free Online Games | Fun Online Games',
  description: 'Browse our complete collection of free online games. Filter by category, tags, and difficulty to find your perfect game!',
}

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}