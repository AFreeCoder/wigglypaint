'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getPopularGames, getCategoryColor, getDifficultyColor, renderStars } from '@/utils/gameUtils'
import { Game } from '@/types/game'

interface RelatedGamesProps {
  enabled?: boolean
  excludeGameId?: number
}


export default function RelatedGames({ enabled = true, excludeGameId }: RelatedGamesProps) {
  const [hoveredGame, setHoveredGame] = useState<number | null>(null)
  const [popularGames, setPopularGames] = useState<Game[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // 在客户端加载后设置热门游戏，避免SSR不匹配
    setPopularGames(getPopularGames(6, excludeGameId))
    setIsLoaded(true)
  }, [excludeGameId])

  if (!enabled) return null

  const handlePlayGame = (slug: string) => {
    router.push(`/games/${slug}`)
  }

  // 在加载完成前显示占位符
  if (!isLoaded) {
    return (
      <div className="bg-card border border-border rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-text">🔥 Most Popular Games</h3>
          <button 
            onClick={() => router.push('/games')}
            className="text-text hover:text-brand text-sm font-semibold transition-colors"
          >
            View All →
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-card rounded-xl border border-border overflow-hidden animate-pulse">
              {/* 图片占位符 */}
              <div className="w-full aspect-video bg-muted"></div>

              {/* 内容占位符 */}
              <div className="p-4">
                <div className="h-5 bg-muted rounded mb-3"></div>
                <div className="h-4 bg-muted rounded mb-2"></div>
                <div className="h-4 bg-muted rounded mb-4"></div>
                <div className="flex justify-between mb-4">
                  <div className="h-3 w-16 bg-muted rounded"></div>
                  <div className="h-3 w-16 bg-muted rounded"></div>
                  <div className="h-3 w-16 bg-muted rounded"></div>
                </div>
                <div className="h-9 bg-muted rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm mb-3">
            🎨 More creative experiences await you!
          </p>
          {/* <button 
            onClick={() => router.push('/games')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            Explore All Games
          </button> */}
        </div>
      </div>
    )
  }

  return (
    <div className="pixel-card pixel-card-hover p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl pixel-title text-text">🔥 Most Popular Games</h3>
        <button 
          onClick={() => router.push('/games')}
          className="text-text hover:text-brand text-sm font-semibold transition-colors"
        >
          View All →
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularGames.map((game) => (
          <div
            key={game.id}
            className="group pixel-card pixel-card-hover overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredGame(game.id)}
            onMouseLeave={() => setHoveredGame(null)}
            onClick={() => handlePlayGame(game.slug || game.title.toLowerCase().replace(/\s+/g, '-'))}
          >
            {/* 游戏图片区域 */}
            <div className="relative w-full aspect-video bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 flex items-center justify-center overflow-hidden">
              {game.thumbnail ? (
                <>
                  <img
                    src={game.thumbnail}
                    alt={game.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // 图片加载失败时显示 emoji 作为降级方案
                      e.currentTarget.style.display = 'none'
                      const fallback = e.currentTarget.nextElementSibling
                      if (fallback) fallback.classList.remove('hidden')
                    }}
                  />
                  <div className="hidden text-8xl">
                    {game.image}
                  </div>
                </>
              ) : (
                <div className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                  {game.image}
                </div>
              )}
              {/* 评分标签 */}
              <div className="absolute top-3 right-3 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm">
                <span className="text-yellow-500 text-sm">⭐</span>
                <span className="text-xs font-semibold text-gray-700">{game.rating}</span>
              </div>
              {/* 分类标签 */}
              <div className="absolute top-3 left-3">
                <span className={`inline-block border text-xs px-2 py-1 rounded-full font-medium bg-white/90 backdrop-blur-sm ${getCategoryColor(game.category)}`}>
                  {game.category}
                </span>
              </div>
            </div>

            {/* 内容区域 */}
            <div className="p-4 flex flex-col">
              {/* 游戏名称 */}
              <h4 className="font-bold text-lg text-text mb-2 group-hover:text-brand transition-colors line-clamp-1">
                {game.title}
              </h4>

              {/* 游戏简介 */}
              <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed flex-grow">
                {game.description}
              </p>

              {/* 游戏信息 */}
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <span>👥</span>
                  <span>{game.players || '1 Player'}</span>
                </span>
                <span className="flex items-center gap-1">
                  <span>🎯</span>
                  <span>{game.playCount}</span>
                </span>
                <span className={`font-semibold ${getDifficultyColor(game.difficulty)}`}>
                  {game.difficulty}
                </span>
              </div>

              {/* Play 按钮 */}
              <button
                className="w-full pixel-button"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePlayGame(game.slug || game.title.toLowerCase().replace(/\s+/g, '-'))
                }}
              >
                {hoveredGame === game.id ? '🚀 Play Now' : 'Play Game'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-gray-500 text-sm mb-3">
          🔥 These games are loved by millions!
        </p>
        {/* <button 
          onClick={() => router.push('/games')}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
        >
          Explore All Games
        </button> */}
      </div>
    </div>
  )
} 
