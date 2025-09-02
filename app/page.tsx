import { PageRenderer } from '@/app/_layout/renderer'
import { siteLayout } from '@/config/site-layout'
import { ContentProvider } from '@/components/content-provider'
import type { Metadata } from 'next'
import { AppJsonLd } from '@/components/seo/AppJsonLd'

export const metadata: Metadata = {
  title: 'WigglyPaint – Animated Drawing Tool for Living Lines & GIFs',
  description: 'Create with WigglyPaint: animated brushes, wiggly lines, sound feedback, GIF export, no signup, works on desktop and mobile. Start drawing now.',
}

export default function Home() {
  const page = siteLayout
  return (
    <ContentProvider content={{}}>
      <main>
        {page ? <PageRenderer sections={page.sections} /> : null}
        <AppJsonLd />
      </main>
    </ContentProvider>
  )
}
