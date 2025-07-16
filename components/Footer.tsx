import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 网站信息 */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">🎨 WigglyPaint</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Where lines you draw wiggle with life! Create animated pixel art, comics & doodles with 8 unique brushes that breathe personality into every stroke.
            </p>
          </div>

          {/* 快速链接 */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Coming Soon: Contact information will be available shortly</p>
              <p>Response Time: Within 24 hours</p>
            </div>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400 mb-2">
            &copy; 2025 WigglyPaint. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Play responsibly and have fun! | 
            <Link href="/privacy" className="hover:text-gray-400 transition-colors ml-1">
              Privacy
            </Link> | 
            <Link href="/terms" className="hover:text-gray-400 transition-colors ml-1">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}