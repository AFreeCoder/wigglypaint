"use client";

import React from 'react'

// 轻量内容上下文，占位以匹配模板布局用法
const ContentContext = React.createContext<any>(null)

export function ContentProvider({ content, children }: { content: any, children: React.ReactNode }) {
  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  )
}

export function useContent() {
  return React.useContext(ContentContext)
}

