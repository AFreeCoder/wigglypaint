# Drawaria.online - 游戏信息文档

## 基础信息收集

基于项目中 `config/games.ts` 的结构，以下是为 Drawaria.online 收集的游戏信息：

### 基础配置信息
```typescript
{
  id: 5, // 建议的ID
  title: 'Drawaria.online',
  description: 'Free multiplayer drawing and guessing game! Join players worldwide in Pictionary-style rooms, take turns drawing secret words while others guess to earn points.',
  image: '✏️', // 绘画相关emoji
  category: 'Casual',
  tags: ['Drawing', 'Multiplayer', 'Skill'], 
  difficulty: 'Easy',
  players: 'Multiplayer',
  rating: 4.5, // 估计评分
  playCount: '10K+', // 估算基于游戏受欢迎程度
  type: 'iframe',
  url: 'https://drawaria.online/', // itch.io嵌入URL
  width: 552, // 嵌入宽度
  height: 167, // 嵌入高度 (这是widget高度，实际游戏可能需要调整)
}
```

## 详细游戏信息 (gameInfo)

### Introduction 部分
```typescript
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
}
```

### How to Play 部分
```typescript
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
}
```

### FAQ 部分
```typescript
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
```

## 技术资源信息

### 嵌入资源
- **主要URL**: https://drawaria.online/
- **itch.io嵌入URL**: https://itch.io/embed/443858 ✅
- **建议嵌入尺寸**: 552x167 (itch.io widget) 或需要调整为游戏实际尺寸
- **平台**: Web浏览器, Android移动应用
- **开发者**: drawaria

### 确认的游戏资源获取途径
1. **itch.io嵌入代码**: `<iframe frameborder="0" src="https://itch.io/embed/443858" width="552" height="167"><a href="https://drawaria.itch.io/drawaria-online">Drawaria.online by drawaria</a></iframe>`
2. **官方网站**: https://drawaria.online/ (主要游戏平台)
3. **itch.io页面**: https://drawaria.itch.io/drawaria-online
4. **Android应用**: https://play.google.com/store/apps/details?id=com.gmail.at.ixevixe.cordovaapp
5. **Discord社区**: https://discord.gg/XeVKWWs (官方Discord服务器)
6. **社区画廊**: https://drawaria.online/gallery/
7. **排行榜**: https://drawaria.online/scoreboards/

### 浏览器调研发现的重要信息
1. **游戏有完整的社区系统**: 包括画廊、排行榜、Discord社区
2. **多种游戏模式**: Pictionary竞技模式和Playground自由绘画模式
3. **完善的评分系统**: 详细的积分规则和全球排行榜
4. **内容监管系统**: 有举报机制和社区准则来维护游戏环境
5. **多平台支持**: 网页版和Android应用同步
6. **国际化支持**: 支持英语、俄语、西班牙语

### 游戏特色功能
- **智能词汇选择**: 提供3个词汇选项，可用数字键快速选择
- **灵活房间系统**: 公开房间和私人房间，可自定义设置
- **社交功能**: 实时聊天、玩家资料、好友系统
- **艺术画廊**: 用户作品展示平台，支持多种艺术风格分类
- **移动端优化**: Android应用和触屏控制优化

### 注意事项
- 游戏主要通过官方网站 drawaria.online 运行
- itch.io 版本提供嵌入widget，但可能需要重定向到主站
- 需要网络连接进行多人游戏功能
- 内容由用户生成，有社区监管系统
- 免费游戏，无需付费

## 建议后续步骤
1. 测试itch.io嵌入URL的实际表现和尺寸需求
2. 考虑是否直接链接到 drawaria.online 主站
3. 评估嵌入iframe的性能和用户体验
4. 确认游戏在项目环境中的兼容性
5. 考虑添加对多人游戏的特殊说明
6. 测试移动端的响应式表现