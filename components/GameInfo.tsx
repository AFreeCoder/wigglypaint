'use client'

import { useState } from 'react'
import { Game } from '@/types/game'

interface GameInfoProps {
  enabled?: boolean
  game?: Game
}

const DEFAULT_GAME_INFO = {
  introduction: {
    title: 'Classic Gaming Experience',
    description: 'Enjoy this timeless game that has entertained players for generations. Perfect for players of all ages and skill levels.',
    features: [
      { icon: '🎯', title: 'Easy to Learn', description: 'Simple controls and rules that anyone can master' },
      { icon: '📱', title: 'Mobile Friendly', description: 'Play seamlessly on any device, anywhere' },
      { icon: '🆓', title: 'Completely Free', description: 'No downloads or payments required' }
    ]
  },
  howToPlay: {
    title: 'How to Play',
    steps: [
      { step: 1, icon: '🎮', title: 'Start the Game', description: 'Click the play button to begin your gaming experience' },
      { step: 2, icon: '🎯', title: 'Follow Instructions', description: 'Use the on-screen prompts to learn the controls' },
      { step: 3, icon: '🏆', title: 'Achieve Victory', description: 'Complete objectives to win and unlock achievements' }
    ],
    tips: ['Take your time to learn the mechanics', 'Practice makes perfect', 'Have fun and enjoy the experience!']
  },
  faq: [
    { question: 'Is this game free to play?', answer: 'Yes, this game is completely free to play with no hidden costs.' },
    { question: 'Can I play on mobile devices?', answer: 'Absolutely! The game is optimized for both desktop and mobile devices.' },
    { question: 'Do I need to download anything?', answer: 'No downloads required. Play directly in your browser.' }
  ]
}

export default function GameInfo({ enabled = true, game }: GameInfoProps) {
  const [activeSection, setActiveSection] = useState<'intro' | 'howto' | 'faq'>('intro')

  if (!enabled) return null

  const gameInfo = game?.gameInfo || DEFAULT_GAME_INFO
  const gameTitle = game?.title || 'Game'

  const sections = [
    { id: 'intro' as const, label: '📖 Introduction', icon: '📖' },
    { id: 'howto' as const, label: '🎯 How to Play', icon: '🎯' },
    { id: 'faq' as const, label: '❓ FAQ', icon: '❓' }
  ] as const

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: gameTitle,
    description: game?.description || gameInfo.introduction?.description,
    gameItem: {
      '@type': 'Game',
      name: gameTitle
    },
    genre: game?.category || 'Game',
    playMode: 'SinglePlayer',
    applicationCategory: 'Game',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    ...(gameInfo.faq && {
      mainEntity: gameInfo.faq.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    })
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <article className="bg-white rounded-xl shadow-lg overflow-hidden" itemScope itemType="https://schema.org/VideoGame">
      {/* Navigation Tabs */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
        <div className="flex">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex-1 px-4 py-4 text-sm font-semibold transition-all duration-200 ${
                activeSection === section.id
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-white/50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-white/30'
              }`}
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        {activeSection === 'intro' && gameInfo.introduction && (
          <section className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2" itemProp="name">
                {game?.image} {gameInfo.introduction.title}
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed text-lg" itemProp="description">
                {gameInfo.introduction.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {gameInfo.introduction.features.map((feature, index) => (
                <div key={index} className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h4 className="font-semibold text-green-800 mb-1">{feature.title}</h4>
                  <p className="text-sm text-green-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'howto' && gameInfo.howToPlay && (
          <section className="space-y-6" itemScope itemType="https://schema.org/HowTo">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2" itemProp="name">
                🎯 {gameInfo.howToPlay.title}
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4">
              {gameInfo.howToPlay.steps.map((item) => (
                <div key={item.step} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" itemScope itemType="https://schema.org/HowToStep">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className="text-xl mr-2">{item.icon}</span>
                      <h4 className="font-semibold text-gray-800" itemProp="name">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm" itemProp="text">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {gameInfo.howToPlay.tips && gameInfo.howToPlay.tips.length > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                <h4 className="font-semibold text-yellow-800 mb-2">💡 Pro Tips</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  {gameInfo.howToPlay.tips.map((tip, index) => (
                    <li key={index}>• {tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {activeSection === 'faq' && gameInfo.faq && gameInfo.faq.length > 0 && (
          <section className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                ❓ Frequently Asked Questions
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4">
              {gameInfo.faq.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors" itemScope itemType="https://schema.org/Question">
                  <div className="bg-gray-50 p-4">
                    <h4 className="font-semibold text-gray-800 flex items-center" itemProp="name">
                      <span className="text-blue-500 mr-2">Q:</span>
                      {faq.question}
                    </h4>
                  </div>
                  <div className="p-4 bg-white" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p className="text-gray-600 leading-relaxed flex items-start" itemProp="text">
                      <span className="text-green-500 mr-2 mt-1">A:</span>
                      <span>{faq.answer}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <h4 className="font-semibold text-blue-800 mb-2">🎮 Ready to Play?</h4>
              <p className="text-blue-700 mb-4">Now that you know how {gameTitle} works, scroll up and start playing!</p>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                🚀 Start Playing
              </button>
            </div>
          </section>
        )}
      </div>
    </article>
    </>
  )
} 