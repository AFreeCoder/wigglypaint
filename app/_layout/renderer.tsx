"use client";
import React from 'react'
import { registry } from '@/components/registry'

export type SectionKey =
  | 'Hero' | 'PopularGames' | 'Intro' | 'HowToPlay' | 'ProTips' | 'FAQ' | 'VariantGrid' | 'Ad' | 'Features'

export type SectionConfig = {
  key: SectionKey
  visible?: boolean
  props?: Record<string, any>
}

export function PageRenderer({ sections }: { sections: SectionConfig[] }) {
  return (
    <>
      {sections.filter(s => s.visible ?? true).map((s, i) => {
        const Cmp = registry[s.key]
        if (!Cmp) return null
        return <Cmp key={`${s.key}-${i}`} {...(s.props || {})} />
      })}
    </>
  )
}
