interface AdSpaceProps {
  position: 'left' | 'right' | 'bottom'
  enabled?: boolean
}

export default function AdSpace({ position, enabled = true }: AdSpaceProps) {
  if (!enabled) return null

  const getAdContent = () => {
    switch (position) {
      case 'left':
      case 'right':
        return {
          title: '📱 Mobile Games',
          subtitle: 'Download & Play Now!',
          content: 'Exciting games await',
          cta: 'Play Now'
        }
      case 'bottom':
        return {
          title: '🎯 Gaming Accessories',
          subtitle: 'Up to 50% Off Gaming Gear',
          content: 'Controllers, Keyboards & More',
          cta: 'Shop Now'
        }
      default:
        return {
          title: '🎮 Advertisement',
          subtitle: 'Your Ad Here',
          content: 'Promote your brand',
          cta: 'Learn More'
        }
    }
  }

  const getAdStyles = () => {
    switch (position) {
      case 'left':
      case 'right':
        return 'w-48 h-96'
      case 'bottom':
        return 'w-full h-32'
      default:
        return 'w-full h-32'
    }
  }

  const adContent = getAdContent()

  if (position === 'bottom') {
    return (
      <div 
        className={`${getAdStyles()} bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]`}
      >
        <div className="h-full flex items-center justify-between p-4 text-white">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-1">{adContent.title}</h3>
            <p className="text-sm opacity-90 mb-1">{adContent.subtitle}</p>
            <p className="text-xs opacity-75">{adContent.content}</p>
          </div>
          <div className="ml-4">
            <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors">
              {adContent.cta}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div 
      className={`${getAdStyles()} bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
    >
      <div className="h-full flex flex-col justify-between p-4 text-white">
        <div className="text-center">
          <div className="text-3xl mb-2">🎮</div>
          <h3 className="font-bold text-sm mb-2">{adContent.title}</h3>
          <p className="text-xs opacity-90 mb-2">{adContent.subtitle}</p>
          <p className="text-xs opacity-75 leading-relaxed">{adContent.content}</p>
        </div>
        
        <div className="mt-4">
          <button className="w-full bg-white text-blue-600 py-2 px-3 rounded-lg font-semibold text-xs hover:bg-gray-100 transition-colors">
            {adContent.cta}
          </button>
        </div>
        
        <div className="mt-2 text-center">
          <span className="text-xs opacity-60">Advertisement</span>
        </div>
      </div>
    </div>
  )
} 