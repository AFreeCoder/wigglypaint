// 模块配置 - 通过修改这个文件来控制各个模块的显示
export const MODULE_CONFIG = {
  // 左侧广告位
  LEFT_AD: false,
  
  // 右侧广告位
  RIGHT_AD: false,
  
  // 底部广告位
  BOTTOM_AD: false,
  
  // 相关游戏推荐（现在显示热门游戏）
  RELATED_GAMES: true,
  
  // Try These 快速推荐模块
  TRY_THESE: true,
  
  // 游戏信息说明
  GAME_INFO: true,

  // Cookie 同意弹窗（GDPR合规）
  // true: 显示弹窗让用户选择；false: 不显示弹窗，默认Accept All
  COOKIE_CONSENT: true,

  // Google Analytics 配置
  // 填写您的 Google Analytics ID，例如 'G-XXXXXXXXXX'，不需要则留空
  GA_ID: 'G-NKM2EZG7CJ',
}

// 使用示例：
// 要隐藏左侧广告位，将 LEFT_AD 设置为 false
// 要隐藏热门游戏推荐（底部），将 RELATED_GAMES 设置为 false
// 要隐藏快速推荐（右侧/移动端），将 TRY_THESE 设置为 false
// 要隐藏游戏信息，将 GAME_INFO 设置为 false
// 要关闭Cookie弹窗，将 COOKIE_CONSENT 设置为 false
// 要启用 Google Analytics，填写 GA_ID 