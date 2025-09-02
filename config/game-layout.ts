import type { SectionConfig } from '@/app/_layout/renderer'

export const gameLayoutSections: SectionConfig[] = [
  { key: 'Hero', visible: true, props: { ctaPrimary: 'Play Now' } },
  { key: 'Ad', visible: false, props: { slotId: 'GAME-AD-1', size: 'rectangle' } },
  { key: 'PopularGames', visible: true },
  { key: 'Ad', visible: false, props: { slotId: 'GAME-AD-2', size: 'banner' } },
  { key: 'HowToPlay', visible: true },
  { key: 'FAQ', visible: true },
  { key: 'Ad', visible: false, props: { slotId: 'GAME-AD-3', size: 'leaderboard' } },
]

