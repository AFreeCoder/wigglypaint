import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import FullscreenButton from '@/components/FullscreenButton'
import ResponsiveIframe from '@/components/ResponsiveIframe'
import { getGameBySlug } from '@/utils/gameUtils'
import { PageRenderer } from '@/app/_layout/renderer'
import { gameLayoutSections } from '@/config/game-layout'
import { ContentProvider } from '@/components/content-provider'

// 生成动态metadata，优化SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const game = getGameBySlug(slug)
  
  if (!game) {
    return {
      title: 'Game Not Found - WigglyPaint',
      description: 'The requested game was not found.'
    }
  }

  return {
    title: `${game.title} - Animated Drawing & Creative Game | WigglyPaint`,
    description: `${game.description} Free online tool with living, wiggly lines that bring your art to life! No downloads required.`,
    keywords: `${game.title}, free game, online game, ${game.category.toLowerCase()}, ${game.tags.join(', ').toLowerCase()}, browser game`,
    openGraph: {
      title: `${game.title} - Animated Drawing Tool | WigglyPaint`,
      description: `${game.description} Create living, wiggly art that moves and breathes!`,
      url: `https://wigglypaint.co/games/${slug}`,
      siteName: 'WigglyPaint',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${game.title} - Free Online Game`
        }
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${game.title} - Animated Drawing Tool | WigglyPaint`,
      description: `${game.description} Create living, wiggly art that moves!`,
      images: ['/twitter-image.png'],
    },
    alternates: {
      canonical: `https://wigglypaint.co/games/${slug}`,
    },
  }
}


export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const game = getGameBySlug(slug)
  if (!game) return notFound()

  // 游戏主内容组件
  const gameContent = game.type === 'iframe' && game.url ? (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden w-full">
      {/* 游戏iframe（响应式比例盒方案） */}
      <ResponsiveIframe
        id="game-iframe"
        src={game.url}
        title={game.title}
        width={(game as any).width}
        height={(game as any).height}
      />
      
      {/* 底部游戏信息栏 */}
      <div className="bg-gray-900 text-white px-3 sm:px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded flex items-center justify-center text-sm sm:text-lg">
            {game.image}
          </div>
          <div>
            <h3 className="font-bold text-xs sm:text-sm">{game.title}</h3>
            <p className="text-gray-300 text-xs hidden sm:block">played {game.playCount} times</p>
          </div>
        </div>
        <FullscreenButton iframeId="game-iframe" />
      </div>
    </div>
  ) : (
    <div className="bg-card border border-border rounded-xl shadow-sm p-8 text-center">
      <div className="text-6xl mb-6">{game.image}</div>
      <h2 className="text-4xl font-bold text-text mb-4">{game.title}</h2>
      <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">{game.description}</p>
      <div className="bg-gray-light rounded-lg p-8 mb-6 border-2 border-dashed border-border">
        <div className="text-8xl mb-4 opacity-50">{game.image}</div>
        <h3 className="text-2xl font-bold text-text mb-2">Game Coming Soon!</h3>
        <p className="text-gray-500 mb-4">
          This game is currently under development. Check back soon for the full gaming experience!
        </p>
        <div className="flex justify-center space-x-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full font-semibold">
            🚀 Coming Soon
          </span>
          <span className="inline-block bg-green-100 text-green-800 text-sm px-4 py-2 rounded-full font-semibold">
            🎮 Free to Play
          </span>
        </div>
      </div>

      {/* 游戏特性 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="text-2xl mb-2">🎯</div>
          <div className="font-semibold text-text">Easy to Learn</div>
          <div className="text-gray-500">Simple controls and rules</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="text-2xl mb-2">📱</div>
          <div className="font-semibold text-text">Mobile Friendly</div>
          <div className="text-gray-500">Play on any device</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="text-2xl mb-2">🆓</div>
          <div className="font-semibold text-text">Completely Free</div>
          <div className="text-gray-500">No downloads required</div>
        </div>
      </div>
    </div>
  )

  // 将动态游戏内容注入到 Hero section 的 content 属性中
  const sections = gameLayoutSections.map(s => {
    if (s.key === 'Hero') return { ...s, props: { ...(s.props||{}), content: gameContent } }
    if (s.key === 'HowToPlay' || s.key === 'FAQ') return { ...s, props: { ...(s.props||{}), game } }
    return s
  })

  return (
    <ContentProvider content={{}}>
      <main className="bg-bg">
        <PageRenderer sections={sections} />
      </main>
    </ContentProvider>
  )
}
