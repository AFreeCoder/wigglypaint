"use client";
import React from 'react'
import type { Game } from '@/types/game'

export default function ProTipsSection({ game }: { game?: Game }) {
  const tips: string[] | undefined = game?.gameInfo?.howToPlay?.tips
  if (!tips || tips.length === 0) return null
  return (
    <section id="pro-tips" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="pixel-card p-6">
          <h2 className="pixel-title text-2xl text-text mb-4">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {tips.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
