'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getRandomGames, getCategoryColor, getDifficultyColor, renderStars } from '@/utils/gameUtils'
import { Game } from '@/types/game'

interface RelatedGamesProps {
  enabled?: boolean
}


export default function RelatedGames({ enabled = true }: RelatedGamesProps) {
  const [hoveredGame, setHoveredGame] = useState<number | null>(null)
  const [relatedGames, setRelatedGames] = useState<Game[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // 在客户端加载后设置随机游戏，避免SSR不匹配
    setRelatedGames(getRandomGames(6))
    setIsLoaded(true)
  }, [])

  if (!enabled) return null

  const handlePlayGame = (slug: string) => {
    router.push(`/games/${slug}`)
  }

  // 在加载完成前显示占位符
  if (!isLoaded) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">🎮 More Games You'll Love</h3>
          <button 
            onClick={() => router.push('/games')}
            className="text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors"
          >
            View All →
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100 animate-pulse">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 bg-gray-200 rounded"></div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded mb-3"></div>
              <div className="flex justify-between mb-3">
                <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                <div className="h-4 w-12 bg-gray-200 rounded"></div>
              </div>
              <div className="flex justify-between mb-3">
                <div className="h-3 w-16 bg-gray-200 rounded"></div>
                <div className="h-3 w-16 bg-gray-200 rounded"></div>
              </div>
              <div className="h-8 bg-gray-200 rounded-lg"></div>
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
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-800">🎮 More Games You'll Love</h3>
        <button 
          onClick={() => router.push('/games')}
          className="text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors"
        >
          View All →
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedGames.map((game) => (
          <div
            key={game.id}
            className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
            onMouseEnter={() => setHoveredGame(game.id)}
            onMouseLeave={() => setHoveredGame(null)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="text-4xl transform group-hover:scale-110 transition-transform duration-200">
                {game.image}
              </div>
              <div className="flex items-center space-x-1 text-xs">
                {renderStars(game.rating)}
              </div>
            </div>
            
            <h4 className="font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
              {game.title}
            </h4>
            
            <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed">
              {game.description}
            </p>
            
            <div className="flex items-center justify-between mb-3">
              <span className={`inline-block border text-xs px-2 py-1 rounded-full font-medium ${getCategoryColor(game.category)}`}>
                {game.category}
              </span>
              <span className={`text-xs font-semibold ${getDifficultyColor(game.difficulty)}`}>
                {game.difficulty}
              </span>
            </div>
            
            <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
              <span>👥 {game.players || '1 Player'}</span>
              <span>🎯 {game.playCount} plays</span>
            </div>
            
            <button 
              className={`w-full py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 ${
                hoveredGame === game.id
                  ? 'bg-blue-500 text-white shadow-md transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handlePlayGame(game.slug || game.title.toLowerCase().replace(/\s+/g, '-'))}
            >
              {hoveredGame === game.id ? '🚀 Play Now' : 'Play Game'}
            </button>
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