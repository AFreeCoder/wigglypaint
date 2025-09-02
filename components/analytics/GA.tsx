"use client";
import React from 'react'

type Props = { gaId: string }

function injectGA(id: string) {
  if (typeof window === 'undefined') return
  if ((window as any).__gaLoaded) return
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(s)

  const inline = document.createElement('script')
  inline.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);} 
    gtag('js', new Date());
    gtag('config', '${id}');
  `
  document.head.appendChild(inline)
  ;(window as any).__gaLoaded = true
}

export default function GA({ gaId }: Props) {
  React.useEffect(() => {
    // try read existing consent
    try {
      const raw = localStorage.getItem('cookie-consent')
      if (raw) {
        const c = JSON.parse(raw)
        if (c && c.analytics) {
          injectGA(gaId)
        }
      }
    } catch {}

    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as any
      if (detail && detail.analytics) {
        injectGA(gaId)
      }
    }
    window.addEventListener('consent-updated' as any, handler)
    return () => window.removeEventListener('consent-updated' as any, handler)
  }, [gaId])

  return null
}

