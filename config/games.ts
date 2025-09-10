// 先定义配置数组
export const GAME_CATEGORIES = [
  'All', 'Puzzle', 'Arcade', 'Strategy', 'Word', 'Education', 'Casual', 'Racing'
] as const

export const GAME_TAGS = [
  'Speed', 'Cars', 'Racing', 'Parkour', 'Platform', 'Skill',
  'Drawing', 'Animation', 'Creative', 'Pixel Art', 'Multiplayer'
] as const

export const GAME_DIFFICULTIES = [
  'All', 'Easy', 'Medium', 'Hard'
] as const

// 从配置推断类型
export type GameCategory = Exclude<typeof GAME_CATEGORIES[number], 'All'>
export type GameTag = typeof GAME_TAGS[number]  
export type GameDifficulty = Exclude<typeof GAME_DIFFICULTIES[number], 'All'>

// 导入其他类型定义
import { GameInfo } from '@/types/game'
import { slugify } from '@/utils/slug'

export interface Game {
  id: number
  title: string
  description: string
  image: string
  category: GameCategory
  tags: GameTag[]
  difficulty: GameDifficulty
  players: string
  rating: number
  playCount: string
  slug?: string
  url?: string
  type?: 'local' | 'iframe'
  scale?: number
  width?: number
  height?: number
  gameInfo?: GameInfo
}

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
    width: 512,
    height: 342,
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
        title: 'How to Play?',
        steps: [
          { step: 1, title: 'Launch WigglyPaint', description: 'Open WigglyPaint instantly in your browser - no downloads or signups required' },
          { step: 2, title: 'Choose Your Brush', description: 'Select from 8 animated brushes on the right panel, each with unique wiggly personality' },
          { step: 3, title: 'Draw Living Lines', description: 'Click and drag to create animated strokes that wiggle, dance, and breathe with life' },
          { step: 4, title: 'Hear Your Art', description: 'Each brush produces distinct sound effects as you draw, adding audio dimension to creativity' },
          { step: 5, title: 'Use Creative Tools', description: 'Adjust marker size, use eraser, undo mistakes, or clear canvas for fresh starts' },
          { step: 6, title: 'Export as GIF', description: 'Save your WigglyPaint animated masterpiece as a GIF to share on social media or with friends' },
          { step: 7, title: 'Share & Inspire', description: 'Post your WigglyPaint creations online and inspire others with your living artwork' }
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
          answer: 'No downloads required! WigglyPaint runs instantly in your web browser.'
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
    width: 1280,
    height: 720,
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
        title: 'How to Play?',
        steps: [
          { step: 1, title: 'Get Started with OVO Unblocked', description: 'Launch OVO Unblocked in your browser - no downloads or registration required. OVO Unblocked loads quickly on any device!' },
          { step: 2, title: 'Basic Movement', description: 'Use left and right arrow keys to move your stickman character smoothly across platforms' },
          { step: 3, title: 'Jump & Wall Jump', description: 'Press Up arrow to jump over obstacles. While sliding down a wall, quickly tap Up to perform wall jumps for advanced navigation' },
          { step: 4, title: 'Slide & Smash Techniques', description: 'Press Down while running to slide under low obstacles, or while airborne to smash through transparent platforms and barriers' },
          { step: 5, title: 'Master Advanced Timing', description: 'Perfect your timing for spikes, moving platforms, teleports, and gravity-defying sections that test your reflexes' },
          { step: 6, title: 'Collect & Customize', description: 'Grab bonus coins scattered throughout levels to unlock unique character skins like alien, watermelon, and more creative designs' },
          { step: 7, title: 'Progress in OVO Unblocked', description: 'Challenge yourself through 40+ OVO Unblocked levels that gradually build your parkour skills and problem-solving abilities' },
          { step: 8, title: 'OVO Unblocked Speedrun Mastery', description: 'Once comfortable with OVO Unblocked, attempt speedruns to perfect your movement flow and compete for faster completion times' }
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
    title: 'Make Pixel Art Online',
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
    width: 1280,
    height: 720,
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
        title: 'How to Play?',
        steps: [
          { step: 1, title: 'Start Creating', description: 'Visit pixilart.com/draw to launch the Pixel Art Online drawing tool instantly in your browser' },
          { step: 2, title: 'Choose Your Canvas', description: 'Select canvas size and resolution perfect for your Pixel Art Online project - sprites, or animations' },
          { step: 3, title: 'Select Drawing Tools', description: 'Pick from brushes, pencils, fill tools, and specialized Pixel Art Online tools with customizable settings' },
          { step: 4, title: 'Create Your Art', description: 'Make Pixel Art Online pixel by pixel or use advanced tools to create Pixel Art Online masterpieces with layers and effects' },
          { step: 5, title: 'Use Layers', description: 'Organize your artwork with multiple layers for complex compositions and easy editing' },
          { step: 6, title: 'Animate Your Art', description: 'Create frame-by-frame animations and export them as GIFs for dynamic visual content' },
          { step: 7, title: 'Save & Share', description: 'Save your creations to your profile and share them with the Pixilart community for feedback' },
          { step: 8, title: 'Join the Community', description: 'Follow other artists, participate in challenges, and build your reputation in the art community' }
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
  },
  {
    id: 4,
    title: 'Different Strokes',
    description: 'Collaborative online painting game where players explore a never-ending art exhibition! Draw, remix, and rate user-generated artwork in real-time multiplayer galleries.',
    image: '🎨',
    category: 'Casual',
    tags: ['Drawing', 'Creative', 'Multiplayer'],
    difficulty: 'Easy',
    players: 'Multiplayer',
    rating: 4.8,
    playCount: '586+',
    type: 'iframe',
    url: 'https://html-classic.itch.zone/html/14250065/index.html',
    width: 1066,
    height: 650,
    gameInfo: {
      introduction: {
        title: 'Different Strokes: Collaborative Online Art Gallery',
        description: 'Step into a living, breathing art exhibition where every visitor becomes an artist! Different Strokes is a unique collaborative online painting game that transforms traditional gallery viewing into an interactive creative experience. Explore user-generated artwork, add your own artistic layers, and participate in a never-ending artistic conversation with players worldwide.',
        features: [
          {
            icon: '👥',
            title: 'Real-time Multiplayer Art Creation',
            description: 'Draw and remix artwork alongside other players in shared gallery spaces with live collaborative features'
          },
          {
            icon: '🖼️',
            title: 'Dynamic Art Exhibition',
            description: 'Explore an ever-expanding gallery where 100% of artwork is created, remixed, and rated live by the community'
          },
          {
            icon: '⭐',
            title: 'Community Art Rating System',
            description: 'Vote on artwork quality to boost good art and hide poor content, shaping the gallery experience for everyone'
          },
          {
            icon: '🎨',
            title: 'Layered Art Creation',
            description: 'Add layers to existing artwork or create entirely new pieces using intuitive drawing tools and paint bucket fills'
          },
          {
            icon: '📅',
            title: 'Weekly Themed Galleries',
            description: 'Participate in special themed exhibitions that rotate weekly, offering focused creative challenges'
          },
          {
            icon: '🌐',
            title: 'Cross-Platform Access',
            description: 'Play on HTML5 browsers, Windows, or Android devices with seamless online connectivity'
          }
        ]
      },
      howToPlay: {
        title: 'How to Play?',
        steps: [
          { step: 1, title: 'Enter the Gallery', description: 'Launch Different Strokes and step into the collaborative art exhibition as a visitor-artist' },
          { step: 2, title: 'Explore Existing Art', description: 'Walk through gallery spaces using WASD keys to discover artwork created by other players' },
          { step: 3, title: 'Interact with Artwork', description: 'Press E near artwork to interact, rate pieces, or begin adding your own creative layers' },
          { step: 4, title: 'Choose Your Tools', description: 'Select the Brush Tool (B) for freehand drawing or Paint Bucket (G) for filling areas with color' },
          { step: 5, title: 'Create and Remix', description: 'Draw new art or add layers to existing pieces, creating collaborative masterpieces with other artists' },
          { step: 6, title: 'Rate Community Art', description: 'Vote on artwork quality to help promote great art and maintain gallery standards' },
          { step: 7, title: 'Explore Themed Galleries', description: 'Visit the weekly themed gallery for special creative challenges and focused artistic experiences' },
          { step: 8, title: 'Customize Your Experience', description: 'Access Settings (ESC/P) to adjust preferences and enhance your collaborative art creation' }
        ],
        tips: [
          'Use CTRL+Z to undo mistakes while creating your artistic contributions to the gallery',
          'Adjust brush size with [ and ] keys to create detailed work or bold strokes as needed',
          'Rate artwork thoughtfully - your votes help shape the gallery experience for all visitors',
          'Layer your artwork strategically on existing pieces to create meaningful artistic conversations',
          'Explore different gallery areas to discover various artistic styles and collaborative opportunities',
          'Participate in weekly themed galleries to challenge your creativity and connect with focused communities',
          'Press Space to skip dialog quickly and spend more time creating and exploring art',
          'Consider upgrading to Deluxe Edition for exclusive colors and advanced tools like brush smoothing'
        ]
      },
      faq: [
        {
          question: 'What makes Different Strokes unique compared to other drawing games?',
          answer: 'Different Strokes creates a living art gallery where every piece is collaboratively created by real players. Unlike solo drawing tools, you\'re constantly interacting with others\' artwork, creating layered collaborative masterpieces in shared gallery spaces.'
        },
        {
          question: 'How does the art rating system work?',
          answer: 'Players can rate artwork to influence its visibility in the gallery. Highly-rated art gets boosted and prominently displayed, while poorly-rated content becomes less visible, ensuring quality collaborative experiences for all visitors.'
        },
        {
          question: 'Can I play Different Strokes on mobile devices?',
          answer: 'Yes! Different Strokes is available on Android devices as well as HTML5 browsers and Windows. The game maintains full multiplayer functionality across all platforms.'
        },
        {
          question: 'What are the weekly themed galleries?',
          answer: 'Each week features a special gallery with a specific creative theme, offering focused collaborative challenges. These themed spaces encourage artists to explore particular styles, subjects, or creative constraints together.'
        },
        {
          question: 'Do I own the artwork I create in Different Strokes?',
          answer: 'Different Strokes is designed around collaborative creation where multiple artists contribute to shared works. The focus is on community art-making rather than individual ownership, creating unique collaborative masterpieces.'
        },
        {
          question: 'What\'s included in the Deluxe Edition?',
          answer: 'The Deluxe Edition ($5) includes 9 exclusive colors, smaller brush sizes, brush smoothing, straight line tool, canvas zoom, and access to a private studio room for more focused creative work.'
        },
        {
          question: 'Is Different Strokes appropriate for all ages?',
          answer: 'Different Strokes includes community rating systems to maintain appropriate content, but as with any user-generated content platform, parental guidance is recommended for younger players in online multiplayer environments.'
        },
        {
          question: 'How do I join collaborative artwork sessions?',
          answer: 'Simply walk through the gallery using WASD keys, approach any artwork that interests you, and press E to interact. You can then add your own creative layers using the available drawing tools.'
        },
        {
          question: 'Can I create entirely new artwork or only remix existing pieces?',
          answer: 'You can both create brand new artwork and remix existing pieces! The gallery supports fresh creations as well as collaborative layering on community artwork.'
        },
        {
          question: 'What drawing tools are available?',
          answer: 'Different Strokes includes brush tools (B), paint bucket fill (G), adjustable brush sizes ([ and ]), undo functionality (CTRL+Z), and in the Deluxe Edition, advanced features like brush smoothing and straight line tools.'
        }
      ]
    }
  },
  {
    id: 5,
    title: 'Drawaria.online',
    description: 'Free multiplayer drawing and guessing game! Join players worldwide in Pictionary-style rooms, take turns drawing secret words while others guess to earn points.',
    image: '✏️',
    category: 'Casual',
    tags: ['Drawing', 'Multiplayer', 'Skill'],
    difficulty: 'Easy',
    players: 'Multiplayer',
    rating: 4.5,
    playCount: '10K+',
    type: 'iframe',
    url: 'https://drawaria.online/',
    width: 1024,
    height: 1024,
    gameInfo: {
      introduction: {
        title: 'Drawaria.online: Multiplayer Drawing & Guessing Game',
        description: 'Join the fun in Drawaria.online, a free multiplayer drawing and guessing game that brings the classic Pictionary experience online! Draw secret words while other players race to guess, or put your guessing skills to the test as others create their masterpieces. With multiple game modes, customizable rooms, and a vibrant community, Drawaria.online offers endless entertainment for players of all ages.',
        features: [
          {
            icon: '🎨',
            title: 'Pictionary Game Mode',
            description: 'Classic drawing and guessing gameplay with scoring system - first to guess gets 3 points, drawer gets 2 points'
          },
          {
            icon: '🎪',
            title: 'Playground Mode',
            description: 'Free drawing mode where you can create art without time limits and upload your creations to the community gallery'
          },
          {
            icon: '👥',
            title: 'Public & Private Rooms',
            description: 'Join public rooms with players worldwide or create private rooms to play with friends and family'
          },
          {
            icon: '🏆',
            title: 'Scoring & Leaderboards',
            description: 'Earn points for correct guesses and successful drawings, compete on global scoreboards and track your progress'
          },
          {
            icon: '🖼️',
            title: 'Community Gallery',
            description: 'Browse and share artwork in the community gallery with categories like Vanilla, Pixel Art, Stencils, and Algo Tools'
          },
          {
            icon: '🌍',
            title: 'Multilingual Support',
            description: 'Play in English, Russian (Русский), or Spanish (Español) with international player community'
          },
          {
            icon: '📱',
            title: 'Cross-Platform Play',
            description: 'Available on web browsers and mobile app for Android, play anywhere with seamless online connectivity'
          },
          {
            icon: '💬',
            title: 'Chat & Social Features',
            description: 'Real-time chat, player profiles, Discord community, and social interaction tools with reporting system'
          }
        ]
      },
      howToPlay: {
        title: 'How to Play?',
        steps: [
          { step: 1, title: 'Choose Game Mode', description: 'Select Pictionary for competitive drawing/guessing or Playground for free drawing mode' },
          { step: 2, title: 'Join or Create Room', description: 'Enter a public room to play with others or create a private room for friends' },
          { step: 3, title: 'Drawing Your Turn', description: 'When it\'s your turn, select from 3 word choices (press 1, 2, or 3 keys) and draw the secret word' },
          { step: 4, title: 'Use Drawing Tools', description: 'Left mouse to draw, right mouse to erase, mouse wheel to change brush size, use the color palette' },
          { step: 5, title: 'Guessing Phase', description: 'Type your guesses in the chat when others are drawing - first correct guess earns 3 points' },
          { step: 6, title: 'Earn Points', description: 'Drawer gets 2 points for first correct guess, other players get 1 point if they guess within 10 seconds' },
          { step: 7, title: 'Share Your Art', description: 'Save your best drawings to the community gallery from the room menu' },
          { step: 8, title: 'Build Your Profile', description: 'Login with Google/Facebook to track scores, save progress, and build your player profile' }
        ],
        tips: [
          'Use simple, clear drawings - abstract concepts can be shown through symbols and actions',
          'Pay attention to the word category hints and letter count to improve your guessing accuracy',
          'Practice in Playground mode to improve your drawing skills before joining competitive rooms',
          'Use the mouse wheel to quickly adjust brush size for detailed work or bold strokes',
          'Watch other players\' drawing techniques in the gallery to learn new artistic approaches',
          'Join the Discord community to find regular players and participate in events',
          'Report inappropriate content using the reporting system to keep the community friendly',
          'Try the mobile app for drawing on-the-go with touch controls optimized for smaller screens'
        ]
      },
      faq: [
        {
          question: 'How does the scoring system work in Drawaria.online?',
          answer: 'In Pictionary mode, the first player to guess correctly gets 3 points, the drawer receives 2 points for the first correct answer, and other players who guess within 10 seconds get 1 point each. The player with the most points at the end wins!'
        },
        {
          question: 'What\'s the difference between Pictionary and Playground modes?',
          answer: 'Pictionary is the competitive drawing and guessing game with time limits and scoring. Playground is a free drawing mode where you can create art without time pressure and upload your creations to the community gallery.'
        },
        {
          question: 'Can I play Drawaria.online on mobile devices?',
          answer: 'Yes! Drawaria.online has a dedicated Android mobile app available on Google Play Store, plus the web version works on mobile browsers with touch-optimized controls.'
        },
        {
          question: 'How do I create a private room to play with friends?',
          answer: 'Click "Create Room" from the main menu, set your room preferences, and share the room code with friends. You can customize room settings like time limits, word categories, and player limits.'
        },
        {
          question: 'What languages does Drawaria.online support?',
          answer: 'The game supports English, Russian (Русский), and Spanish (Español). You can change the language from the main menu dropdown to play with international communities.'
        },
        {
          question: 'How do I upload my drawings to the gallery?',
          answer: 'In any room (Pictionary or Playground), click the menu button on the right side and select "Send your latest drawing to gallery". Your artwork will be reviewed and added to the community gallery.'
        },
        {
          question: 'What are the gallery categories like Vanilla, Stencils, and Pixel Art?',
          answer: 'These are filtering categories for different art styles: Vanilla for standard drawings, Stencils for template-based art, Pixel Art for retro-style creations, and Algo Tools for digitally-assisted artwork.'
        },
        {
          question: 'How do I report inappropriate content or players?',
          answer: 'Use the player menu buttons to hide drawings, mute players, vote kick, or report abusive behavior. The game has strict community guidelines against inappropriate content and harassment.'
        },
        {
          question: 'Do I need to create an account to play?',
          answer: 'You can play as a guest with just a username, but logging in with Google or Facebook lets you save your progress, track scores on leaderboards, and maintain your player profile across sessions.'
        },
        {
          question: 'What drawing controls are available?',
          answer: 'Left mouse button to draw, right mouse button to erase, mouse wheel to change brush size, keyboard for chat, and number keys (1, 2, 3) to quickly select word choices when it\'s your turn to draw.'
        }
      ]
    }
  }
]

// 自动生成slug
export const GAMES_WITH_SLUGS = GAMES.map(game => ({
  ...game,
  slug: slugify(game.title)
}))


// 首页游戏配置
export const HOMEPAGE_GAME = {
  id: 1, // WigglyPaint
  component: 'WigglyPaint'
}
