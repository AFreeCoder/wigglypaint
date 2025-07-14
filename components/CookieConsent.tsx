'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // 检查用户是否已经同意Cookie使用
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all')
    setShowBanner(false)
  }

  const acceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential')
    setShowBanner(false)
  }

  const decline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Cookie 说明 */}
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 mb-2">
              🍪 We use cookies to enhance your experience
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We use cookies to provide you with a better experience, analyze site traffic, and display personalized advertisements. 
              By continuing to use our site, you consent to our use of cookies. 
              <Link href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
                Learn more
              </Link>
            </p>
          </div>

          {/* 按钮组 */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={decline}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Decline
            </button>
            <button
              onClick={acceptEssential}
              className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              Essential Only
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 