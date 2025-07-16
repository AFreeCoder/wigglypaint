'use client'

import Game from '@/components/Game'
import AdSpace from '@/components/AdSpace'
import RelatedGames from '@/components/RelatedGames'
import GameInfo from '@/components/GameInfo'
import CookieConsent from '@/components/CookieConsent'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { MODULE_CONFIG } from '@/config/modules'
import { HOMEPAGE_GAME, GAMES_WITH_SLUGS } from '@/config/games'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  // 如果关闭Cookie弹窗，自动Accept All
  useEffect(() => {
    if (MODULE_CONFIG.COOKIE_CONSENT === false) {
      if (localStorage.getItem('cookieConsent') !== 'all') {
        localStorage.setItem('cookieConsent', 'all')
      }
    }
  }, [])

  // 获取首页游戏配置
  const homepageGame = GAMES_WITH_SLUGS.find(game => game.id === HOMEPAGE_GAME.id)

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
            {/* 游戏组件 */}
            <div className="mb-6 sm:mb-8">
              <Game />
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
            <GameInfo enabled={MODULE_CONFIG.GAME_INFO} game={homepageGame} />
          </div>

          {/* 右侧广告位 - 桌面端 */}
          <div className="hidden lg:block lg:w-48 flex-shrink-0">
            <div className="sticky top-24">
              <AdSpace position="right" enabled={MODULE_CONFIG.RIGHT_AD} />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Cookie 同意横幅 */}
      {MODULE_CONFIG.COOKIE_CONSENT && <CookieConsent />}
    </div>
  )
} 