"use client";
import React from 'react'
import Game from '@/components/Game'
import RelatedGames from '@/components/RelatedGames'
import TryThese from '@/components/TryThese'
import HowToPlaySection from '@/components/HowToPlaySection'
import FAQSection from '@/components/FAQSection'
import AdSpace from '@/components/AdSpace'

function Section({ id, className, children }: { id?: string, className?: string, children: React.ReactNode }) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  )
}

// Hero: 主展示区，内嵌我们的 Game 组件
const Hero = (props: any) => (
  <Section id="hero" className="py-8 px-0 bg-bg">
    <div className="max-w-6xl mx-auto">
      <div className="bg-card border border-border rounded-xl shadow-sm p-0">
        {props?.content ? props.content : <Game />}
      </div>
    </div>
  </Section>
)

// PopularGames: 使用我们现有的热门游戏组件
const PopularGames = (props: any) => (
  <Section id="popular-games" className="py-12 px-4 bg-bg">
    <div className="max-w-6xl mx-auto">
      <RelatedGames enabled excludeGameId={undefined} />
    </div>
  </Section>
)

// VariantGrid: 使用我们右侧/移动端快速推荐组件作为变体网格
const VariantGrid = (props: any) => (
  <Section id="variant-grid" className="py-12 px-4 bg-card">
    <div className="max-w-6xl mx-auto">
      <TryThese enabled />
    </div>
  </Section>
)

// HowToPlay/FAQ: 模板分区锚点，改为独立分区组件（含 Schema 标注）
const HowToPlay = (props: any) => <HowToPlaySection game={props?.game} />

const FAQ = (props: any) => <FAQSection game={props?.game} />

// Ad 占位：用底部广告位样式包裹（保留布局占位，不改内容）
const Ad = ({ slotId, size, className, ...rest }: any) => (
  <Section className={`py-6 ${className || ''}`}>
    <div className="max-w-6xl mx-auto">
      <AdSpace position="bottom" enabled />
    </div>
  </Section>
)

export const registry: Record<string, React.ComponentType<any>> = {
  Hero,
  PopularGames,
  VariantGrid,
  HowToPlay,
  FAQ,
  Ad,
}
