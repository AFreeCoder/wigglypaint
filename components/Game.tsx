'use client'

import { HOMEPAGE_GAME, GAMES_WITH_SLUGS } from '@/config/games'
import HomeGame from './HomeGame'
import FullscreenButton from './FullscreenButton'
import ResponsiveIframe from './ResponsiveIframe'
import PixelWindow from './PixelWindow'

interface GameProps {
  gameId?: number
}

export default function Game({ gameId }: GameProps) {
  const targetGameId = gameId || HOMEPAGE_GAME.id
  const gameConfig = GAMES_WITH_SLUGS.find(game => game.id === targetGameId)
  
  if (!gameConfig) {
    return (
      <div className="bg-card border border-border rounded-xl shadow-sm p-8 max-w-md mx-auto">
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
          <div className="bg-card border border-border rounded-xl shadow-sm p-8 max-w-md mx-auto">
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
      <PixelWindow title={gameConfig.title}>
        <ResponsiveIframe
          id="homepage-game-iframe"
          src={gameConfig.url}
          title={gameConfig.title}
          width={(gameConfig as any).width}
          height={(gameConfig as any).height}
        />
        
        <div className="bg-gray-900 text-white px-3 sm:px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded flex items-center justify-center text-sm sm:text-lg">
              {gameConfig.image}
            </div>
            <div>
              <h3 className="font-bold text-xs sm:text-sm">{gameConfig.title}</h3>
              <p className="text-gray-300 text-xs hidden sm:block">played {gameConfig.playCount} times</p>
            </div>
          </div>
          <FullscreenButton iframeId="homepage-game-iframe" />
        </div>
      </PixelWindow>
    )
  }

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-8 max-w-md mx-auto">
      <div className="text-center text-gray-600">
        Game type not supported
      </div>
    </div>
  )
}
