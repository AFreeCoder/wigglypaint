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
    type: 'iframe',
    url: 'https://r2.wigglypaint.co/WigglyPainthtml'
  },
  {
    id: 3,
    title: 'Number Guessing Game',
    description: 'Guess the secret number between 1 and 100 with hints and scoring',
    image: '🎲',
    category: 'Puzzle',
    tags: ['Numbers', 'Logic', 'Brain', 'Quick'],
    difficulty: 'Easy',
    players: '1 Player',
    rating: 4.3,
    playCount: '8.2K',
    type: 'local',
    gameInfo: {
      introduction: {
        title: 'Number Guessing Challenge',
        description: 'Test your logical thinking and intuition! Guess the secret number between 1 and 100 with the fewest attempts possible. Use hints and feedback to narrow down your guesses and achieve the best score.',
        features: [
          {
            icon: '🎯',
            title: 'Smart Hints',
            description: 'Get helpful hints after 5 attempts to guide your guesses'
          },
          {
            icon: '📊',
            title: 'Score System',
            description: 'Earn ratings based on your performance and number of attempts'
          },
          {
            icon: '📈',
            title: 'Progress Tracking',
            description: 'View your guess history and learn from your attempts'
          }
        ]
      },
      howToPlay: {
        title: 'How to Play Number Guessing',
        steps: [
          { step: 1, icon: '🎲', title: 'Start the Game', description: 'A random number between 1 and 100 is generated' },
          { step: 2, icon: '💭', title: 'Make Your Guess', description: 'Enter a number between 1 and 100 in the input field' },
          { step: 3, icon: '📈📉', title: 'Get Feedback', description: 'See if your guess is too high, too low, or correct' },
          { step: 4, icon: '🔥', title: 'Use Hints', description: 'After 5 attempts, get temperature hints about how close you are' },
          { step: 5, icon: '🎉', title: 'Win the Game', description: 'Guess the correct number and see your score rating' },
          { step: 6, icon: '🔄', title: 'Play Again', description: 'Start a new game to improve your score' }
        ],
        tips: [
          'Start with 50 to divide the range in half',
          'Use binary search strategy for optimal results',
          'Pay attention to your guess history to avoid duplicates',
          'Temperature hints appear after 5 attempts to help you'
        ]
      },
      faq: [
        {
          question: 'What is the range of numbers I can guess?',
          answer: 'The secret number is always between 1 and 100 (inclusive).'
        },
        {
          question: 'How does the scoring system work?',
          answer: 'Excellent (🏆): 1-5 attempts, Great (🥈): 6-8 attempts, Good (🥉): 9-12 attempts, Keep practicing (🎯): 13+ attempts.'
        },
        {
          question: 'When do I get hints?',
          answer: 'Temperature hints (very close, getting warmer, cold, very cold) appear after your 5th attempt to help guide your guesses.'
        },
        {
          question: 'Can I guess the same number twice?',
          answer: 'No, the game will remind you if you try to guess a number you\'ve already tried.'
        },
        {
          question: 'What\'s the best strategy for guessing?',
          answer: 'Use binary search: start with 50, then go to 25 or 75 based on feedback, and continue halving the range.'
        }
      ]
    }
  },
  {
    id: 2,
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

// 首页游戏配置
export const HOMEPAGE_GAME = {
  id: 3, // Number Guessing Game
  component: 'NumberGuessingGame'
}