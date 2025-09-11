# JS Paint - 游戏信息文档

## 基础信息收集

基于项目中 `config/games.ts` 的结构，以下是为 JS Paint 收集的游戏信息：

### 基础配置信息
```typescript
{
  id: 8, // 建议的ID
  title: 'JS Paint',
  description: 'Classic Microsoft Paint reimagined for the web! Complete digital art creation with familiar tools, unlimited undo, themes, and accessibility features.',
  image: '🎨', // 绘画工具相关emoji
  category: 'Casual',
  tags: ['Drawing', 'Creative', 'Pixel Art'], 
  difficulty: 'Easy',
  players: '1 Player',
  rating: 4.8, // 基于开源项目受欢迎程度和功能完整性
  playCount: '500K+', // 估算基于项目知名度和广泛使用
  type: 'iframe',
  url: 'https://jspaint.app/', // 主要应用地址
  width: 1200, // 适合绘画工具的宽屏显示
  height: 800, // 适合工具栏和画布
}
```

## 详细游戏信息 (gameInfo)

### Introduction 部分
```typescript
introduction: {
  title: 'JS Paint: Classic MS Paint REVIVED',
  description: 'Step back into the golden age of digital art with JS Paint, a pixel-perfect recreation of the beloved Microsoft Paint! This web-based masterpiece brings all the nostalgic charm of classic Paint into the modern era, complete with enhanced features, accessibility options, and multilingual support. Whether you\'re creating pixel art, editing images, or just having fun with digital brushes, JS Paint delivers the authentic experience you remember with the convenience of modern web technology.',
  features: [
    {
      icon: '🖌️',
      title: 'Complete Tool Collection',
      description: 'All classic MS Paint tools: Brush, Pencil, Eraser, Fill, Line, Rectangle, Ellipse, Polygon, Text, and Selection tools'
    },
    {
      icon: '🎨',
      title: 'Advanced Color Support',
      description: 'Full color palette editing, transparency support, and custom color creation with RGB and HSL controls'
    },
    {
      icon: '🌍',
      title: '26 Language Support',
      description: 'Authentic localizations extracted from Windows 98 MS Paint, supporting languages from English to Japanese'
    },
    {
      icon: '♿',
      title: 'Accessibility Pioneer',
      description: 'Eye Gaze Mode, Speech Recognition, Dwell Clicker, and screen reader support for inclusive digital art'
    },
    {
      icon: '🎭',
      title: 'Multiple Themes',
      description: 'Classic, Modern, Dark/Light variants, plus special themes like Winter, Occult, and Bubblegum'
    },
    {
      icon: '↩️',
      title: 'Unlimited Undo/Redo',
      description: 'Never lose your work with extensive undo history - go back through hundreds of steps'
    },
    {
      icon: '📱',
      title: 'Cross-Platform Ready',
      description: 'Works on desktop, tablet, and mobile with touch support, pinch zoom, and responsive design'
    },
    {
      icon: '💾',
      title: 'Modern File Support',
      description: 'Save as PNG, BMP, ICO, and more. Import images, edit transparencies, and work with modern formats'
    }
  ]
}
```

### How to Play 部分
```typescript
howToPlay: {
  title: 'How to Play?',
  steps: [
    { step: 1, title: 'Choose Your Canvas', description: 'Start with a blank canvas or open an existing image file to edit. Resize your canvas as needed for your project' },
    { step: 2, title: 'Select Drawing Tools', description: 'Pick from classic tools: Pencil for precise lines, Brush for artistic strokes, or specialized tools like Polygon and Curve' },
    { step: 3, title: 'Pick Your Colors', description: 'Choose from the default palette, create custom colors with the color picker, or edit the entire palette to match your vision' },
    { step: 4, title: 'Create Your Art', description: 'Draw, paint, and design using familiar MS Paint techniques. Use selection tools to move, copy, and transform parts of your image' },
    { step: 5, title: 'Add Text and Shapes', description: 'Insert text with different fonts and sizes, or create geometric shapes with the Rectangle, Ellipse, and Polygon tools' },
    { step: 6, title: 'Customize Your Experience', description: 'Switch themes, adjust accessibility settings, enable grid view, or use magnification for detailed pixel work' },
    { step: 7, title: 'Save and Share', description: 'Save your masterpiece in multiple formats, copy to clipboard, or continue editing with the unlimited undo feature' },
    { step: 8, title: 'Explore Advanced Features', description: 'Try Speech Recognition for hands-free control, or use Eye Gaze Mode for alternative input methods' }
  ],
  tips: [
    'Hold Shift while using line tools to create perfectly straight horizontal, vertical, or diagonal lines',
    'Use Ctrl+Z for undo and Ctrl+Y for redo - you have unlimited steps to experiment freely',
    'Right-click to access context menus and additional options for tools and selections',
    'The magnifier tool is perfect for detailed pixel art - zoom in to edit individual pixels precisely',
    'Use the spray paint tool for artistic textures and the airbrush for smooth gradients',
    'Experiment with different themes to find your preferred visual style and color scheme',
    'Try Speech Recognition: say "red brush" or "large pencil" to switch tools hands-free',
    'Enable grid view when creating pixel art or when you need precise alignment for your artwork'
  ]
}
```

### FAQ 部分
```typescript
faq: [
  {
    question: 'Is JS Paint really like the original Microsoft Paint?',
    answer: 'Yes! JS Paint is a pixel-perfect recreation of classic MS Paint, faithfully reproducing every tool, menu, and even obscure features from the original. It uses authentic localizations extracted from Windows 98 and maintains the exact same user interface and behavior you remember.'
  },
  {
    question: 'What accessibility features does JS Paint offer?',
    answer: 'JS Paint is a pioneer in accessible digital art tools, offering Eye Gaze Mode for hands-free cursor control, Speech Recognition for voice commands, Dwell Clicker for automatic clicking, screen reader support, and customizable interface options for users with different needs.'
  },
  {
    question: 'Can I use JS Paint on my phone or tablet?',
    answer: 'Absolutely! JS Paint is fully optimized for mobile devices with touch controls, pinch-to-zoom functionality, and a responsive interface. You can draw with your finger or stylus just like on desktop, making it perfect for digital art on the go.'
  },
  {
    question: 'What file formats does JS Paint support?',
    answer: 'JS Paint supports modern image formats including PNG (with transparency), BMP, ICO, and can import various image types. You can also save and load custom color palettes, making it compatible with both classic and modern workflows.'
  },
  {
    question: 'How many languages does JS Paint support?',
    answer: 'JS Paint supports 26 languages with authentic localizations extracted directly from Windows 98 MS Paint installations. This includes major languages like English, Spanish, French, German, Japanese, Chinese, and many others.'
  },
  {
    question: 'Can I customize the appearance of JS Paint?',
    answer: 'Yes! JS Paint offers multiple themes including Classic (original MS Paint look), Modern (updated design), Dark/Light variants, and fun themes like Winter, Occult, and Bubblegum. You can also customize color palettes and interface options.'
  },
  {
    question: 'Is my artwork saved automatically?',
    answer: 'JS Paint doesn\'t auto-save, maintaining the authentic MS Paint experience. You need to manually save your work using File > Save. However, you have unlimited undo/redo, so you can experiment freely without fear of losing progress during your session.'
  },
  {
    question: 'Can I embed JS Paint in my own website?',
    answer: 'Yes! JS Paint can be embedded in websites using iframe embedding. The project is open-source under MIT license, so developers can also integrate it directly into their applications or modify it for specific needs.'
  },
  {
    question: 'Does JS Paint work offline?',
    answer: 'Once loaded, JS Paint works offline for creating and editing artwork. However, you need an internet connection to initially access the application. There\'s also a desktop Electron version available for full offline use.'
  },
  {
    question: 'What makes JS Paint different from other online drawing tools?',
    answer: 'JS Paint focuses on authentically recreating the classic MS Paint experience rather than adding complex modern features. It\'s perfect for nostalgia, pixel art, simple image editing, and accessibility. The emphasis is on simplicity, familiarity, and inclusive design.'
  }
]
```

## 技术资源信息

### 嵌入资源
- **主要应用地址**: https://jspaint.app/ ✅ (推荐使用)
- **GitHub开源项目**: https://github.com/1j01/jspaint
- **开发者**: Isaiah Odhner (1j01)
- **替代版本**: https://paint.js.org/ (现代Web组件版本)
- **替代应用**: https://canvaspaint.org/ (MS Paint Online)

### 确认的游戏资源获取途径
1. **主要Web应用**: https://jspaint.app/ ✅ (完整功能版本)
2. **GitHub源码**: https://github.com/1j01/jspaint (MIT许可证，完全开源)
3. **Iframe嵌入**: 支持直接iframe嵌入到其他网站
4. **PWA版本**: 支持作为渐进式Web应用安装
5. **Electron桌面版**: 可构建为桌面应用程序
6. **移动应用**: 移动浏览器完全兼容

### 浏览器调研发现的重要信息
1. **开源领导者**: MIT许可证，GitHub上活跃开发，高质量代码
2. **无障碍先锋**: 业界领先的无障碍功能，包括眼球追踪和语音识别
3. **国际化完整**: 26种语言支持，使用Windows 98原版本地化
4. **技术现代**: PWA支持，移动优化，现代Web API使用
5. **社区认可**: Hacker News热议，开发者社区广泛认可
6. **持续更新**: 定期发布新功能和改进

### 技术特色功能
- **像素级精确**: 完美复制MS Paint的每一个像素和行为
- **无限撤销**: 不限制撤销步数，支持复杂的编辑工作流
- **主题系统**: 多种视觉主题，支持暗色模式
- **触控优化**: 移动设备手势支持，捏合缩放
- **语音控制**: "red brush"、"large pencil"等语音命令
- **眼球追踪**: 支持眼球追踪设备进行无手操作

### 无障碍功能特色
- **眼球凝视模式**: 支持眼球追踪设备
- **语音识别**: 语音命令选择工具和颜色
- **停留点击器**: 自动点击功能
- **屏幕阅读器**: 完整的屏幕阅读器支持
- **键盘导航**: 完全键盘访问
- **高对比度**: 适合视觉障碍用户的主题

### 艺术和教育应用
- **像素艺术**: 专为像素艺术优化的工具和网格
- **怀旧创作**: 重现90年代数字艺术美学
- **教育工具**: 简单易学的界面，适合艺术教育
- **无障碍艺术**: 为残障用户提供创作机会
- **快速编辑**: 简单图像编辑和标注

### 建议嵌入方案
1. **首选**: 直接iframe嵌入 https://jspaint.app/
2. **尺寸建议**: 1200x800 或更大(完整工具栏显示)
3. **全屏支持**: 提供全屏选项获得最佳绘画体验
4. **移动适配**: 确保触摸控制正常工作

### 注意事项
- 需要现代浏览器支持
- 大型图像可能影响性能
- 移动设备上复杂操作可能需要适应
- 保存功能需要用户手动操作
- 某些高级无障碍功能需要特定设备支持

## 建议后续步骤
1. 测试主应用的嵌入效果和功能完整性
2. 评估不同设备上的用户体验
3. 考虑添加"怀旧/复古"游戏分类
4. 测试无障碍功能在项目中的表现
5. 评估作为教育工具的潜力
6. 考虑联系开发者Isaiah Odhner获取定制支持