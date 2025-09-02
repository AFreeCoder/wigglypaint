"use client";
import React from 'react'

export default function FeaturesSection() {
  return (
    <section id="features" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="pixel-card p-6 mb-8">
          <h2 className="pixel-title text-2xl text-text mb-4">WigglyPaint – Make Art with Living, Wiggly Lines</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            WigglyPaint is a playful, browser‑based drawing tool that turns every stroke into a living line. With WigglyPaint you sketch, animate, and export in minutes—no installs, no accounts. Open WigglyPaint, pick a brush, and your lines wiggle with personality. Whether you’re doodling, making pixel‑style loops, or crafting GIFs for social media, WigglyPaint keeps you in flow. It works on desktop, tablet, and mobile, and your WigglyPaint creations stay on your device.
          </p>

          <h3 className="pixel-title text-xl text-text mb-3">Why WigglyPaint feels different</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Animated brushes:</strong> WigglyPaint gives each stroke a lively motion so drawings look animated as you create.</li>
            <li><strong>Expressive tools:</strong> Choose from multiple WigglyPaint brushes designed for bold strokes, jittery textures, or subtle tremors.</li>
            <li><strong>Instant sound feedback:</strong> WigglyPaint adds light audio cues that reinforce rhythm and control.</li>
            <li><strong>GIF export:</strong> Share WigglyPaint loops and mini animations anywhere—perfect for posts, stickers, and short demos.</li>
            <li><strong>No signup, no barrier:</strong> WigglyPaint runs in your browser and keeps your work local so you can start now.</li>
            <li><strong>Works everywhere:</strong> Use WigglyPaint with mouse, stylus, or touch on modern devices.</li>
          </ul>

          <h3 className="pixel-title text-xl text-text mb-3">How to use WigglyPaint (beginner quick start)</h3>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
            <li>Open WigglyPaint and tap Play. The canvas loads instantly.</li>
            <li>Pick a brush on the toolbar. Each WigglyPaint brush has a unique animated feel.</li>
            <li>Draw a few strokes. Notice how WigglyPaint lines subtly wiggle as they move.</li>
            <li>Adjust size or switch brushes. Try eraser and undo to refine.</li>
            <li>Export a GIF. Share your first WigglyPaint loop and keep experimenting.</li>
          </ol>

          <h3 className="pixel-title text-xl text-text mb-3">Pro tips for experienced creators</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Layer rhythms:</strong> Combine two WigglyPaint brushes—one slow, one fast—to create visual syncopation.</li>
            <li><strong>Control “wiggle energy”:</strong> Draw slowly for stable lines; speed up for livelier motion. WigglyPaint reacts to your tempo.</li>
            <li><strong>Animate in passes:</strong> Sketch outlines, then add accents with a lighter WigglyPaint brush for depth and texture.</li>
            <li><strong>Negative space:</strong> Use the eraser like a brush to carve highlights and vibrating edges in WigglyPaint scenes.</li>
            <li><strong>Looping discipline:</strong> For seamless loops, return to your start position and keep WigglyPaint strokes consistent.</li>
            <li><strong>GIF polish:</strong> Export at a size that preserves WigglyPaint motion without oversized files; test a few frame rates.</li>
          </ul>

          <h3 className="pixel-title text-xl text-text mb-3">FAQ</h3>
          <div className="space-y-3 text-gray-800">
            <div>
              <p className="font-semibold">Do I need an account to use WigglyPaint?</p>
              <p>No. WigglyPaint works in the browser with no signup and keeps your drawings local.</p>
            </div>
            <div>
              <p className="font-semibold">Can I use WigglyPaint on mobile and tablet?</p>
              <p>Yes. WigglyPaint supports touch, stylus, and mouse on modern devices.</p>
            </div>
            <div>
              <p className="font-semibold">What makes WigglyPaint brushes special?</p>
              <p>Each WigglyPaint brush adds animated motion so your lines feel alive while you draw.</p>
            </div>
            <div>
              <p className="font-semibold">How do I export a GIF from WigglyPaint?</p>
              <p>Finish your sketch, choose export, and WigglyPaint generates a shareable GIF loop.</p>
            </div>
            <div>
              <p className="font-semibold">Is WigglyPaint good for beginners and pros?</p>
              <p>Yes. Beginners get instant results; advanced users can layer WigglyPaint brushes, tempo, and eraser techniques.</p>
            </div>
            <div>
              <p className="font-semibold">Where does my work go?</p>
              <p>WigglyPaint keeps your creations on your device. You control if and how you share.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="#hero" className="pixel-button inline-block">Play WigglyPaint</a>
        </div>
      </div>
    </section>
  )
}

