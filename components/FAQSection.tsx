"use client";
import React from 'react'
import type { Game } from '@/types/game'

type Props = { game?: Game }

const DEFAULT_FAQ = [
  { question: 'Is this free to use?', answer: 'Yes. You can play or create without any payment.' },
  { question: 'Do I need to download anything?', answer: 'No downloads required. Everything runs in your browser.' },
  { question: 'Does it work on mobile?', answer: 'Yes, it works on phones, tablets, and desktop devices.' },
]

export default function FAQSection({ game }: Props) {
  const faq = game?.gameInfo?.faq && game.gameInfo.faq.length ? game.gameInfo.faq : DEFAULT_FAQ

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f: any) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    }))
  }

  return (
    <section id="faq" className="py-16 px-4" itemScope itemType="https://schema.org/FAQPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-text mb-2">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-brand mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {faq.map((item: any, i: number) => (
            <div key={i} className="border border-border bg-card rounded-xl overflow-hidden hover:shadow-hover transition-colors" itemScope itemType="https://schema.org/Question">
              <div className="bg-gray-50 p-4">
                <h3 className="font-semibold text-text flex items-center" itemProp="name">
                  <span className="text-brand mr-2">Q:</span>
                  {item.question}
                </h3>
              </div>
              <div className="p-4 bg-white" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-700 leading-relaxed flex items-start" itemProp="text">
                  <span className="text-green-600 mr-2 mt-1">A:</span>
                  <span>{item.answer}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center mt-8">
          <h4 className="font-semibold text-blue-800 mb-2">Ready to Play?</h4>
          <p className="text-blue-700 mb-4">Scroll up to the top and start creating now!</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-brand text-brand-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Start Playing
          </button>
        </div>
      </div>
    </section>
  )
}
