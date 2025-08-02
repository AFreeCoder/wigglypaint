'use client'

import { useEffect } from 'react'
import AdSpace from '@/components/AdSpace'
import RelatedGames from '@/components/RelatedGames'
import TryThese from '@/components/TryThese'
import GameInfo from '@/components/GameInfo'
import CookieConsent from '@/components/CookieConsent'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { MODULE_CONFIG } from '@/config/modules'
import { Game } from '@/types/game'

interface GamePageLayoutProps {
  game: Game
  children: React.ReactNode
  showMobileTryThese?: boolean // 是否在移动端显示 Try These（某些页面可能不需要）
}

export default function GamePageLayout({ 
  game, 
  children, 
  showMobileTryThese = true 
}: GamePageLayoutProps) {
  
  // Cookie 处理逻辑（从首页迁移过来）
  useEffect(() => {
    if (MODULE_CONFIG.COOKIE_CONSENT === false) {
      if (localStorage.getItem('cookieConsent') !== 'all') {
        localStorage.setItem('cookieConsent', 'all')
      }
    }
  }, [])

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
            {/* 主内容（游戏组件或iframe等） */}
            <div className="mb-6 sm:mb-8">
              {children}
            </div>

            {/* Try These - 移动端（可选） */}
            {showMobileTryThese && (
              <div className="mb-6 sm:mb-8 lg:hidden">
                <TryThese enabled={MODULE_CONFIG.TRY_THESE} excludeGameId={game.id} />
              </div>
            )}

            {/* 底部广告位 */}
            <div className="mb-6 sm:mb-8">
              <AdSpace position="bottom" enabled={MODULE_CONFIG.BOTTOM_AD} />
            </div>

            {/* 热门游戏 */}
            <div className="mb-6 sm:mb-8">
              <RelatedGames enabled={MODULE_CONFIG.RELATED_GAMES} excludeGameId={game.id} />
            </div>

            {/* 游戏信息 */}
            <GameInfo enabled={MODULE_CONFIG.GAME_INFO} game={game} />
          </div>

          {/* 右侧推荐和广告位 - 桌面端 */}
          <div className="hidden lg:block lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <TryThese enabled={MODULE_CONFIG.TRY_THESE} excludeGameId={game.id} />
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