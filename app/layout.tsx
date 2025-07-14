import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MODULE_CONFIG } from '@/config/modules'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fun Online Games - Play Free Games Online',
  description: 'Play the best free online games including puzzles, arcade games, strategy games, and more. No downloads required! Enjoy hours of entertainment with our collection of browser games.',
  keywords: 'free games, online games, browser games, puzzles, arcade games, strategy games, word games, casual games, no download games',
  authors: [{ name: 'Fun Online Games Team' }],
  creator: 'Fun Online Games',
  publisher: 'Fun Online Games',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Fun Online Games - Play Free Games Online',
    description: 'Play the best free online games including puzzles, arcade games, strategy games, and more. No downloads required!',
    url: 'https://funonlinegames.com',
    siteName: 'Fun Online Games',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fun Online Games - Free Browser Games'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fun Online Games - Play Free Games Online',
    description: 'Play the best free online games including puzzles, arcade games, strategy games, and more. No downloads required!',
    images: ['/twitter-image.png'],
    creator: '@funonlinegames',
  },
  icons: {
    icon: [
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#3B82F6' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://funonlinegames.com',
  },
  category: 'games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google Analytics */}
        {MODULE_CONFIG.GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${MODULE_CONFIG.GA_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${MODULE_CONFIG.GA_ID}');
                `,
              }}
            />
          </>
        )}
        {children}
      </body>
    </html>
  )
} 