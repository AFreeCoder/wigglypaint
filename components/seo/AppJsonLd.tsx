import React from 'react'
import { getBaseUrl } from '@/config/site'

export function AppJsonLd() {
  const baseUrl = getBaseUrl()
  const common = {
    name: 'WigglyPaint',
    description: 'WigglyPaint is a browser-based drawing tool with animated brushes, wiggly lines, sound feedback and GIF export. Works on desktop, tablet and mobile with no signup.',
    url: baseUrl,
  }

  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    ...common,
    applicationCategory: 'DrawingApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }

  const webApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    ...common,
    applicationCategory: 'DrawingApplication',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApp) }} />
    </>
  )
}
