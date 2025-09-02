export interface GameInfo {
  introduction?: {
    title: string
    description: string
    features: Array<{
      icon: string
      title: string
      description: string
    }>
  }
  howToPlay?: {
    title: string
    steps: Array<{
      step: number
      title: string
      description: string
    }>
    tips?: string[]
  }
  faq?: Array<{
    question: string
    answer: string
  }>
}


// 从 config 文件中导入类型定义
import type { GameCategory, GameTag, GameDifficulty } from '@/config/games'
export type { GameCategory, GameTag, GameDifficulty, Game } from '@/config/games'

export interface GameFilters {
  category: GameCategory | 'All'
  tags: GameTag[]
  difficulty: GameDifficulty | 'All'
}
