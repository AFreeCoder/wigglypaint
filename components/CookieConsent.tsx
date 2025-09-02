'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookie-consent')
      if (!consent) {
        setShowBanner(true)
        setTimeout(() => setIsVisible(true), 500)
      }
    } catch {
      setShowBanner(true)
      setTimeout(() => setIsVisible(true), 500)
    }
  }, [])

  const acceptAll = () => {
    const data = { essential: true, analytics: true, timestamp: new Date().toISOString() }
    try {
      localStorage.setItem('cookie-consent', JSON.stringify(data))
      window.dispatchEvent(new CustomEvent('consent-updated', { detail: data }))
    } catch {}
    setIsVisible(false)
    setTimeout(() => setShowBanner(false), 300)
  }

  const acceptEssential = () => {
    const data = { essential: true, analytics: false, timestamp: new Date().toISOString() }
    try {
      localStorage.setItem('cookie-consent', JSON.stringify(data))
      window.dispatchEvent(new CustomEvent('consent-updated', { detail: data }))
    } catch {}
    setIsVisible(false)
    setTimeout(() => setShowBanner(false), 300)
  }

  if (!showBanner) return null

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-2xl transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-text mb-2">🍪 We use cookies to enhance your experience</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We use cookies to provide you with a better experience and analyze site traffic.
              <Link href="/privacy" className="text-brand hover:underline font-medium ml-1">Learn more</Link>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button onClick={acceptEssential} className="px-4 py-2 text-sm font-medium border border-border rounded-lg text-text hover:bg-gray-50 transition-colors">Essential Only</button>
            <button onClick={acceptAll} className="px-4 py-2 text-sm font-medium text-brand-foreground bg-brand hover:opacity-90 rounded-lg transition-opacity">Accept All</button>
          </div>
        </div>
      </div>
    </div>
  )
}
