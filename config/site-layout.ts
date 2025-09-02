export type SectionKey =
  | 'Hero' | 'PopularGames' | 'VariantGrid' | 'HowToPlay' | 'FAQ' | 'Ad'

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
    { key: 'Ad', visible: true, props: { slotId: 'AD-1', size: 'leaderboard' } },
    { key: 'PopularGames', visible: true },
    { key: 'Ad', visible: true, props: { slotId: 'AD-2', size: 'rectangle' } },
    { key: 'VariantGrid', visible: true },
    { key: 'Ad', visible: true, props: { slotId: 'AD-3', size: 'leaderboard' } },
    { key: 'HowToPlay', visible: true },
    { key: 'FAQ', visible: true },
    { key: 'Ad', visible: true, props: { slotId: 'AD-4', size: 'leaderboard' } },
  ],
}

