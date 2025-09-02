'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import AdSpace from '@/components/AdSpace'
// NavBar is provided globally in RootLayout
import { MODULE_CONFIG } from '@/config/modules'
import { GAMES_WITH_SLUGS, GAME_CATEGORIES, GAME_TAGS, GAME_DIFFICULTIES } from '@/config/games'
import { GameTag, GameCategory, GameDifficulty } from '@/types/game'
import { getCategoryColor, getDifficultyColor, renderStars, filterGames } from '@/utils/gameUtils'

export default function GamesPage() {
  const [selectedCategory, setSelectedCategory] = useState<GameCategory | 'All'>('All')
  const [selectedTags, setSelectedTags] = useState<GameTag[]>([])
  const [selectedDifficulty, setSelectedDifficulty] = useState<GameDifficulty | 'All'>('All')

  const filteredGames = useMemo(() => {
    return filterGames(GAMES_WITH_SLUGS, selectedCategory, selectedTags, selectedDifficulty)
  }, [selectedCategory, selectedTags, selectedDifficulty])


  const handleTagToggle = (tag: GameTag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const handlePlayGame = (slug: string) => {
    window.location.href = `/games/${slug}`
  }

  return (
    <div className="min-h-screen">

      {/* 主要内容区域 */}
      <main className="max-w-6xl mx-auto px-0 sm:px-0 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* 左侧广告位 - 桌面端（仅启用时占位） */}
          {MODULE_CONFIG.LEFT_AD && (
            <div className="hidden lg:block lg:w-48 flex-shrink-0">
              <div className="sticky top-24">
                <AdSpace position="left" enabled={MODULE_CONFIG.LEFT_AD} />
              </div>
            </div>
          )}

          {/* 游戏主区域 */}
          <div className="flex-1 max-w-none">
            {/* 筛选区域 */}
            <div className="pixel-card p-6 mb-6">
              <h2 className="text-xl pixel-title text-text mb-4">🔍 Filter Games</h2>
              
              {/* 游戏类别筛选 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {GAME_CATEGORIES.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`pixel-chip ${selectedCategory === category ? 'bg-brand text-brand-foreground' : ''}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* 游戏标签筛选 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedTags([])}
                    className={`pixel-chip ${selectedTags.length === 0 ? 'bg-brand text-brand-foreground' : ''}`}
                  >
                    All
                  </button>
                  {GAME_TAGS.map(tag => (
                    <button
                      key={tag}
                      onClick={() => handleTagToggle(tag)}
                      className={`pixel-chip ${selectedTags.includes(tag) ? 'bg-brand text-brand-foreground' : ''}`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* 难度筛选 */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Difficulty</h3>
                <div className="flex flex-wrap gap-2">
                  {GAME_DIFFICULTIES.map(difficulty => (
                    <button
                      key={difficulty}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={`pixel-chip ${selectedDifficulty === difficulty ? 'bg-brand text-brand-foreground' : ''}`}
                    >
                      {difficulty}
                    </button>
                  ))}
                </div>
              </div>

              {/* 筛选结果统计 */}
              <div className="text-sm text-gray-500 pt-4 border-t border-gray-200">
                Showing {filteredGames.length} game{filteredGames.length !== 1 ? 's' : ''} 
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                {selectedTags.length > 0 && ` with tags: ${selectedTags.join(', ')}`}
                {selectedDifficulty !== 'All' && ` (${selectedDifficulty} difficulty)`}
              </div>
            </div>

            {/* 游戏列表 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
              {filteredGames.map((game) => (
                <div
                  key={game.id}
                  className="group pixel-card pixel-card-hover p-4 cursor-pointer"
                >
                  <div className="text-center mb-3">
                    <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-200">
                      {game.image}
                    </div>
                    <div className="flex items-center justify-center space-x-1 text-xs mb-2">
                      {renderStars(game.rating)}
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-text mb-2 group-hover:text-brand transition-colors text-center">
                    {game.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed text-center">
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
                    <span>👥 {game.players}</span>
                    <span>🎯 {game.playCount} plays</span>
                  </div>
                  
                  <button 
                    className="w-full pixel-button"
                    onClick={() => handlePlayGame(game.slug!)}
                  >
                    {game.type === 'iframe' ? '🎮 Play Online' : '🚀 Play Now'}
                  </button>
                </div>
              ))}
            </div>

            {/* 空状态 */}
            {filteredGames.length === 0 && (
              <div className="pixel-card p-8 text-center">
                <div className="text-6xl mb-4">🎮</div>
                <h3 className="text-2xl pixel-title text-text mb-2">No Games Found</h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your filters to find more games.
                </p>
                <button 
                  onClick={() => {
                    setSelectedCategory('All')
                    setSelectedTags([])
                    setSelectedDifficulty('All')
                  }}
                  className="pixel-button"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* 底部广告位 */}
            <div className="mb-6 sm:mb-8">
              <AdSpace position="bottom" enabled={MODULE_CONFIG.BOTTOM_AD} />
            </div>
          </div>

          {/* 右侧广告位 - 桌面端（仅启用时占位） */}
          {MODULE_CONFIG.RIGHT_AD && (
            <div className="hidden lg:block lg:w-48 flex-shrink-0">
              <div className="sticky top-24">
                <AdSpace position="right" enabled={MODULE_CONFIG.RIGHT_AD} />
              </div>
            </div>
          )}
      </div>
      </main>

    </div>
  )
}
