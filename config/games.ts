import { Game, GameCategory, GameTag, GameDifficulty } from '@/types/game'

export const GAMES: Game[] = [
  {
    id: 1,
    title: 'WigglyPaint',
    description: 'Draw with 8 animated brushes that create wiggly, jiggly lines with personality! Free online pixel art & GIF maker with living, breathing lines.',
    image: '🎨',
    category: 'Casual',
    tags: ['Drawing', 'Animation', 'Creative', 'Art'],
    difficulty: 'Easy',
    players: '1 Player',
    rating: 4.5,
    playCount: '12.5K',
    type: 'iframe',
    url: 'https://r2.wigglypaint.co/WigglyPainthtml',
    gameInfo: {
      introduction: {
        title: 'WigglyPaint: The Living Drawing Tool',
        description: 'Unleash your imagination with WigglyPaint - where lines you draw wiggle with life! WigglyPaint lets you create animated pixel art, comics, and doodles with 8 unique animated brushes that breathe personality into every stroke. This free WigglyPaint drawing tool transforms static artwork into living, animated masterpieces that captivate and delight.',
        features: [
          {
            icon: '🎨',
            title: '8 Living Animated Brushes',
            description: 'Each WigglyPaint brush creates unique wiggly, jiggly line effects with distinct personality and sound effects'
          },
          {
            icon: '🎬',
            title: 'Instant GIF Creation',
            description: 'Export your WigglyPaint animated artwork as high-quality GIFs perfect for social media sharing'
          },
          {
            icon: '📱',
            title: 'Universal Compatibility',
            description: 'Works seamlessly on PC, mobile, tablet, and iPad with responsive touch controls'
          },
          {
            icon: '🔒',
            title: 'Privacy & Freedom',
            description: 'No signup required, unlimited usage, all data stays on your device'
          },
          {
            icon: '✨',
            title: 'Intuitive Interface',
            description: 'Simple tools: eraser, clear button, undo, and adjustable marker sizes'
          },
          {
            icon: '🎯',
            title: 'Creative Versatility',
            description: 'Perfect for pixel art, animated sketches, memes, comics, and expressive doodles'
          }
        ]
      },
      howToPlay: {
        title: 'Master the Art of Living Lines',
        steps: [
          { step: 1, icon: '🚀', title: 'Launch WigglyPaint', description: 'Open WigglyPaint instantly in your browser - no downloads or signups required' },
          { step: 2, icon: '🎨', title: 'Choose Your Brush', description: 'Select from 8 animated brushes on the right panel, each with unique wiggly personality' },
          { step: 3, icon: '✏️', title: 'Draw Living Lines', description: 'Click and drag to create animated strokes that wiggle, dance, and breathe with life' },
          { step: 4, icon: '🎵', title: 'Hear Your Art', description: 'Each brush produces distinct sound effects as you draw, adding audio dimension to creativity' },
          { step: 5, icon: '🛠️', title: 'Use Creative Tools', description: 'Adjust marker size, use eraser, undo mistakes, or clear canvas for fresh starts' },
          { step: 6, icon: '🎬', title: 'Export as GIF', description: 'Save your WigglyPaint animated masterpiece as a GIF to share on social media or with friends' },
          { step: 7, icon: '🌟', title: 'Share & Inspire', description: 'Post your WigglyPaint creations online and inspire others with your living artwork' }
        ],
        tips: [
          'Experiment with WigglyPaint brush combinations - layer different animated effects for complex artwork',
          'Draw at varying speeds to control the intensity of WigglyPaint wiggly animations',
          'Use the WigglyPaint eraser tool to selectively remove parts while keeping animations intact',
          'Try creating pixel art characters, animated doodles, or wiggly comics with WigglyPaint',
          'WigglyPaint is perfect for memes, social media content, and creative expression',
          'Your WigglyPaint progress autosaves in the browser - pick up where you left off anytime'
        ]
      },
      faq: [
        {
          question: 'What makes WigglyPaint\'s animated drawing so unique?',
          answer: 'WigglyPaint creates "living lines" that wiggle and move with personality! Unlike static drawing tools, WigglyPaint makes every stroke you make breathe with life, creating animated pixel art automatically. WigglyPaint is the only tool where your drawings literally come alive as you create them.'
        },
        {
          question: 'How do the 8 animated brushes work?',
          answer: 'Each of the 8 WigglyPaint brushes has its own wiggly personality and sound effects. These WigglyPaint brushes create different types of animated movements - some wiggle gently, others bounce energetically, and each adds unique character to your WigglyPaint artwork. Experiment to discover your favorite!'
        },
        {
          question: 'Can I export my wiggly artwork as animated GIFs?',
          answer: 'Absolutely! WigglyPaint lets you export your WigglyPaint animated creations as high-quality GIF files that preserve all the wiggly motion effects. These WigglyPaint GIFs are perfect for sharing on social media, messaging apps, or embedding in websites.'
        },
        {
          question: 'Is WigglyPaint really completely free?',
          answer: 'Yes, WigglyPaint is 100% free forever! WigglyPaint requires no signup, has no watermarks, no time limits, and unlimited usage. We believe WigglyPaint creativity should be accessible to everyone without barriers or costs.'
        },
        {
          question: 'What devices and platforms support WigglyPaint?',
          answer: 'WigglyPaint works on all modern devices: PC, Mac, mobile phones, tablets, and iPad. WigglyPaint runs in your web browser with responsive touch controls optimized for each platform. Draw with WigglyPaint using mouse, stylus, or finger!'
        },
        {
          question: 'How private and secure is my artwork?',
          answer: 'Your WigglyPaint privacy is guaranteed! All WigglyPaint drawings stay on your device - nothing is uploaded to servers or collected. WigglyPaint has no accounts, no tracking, no data harvesting. Your WigglyPaint creative work remains completely private.'
        },
        {
          question: 'Do I need to download or install anything?',
          answer: 'No downloads required! WigglyPaint runs instantly in your web browser. You can even bookmark WigglyPaint or save the page offline for use without internet connection.'
        },
        {
          question: 'What type of art can I create with WigglyPaint?',
          answer: 'Create WigglyPaint animated pixel art, living doodles, wiggly comics, moving memes, expressive sketches, and digital art with personality. WigglyPaint is perfect for social media content, creative expression, and bringing static drawings to life!'
        },
        {
          question: 'Are there sound effects while drawing?',
          answer: 'Yes! Each WigglyPaint animated brush produces unique sound effects as you draw, adding an audio dimension to your WigglyPaint creative experience. The sounds complement the visual wiggling for a truly immersive WigglyPaint art creation process.'
        },
        {
          question: 'Can I use WigglyPaint for professional or commercial projects?',
          answer: 'Absolutely! WigglyPaint is perfect for creating animated content for social media marketing, presentations, educational materials, or any project that needs eye-catching animated visuals. The WigglyPaint GIF export makes it easy to use WigglyPaint creations anywhere.'
        }
      ]
    }
  },
  {
    id: 2,
    title: 'OVO Unblocked',
    description: 'Master fluid parkour movements in this fast-paced platformer with 40+ challenging levels',
    image: '🏃',
    category: 'Arcade',
    tags: ['Parkour', 'Platform', 'Skill', 'Speed'],
    difficulty: 'Medium',
    players: '1 Player',
    rating: 4.8,
    playCount: '45.6K',
    type: 'iframe',
    url: 'https://joyhubcentral.com/games/ovo-unblocked/?v=20250316163142',
    gameInfo: {
      introduction: {
        title: 'OVO Parkour Mastery',
        description: 'Take control of a stickman character in this fluid parkour platformer! Navigate through 40+ challenging levels filled with traps, obstacles, and moving platforms. Master wall-jumping, sliding, and smashing techniques to overcome increasingly complex parkour challenges.',
        features: [
          {
            icon: '🏃',
            title: 'Fluid Parkour Movement',
            description: 'Experience smooth running, jumping, wall-jumping, sliding, and smashing mechanics'
          },
          {
            icon: '🎯',
            title: '40+ Challenging Levels',
            description: 'Progress through diverse levels with spikes, teleports, moving platforms, and gravity changes'
          },
          {
            icon: '⚡',
            title: 'Fast-Paced Precision',
            description: 'Test your reflexes and timing in this demanding platformer experience'
          },
          {
            icon: '🎨',
            title: 'Character Customization',
            description: 'Collect bonus coins to unlock unique skins and character appearances'
          }
        ]
      },
      howToPlay: {
        title: 'How to Master OVO Parkour',
        steps: [
          { step: 1, icon: '←→', title: 'Basic Movement', description: 'Use left and right arrow keys to move your stickman character' },
          { step: 2, icon: '↑', title: 'Jump & Wall Jump', description: 'Press Up arrow to jump. While sliding down a wall, tap Up to wall jump' },
          { step: 3, icon: '⬇', title: 'Slide & Smash', description: 'Press Down while running to slide under obstacles, or while airborne to smash through platforms' },
          { step: 4, icon: '🎯', title: 'Master Timing', description: 'Perfect your timing for spikes, moving platforms, and teleports' },
          { step: 5, icon: '🪙', title: 'Collect Coins', description: 'Grab bonus coins throughout levels to unlock character skins' },
          { step: 6, icon: '🏁', title: 'Complete Levels', description: 'Navigate through 40+ increasingly challenging parkour levels' }
        ],
        tips: [
          'Combine wall jumping with sliding for advanced movement techniques',
          'Use momentum from running to make longer jumps',
          'Smash move (Down in air) helps pass through transparent platforms',
          'Practice makes perfect - levels get progressively more challenging',
          'Your progress automatically saves in the browser'
        ]
      },
      faq: [
        {
          question: 'What are the controls for OVO?',
          answer: 'Use arrow keys to control your character: Left/Right to move, Up to jump and wall jump, Down to slide (while running) or smash (while in air). Simple but precise controls for fluid parkour movement.'
        },
        {
          question: 'How many levels are there in OVO?',
          answer: 'OVO features 40+ challenging levels, including bonus and secret stages. Each level introduces new mechanics like moving platforms, spikes, teleports, and gravity changes.'
        },
        {
          question: 'Can I save my progress in OVO?',
          answer: 'Yes! Your OVO progress is automatically saved in your browser. You can close the game and return later to continue where you left off.'
        },
        {
          question: 'What character customization options are available?',
          answer: 'Collect bonus coins throughout levels to unlock various character skins. You can become an alien, watermelon, or other fun characters on the main menu.'
        },
        {
          question: 'Is OVO suitable for beginners?',
          answer: 'While OVO starts with manageable difficulty, it becomes quite challenging. The game is perfect for both casual players and speedrunners, with smooth learning curve.'
        },
        {
          question: 'Can I play OVO on mobile devices?',
          answer: 'OVO works in mobile browsers, but it\'s best experienced with a keyboard on desktop for precise parkour controls. The game is optimized for keyboard input.'
        },
        {
          question: 'What makes OVO\'s parkour unique?',
          answer: 'OVO combines fluid movement mechanics with precise platforming. The wall-jumping, sliding, and smashing system creates satisfying parkour flow that appeals to both casual and hardcore players.'
        },
        {
          question: 'Is OVO completely free?',
          answer: 'Yes! OVO Unblocked is completely free to play in your browser with no downloads, registration, or hidden costs required.'
        }
      ]
    }
  }
]

// 自动生成slug
export const GAMES_WITH_SLUGS = GAMES.map(game => ({
  ...game,
  slug: game.title.toLowerCase().replace(/\s+/g, '-')
}))

// 导出筛选选项
export const GAME_CATEGORIES: (GameCategory | 'All')[] = [
  'All', 'Puzzle', 'Arcade', 'Strategy', 'Word', 'Education', 'Casual', 'Racing'
]

export const GAME_TAGS: GameTag[] = [
  'Memory', 'Cards', 'Classic', 'Arcade', 'Retro', 'Logic', 'Quick', 
  'Vocabulary', 'Letters', 'Brain', 'Colors', 'Matching', 'Visual', 
  'Math', 'Numbers', 'Learning', 'Relaxing', 'Fun', 'Chess', 'Strategy', 
  'Sliding', 'Speed', 'Cars', 'Racing', 'Parkour', 'Platform', 'Skill',
  'Drawing', 'Animation', 'Creative', 'Art'
]

export const GAME_DIFFICULTIES: (GameDifficulty | 'All')[] = [
  'All', 'Easy', 'Medium', 'Hard'
]

// 首页游戏配置
export const HOMEPAGE_GAME = {
  id: 1, // WigglyPaint
  component: 'WigglyPaint'
}