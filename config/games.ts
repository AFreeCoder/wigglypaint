import { Game, GameCategory, GameTag, GameDifficulty } from '@/types/game'

export const GAMES: Game[] = [
  {
    id: 1,
    title: 'WigglyPaint',
    description: 'Draw with 8 animated brushes that create wiggly, jiggly lines with personality! Free online pixel art & GIF maker with living, breathing lines.',
    image: '🎨',
    category: 'Casual',
    tags: ['Drawing', 'Animation', 'Creative', 'Pixel Art'],
    difficulty: 'Easy',
    players: '1 Player',
    rating: 4.5,
    playCount: '12.5K',
    type: 'iframe',
    url: 'https://r2.wigglypaint.co/WigglyPaint.html',
    scale: 1.65,
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
    description: 'Master precision parkour in this addictive platformer! Navigate through 40+ skill-building levels with fluid movement mechanics that support problem-solving and perseverance.',
    image: '🏃',
    category: 'Arcade',
    tags: ['Parkour', 'Platform', 'Speed'],
    difficulty: 'Medium',
    players: '1 Player',
    rating: 4.8,
    playCount: '45.6K',
    type: 'iframe',
    url: 'https://r2.wigglypaint.co/ovo-unblocked.html',
    gameInfo: {
      introduction: {
        title: 'OVO Unblocked: The Ultimate Precision Parkour Challenge',
        description: 'Experience the thrill of fluid parkour movement in OVO Unblocked! This addictive OVO Unblocked platformer challenges players to master precise controls while navigating through 40+ expertly crafted levels. Perfect for developing problem-solving skills and perseverance, OVO Unblocked transforms every jump, slide, and wall-climb into a satisfying victory. Whether you\'re a casual gamer or speedrunner, OVO Unblocked delivers endless entertainment with its smooth movement mechanics and progressive difficulty curve.',
        features: [
          {
            icon: '🏃',
            title: 'Fluid OVO Unblocked Movement',
            description: 'Master smooth running, jumping, wall-jumping, sliding, and smashing mechanics in OVO Unblocked that feel natural and responsive'
          },
          {
            icon: '🎯',
            title: '40+ Progressive OVO Unblocked Levels',
            description: 'Navigate expertly designed OVO Unblocked levels with spikes, teleports, moving platforms, and gravity changes that build skills incrementally'
          },
          {
            icon: '⚡',
            title: 'Skill-Building Precision',
            description: 'Develop problem-solving abilities and perseverance through challenging platformer gameplay that rewards practice'
          },
          {
            icon: '🧠',
            title: 'Educational OVO Unblocked Value',
            description: 'OVO Unblocked supports Common Core mathematical practices including problem-solving, reasoning, and strategic thinking'
          },
          {
            icon: '🎨',
            title: 'Character Customization',
            description: 'Collect bonus coins to unlock unique skins including alien, watermelon, and other creative character appearances'
          },
          {
            icon: '📱',
            title: 'Cross-Platform OVO Unblocked Access',
            description: 'Play OVO Unblocked instantly on desktop or mobile with no downloads required - perfect for quick gaming sessions anywhere'
          }
        ]
      },
      howToPlay: {
        title: 'Master OVO Unblocked: From Beginner to Parkour Pro',
        steps: [
          { step: 1, icon: '🎮', title: 'Get Started with OVO Unblocked', description: 'Launch OVO Unblocked in your browser - no downloads or registration required. OVO Unblocked loads quickly on any device!' },
          { step: 2, icon: '←→', title: 'Basic Movement', description: 'Use left and right arrow keys to move your stickman character smoothly across platforms' },
          { step: 3, icon: '↑', title: 'Jump & Wall Jump', description: 'Press Up arrow to jump over obstacles. While sliding down a wall, quickly tap Up to perform wall jumps for advanced navigation' },
          { step: 4, icon: '⬇', title: 'Slide & Smash Techniques', description: 'Press Down while running to slide under low obstacles, or while airborne to smash through transparent platforms and barriers' },
          { step: 5, icon: '🎯', title: 'Master Advanced Timing', description: 'Perfect your timing for spikes, moving platforms, teleports, and gravity-defying sections that test your reflexes' },
          { step: 6, icon: '🪙', title: 'Collect & Customize', description: 'Grab bonus coins scattered throughout levels to unlock unique character skins like alien, watermelon, and more creative designs' },
          { step: 7, icon: '🏆', title: 'Progress in OVO Unblocked', description: 'Challenge yourself through 40+ OVO Unblocked levels that gradually build your parkour skills and problem-solving abilities' },
          { step: 8, icon: '⚡', title: 'OVO Unblocked Speedrun Mastery', description: 'Once comfortable with OVO Unblocked, attempt speedruns to perfect your movement flow and compete for faster completion times' }
        ],
        tips: [
          'Combine wall jumping with sliding for fluid advanced movement chains that maintain momentum',
          'Build up running speed before jumps to achieve maximum distance and clear larger gaps',
          'Master the smash move (Down while airborne) to break through transparent platforms strategically',
          'Study level layouts before rushing - patience and planning often beat pure speed',
          'Practice difficult sections repeatedly - muscle memory is key to mastering precise platforming',
          'Use the checkpoint system wisely - your progress automatically saves between sessions',
          'Experiment with different movement combinations to discover your personal playstyle',
          'Watch for visual cues that indicate interactive elements like breakable platforms or teleports'
        ]
      },
      faq: [
        {
          question: 'What are the controls for OVO Unblocked?',
          answer: 'OVO Unblocked uses intuitive arrow key controls: Left/Right to move, Up to jump and wall jump, Down to slide (while running) or smash (while airborne). These simple yet precise OVO Unblocked controls enable fluid parkour movement that feels natural and responsive.'
        },
        {
          question: 'How many levels are in OVO Unblocked and what makes them educational?',
          answer: 'OVO Unblocked features 40+ expertly crafted levels that progressively build problem-solving skills and perseverance. Each OVO Unblocked level introduces new mechanics like moving platforms, spikes, teleports, and gravity changes, supporting Common Core mathematical practices through strategic thinking and spatial reasoning.'
        },
        {
          question: 'Does OVO Unblocked save my progress automatically?',
          answer: 'Yes! Your OVO Unblocked progress is automatically saved in your browser with no account required. You can close OVO Unblocked anytime and return later to continue exactly where you left off, making it perfect for quick gaming sessions or extended play.'
        },
        {
          question: 'What character customization options does OVO Unblocked offer?',
          answer: 'Collect bonus coins scattered throughout OVO Unblocked levels to unlock unique character skins including alien, watermelon, and other creative designs. This OVO Unblocked reward system motivates exploration and adds replay value to completed levels.'
        },
        {
          question: 'Is OVO Unblocked suitable for different skill levels?',
          answer: 'Absolutely! OVO Unblocked starts with manageable difficulty to welcome beginners, then gradually increases complexity. This progressive OVO Unblocked learning curve makes it perfect for casual players developing skills, while advanced mechanics satisfy speedrunners and parkour enthusiasts.'
        },
        {
          question: 'Can I play OVO Unblocked on mobile devices and tablets?',
          answer: 'OVO Unblocked works on mobile browsers and tablets, though OVO Unblocked is optimized for keyboard controls on desktop. The responsive design ensures OVO Unblocked playability across devices, but precision parkour gameplay is most enjoyable with arrow key input.'
        },
        {
          question: 'What educational benefits does OVO Unblocked provide?',
          answer: 'OVO Unblocked develops critical thinking, spatial reasoning, and perseverance through its challenging platformer gameplay. OVO Unblocked supports Common Core mathematical practices by requiring players to analyze problems, develop strategies, and persist through difficult sections.'
        },
        {
          question: 'How does OVO Unblocked\'s parkour system work?',
          answer: 'OVO Unblocked combines fluid movement mechanics with precise platforming challenges. The OVO Unblocked wall-jumping, sliding, and smashing system creates satisfying parkour flow that rewards timing, planning, and skill development. Advanced OVO Unblocked players can chain movements for speedrun techniques.'
        },
        {
          question: 'Is OVO completely free to play?',
          answer: 'Yes! OVO Unblocked is 100% free with no hidden costs, downloads, or registration required. Play instantly in your browser with unlimited access to all levels, features, and customization options.'
        },
        {
          question: 'What makes OVO Unblocked different from other platformer games?',
          answer: 'OVO Unblocked stands out with its perfect balance of accessibility and depth. OVO Unblocked combines educational value with engaging gameplay, featuring smooth parkour mechanics, progressive skill-building, and instant browser-based access. OVO Unblocked is designed to be both entertaining and intellectually rewarding.'
        }
      ]
    }
  },
  {
    id: 3,
    title: 'Make Pixel Art Online - Pixilart.com',
    description: 'Create Pixel Art Online with this powerful digital art tool. Make Pixel Art Online sprites, GIF animations, and join 2M+ artists to collaborate, share, and explore Pixel Art Online creativity.',
    image: '🎮',
    category: 'Casual',
    tags: ['Drawing', 'Pixel Art', 'Creative', 'Animation'],
    difficulty: 'Easy',
    players: '1 Player',
    rating: 4.7,
    playCount: '2.1M',
    type: 'iframe',
    url: 'https://www.pixilart.com/draw',
    gameInfo: {
      introduction: {
        title: 'Pixilart: The Ultimate Pixel Art Online Creation Platform',
        description: 'Discover the world of Pixel Art Online with Pixilart - a comprehensive platform where you can Make Pixel Art Online, design gaming sprites, and produce animated GIFs. Join over 2 million artists in this vibrant Pixel Art Online community where creativity meets collaboration. Whether you\'re a beginner or professional artist making Pixel Art Online, Pixilart provides all the tools you need to bring your Pixel Art Online visions to life.',
        features: [
          {
            icon: '🎨',
            title: 'Professional Drawing Tools',
            description: 'Access professional Pixel Art Online tools including brushes, layers, color palettes, and advanced editing features for creating Pixel Art Online masterpieces'
          },
          {
            icon: '🎮',
            title: 'Gaming Sprite Creation',
            description: 'Design pixel-perfect sprites for games with specialized Pixel Art Online tools and templates optimized for Pixel Art Online game development'
          },
          {
            icon: '🎬',
            title: 'GIF Animation Studio',
            description: 'Create animated Pixel Art Online GIFs with frame-by-frame animation tools and timeline controls for smooth Pixel Art Online motion graphics'
          },
          {
            icon: '👥',
            title: 'Active Art Community',
            description: 'Connect with over 2 million artists, share your creations, get feedback, and collaborate on projects'
          },
          {
            icon: '📱',
            title: 'Cross-Platform Access',
            description: 'Create art seamlessly across desktop and mobile devices with cloud synchronization'
          },
          {
            icon: '🎯',
            title: 'Art Challenges & Contests',
            description: 'Participate in community challenges, contests, and themed art events to showcase your skills'
          }
        ]
      },
      howToPlay: {
        title: 'Master Pixel Art Online Creation with Pixilart',
        steps: [
          { step: 1, icon: '🚀', title: 'Start Creating', description: 'Visit pixilart.com/draw to launch the Pixel Art Online drawing tool instantly in your browser' },
          { step: 2, icon: '🎨', title: 'Choose Your Canvas', description: 'Select canvas size and resolution perfect for your Pixel Art Online project - sprites, or animations' },
          { step: 3, icon: '🖌️', title: 'Select Drawing Tools', description: 'Pick from brushes, pencils, fill tools, and specialized Pixel Art Online tools with customizable settings' },
          { step: 4, icon: '🎨', title: 'Create Your Art', description: 'Make Pixel Art Online pixel by pixel or use advanced tools to create Pixel Art Online masterpieces with layers and effects' },
          { step: 5, icon: '📚', title: 'Use Layers', description: 'Organize your artwork with multiple layers for complex compositions and easy editing' },
          { step: 6, icon: '🎬', title: 'Animate Your Art', description: 'Create frame-by-frame animations and export them as GIFs for dynamic visual content' },
          { step: 7, icon: '💾', title: 'Save & Share', description: 'Save your creations to your profile and share them with the Pixilart community for feedback' },
          { step: 8, icon: '🌟', title: 'Join the Community', description: 'Follow other artists, participate in challenges, and build your reputation in the art community' }
        ],
        tips: [
          'Start with smaller canvas sizes to learn Pixel Art Online fundamentals before tackling complex Pixel Art Online projects',
          'Use the grid feature to align pixels perfectly and create clean, professional-looking Pixel Art Online artwork',
          'Experiment with different color palettes - limited colors often create more impactful Pixel Art Online',
          'Study existing Pixel Art Online and sprites in the gallery for Pixel Art Online inspiration and technique learning',
          'Join art challenges to practice specific styles and connect with other community members',
          'Save your work frequently and use layers to separate different elements of your artwork',
          'Practice animation timing - start with simple movements before attempting complex animations',
          'Engage with the community by commenting on and favoriting others\' artwork'
        ]
      },
      faq: [
        {
          question: 'What makes Pixilart different from other Pixel Art Online drawing tools?',
          answer: 'Pixilart specializes in Pixel Art Online and digital art creation with tools specifically designed for gaming sprites, animations, and pixel-perfect Pixel Art Online artwork. With over 2 million active users, it combines professional-grade Pixel Art Online tools with a vibrant artistic community.'
        },
        {
          question: 'Can I create animations and GIFs with Pixilart?',
          answer: 'Yes! Pixilart includes a full Pixel Art Online animation studio with frame-by-frame editing, timeline controls, and GIF export capabilities. You can create smooth Pixel Art Online animations and export them as high-quality GIFs perfect for social media and web use.'
        },
        {
          question: 'Is Pixilart suitable for game development?',
          answer: 'Absolutely! Pixilart is widely used by game developers for creating Pixel Art Online sprites, tiles, and game assets. The Pixel Art Online tools and export options make it ideal for 2D game development across all platforms.'
        },
        {
          question: 'Do I need to sign up to use Pixilart?',
          answer: 'You can start making Pixel Art Online immediately without an account, but signing up unlocks additional features like saving Pixel Art Online artwork, joining the community, participating in challenges, and accessing your Pixel Art Online library across devices.'
        },
        {
          question: 'How does the Pixilart community work?',
          answer: 'The Pixilart community allows artists to share their work, get feedback, follow other creators, and participate in art challenges. It\'s a supportive environment where artists of all skill levels can learn and grow together.'
        },
        {
          question: 'What file formats can I export from Pixilart?',
          answer: 'Pixilart supports multiple export formats including PNG, JPG, GIF for animations, and various Pixel Art Online specific formats. You can also export Pixel Art Online sprites in formats optimized for game engines.'
        },
        {
          question: 'Is Pixilart free to use?',
          answer: 'Pixilart offers a robust free tier with full access to drawing tools and community features. Premium subscriptions unlock additional storage, advanced features, and priority support.'
        },
        {
          question: 'Can I collaborate with other artists on Pixilart?',
          answer: 'Yes! Pixilart supports collaborative projects where multiple artists can work together on artwork. The community features also enable sharing techniques, getting feedback, and learning from others.'
        },
        {
          question: 'What devices and browsers support Pixilart?',
          answer: 'Pixilart works on all modern browsers across desktop, tablet, and mobile devices. The HTML5-based platform ensures compatibility across Windows, Mac, iOS, and Android systems.'
        },
        {
          question: 'Are there tutorials or learning resources available?',
          answer: 'Pixilart provides tutorials, community guides, and educational content to help artists improve their skills. The active community also shares tips, techniques, and feedback to support learning.'
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
  'Speed', 'Cars', 'Racing', 'Parkour', 'Platform', 'Skill',
  'Drawing', 'Animation', 'Creative', 'Pixel Art'
]

export const GAME_DIFFICULTIES: (GameDifficulty | 'All')[] = [
  'All', 'Easy', 'Medium', 'Hard'
]

// 首页游戏配置
export const HOMEPAGE_GAME = {
  id: 1, // WigglyPaint
  component: 'WigglyPaint'
}