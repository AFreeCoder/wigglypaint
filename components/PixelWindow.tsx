"use client";
import React from 'react'

type Props = {
  title?: string
  children: React.ReactNode
}

export default function PixelWindow({ title, children }: Props) {
  return (
    <div className="pixel-card w-full overflow-hidden">
      <div className="pixel-titlebar flex items-center justify-between h-10 px-3 border-b border-border select-none">
        <div className="flex items-center gap-2">
          <span className="pixel-dot bg-[#ff5f57]" aria-hidden />
          <span className="pixel-dot bg-[#febc2e]" aria-hidden />
          <span className="pixel-dot bg-[#28c840]" aria-hidden />
        </div>
        {title ? <div className="pixel-title text-[10px] text-text truncate">{title}</div> : <div />}
      </div>
      {children}
    </div>
  )
}

