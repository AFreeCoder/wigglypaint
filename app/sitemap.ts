import type { MetadataRoute } from 'next'
import { GAMES_WITH_SLUGS } from '@/config/games'
import { getBaseUrl } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getBaseUrl()
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/games`, lastModified: now },
    { url: `${base}/privacy`, lastModified: now },
    { url: `${base}/terms`, lastModified: now },
  ]

  const gameRoutes: MetadataRoute.Sitemap = GAMES_WITH_SLUGS.map((g) => ({
    url: `${base}/games/${g.slug}`,
    lastModified: now,
  }))

  return [...staticRoutes, ...gameRoutes]
}
