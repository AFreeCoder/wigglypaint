"use client";
import React from 'react'
import { getIframePolicyFor } from '@/config/iframe'

type Props = {
  id: string
  src: string
  title: string
  width?: number
  height?: number
  allow?: string
  sandbox?: string
  referrerPolicy?: React.IframeHTMLAttributes<HTMLIFrameElement>['referrerPolicy']
  style?: React.CSSProperties
}

export default function ResponsiveIframe({ id, src, title, width, height, allow, sandbox, referrerPolicy, style }: Props) {
  const containerRef = React.useRef<HTMLDivElement | null>(null)

  const compute = React.useCallback(() => {
    const c = containerRef.current
    if (!c) return

    const w = Number(width) || 0
    const h = Number(height) || 0
    let ratio = w && h ? (h / w) * 100 : (9 / 16) * 100

    // Clamp based on window ratio (per iframe_design.md)
    const winRatio = (window.innerHeight / window.innerWidth) * 100
    const minRatio = 80
    const maxRatio = 100
    const lowThreshold = 110
    const highThreshold = 130
    if (winRatio <= lowThreshold && ratio > minRatio) ratio = minRatio
    if (winRatio >= highThreshold && ratio < maxRatio) ratio = maxRatio
    c.style.paddingTop = ratio + '%'
  }, [width, height])

  React.useEffect(() => {
    compute()
    const onResize = () => compute()
    window.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', onResize as any)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onResize as any)
    }
  }, [compute])

  const policy = getIframePolicyFor(src)

  return (
    <div ref={containerRef} className="game-iframe-container relative overflow-hidden w-full bg-black" style={style}>
      <iframe
        id={id}
        className="game-iframe absolute inset-0 w-full h-full border-0"
        src={src}
        title={title}
        loading="lazy"
        allow={allow || policy.allow}
        allowFullScreen
        {...(sandbox ? { sandbox } : (policy.sandbox ? { sandbox: policy.sandbox } : {}))}
        {...(referrerPolicy ? { referrerPolicy } : (policy.referrerPolicy ? { referrerPolicy: policy.referrerPolicy } : {}))}
      />
    </div>
  )
}
