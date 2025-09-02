import { PageRenderer } from '@/app/_layout/renderer'
import { siteLayout } from '@/config/site-layout'
import { ContentProvider } from '@/components/content-provider'

export default function Home() {
  const page = siteLayout
  return (
    <ContentProvider content={{}}>
      <main className="bg-bg">
        {page ? <PageRenderer sections={page.sections} /> : null}
      </main>
    </ContentProvider>
  )
}
