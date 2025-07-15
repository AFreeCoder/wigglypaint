'use client'

import { HOMEPAGE_GAME, GAMES_WITH_SLUGS } from '@/config/games'
import HomeGame from './HomeGame'

interface GameProps {
  gameId?: number
}

export default function Game({ gameId }: GameProps) {
  const targetGameId = gameId || HOMEPAGE_GAME.id
  const gameConfig = GAMES_WITH_SLUGS.find(game => game.id === targetGameId)
  
  if (!gameConfig) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
        <div className="text-center text-red-600">
          Game not found
        </div>
      </div>
    )
  }

  // 根据游戏类型渲染不同组件
  if (gameConfig.type === 'local') {
    switch (gameConfig.id) {
      case 3: // Number Guessing Game
        return <HomeGame />
      default:
        return (
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
            <div className="text-center text-gray-600">
              Local game component not implemented
            </div>
          </div>
        )
    }
  }

  // iframe游戏类型
  if (gameConfig.type === 'iframe' && gameConfig.url) {
    return (
      <div className="w-full h-screen">
        <iframe
          src={gameConfig.url}
          className="w-full h-full border-0"
          title={gameConfig.title}
        />
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
      <div className="text-center text-gray-600">
        Game type not supported
      </div>
    </div>
  )
}