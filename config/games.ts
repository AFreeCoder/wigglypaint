import { Game, GameCategory, GameTag, GameDifficulty } from '@/types/game'

export const GAMES: Game[] = [
  {
    id: 1,
    title: 'Memory Match',
    description: 'Test your memory with this classic card matching game',
    image: '🎴',
    category: 'Puzzle',
    tags: ['Memory', 'Cards', 'Classic'],
    difficulty: 'Easy',
    players: '1 Player',
    rating: 4.5,
    playCount: '12.5K',
    type: 'local'
  },
  {
    id: 2,
    title: 'Snake Game',
    description: 'Classic snake game - grow longer by eating food',
    image: '🐍',
    category: 'Arcade',
    tags: ['Classic', 'Arcade', 'Retro'],
    difficulty: 'Medium',
    players: '1 Player',
    rating: 4.8,
    playCount: '25.3K',
    type: 'local'
  },
  {
    id: 3,
    title: 'Tic Tac Toe',
    description: 'Play the timeless game of Xs and Os',
    image: '⭕',
    category: 'Strategy',
    tags: ['Classic', 'Logic', 'Quick'],
    difficulty: 'Easy',
    players: '2 Players',
    rating: 4.2,
    playCount: '8.7K',
    type: 'local'
  },
  {
    id: 4,
    title: 'Word Scramble',
    description: 'Unscramble letters to form words',
    image: '📝',
    category: 'Word',
    tags: ['Vocabulary', 'Letters', 'Brain'],
    difficulty: 'Hard',
    players: '1 Player',
    rating: 4.6,
    playCount: '15.9K',
    type: 'local'
  },
  {
    id: 5,
    title: 'Color Match',
    description: 'Match colors in this vibrant puzzle game',
    image: '🎨',
    category: 'Puzzle',
    tags: ['Colors', 'Matching', 'Visual'],
    difficulty: 'Medium',
    players: '1 Player',
    rating: 4.3,
    playCount: '9.2K',
    type: 'local'
  },
  {
    id: 6,
    title: 'Math Quiz',
    description: 'Challenge your math skills with quick calculations',
    image: '🔢',
    category: 'Education',
    tags: ['Math', 'Numbers', 'Learning'],
    difficulty: 'Hard',
    players: '1 Player',
    rating: 4.4,
    playCount: '11.1K',
    type: 'local'
  },
  {
    id: 7,
    title: 'Bubble Pop',
    description: 'Pop colorful bubbles in this relaxing game',
    image: '🫧',
    category: 'Casual',
    tags: ['Relaxing', 'Colors', 'Fun'],
    difficulty: 'Easy',
    players: '1 Player',
    rating: 4.1,
    playCount: '18.7K',
    type: 'local'
  },
  {
    id: 8,
    title: 'Chess Master',
    description: 'Play chess against AI or friends',
    image: '♟️',
    category: 'Strategy',
    tags: ['Chess', 'Strategy', 'Classic'],
    difficulty: 'Hard',
    players: '2 Players',
    rating: 4.7,
    playCount: '22.4K',
    type: 'local'
  },
  {
    id: 9,
    title: 'Number Puzzle',
    description: 'Slide tiles to arrange numbers in order',
    image: '🔢',
    category: 'Puzzle',
    tags: ['Numbers', 'Logic', 'Sliding'],
    difficulty: 'Medium',
    players: '1 Player',
    rating: 4.0,
    playCount: '7.3K',
    type: 'local'
  },
  {
    id: 10,
    title: 'Racing Cars',
    description: 'Race against time in this thrilling game',
    image: '🏎️',
    category: 'Racing',
    tags: ['Speed', 'Cars', 'Racing'],
    difficulty: 'Medium',
    players: '1 Player',
    rating: 4.5,
    playCount: '31.2K',
    type: 'local'
  },
  {
    id: 11,
    title: 'OVO Unblocked',
    description: 'Play the popular OVO parkour game',
    image: '🍾',
    category: 'Arcade',
    tags: ['Parkour', 'Platform', 'Skill'],
    difficulty: 'Medium',
    players: '1 Player',
    rating: 4.8,
    playCount: '45.6K',
    type: 'iframe',
    url: 'https://joyhubcentral.com/games/ovo-unblocked/?v=20250316163142',
    gameInfo: {
      introduction: {
        title: 'OVO Parkour Adventure',
        description: 'Experience the thrill of parkour in this fast-paced platformer! Navigate through challenging obstacles, perfect your timing, and master the art of parkour movement in this exciting online game.',
        features: [
          {
            icon: '🏃',
            title: 'Fluid Movement',
            description: 'Master smooth parkour mechanics and fluid character controls'
          },
          {
            icon: '🎯',
            title: 'Challenging Levels',
            description: 'Progress through increasingly difficult obstacle courses'
          },
          {
            icon: '⚡',
            title: 'Fast-Paced Action',
            description: 'Quick reflexes and precise timing are key to success'
          }
        ]
      },
      howToPlay: {
        title: 'How to Master OVO',
        steps: [
          { step: 1, icon: '←→', title: 'Move Left/Right', description: 'Use arrow keys or A/D keys to move your character' },
          { step: 2, icon: '↑', title: 'Jump', description: 'Press Up arrow or W key to jump over obstacles' },
          { step: 3, icon: '⬇', title: 'Slide/Duck', description: 'Use Down arrow or S key to slide under barriers' },
          { step: 4, icon: '🎯', title: 'Time Your Moves', description: 'Perfect your timing to navigate through complex obstacles' },
          { step: 5, icon: '🏁', title: 'Reach the Goal', description: 'Complete each level by reaching the finish line' },
          { step: 6, icon: '⭐', title: 'Improve Your Skills', description: 'Practice to achieve faster completion times' }
        ],
        tips: [
          'Practice wall jumping to reach higher platforms',
          'Use momentum to your advantage on longer jumps',
          'Watch out for moving obstacles and time your moves accordingly',
          'Don\'t rush - precision is more important than speed'
        ]
      },
      faq: [
        {
          question: 'What are the controls for OVO?',
          answer: 'Use arrow keys or WASD keys to move. Up/W to jump, Down/S to slide, Left/A and Right/D to move horizontally.'
        },
        {
          question: 'How many levels are there in OVO?',
          answer: 'OVO features multiple challenging levels with increasing difficulty. New levels are regularly added to keep the gameplay fresh.'
        },
        {
          question: 'Can I play OVO on mobile devices?',
          answer: 'Yes! OVO is optimized for both desktop and mobile devices. Touch controls are available for mobile players.'
        },
        {
          question: 'What makes OVO different from other parkour games?',
          answer: 'OVO features unique physics-based movement, creative level design, and smooth gameplay that emphasizes skill and precision over luck.'
        },
        {
          question: 'Are there any tips for beginners?',
          answer: 'Start by mastering basic movements, take your time to learn each obstacle type, and don\'t be afraid to restart levels to improve your technique.'
        },
        {
          question: 'Is OVO free to play?',
          answer: 'Yes, OVO is completely free to play in your browser. No downloads or installations required.'
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
  'Sliding', 'Speed', 'Cars', 'Racing', 'Parkour', 'Platform', 'Skill'
]

export const GAME_DIFFICULTIES: (GameDifficulty | 'All')[] = [
  'All', 'Easy', 'Medium', 'Hard'
]