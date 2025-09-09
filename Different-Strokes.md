# Different Strokes - 游戏信息文档

## 基础信息收集

基于项目中 `config/games.ts` 的结构，以下是为 Different Strokes 收集的游戏信息：

### 基础配置信息
```typescript
{
  id: 4, // 建议的ID
  title: 'Different Strokes',
  description: 'Collaborative online painting game where players explore a never-ending art exhibition! Draw, remix, and rate user-generated artwork in real-time multiplayer galleries.',
  image: '🎨', // 建议使用绘画相关emoji
  category: 'Casual',
  tags: ['Drawing', 'Creative', 'Multiplayer'], // 需要确认项目支持'Multiplayer'标签
  difficulty: 'Easy',
  players: 'Multiplayer',
  rating: 4.8, // 基于itch.io实际评分 (678 总评分)
  playCount: '586+', // 基于itch.io评论数量
  type: 'iframe',
  url: 'https://html-classic.itch.zone/html/14250065/index.html', // 实际游戏资源URL
  width: 1066, // HTML嵌入宽度
  height: 650, // HTML嵌入高度
}
```

## 详细游戏信息 (gameInfo)

### Introduction 部分
```typescript
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
}
```

### How to Play 部分
```typescript
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
}
```

### FAQ 部分
```typescript
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
```

## 技术资源信息

### 嵌入资源
- **主要URL**: https://scottts.itch.io/different-strokes
- **官方网站**: https://differentstrokes.xyz (游戏官方网站)
- **建议嵌入尺寸**: 1066x650 (官方HTML嵌入尺寸)
- **平台**: HTML5, Windows, Android
- **开发引擎**: Unity
- **开发者**: ScotttS, midblue, Rincs

### 确认的游戏资源获取途径
1. **实际游戏资源URL**: https://html-classic.itch.zone/html/14250065/index.html ✅
2. **itch.io游戏页面**: https://scottts.itch.io/different-strokes
3. **官方网站**: https://differentstrokes.xyz (提供Steam和itch.io链接)
4. **Steam版本**: https://store.steampowered.com/app/2102020/Different_Strokes/
5. **Discord社区**: https://discord.gg/7r7MtVmEnh (官方Discord服务器)
6. **艺术作品查看**: https://differentstrokes.xyz/view/[artwork-id] (单独艺术作品链接格式)

### 浏览器调研发现的重要信息
1. **游戏有官方网站**: https://differentstrokes.xyz 提供了游戏的完整介绍
2. **活跃社区**: 586条评论显示游戏有活跃的用户社区  
3. **多语言支持**: 评论中显示支持中文、葡萄牙语等多种语言
4. **官方Discord**: https://discord.gg/7r7MtVmEnh 提供社区支持
5. **Deluxe版本**: $5付费版本提供额外颜色和功能

### 注意事项
- 游戏需要网络连接进行多人协作功能
- 可能需要与开发者协商嵌入许可（联系方式：ScotttS on itch.io）
- 考虑到是多人游戏，需要确保服务器稳定性
- itch.io提供嵌入选项，但需要进一步测试
- 游戏内容由用户生成，可能需要考虑内容监管

## 建议后续步骤
1. 联系开发者ScotttS获取正式嵌入授权
2. 测试itch.io的Run game功能和embed选项
3. 确认项目是否支持'Multiplayer'标签，如没有需要添加
4. 考虑是否需要内容过滤机制（用户生成内容）
5. 验证游戏在项目环境中的嵌入表现和加载速度
6. 评估多人游戏服务器稳定性对用户体验的影响