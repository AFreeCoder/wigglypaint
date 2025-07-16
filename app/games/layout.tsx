import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Games - WigglyPaint & More Creative Games',
  description: 'Explore WigglyPaint and other creative drawing games. Filter by category, tags, and difficulty to find your perfect creative experience!',
}

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}