import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-card text-text border-t border-border py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 网站信息 */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">🎨 WigglyPaint</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Where lines you draw wiggle with life! Create animated pixel art, comics & doodles with 8 unique brushes that breathe personality into every stroke.
            </p>
          </div>

          {/* 快速链接 */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-text transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-text transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-text transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="https://gameaha.net" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-text transition-colors">
                  GameAha
                </a>
              </li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Coming Soon: Contact information will be available shortly</p>
              <p>Response Time: Within 24 hours</p>
            </div>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500 mb-2">
            &copy; 2025 WigglyPaint. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Play responsibly and have fun! | 
            <Link href="/privacy" className="hover:text-text transition-colors ml-1">
              Privacy
            </Link> | 
            <Link href="/terms" className="hover:text-text transition-colors ml-1">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
