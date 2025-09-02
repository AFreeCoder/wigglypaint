"use client";
import React from 'react'
import type { Game } from '@/types/game'

type Props = { game?: Game }

const DEFAULT = {
  title: 'How to Play',
  steps: [
    { step: 1, icon: '🎮', title: 'Start the Game', description: 'Click the play button to begin your creative experience.' },
    { step: 2, icon: '🖌️', title: 'Use the Tools', description: 'Pick a brush or tool and start drawing or interacting.' },
    { step: 3, icon: '🏆', title: 'Create & Share', description: 'Finish your creation and share it with friends!' }
  ],
  tips: [
    'Try different tools to find your favorite style',
    'Zoom in on details for precise control',
    'Have fun—there’s no wrong way to create!'
  ]
}

export default function HowToPlaySection({ game }: Props) {
  const info = game?.gameInfo?.howToPlay
  const title = info?.title || DEFAULT.title
  const steps = info?.steps && info.steps.length ? info.steps : DEFAULT.steps
  const tips = info?.tips && info.tips.length ? info.tips : DEFAULT.tips

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: steps.map((s: any) => ({ '@type': 'HowToStep', name: s.title, text: s.description }))
  }

  return (
    <section id="how-to-play" className="py-16 px-4 bg-bg" itemScope itemType="https://schema.org/HowTo">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-text mb-2">🎯 {title}</h2>
          <div className="w-24 h-1 bg-brand mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {steps.map((item: any) => (
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

        {tips && tips.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-8">
            <h4 className="font-semibold text-amber-800 mb-2">💡 Pro Tips</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              {tips.map((tip: string, i: number) => <li key={i}>• {tip}</li>)}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

