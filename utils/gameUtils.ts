import { Game, GameCategory, GameTag, GameDifficulty } from '@/types/game'
import { GAMES_WITH_SLUGS } from '@/config/games'
import React from 'react'

// 根据slug获取游戏
export function getGameBySlug(slug: string): Game | undefined {
  return GAMES_WITH_SLUGS.find(game => game.slug === slug)
}

// 根据ID获取游戏
export function getGameById(id: number): Game | undefined {
  return GAMES_WITH_SLUGS.find(game => game.id === id)
}

// 筛选游戏
export function filterGames(
  games: Game[],
  category: GameCategory | 'All' = 'All',
  tags: GameTag[] = [],
  difficulty: GameDifficulty | 'All' = 'All'
): Game[] {
  return games.filter(game => {
    const categoryMatch = category === 'All' || game.category === category
    const tagsMatch = tags.length === 0 || tags.some(tag => game.tags.includes(tag))
    const difficultyMatch = difficulty === 'All' || game.difficulty === difficulty
    
    return categoryMatch && tagsMatch && difficultyMatch
  })
}

// 获取随机游戏
export function getRandomGames(count: number, excludeId?: number): Game[] {
  const availableGames = excludeId 
    ? GAMES_WITH_SLUGS.filter(game => game.id !== excludeId)
    : GAMES_WITH_SLUGS
    
  return availableGames
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
}

// 获取相关游戏（基于类别和标签）
export function getRelatedGames(currentGame: Game, count: number = 6): Game[] {
  const relatedGames = GAMES_WITH_SLUGS
    .filter(game => game.id !== currentGame.id)
    .map(game => {
      let score = 0
      
      // 相同类别加分
      if (game.category === currentGame.category) score += 3
      
      // 相同标签加分
      const commonTags = game.tags.filter(tag => currentGame.tags.includes(tag))
      score += commonTags.length
      
      // 相同难度加分
      if (game.difficulty === currentGame.difficulty) score += 1
      
      return { game, score }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(item => item.game)
    
  return relatedGames
}

// 获取类别颜色样式
export function getCategoryColor(category: GameCategory): string {
  switch (category) {
    case 'Puzzle': return 'bg-purple-100 text-purple-800 border-purple-200'
    case 'Arcade': return 'bg-red-100 text-red-800 border-red-200'
    case 'Strategy': return 'bg-blue-100 text-blue-800 border-blue-200'
    case 'Word': return 'bg-green-100 text-green-800 border-green-200'
    case 'Education': return 'bg-orange-100 text-orange-800 border-orange-200'
    case 'Casual': return 'bg-pink-100 text-pink-800 border-pink-200'
    case 'Racing': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    default: return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

// 获取难度颜色样式
export function getDifficultyColor(difficulty: GameDifficulty): string {
  switch (difficulty) {
    case 'Easy': return 'text-green-600'
    case 'Medium': return 'text-yellow-600'
    case 'Hard': return 'text-red-600'
    default: return 'text-gray-600'
  }
}

// 获取星级评分的星星数量
export function getStarsCount(rating: number): { full: number; empty: number } {
  const full = Math.floor(rating)
  const empty = 5 - full
  return { full, empty }
}

// 渲染星级评分
export function renderStars(rating: number): React.ReactElement[] {
  const stars: React.ReactElement[] = []
  for (let i = 1; i <= 5; i++) {
    stars.push(
      React.createElement('span', {
        key: i,
        className: i <= Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
      }, '⭐')
    )
  }
  return stars
}