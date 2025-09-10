# Sandspiel - 游戏信息文档

## 基础信息收集

基于项目中 `config/games.ts` 的结构，以下是为 Sandspiel 收集的游戏信息：

### 基础配置信息
```typescript
{
  id: 6, // 建议的ID
  title: 'Sandspiel',
  description: 'Creative pixel physics simulation sandbox! Paint with elements like sand, water, fire, and lava. Conduct experiments and build your own world with realistic interactions.',
  image: '🌊', // 物理模拟相关emoji
  category: 'Casual',
  tags: ['Creative', 'Pixel Art', 'Skill'], 
  difficulty: 'Easy',
  players: '1 Player',
  rating: 4.7, // 基于GitHub 3.1k stars和社区反馈
  playCount: '50K+', // 估算基于受欢迎程度和GitHub activity
  type: 'iframe',
  url: 'https://sandspiel.club/', // 官方主站
  width: 1024, // 建议全屏显示
  height: 768, // 建议全屏显示
  // 或者使用itch.io嵌入: https://itch.io/embed/489790
}
```

## 详细游戏信息 (gameInfo)

### Introduction 部分
```typescript
introduction: {
  title: 'Sandspiel: Creative Pixel Physics Simulation',
  description: 'Enter a world where physics comes alive through pixels! Sandspiel is a mesmerizing falling-sand simulation game where you can paint with elements and watch them interact in realistic ways. From flowing water and spreading fire to growing plants and explosive dust, every element has its own behavior and personality. This creative sandbox lets you experiment, build, and create your own miniature worlds with stunning pixel physics.',
  features: [
    {
      icon: '🎨',
      title: 'Paint with Elements',
      description: 'Choose from 20+ unique elements including Sand, Water, Fire, Lava, Ice, Plants, and more, each with distinct properties'
    },
    {
      icon: '⚗️',
      title: 'Realistic Physics Simulation',
      description: 'Watch elements interact naturally - water flows, fire spreads, ice freezes water, and plants grow in wet environments'
    },
    {
      icon: '🧪',
      title: 'Element Chemistry',
      description: 'Discover fascinating reactions: Gas explodes, Acid corrodes, Mites eat wood, Cloners copy adjacent elements'
    },
    {
      icon: '🌱',
      title: 'Living Ecosystems',
      description: 'Create thriving worlds with Plants, Fungus, Seeds, and Wood that grow, spread, and interact organically'
    },
    {
      icon: '🔥',
      title: 'Dynamic Fire System',
      description: 'Realistic fire propagation with different burning behaviors for Oil, Gas, Wood, and other flammable materials'
    },
    {
      icon: '📤',
      title: 'Share & Browse Creations',
      description: 'Upload your masterpieces to the community gallery and explore amazing worlds created by other players'
    },
    {
      icon: '🎯',
      title: 'Open Source & Customizable',
      description: 'Built with Rust, WebGL, and open-source technology - view source code and contribute on GitHub'
    },
    {
      icon: '🚀',
      title: 'High Performance',
      description: 'Smooth 120+ FPS simulation powered by WebGL and WebAssembly for responsive real-time physics'
    }
  ]
}
```

### How to Play 部分
```typescript
howToPlay: {
  title: 'How to Play?',
  steps: [
    { step: 1, title: 'Choose Your Element', description: 'Select from the toolbar: Sand, Water, Fire, Stone, Ice, Plant, and many more unique materials' },
    { step: 2, title: 'Paint and Draw', description: 'Click and drag to paint elements onto the canvas - watch them come alive with realistic physics' },
    { step: 3, title: 'Experiment with Interactions', description: 'Try mixing elements: pour Water on Fire, freeze Water with Ice, or watch Plants grow in wet soil' },
    { step: 4, title: 'Create Complex Structures', description: 'Build dams with Stone, create forests with Wood and Plant, or design explosive contraptions with Gas and Dust' },
    { step: 5, title: 'Use Special Elements', description: 'Try Cloner to copy adjacent elements, Mites to consume organic materials, or Rocket for explosive spreading' },
    { step: 6, title: 'Control the Environment', description: 'Use Wind to affect particles, adjust gravity, and control the flow of your simulation' },
    { step: 7, title: 'Save Your Creation', description: 'Upload your masterpiece to share with the community or browse others\' amazing worlds' },
    { step: 8, title: 'Reset and Experiment', description: 'Clear the canvas anytime to start fresh and try new combinations and experiments' }
  ],
  tips: [
    'Start with basic elements like Sand and Water to understand physics before trying complex interactions',
    'Stone forms natural arches and turns to Sand under pressure - great for building structures',
    'Ice is slippery! Elements slide on it, creating interesting dynamics for your simulations',
    'Plants thrive in wet environments - create rivers and lakes to grow lush forests',
    'Fungus spreads over everything it touches - use it to create organic, growing patterns',
    'Dust is beautiful but dangerously explosive - handle with care around Fire or Lava',
    'Mites eat Wood and Plant but love Dust - create predator-prey ecosystems',
    'Experiment with element combinations to discover hidden reactions and behaviors'
  ]
}
```

### FAQ 部分
```typescript
faq: [
  {
    question: 'What is Sandspiel and how does it work?',
    answer: 'Sandspiel is a falling-sand physics simulation game where you paint with different elements that interact realistically. Each pixel follows physics laws - sand falls, water flows, fire spreads, and plants grow. It\'s built with Rust and WebGL for smooth, responsive simulations.'
  },
  {
    question: 'What elements are available in Sandspiel?',
    answer: 'Sandspiel includes 20+ elements: Wall (indestructible), Sand (sinks in water), Water (puts out fire), Stone (forms arches), Ice (freezes water), Gas (flammable), Fire, Lava, Plant (grows in wet areas), Fungus (spreads), Wood (biodegradable), Oil, Acid (corrosive), Dust (explosive), and more!'
  },
  {
    question: 'Can I save and share my Sandspiel creations?',
    answer: 'Yes! You can upload your creations to the community gallery directly from the game. Browse amazing worlds made by other players and get inspired by their creative use of physics and elements.'
  },
  {
    question: 'Is Sandspiel free to play?',
    answer: 'Absolutely! Sandspiel is completely free and open-source. You can play online at sandspiel.club without downloads, registration, or payment. The source code is available on GitHub for developers.'
  },
  {
    question: 'What makes Sandspiel different from other sandbox games?',
    answer: 'Sandspiel focuses on realistic pixel physics with detailed element interactions. Unlike simple drawing tools, every particle follows physical laws. It\'s inspired by classic falling-sand games but built with modern web technology for smooth performance.'
  },
  {
    question: 'Can I play Sandspiel on mobile devices?',
    answer: 'Sandspiel works best on desktop browsers with mouse control for precise element placement. While it may run on mobile browsers, the experience is optimized for mouse interaction and larger screens.'
  },
  {
    question: 'How do I create complex structures in Sandspiel?',
    answer: 'Start with Stone for foundations since it forms arches and is pressure-resistant. Use Wall for permanent barriers, Sand for terrain, and Water for rivers. Combine Wood and Plant for organic growth, and experiment with element layering.'
  },
  {
    question: 'What happens when I mix different elements?',
    answer: 'Elements interact in realistic ways: Water puts out Fire, Ice freezes Water, Gas explodes near Fire, Acid corrodes most materials, Plants grow in wet conditions, Fungus spreads over surfaces, and Mites consume organic materials. Experimentation is key!'
  },
  {
    question: 'Is there an expanded version of Sandspiel?',
    answer: 'Yes! Sandspiel Studio offers infinite new elements and enhanced creation tools. The original Sandspiel at sandspiel.club remains free with the core experience, while Studio provides advanced features for serious creators.'
  },
  {
    question: 'How does the physics simulation work technically?',
    answer: 'Sandspiel uses cellular automata with custom physics written in Rust, compiled to WebAssembly for performance. WebGL handles rendering for smooth 120+ FPS. This combination provides real-time physics simulation with thousands of interacting particles.'
  }
]
```

## 技术资源信息

### 嵌入资源
- **官方网站**: https://sandspiel.club/ ✅ (主要推荐)
- **itch.io嵌入URL**: https://itch.io/embed/489790 (备选方案)
- **开源项目**: https://github.com/MaxBittker/sandspiel
- **开发者博客**: https://maxbittker.com/making-sandspiel
- **Sandspiel Studio**: https://studio.sandspiel.club/ (增强版)

### 确认的游戏资源获取途径
1. **主游戏网站**: https://sandspiel.club/ ✅ (最佳选择)
2. **itch.io嵌入代码**: `<iframe width="552" height="167" frameborder="0" src="https://itch.io/embed/489790"><a href="https://maxbittker.itch.io/sandspiel">Sandspiel by maxbittker</a></iframe>`
3. **GitHub开源代码**: https://github.com/MaxBittker/sandspiel
4. **开发者联系**: maxbittker@gmail.com, @maxbittker (Twitter)
5. **相关项目**: https://orb.farm (同开发者作品)

### 浏览器调研发现的重要信息
1. **高性能表现**: 使用WebGL + WebAssembly，运行在120+ FPS
2. **开源项目**: MIT许可证，GitHub上3.1k stars，活跃开发
3. **技术栈**: Rust + WebGL + JavaScript，现代Web技术
4. **社区活跃**: 活跃的GitHub社区，持续更新和维护
5. **创作者友好**: 支持上传和分享作品，有画廊系统
6. **教育价值**: 物理学习，创造性思维，实验性游戏

### 游戏特色功能
- **20+种元素**: 每种都有独特的物理特性和交互行为
- **实时物理模拟**: 重力、流体、燃烧、腐蚀、生长等
- **社区画廊**: 上传和浏览用户作品
- **开源透明**: 完全开源，可查看和贡献代码
- **现代技术**: Rust + WebAssembly + WebGL优化
- **创意无限**: 无目标开放式游戏，纯创意驱动

### 元素详细特性
- **Wall**: 不可摧毁的边界材料
- **Sand**: 在水中下沉，形成地形
- **Water**: 灭火，流动性液体
- **Stone**: 承压材料，可形成拱形结构
- **Ice**: 冰冻水源，表面光滑
- **Gas**: 高度易燃，轻质气体
- **Fire**: 燃烧源，传播热量
- **Plant**: 在湿润环境中茁壮成长
- **Fungus**: 向所有表面扩散
- **Acid**: 腐蚀其他元素
- **Dust**: 美丽但易爆的粒子

### 建议嵌入方案
1. **首选**: 直接链接到 https://sandspiel.club/ (完整体验)
2. **备选**: 使用itch.io嵌入iframe (如果需要嵌入在页面中)
3. **尺寸建议**: 推荐全屏或大尺寸显示 (1024x768+)

### 注意事项
- 需要现代浏览器支持WebGL和WebAssembly
- 最佳体验需要鼠标操作
- 游戏无需注册或下载，即开即玩
- 开源项目，社区友好
- 适合教育用途，展示物理概念

## 建议后续步骤
1. 测试直接嵌入 sandspiel.club 的表现
2. 如需iframe嵌入，测试itch.io版本的响应性
3. 考虑添加对物理模拟游戏的特殊标签或分类
4. 评估游戏的教育价值，可能适合STEM相关内容
5. 测试在不同设备和浏览器上的兼容性
6. 考虑联系开发者Max Bittker获取更多技术支持