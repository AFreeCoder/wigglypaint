"use client";
import React from 'react'
import type { Game } from '@/types/game'

type Props = { game?: Game }

export default function HowToPlaySection({ game }: Props) {
  const info = game?.gameInfo?.howToPlay
  if (!info || !info.steps || info.steps.length === 0) return null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: info.title,
    step: info.steps.map((s: any) => ({ '@type': 'HowToStep', name: s.title, text: s.description }))
  }

  return (
    <section id="how-to-play" className="py-16 px-4" itemScope itemType="https://schema.org/HowTo">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-6xl mx-auto">
        {info.title && (
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-text mb-2">🎯 {info.title}</h2>
            <div className="w-24 h-1 bg-brand mx-auto rounded-full" />
          </div>
        )}
        <div className="space-y-4">
          {info.steps.map((item: any) => (
            <div key={item.step} className="flex items-start p-4 bg-card border border-border rounded-xl hover:shadow-hover transition-colors" itemScope itemType="https://schema.org/HowToStep">
              <div className="flex-shrink-0 w-10 h-10 bg-brand text-brand-foreground rounded-full flex items-center justify-center font-bold text-sm mr-4">
                {item.step}
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <span className="text-xl mr-2">{item.icon}</span>
                  <h3 className="font-semibold text-text" itemProp="name">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm" itemProp="text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* No default tips; tips controlled via ProTipsSection */}
      </div>
    </section>
  )
}
