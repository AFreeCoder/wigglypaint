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
      icon: string
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

export interface Game {
  id: number
  title: string
  description: string
  image: string
  category: GameCategory
  tags: GameTag[]
  difficulty: GameDifficulty
  players: string
  rating: number
  playCount: string
  slug?: string // 自动生成的URL slug
  url?: string // 游戏URL（用于iframe嵌入）
  type?: 'local' | 'iframe' // 游戏类型
  scale?: number // iframe缩放比例，默认为1
  gameInfo?: GameInfo // 游戏详细信息配置
}

export type GameCategory = 
  | 'Puzzle' 
  | 'Arcade' 
  | 'Strategy' 
  | 'Word' 
  | 'Education' 
  | 'Casual' 
  | 'Racing'

export type GameTag = 
  | 'Memory' 
  | 'Cards' 
  | 'Classic' 
  | 'Arcade' 
  | 'Retro' 
  | 'Logic' 
  | 'Quick' 
  | 'Vocabulary' 
  | 'Letters' 
  | 'Brain' 
  | 'Colors' 
  | 'Matching' 
  | 'Visual' 
  | 'Math' 
  | 'Numbers' 
  | 'Learning' 
  | 'Relaxing' 
  | 'Fun' 
  | 'Chess' 
  | 'Strategy' 
  | 'Sliding' 
  | 'Speed' 
  | 'Cars' 
  | 'Racing'
  | 'Parkour'
  | 'Platform'
  | 'Skill'
  | 'Drawing'
  | 'Animation'
  | 'Creative'
  | 'Art'

export type GameDifficulty = 'Easy' | 'Medium' | 'Hard'

export interface GameFilters {
  category: GameCategory | 'All'
  tags: GameTag[]
  difficulty: GameDifficulty | 'All'
}