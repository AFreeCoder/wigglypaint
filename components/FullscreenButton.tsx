'use client'

interface FullscreenButtonProps {
  iframeId: string
}

// 扩展HTMLIFrameElement接口以支持浏览器兼容的全屏API
interface ExtendedHTMLIFrameElement extends HTMLIFrameElement {
  webkitRequestFullscreen?: () => Promise<void>
  msRequestFullscreen?: () => Promise<void>
}

export default function FullscreenButton({ iframeId }: FullscreenButtonProps) {
  const handleFullscreen = () => {
    const iframe = document.getElementById(iframeId) as ExtendedHTMLIFrameElement;
    if (!iframe) return;
    
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  }

  return (
    <button 
      onClick={handleFullscreen}
      className="flex items-center space-x-1 sm:space-x-2 bg-gray-700 hover:bg-gray-600 px-2 sm:px-3 py-2 rounded-lg transition-colors"
    >
      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
      <span className="text-xs sm:text-sm font-medium hidden sm:inline">Fullscreen</span>
    </button>
  )
}