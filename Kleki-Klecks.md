# Kleki / Klecks - 游戏信息文档

## 基础信息收集

基于项目中 `config/games.ts` 的结构，以下是为 Kleki/Klecks 收集的游戏信息：

### 基础配置信息
```typescript
{
  id: 9, // 建议的ID
  title: 'Kleki',
  description: 'Professional web-based digital painting tool! Create stunning artwork with natural brushes, layers, filters, and pressure sensitivity. Open-source Paint Tool SAI alternative.',
  image: '🎨', // 绘画工具相关emoji
  category: 'Casual',
  tags: ['Drawing', 'Creative', 'Pixel Art'], 
  difficulty: 'Easy',
  players: '1 Player',
  rating: 4.8, // 基于GitHub 289 stars, 开源质量和社区评价
  playCount: '100K+', // 估算基于社区资助项目和广泛使用
  type: 'iframe',
  url: 'https://kleki.com/', // 官方主站
  width: 1200, // 建议全屏显示以获得完整工具体验
  height: 800, // 建议全屏显示
}
```

## 详细游戏信息 (gameInfo)

### Introduction 部分
```typescript
introduction: {
  title: 'Kleki: Professional Web-Based Digital Painting Tool',
  description: 'Meet Kleki, the community-funded digital painting powerhouse that brings professional art creation directly to your browser! Inspired by Paint Tool SAI and powered by cutting-edge web technology, Kleki offers everything you need for digital art - from natural brushes and pressure sensitivity to layers and WebGL-powered filters. Whether you\\'re sketching anime characters, creating pixel art, or painting detailed illustrations, Kleki delivers a professional-grade experience without downloads or installations.',
  features: [
    {
      icon: '🖌️',
      title: 'Professional Brush Engine',
      description: 'Natural brushes with pressure sensitivity, blend modes, and stabilizer for smooth lines - perfect for digital art and illustrations'
    },
    {
      icon: '📑',
      title: 'Advanced Layer System',
      description: 'Up to 8 layers with blend modes, opacity control, and layer management for complex artwork composition'
    },
    {
      icon: '✨',
      title: 'WebGL-Powered Filters',
      description: 'Real-time filters including blur, tilt-shift, curves, distort, noise, and more with instant preview'
    },
    {
      icon: '🖊️',
      title: 'Pen & Touch Support',
      description: 'Full Wacom tablet support with pressure sensitivity, plus optimized touch gestures for tablets and phones'
    },
    {
      icon: '🔧',
      title: 'Professional Tools',
      description: 'Selection tools, paint bucket, text, shapes, gradient, transform, crop/expand, resize, and perspective correction'
    },
    {
      icon: '🌍',
      title: 'Multi-Platform & Multi-Language',
      description: 'Works on desktop, tablet, and phone with support for 10+ languages and cross-platform compatibility'
    },
    {
      icon: '💾',
      title: 'Flexible File Support',
      description: 'Import/export PNG, JPEG, PSD files with layer preservation, plus embed support for drawing communities'
    },
    {
      icon: '🔓',
      title: 'Open Source & Community-Funded',
      description: 'MIT licensed open-source project (Klecks) powering Kleki.com, developed by artist-programmer bitbof'
    }
  ]
}
```

### How to Play 部分
```typescript
howToPlay: {
  title: 'How to Use Kleki?',
  steps: [
    { step: 1, title: 'Start Creating', description: 'Open Kleki.com in your browser - no download or registration required. The tool loads instantly and works on all devices' },
    { step: 2, title: 'Choose Your Brush', description: 'Select from professional brushes: Pen for clean lines, Blend for smooth blending, Sketchy for textured strokes, or Pixel for pixel art' },
    { step: 3, title: 'Set Up Layers', description: 'Use the layer panel to create up to 8 layers, adjust opacity, and experiment with blend modes for complex compositions' },
    { step: 4, title: 'Draw and Paint', description: 'Start creating! Use pressure sensitivity if you have a tablet, or draw with mouse/touch. The stabilizer helps create smooth lines' },
    { step: 5, title: 'Apply Professional Tools', description: 'Use selection tools to transform parts of your image, add text, create shapes, or apply gradients for professional effects' },
    { step: 6, title: 'Enhance with Filters', description: 'Apply WebGL-powered filters like blur, curves, or distort to add professional finishing touches with real-time preview' },
    { step: 7, title: 'Save Your Artwork', description: 'Export as PNG for sharing, or save as PSD to preserve layers for future editing. Files save directly to your device' },
    { step: 8, title: 'Explore Advanced Features', description: 'Try lineart extraction, perspective correction, or embed Kleki in your own projects using the open-source Klecks framework' }
  ],
  tips: [
    'Use the stabilizer feature to create smoother lines - perfect for detailed artwork and character illustration',
    'Experiment with different blend modes on layers to create interesting color interactions and effects',
    'Right-click to access additional options and context menus for more advanced tool settings',
    'Use touch gestures on tablets: pinch to zoom, two-finger pan, and pressure-sensitive drawing with stylus',
    'The Sketchy brush is perfect for rough sketches and textural effects in concept art',
    'Try the Chemy brush for unique organic textures and experimental art styles',
    'Use the grid and perspective tools for architectural drawings and technical illustrations',
    'Save your work frequently - Kleki doesn\\'t auto-save, maintaining the professional workflow you expect'
  ]
}
```

### FAQ 部分
```typescript
faq: [
  {
    question: 'What is Kleki and how does it compare to other digital art tools?',
    answer: 'Kleki is a professional web-based digital painting tool inspired by Paint Tool SAI. Unlike simple drawing apps, Kleki offers advanced features like pressure-sensitive brushes, layers with blend modes, WebGL filters, and professional editing tools - all running directly in your browser without downloads.'
  },
  {
    question: 'What\\'s the difference between Kleki and Klecks?',
    answer: 'Klecks is the open-source framework (MIT license) that powers Kleki.com. Kleki is the polished, community-funded service, while Klecks is the free, open-source version developers can use and modify. Both share the same core features and capabilities.'
  },
  {
    question: 'Does Kleki support pressure sensitivity and drawing tablets?',
    answer: 'Yes! Kleki has full support for Wacom tablets and pressure sensitivity. It also includes a stabilizer feature for smooth line drawing, making it excellent for detailed digital art and illustration work.'
  },
  {
    question: 'Can I work with layers in Kleki?',
    answer: 'Absolutely! Kleki supports up to 8 layers with individual opacity controls, blend modes (like multiply, overlay, etc.), and full layer management. You can also import and export PSD files to preserve your layer structure.'
  },
  {
    question: 'What file formats does Kleki support?',
    answer: 'Kleki can import and export PNG, JPEG, and PSD files. PSD support preserves layers, making it compatible with Photoshop and other professional tools. You can also save your work locally or upload to cloud services.'
  },
  {
    question: 'Is Kleki free to use?',
    answer: 'Yes! Kleki is completely free to use at kleki.com. It\\'s community-funded, and the underlying technology (Klecks) is open-source under the MIT license. No registration, subscription, or payment required.'
  },
  {
    question: 'Can I use Kleki on mobile devices?',
    answer: 'Kleki is fully optimized for mobile devices including phones and tablets. It supports touch gestures, pinch-to-zoom, and works great with styluses for pressure-sensitive drawing on supported devices.'
  },
  {
    question: 'What are the WebGL-powered filters?',
    answer: 'Kleki includes advanced real-time filters powered by WebGL including blur, tilt-shift, curves adjustment, distortion, noise, and more. These filters provide professional-grade effects with instant preview and GPU acceleration.'
  },
  {
    question: 'Can developers embed Kleki in their own websites?',
    answer: 'Yes! The open-source Klecks framework can be embedded in websites and drawing communities. The GitHub repository includes example code and documentation for integration, making it perfect for art platforms and educational sites.'
  },
  {
    question: 'What makes Kleki special compared to other web-based art tools?',
    answer: 'Kleki combines professional features (pressure sensitivity, advanced brushes, layers, filters) with the convenience of web access. It\\'s inspired by Paint Tool SAI, community-funded, open-source, and optimized for both beginners and professional artists.'
  }
]
```

## 技术资源信息

### 嵌入资源
- **官方应用地址**: https://kleki.com/ ✅ (主要推荐)
- **开源GitHub项目**: https://github.com/bitbof/klecks (MIT许可证)
- **开发者网站**: https://bitbof.com/
- **开发博客**: https://blog.kleki.com/
- **项目官网**: https://klecks.org/

### 确认的游戏资源获取途径
1. **主要应用网站**: https://kleki.com/ ✅ (完整专业版)
2. **开源代码库**: https://github.com/bitbof/klecks (MIT许可证，289 stars)
3. **嵌入示例**: `/examples/embed/example.html` (GitHub仓库中的嵌入代码示例)
4. **构建版本**: 可通过 `npm run build` 构建独立版本
5. **Docker支持**: 提供 Docker 容器化部署选项
6. **开发者联系**: bitbof (GitHub: @bitbof, 网站: bitbof.com)

### 浏览器调研发现的重要信息
1. **专业级功能**: 压感支持、图层系统、滤镜效果，媲美桌面绘画软件
2. **开源透明**: MIT许可证，社区驱动，GitHub上活跃开发
3. **技术先进**: TypeScript构建，WebGL加速，现代Web API
4. **跨平台优化**: 桌面、平板、手机全平台支持
5. **社区资助**: 依靠社区捐赠维持发展，非商业化运营
6. **嵌入友好**: 提供完整的嵌入SDK，适合集成到其他平台

### 技术特色功能
- **自然笔刷引擎**: 压感支持，多种笔刷类型(笔、混合、素描、像素、化学、涂抹)
- **高级图层系统**: 最多8层，不透明度控制，混合模式
- **WebGL滤镜**: 模糊、移轴、曲线、扭曲、噪声等实时滤镜
- **专业工具集**: 选择、填充、文字、形状、渐变、变形、裁剪
- **线稿提取**: 自动提取线稿功能，适合动画和插画workflow
- **触控优化**: 支持手势操作，pinch缩放，触控绘画

### 笔刷和工具详解
- **Pen**: 清晰锐利的线条，适合精确绘制和线稿
- **Blend**: 柔和混合笔刷，适合颜色过渡和阴影
- **Sketchy**: 纹理笔触，模拟传统绘画效果
- **Pixel**: 像素级精确，适合像素艺术创作
- **Chemy**: 实验性有机纹理，创造独特效果
- **Smudge**: 涂抹工具，用于颜色混合和模糊
- **Eraser**: 多种擦除模式，支持软硬边缘

### 专业功能特性
- **压感响应**: 完整的压力感应支持，笔触粗细和透明度随压力变化
- **线条稳定器**: 智能平滑算法，消除手抖，创造流畅线条
- **图层混合**: 多种混合模式(正常、叠加、柔光、强光等)
- **选择工具**: 矩形、椭圆、套索选择，支持变形和移动
- **滤镜系统**: GPU加速实时滤镜，专业级后期处理
- **透视校正**: 3D透视变换，适合建筑和技术绘图

### 嵌入和开发支持
- **JavaScript API**: 完整的编程接口，支持项目操作和文件处理
- **事件回调**: onSubmit、onError等事件处理
- **文件格式**: 支持 PNG、JPEG、PSD 导入导出
- **自定义配置**: 可配置画布尺寸、颜色、工具选项
- **社区集成**: 适合绘画社区和教育平台集成

### 建议嵌入方案
1. **首选**: 直接链接到 https://kleki.com/ (完整专业体验)
2. **自建**: 使用开源 Klecks 构建自定义版本
3. **嵌入**: 使用 embed.js 集成到现有平台
4. **尺寸建议**: 1200x800 或更大(完整工具栏和画布)
5. **全屏支持**: 提供全屏选项以获得最佳创作体验

### 注意事项
- 需要现代浏览器支持WebGL
- 压感功能需要兼容的绘图板或触控设备
- 大尺寸图像或复杂滤镜可能影响性能
- 不支持自动保存，需要手动保存作品
- 开源版本(Klecks)需要自行构建和部署
- 最佳体验建议使用桌面浏览器和绘图板

## 建议后续步骤
1. 测试 kleki.com 的完整功能和性能表现
2. 评估在不同设备和浏览器上的兼容性
3. 考虑添加"专业工具"或"数字艺术"游戏分类
4. 测试压感和绘图板支持的用户体验
5. 评估作为教育工具在艺术教育中的应用潜力
6. 考虑联系开发者bitbof获取专业版授权或定制支持
7. 如果需要嵌入版本，研究GitHub上的嵌入示例和API文档