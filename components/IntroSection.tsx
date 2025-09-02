"use client";
import React from 'react'
import type { Game } from '@/types/game'

export default function IntroSection({ game }: { game?: Game }) {
  const intro = game?.gameInfo?.introduction
  if (!intro) return null
  return (
    <section id="intro" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="pixel-card p-6">
          {intro.title && (
            <h2 className="pixel-title text-2xl text-text mb-4">{intro.title}</h2>
          )}
          {intro.description && (
            <p className="text-gray-700 leading-relaxed mb-4">{intro.description}</p>
          )}
          {intro.features?.length ? (
            <>
              <h3 className="pixel-title text-xl text-text mb-3">Why WigglyPaint feels different</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {intro.features.map((f, i) => (
                  <li key={i}><strong>{f.title}:</strong> {f.description}</li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </section>
  )
}
