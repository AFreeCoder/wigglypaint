import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 flex items-center justify-between">
        {/* 网站 Logo 和标题 - 点击跳转首页 */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
          <div className="text-2xl sm:text-3xl">🎨</div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            WigglyPaint
          </h1>
        </Link>
        
        {/* 右侧导航链接 */}
        <div className="flex items-center space-x-4">
          {/* <Link href="/games" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
            All Games
          </Link> */}
          <Link href="/" className="text-gray-600 hover:text-gray-800 font-semibold text-sm">
            Home
          </Link>
        </div>
      </div>
    </header>
  )
} 