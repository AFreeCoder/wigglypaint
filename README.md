# Single Game Template

一个基于 Next.js 的模块化在线小游戏网站模板。

## 功能特点

- 🎮 首页直接可玩游戏
- 📱 响应式设计，支持移动端
- 🎯 模块化架构，易于配置
- 📢 预留广告位（左侧、右侧、底部）
- 🎲 相关游戏推荐
- 📖 完整的游戏说明（简介、玩法、FAQ）
- 🎮 游戏列表页面，支持筛选功能
- 🔍 智能游戏筛选（类别、标签、难度）
- 🎯 动态游戏页面，SEO友好的URL
- 🛡️ GDPR合规的隐私政策和服务条款
- 🍪 Cookie同意横幅（可配置）
- 📈 支持 Google Analytics 网站统计
- 🔧 TypeScript类型安全的游戏数据管理

## 项目结构

```
single-game-template/
├── app/
│   ├── globals.css          # 全局样式
│   ├── layout.tsx           # 根布局
│   ├── page.tsx             # 主页面
│   ├── games/
│   │   ├── page.tsx         # 游戏列表页面
│   │   ├── layout.tsx       # 游戏列表页面布局
│   │   └── [slug]/
│   │       └── page.tsx     # 动态游戏页面
│   ├── privacy/
│   │   └── page.tsx         # 隐私政策页面
│   └── terms/
│       └── page.tsx         # 服务条款页面
├── components/
│   ├── Game.tsx             # 游戏组件
│   ├── AdSpace.tsx          # 广告位组件
│   ├── RelatedGames.tsx     # 相关游戏组件
│   ├── GameInfo.tsx         # 游戏信息组件
│   └── CookieConsent.tsx    # Cookie同意横幅
├── config/
│   ├── modules.ts           # 模块配置文件
│   ├── modules.example.ts   # 模块配置示例
│   └── games.ts             # 游戏数据配置
├── types/
│   └── game.ts              # 游戏数据类型定义
├── utils/
│   └── gameUtils.ts         # 游戏工具函数
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 模块配置

### 快速配置

在 `config/modules.ts` 文件中，通过修改 `MODULE_CONFIG` 对象来控制各个模块的显示：

```typescript
export const MODULE_CONFIG = {
  // 左侧广告位
  LEFT_AD: true,
  // 右侧广告位
  RIGHT_AD: true,
  // 底部广告位
  BOTTOM_AD: true,
  // 热门游戏推荐
  POPULAR_GAMES: true,
  // Try These 快速推荐模块
  TRY_THESE: true,
  // 游戏信息说明
  GAME_INFO: true,
  // Cookie 同意弹窗（GDPR合规）
  // true: 显示弹窗让用户选择；false: 不显示弹窗，默认Accept All
  COOKIE_CONSENT: true,
  // Google Analytics 配置
  // 填写您的 Google Analytics ID，例如 'G-XXXXXXXXXX'，不需要则留空
  GA_ID: '',
}
```

### 配置示例

要隐藏某些模块，只需将对应的值设置为 `false`：

```typescript
export const MODULE_CONFIG = {
  LEFT_AD: false,        // 隐藏左侧广告位
  RIGHT_AD: true,        // 显示右侧广告位
  BOTTOM_AD: true,       // 显示底部广告位
  POPULAR_GAMES: false,  // 隐藏热门游戏推荐
  TRY_THESE: true,       // 显示快速推荐模块
  GAME_INFO: true,       // 显示游戏信息说明
  COOKIE_CONSENT: false, // 不显示Cookie弹窗，默认Accept All
  GA_ID: 'G-XXXXXXXXXX', // 启用 Google Analytics
}
```

### 可配置的模块

| 模块 | 配置项 | 说明 |
|------|--------|------|
| 左侧广告位 | `LEFT_AD` | 在游戏左侧显示广告位 |
| 右侧广告位 | `RIGHT_AD` | 在游戏右侧显示广告位 |
| 底部广告位 | `BOTTOM_AD` | 在游戏下方显示广告位 |
| 热门游戏推荐 | `POPULAR_GAMES` | 显示热门游戏推荐列表 |
| 快速推荐模块 | `TRY_THESE` | 显示右侧快速推荐模块 |
| 游戏信息说明 | `GAME_INFO` | 显示游戏简介、玩法和FAQ |
| Cookie同意弹窗 | `COOKIE_CONSENT` | 是否显示Cookie同意弹窗（GDPR合规）。为false时，默认所有Cookie均被接受（Accept All） |
| Google Analytics | `GA_ID` | 填写您的 Google Analytics ID（如 G-XXXXXXXXXX），留空则不启用 |

## Google Analytics 网站统计

- 在 `config/modules.ts` 中填写您的 Google Analytics ID（如 `G-XXXXXXXXXX`）。
- 系统会自动在全站注入 Google Analytics 统计代码。
- 留空则不会加载统计代码。
- 建议结合 Cookie 同意弹窗一起使用，确保合规。

## 法律合规

### 隐私政策

项目包含完整的隐私政策页面 (`/privacy`)，符合 GDPR 合规要求：

- **Cookie 政策**: 详细说明Cookie的使用目的和类型
- **数据收集**: 明确说明收集的数据类型和用途
- **用户权利**: 包含GDPR规定的所有用户权利
- **第三方服务**: 说明第三方广告服务的使用
- **数据安全**: 描述数据保护措施

### 服务条款

项目包含完整的服务条款页面 (`/terms`)，涵盖：

- **服务描述**: 明确说明提供的服务内容
- **用户责任**: 规定用户使用网站的责任
- **知识产权**: 保护网站内容的知识产权
- **免责声明**: 明确责任限制
- **争议解决**: 规定争议解决方式

### Cookie 同意横幅

项目包含符合 GDPR 要求的 Cookie 同意横幅：

- **三种选择**: 接受全部、仅接受必要、拒绝
- **明确说明**: 详细说明Cookie的用途
- **用户控制**: 用户可以随时更改选择
- **本地存储**: 记住用户的选择
- **可配置**: 通过 `COOKIE_CONSENT` 控制是否显示弹窗。为 `false` 时，默认所有Cookie均被接受（Accept All）。

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 打开浏览器访问 [https://wigglypaint.co](https://wigglypaint.co)

## 构建生产版本

```bash
npm run build
npm start
```

## 游戏管理

### 游戏数据配置

项目使用 TypeScript 配置文件管理游戏数据，具有类型安全和易维护的特点：

**1. 游戏数据文件**: `config/games.ts`
```typescript
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
    playCount: '12.5K'
  },
  // 更多游戏...
]
```

**2. 类型定义**: `types/game.ts`
```typescript
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
}
```

**3. 工具函数**: `utils/gameUtils.ts`
```typescript
// 根据slug获取游戏
export function getGameBySlug(slug: string): Game | undefined

// 筛选游戏
export function filterGames(games: Game[], filters: GameFilters): Game[]

// 获取相关游戏
export function getRelatedGames(currentGame: Game, count: number): Game[]
```

### 添加新游戏

1. 在 `config/games.ts` 的 `GAMES` 数组中添加新游戏对象
2. 确保所有必填字段都已填写
3. 游戏会自动出现在游戏列表页面和相关推荐中

### 自定义首页游戏

要更换首页显示的游戏，修改 `components/Game.tsx` 文件：

```typescript
export default function Game() {
  // 游戏状态管理
  const [gameState, setGameState] = useState(initialState)
  
  // 游戏逻辑函数
  const handleGameAction = () => {
    // 游戏逻辑
  }
  
  // 游戏UI渲染
  return (
    <div className="game-container">
      {/* 游戏界面 */}
    </div>
  )
}
```

## 自定义样式

项目使用 Tailwind CSS 进行样式设计。您可以通过以下方式自定义样式：

### 修改主题颜色

在 `tailwind.config.js` 中：

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',    // 主色调
        secondary: '#10B981',  // 次要色调
        accent: '#F59E0B',     // 强调色
      },
    },
  },
}
```

### 自定义CSS

在 `app/globals.css` 中添加自定义样式：

```css
.custom-game-style {
  /* 自定义样式 */
}

.ad-space {
  /* 广告位样式 */
}
```

## 图标文件说明 / Icons Setup Guide

### 📋 需要替换的图标文件

当前项目中的图标文件都是占位符，需要替换为实际的图标文件：

#### 🎯 必需的图标文件

##### Favicon 相关
- `app/favicon.ico` - 网站图标 (32x32 或 16x16)
- `public/icon-16x16.png` - 16x16 PNG 图标
- `public/icon-32x32.png` - 32x32 PNG 图标

##### PWA 相关
- `public/icon-192x192.png` - 192x192 PNG 图标 (PWA)
- `public/icon-512x512.png` - 512x512 PNG 图标 (PWA)
- `public/apple-touch-icon.png` - 180x180 PNG 图标 (iOS)

##### 社交媒体分享
- `public/og-image.png` - 1200x630 PNG 图片 (Open Graph)
- `public/twitter-image.png` - 1200x630 PNG 图片 (Twitter Cards)

##### Safari 相关
- `public/safari-pinned-tab.svg` - Safari 固定标签图标 (已提供 SVG)

### 🎨 图标设计建议

#### 设计要求
- **主色调**: #3B82F6 (蓝色)
- **风格**: 简洁、现代、游戏主题
- **元素**: 可以包含游戏手柄、方块、或其他游戏相关图标

#### 尺寸要求
- 所有图标应该清晰、高对比度
- PNG 文件应该有透明背景
- 社交媒体图片应该包含网站名称和简短描述

### 🛠️ 如何生成图标

#### 方法 1: 在线工具
1. **Favicon Generator**: https://realfavicongenerator.net/
2. **PWA Asset Generator**: https://tools.crawlink.com/tools/pwa-icon-generator/

#### 方法 2: 设计软件
1. 使用 Figma、Sketch 或 Photoshop 设计
2. 导出为所需尺寸的 PNG 文件
3. 使用在线工具转换为各种格式

#### 方法 3: AI 生成
1. 使用 DALL-E、Midjourney 等生成游戏主题图标
2. 使用 Adobe Express 或 Canva 模板

### 📱 SEO 优化已完成

✅ 已添加完整的 metadata 配置
✅ 已添加 viewport meta 标签  
✅ 已创建 manifest.json (PWA 支持)
✅ 已添加 robots.txt
✅ 已创建 sitemap.xml
✅ 已配置 Open Graph 和 Twitter Cards

### 🔄 替换步骤

1. 准备所有需要的图标文件
2. 替换 `public/` 和 `app/` 目录中的占位符文件
3. 确保文件名和尺寸正确
4. 测试网站在各种设备和社交平台上的显示效果

### ⚡ 验证 SEO 配置

使用以下工具验证 SEO 配置：
- [Google Search Console](https://search.google.com/search-console)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Rich Results Test](https://search.google.com/test/rich-results)

## 部署

### Vercel 部署

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

### 其他平台

项目支持部署到任何支持 Next.js 的平台：
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- 等等

## 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: 支持 Vercel、Netlify 等平台

## 开发指南

### 添加新模块

1. 在 `components/` 目录下创建新组件
2. 在 `config/modules.ts` 中添加配置项
3. 在相应页面中引入并使用组件

### 游戏页面路由

项目支持以下路由结构：

- `/` - 首页，包含主游戏和推荐游戏
- `/games` - 游戏列表页面，支持筛选功能
- `/games/[slug]` - 动态游戏页面（如：`/games/memory-match`）
- `/privacy` - 隐私政策页面
- `/terms` - 服务条款页面

### 游戏筛选功能

游戏列表页面支持三种筛选方式：

1. **按类别筛选**: Puzzle、Arcade、Strategy、Word、Education、Casual、Racing
2. **按标签筛选**: 支持多选，包含Memory、Cards、Classic等标签
3. **按难度筛选**: Easy、Medium、Hard

### 扩展游戏数据

如需扩展游戏属性，按以下步骤操作：

1. 在 `types/game.ts` 中更新 `Game` 接口
2. 在 `config/games.ts` 中为现有游戏添加新属性
3. 在相关组件中使用新属性
4. 更新 `utils/gameUtils.ts` 中的工具函数（如需要）

### TypeScript配置文件方案优势

项目采用 TypeScript 配置文件而非 JSON 文件管理游戏数据，具有以下优势：

**✅ 类型安全**
- 编译时类型检查，避免运行时错误
- IDE 智能提示和自动补全
- 重构时能自动更新所有引用

**✅ 开发体验**
- 完整的 TypeScript 支持
- 代码跳转和查找引用
- 语法高亮和错误提示

**✅ 维护性**
- 统一的数据源管理
- 工具函数复用
- 模块化设计

**✅ 性能优化**
- Tree-shaking 支持
- 编译时优化
- 类型推断减少运行时检查

**📈 扩展路径**
```typescript
// 未来可以轻松切换到API
export async function getGames(): Promise<Game[]> {
  // 开发环境使用本地数据
  if (process.env.NODE_ENV === 'development') {
    return GAMES_WITH_SLUGS
  }
  
  // 生产环境从API获取
  const response = await fetch('/api/games')
  return response.json()
}
```

### 自定义法律页面

1. **隐私政策**: 编辑 `app/privacy/page.tsx`
2. **服务条款**: 编辑 `app/terms/page.tsx`
3. **联系信息**: 更新页面中的联系邮箱和地址
4. **适用法律**: 根据您的司法管辖区修改适用法律

## 法律注意事项

⚠️ **重要提醒**: 

1. **联系信息**: 请将隐私政策和服务条款中的联系邮箱和地址替换为您的实际信息
2. **适用法律**: 根据您的业务所在地修改服务条款中的适用法律
3. **Cookie 使用**: 如果使用第三方广告服务，请确保在隐私政策中明确说明
4. **数据保护**: 确保您的数据处理符合当地法律法规要求
5. **法律审查**: 建议在正式使用前请法律专业人士审查这些法律文件
