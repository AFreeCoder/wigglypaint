export type SectionKey =
  | 'Hero' | 'PopularGames' | 'Intro' | 'HowToPlay' | 'ProTips' | 'FAQ' | 'VariantGrid' | 'Ad' | 'Features'

export type SectionConfig = {
  key: SectionKey
  visible?: boolean
  props?: Record<string, any>
}

export type PageConfig = {
  path: '/'
  sections: SectionConfig[]
}

export const siteLayout: PageConfig = {
  path: '/',
  sections: [
    { key: 'Hero', visible: true, props: { ctaPrimary: 'Play Now' } },
    { key: 'PopularGames', visible: true },
    { key: 'Ad', visible: false, props: { slotId: 'AD-1', size: 'leaderboard' } },
    { key: 'Intro', visible: true },
    { key: 'Ad', visible: false, props: { slotId: 'AD-2', size: 'rectangle' } },
    { key: 'HowToPlay', visible: true },
    { key: 'ProTips', visible: true },
    { key: 'FAQ', visible: true },
    { key: 'Ad', visible: false, props: { slotId: 'AD-3', size: 'leaderboard' } },
    { key: 'Features', visible: false },
    { key: 'VariantGrid', visible: false },
    { key: 'Ad', visible: false, props: { slotId: 'AD-4', size: 'leaderboard' } },
  ],
}
