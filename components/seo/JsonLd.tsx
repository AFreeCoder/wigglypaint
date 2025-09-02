import React from 'react'

type JsonLdProps = {
  data: Record<string, any>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD must be raw JSON, not JSX structures
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function SiteJsonLd() {
  const baseUrl = 'https://wigglypaint.co'
  const siteName = 'WigglyPaint'

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/games?query={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: baseUrl,
    logo: `${baseUrl}/icon-192x192.png`,
  }

  return (
    <>
      <JsonLd data={website} />
      <JsonLd data={organization} />
    </>
  )
}

