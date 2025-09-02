'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getQuickPlayGames, getCategoryColor } from '@/utils/gameUtils'
import { Game } from '@/types/game'

interface TryTheseProps {
  enabled?: boolean
  excludeGameId?: number
}

export default function TryThese({ enabled = true, excludeGameId }: TryTheseProps) {
  const [games, setGames] = useState<Game[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredGame, setHoveredGame] = useState<number | null>(null)
  const router = useRouter()

  useEffect(() => {
    // 在客户端加载后设置随机游戏，避免SSR不匹配
    setGames(getQuickPlayGames(4, excludeGameId))
    setIsLoaded(true)
  }, [excludeGameId])

  if (!enabled) return null

  const handlePlayGame = (slug: string) => {
    router.push(`/games/${slug}`)
  }

  // 加载中的占位符
  if (!isLoaded) {
    return (
      <div className="bg-card border border-border rounded-xl shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-text flex items-center">
            ⚡ Try These
          </h3>
          <button 
            onClick={() => router.push('/games')}
            className="text-text hover:text-brand text-xs font-semibold transition-colors"
          >
            More →
          </button>
        </div>
        
        {/* 桌面端占位符 */}
        <div className="space-y-3 hidden lg:block">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 rounded-lg animate-pulse">
              <div className="w-8 h-8 bg-muted rounded"></div>
              <div className="flex-1">
                <div className="h-3 bg-muted rounded mb-1"></div>
                <div className="h-2 w-12 bg-muted rounded"></div>
              </div>
            </div>
          ))}
        </div>

        {/* 移动端占位符 */}
        <div className="lg:hidden">
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex-shrink-0 w-32 bg-gray-light rounded-lg p-3 animate-pulse">
                <div className="text-center">
                  <div className="w-8 h-8 bg-muted rounded mx-auto mb-2"></div>
                  <div className="h-3 bg-muted rounded mb-2"></div>
                  <div className="h-2 w-16 bg-muted rounded mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-text flex items-center">
          ⚡ Try These
        </h3>
        <button 
          onClick={() => router.push('/games')}
          className="text-text hover:text-brand text-xs font-semibold transition-colors"
        >
          More →
        </button>
      </div>
      
      {/* 桌面端：垂直列表 */}
      <div className="space-y-2 hidden lg:block">
        {games.map((game) => (
          <div
            key={game.id}
            className={`group flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 border ${
              hoveredGame === game.id 
                ? 'bg-gray-light border-brand shadow-sm' 
                : 'bg-card border-border hover:bg-gray-50 hover:border-brand'
            }`}
            onMouseEnter={() => setHoveredGame(game.id)}
            onMouseLeave={() => setHoveredGame(null)}
            onClick={() => handlePlayGame(game.slug || game.title.toLowerCase().replace(/\s+/g, '-'))}
          >
            <div className="text-2xl transform group-hover:scale-110 transition-transform duration-200">
              {game.image}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className={`font-semibold text-sm leading-tight truncate transition-colors ${
                hoveredGame === game.id ? 'text-brand' : 'text-text'
              }`}>
                {game.title}
              </h4>
              <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium mt-1 ${getCategoryColor(game.category)}`}>
                {game.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 移动端：水平滚动 */}
      <div className="lg:hidden">
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {games.map((game) => (
            <div
              key={game.id}
              className="group flex-shrink-0 w-32 bg-card rounded-lg p-3 border-2 border-border hover:border-brand hover:shadow-sm cursor-pointer transition-all duration-200"
              onClick={() => handlePlayGame(game.slug || game.title.toLowerCase().replace(/\s+/g, '-'))}
            >
              <div className="text-center">
                <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-200">
                  {game.image}
                </div>
                <h4 className="font-semibold text-xs text-text leading-tight mb-2 group-hover:text-brand transition-colors">
                  {game.title}
                </h4>
                <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${getCategoryColor(game.category)}`}>
                  {game.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-border">
        <p className="text-xs text-gray-500 text-center">
          🎮 Quick games to try next
        </p>
      </div>
    </div>
  )
}
