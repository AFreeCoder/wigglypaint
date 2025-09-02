import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MODULE_CONFIG } from '@/config/modules'
import ThemeToggleBar from '@/components/ThemeToggleBar'
import { SiteJsonLd } from '@/components/seo/JsonLd'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://wigglypaint.co'),
  title: 'WigglyPaint - Create Animated Pixel Art, Comics & Doodles with Wiggly Lines',
  description: 'Draw with 8 unique animated brushes that create wiggly, jiggly lines with personality! Free online drawing tool for animated pixel art, GIF creation, and living doodles. No signup required - works on all devices.',
  keywords: 'wiggly paint, animated drawing, pixel art, GIF maker, online drawing tool, animated brushes, wiggly lines, jiggly drawing, free drawing app, animated pixel art, digital doodles, living lines, GIF creation, creative drawing',
  authors: [{ name: 'WigglyPaint Team' }],
  creator: 'WigglyPaint',
  publisher: 'WigglyPaint',
  robots: 'index, follow',
  openGraph: {
    title: 'WigglyPaint - Create Animated Pixel Art, Comics & Doodles with Wiggly Lines',
    description: 'Draw with 8 unique animated brushes that create wiggly, jiggly lines with personality! Free online drawing tool for animated pixel art and GIF creation.',
    url: 'https://wigglypaint.co',
    siteName: 'WigglyPaint',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WigglyPaint - Creative Drawing & Painting Game'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WigglyPaint - Create Animated Pixel Art, Comics & Doodles with Wiggly Lines',
    description: 'Draw with 8 unique animated brushes that create wiggly, jiggly lines with personality! Free online drawing tool for animated pixel art and GIF creation.',
    images: ['/twitter-image.png'],
    creator: '@wigglypaint',
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
    canonical: 'https://wigglypaint.co',
  },
  category: 'games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="A">
      <body className={`${inter.className} bg-bg text-text`}>
        <NavBar />
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
        <div className="pixel-grid-lg">
          {children}
          <Footer />
        </div>
        <ThemeToggleBar />
        {/* SEO: JSON-LD for WebSite and Organization */}
        <SiteJsonLd />
        {/* Cookie 同意横幅（按配置显示） */}
        {MODULE_CONFIG.COOKIE_CONSENT && <CookieConsent />}
      </body>
    </html>
  )
} 
