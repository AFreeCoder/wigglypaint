import Game from '@/components/Game'
import GamePageLayout from '@/components/GamePageLayout'
import { HOMEPAGE_GAME, GAMES_WITH_SLUGS } from '@/config/games'

export default function Home() {
  // 获取首页游戏配置
  const homepageGame = GAMES_WITH_SLUGS.find(game => game.id === HOMEPAGE_GAME.id)

  if (!homepageGame) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center text-red-600">
          Homepage game configuration not found
        </div>
      </div>
    )
  }

  return (
    <GamePageLayout game={homepageGame}>
      <Game />
    </GamePageLayout>
  )
} 