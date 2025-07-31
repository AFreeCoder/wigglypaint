import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import RelatedGames from '@/components/RelatedGames'
import AdSpace from '@/components/AdSpace'
import GameInfo from '@/components/GameInfo'
import CookieConsent from '@/components/CookieConsent'
import Footer from '@/components/Footer'
import FullscreenButton from '@/components/FullscreenButton'
import Header from '@/components/Header'
import { MODULE_CONFIG } from '@/config/modules'
import { GAMES_WITH_SLUGS } from '@/config/games'
import { getGameBySlug, getCategoryColor, getDifficultyColor, renderStars } from '@/utils/gameUtils'
import Link from 'next/link'

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* 头部 */}
      <Header />

      {/* 主要内容区域 */}
      <main className="max-w-none mx-auto px-4 py-6 sm:px-6 sm:py-8" style={{ maxWidth: '96rem' }}>
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* 左侧广告位 - 桌面端 */}
          <div className="hidden lg:block lg:w-48 flex-shrink-0">
            <div className="sticky top-24">
              <AdSpace position="left" enabled={MODULE_CONFIG.LEFT_AD} />
            </div>
          </div>

          {/* 游戏主区域 */}
          <div className="flex-1 max-w-none">
            {/* 游戏主内容 */}
            <div className="mb-6 sm:mb-8">
              {game.type === 'iframe' && game.url ? (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto">
                  {/* 游戏iframe */}
                  <div className="relative overflow-hidden">
                    <iframe
                      src={game.url}
                      className="w-full h-[600px] border-0"
                      title={game.title}
                      allowFullScreen
                      loading="lazy"
                      id="game-iframe"
                      style={{ 
                        transform: `scale(${game.scale || 1})`, 
                        transformOrigin: 'center' 
                      }}
                    />
                  </div>
                  
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
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <div className="text-6xl mb-6">{game.image}</div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">{game.title}</h2>
                  <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">{game.description}</p>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 mb-6 border-2 border-dashed border-blue-200">
                    <div className="text-8xl mb-4 opacity-50">{game.image}</div>
                    <h3 className="text-2xl font-bold text-gray-700 mb-2">Game Coming Soon!</h3>
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
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="font-semibold text-gray-700">Easy to Learn</div>
                    <div className="text-gray-500">Simple controls and rules</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="font-semibold text-gray-700">Mobile Friendly</div>
                    <div className="text-gray-500">Play on any device</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl mb-2">🆓</div>
                    <div className="font-semibold text-gray-700">Completely Free</div>
                    <div className="text-gray-500">No downloads required</div>
                  </div>
                </div>
                </div>
              )}
            </div>

            {/* 底部广告位 */}
            <div className="mb-6 sm:mb-8">
              <AdSpace position="bottom" enabled={MODULE_CONFIG.BOTTOM_AD} />
            </div>

            {/* 相关游戏 */}
            <div className="mb-6 sm:mb-8">
              <RelatedGames enabled={MODULE_CONFIG.RELATED_GAMES} />
            </div>

            {/* 游戏信息 */}
            <GameInfo enabled={MODULE_CONFIG.GAME_INFO} game={game} />
          </div>

          {/* 右侧广告位 - 桌面端 */}
          <div className="hidden lg:block lg:w-48 flex-shrink-0">
            <div className="sticky top-24">
              <AdSpace position="right" enabled={MODULE_CONFIG.RIGHT_AD} />
            </div>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <Footer />

      {/* Cookie 同意横幅 */}
      {MODULE_CONFIG.COOKIE_CONSENT && <CookieConsent />}
    </div>
  )
} 