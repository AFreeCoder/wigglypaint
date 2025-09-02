"use client";
import React from 'react'
import Game from '@/components/Game'
import RelatedGames from '@/components/RelatedGames'
import TryThese from '@/components/TryThese'
import HowToPlaySection from '@/components/HowToPlaySection'
import FAQSection from '@/components/FAQSection'
import AdSpace from '@/components/AdSpace'
import FeaturesSection from '@/components/FeaturesSection'
import { HOMEPAGE_GAME, GAMES_WITH_SLUGS } from '@/config/games'
import IntroSection from '@/components/IntroSection'
import ProTipsSection from '@/components/ProTipsSection'

function Section({ id, className, children }: { id?: string, className?: string, children: React.ReactNode }) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  )
}

// Hero: 主展示区，内嵌我们的 Game 组件
const Hero = (props: any) => (
  <Section id="hero" className="py-8 px-0">
    <div className="max-w-6xl mx-auto">
      <div className="bg-card border border-border rounded-xl shadow-sm p-0">
        {props?.content ? props.content : <Game />}
      </div>
    </div>
  </Section>
)

// PopularGames: 使用我们现有的热门游戏组件
const PopularGames = (props: any) => (
  <Section id="popular-games" className="py-12 px-4">
    <div className="max-w-6xl mx-auto">
      <RelatedGames enabled excludeGameId={undefined} />
    </div>
  </Section>
)

// VariantGrid: 使用我们右侧/移动端快速推荐组件作为变体网格
const VariantGrid = (props: any) => (
  <Section id="variant-grid" className="py-12 px-4 pixel-grid-lg">
    <div className="max-w-6xl mx-auto">
      <TryThese enabled />
    </div>
  </Section>
)

// HowToPlay/FAQ: 模板分区锚点，改为独立分区组件（含 Schema 标注）
const homepageGame = GAMES_WITH_SLUGS.find(g => g.id === HOMEPAGE_GAME.id)

const HowToPlay = (props: any) => <HowToPlaySection game={props?.game ?? homepageGame} />

const FAQ = (props: any) => <FAQSection game={props?.game ?? homepageGame} />

// Ad 占位：用底部广告位样式包裹（保留布局占位，不改内容）
const Ad = ({ slotId, size, className, ...rest }: any) => (
  <Section className={`py-6 ${className || ''}`}>
    <div className="max-w-6xl mx-auto">
      <AdSpace position="bottom" enabled />
    </div>
  </Section>
)

// Features SEO body section
const Features = () => <FeaturesSection />

// Intro / ProTips（方案B新增）
const Intro = (props: any) => <IntroSection game={props?.game ?? homepageGame} />
const ProTips = (props: any) => <ProTipsSection game={props?.game ?? homepageGame} />

export const registry: Record<string, React.ComponentType<any>> = {
  Hero,
  PopularGames,
  Intro,
  ProTips,
  VariantGrid,
  HowToPlay,
  FAQ,
  Ad,
  Features,
}
