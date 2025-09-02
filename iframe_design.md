% 游戏详情页 iframe 嵌入与自动缩放（通用方案）

本文用中文总结本项目中“游戏详情页通过 iframe 嵌入游戏”的技术方案，并提炼为可移植到任意语言/框架的通用实现。重点聚焦：如何依据游戏的原始 `width/height` 自动缩放以适配各种屏幕。


## 方案总览

- 数据来源：每个游戏有“原始分辨率”元数据（如 `width`/`height`）。
- 页面结构：使用一个外层容器包裹 `<iframe>`，容器用“内边距百分比”形成固定纵横比；iframe 绝对定位铺满容器。
- 自适应：JS 读取 iframe 的 `width/height` 计算纵横比（ratio = height/width），将容器的 `padding-top` 动态设置为 ratio%。
- 细节增强：可按窗口纵横比对 ratio 做钳制（clamp），兼容极端宽/高屏；在窗口 resize、旋转时重算。
- 可拓展：可叠加“启动页（splash/lazy-load）”“全屏”“访问校验”等功能，不影响核心缩放逻辑。

在本项目中：
- 标记结构：`content/themes/dark-grid/game.php`
- 样式：`content/themes/dark-grid/style/style.css`（`.game-iframe-container` 与 `.game-iframe`）
- 自动缩放脚本：`content/themes/dark-grid/js/script.js` 的 `resize_game_iframe()`（含根据窗口比例的限制）


## 核心思路（与实现）

1) 使用“内联比例盒”维持纵横比
- 外层容器：宽度 100%，通过 `padding-top: {ratio}%` 形成固定纵横比（高度=容器宽度×ratio%）。
- 内层 iframe：绝对定位四边贴合，宽高 100%，从而随容器尺寸缩放。

通用 CSS：
```css
.game-iframe-container { position: relative; overflow: hidden; width: 100%; }
.game-iframe { position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; }
```

2) 依据原始分辨率计算 ratio
- 读取游戏的原始宽高（通常来源于数据库/配置），在 iframe 上保留 `width`、`height` 属性，供 JS 读取。
- JS 计算 `ratio = (height / width) * 100`，将容器 `padding-top` 设为该百分比。

通用 JS（可移植）：
```js
function resizeGameIframe(options = {}) {
  const container = document.querySelector('.game-iframe-container')
  const iframe = document.querySelector('iframe.game-iframe')
  if (!container || !iframe) return

  const w = Number(iframe.getAttribute('width')) || 0
  const h = Number(iframe.getAttribute('height')) || 0
  if (!w || !h) {
    // 兜底：没有提供 width/height 时，可退化为常见 16:9
    container.style.paddingTop = (100 * 9 / 16) + '%'
    return
  }

  let ratio = (h / w) * 100

  // 可选：根据窗口纵横比进行钳制，优化极端宽高屏体验
  // 与本项目保持一致的思路（仅示例）：
  const winRatio = (window.innerHeight / window.innerWidth) * 100
  const { minRatio = 80, maxRatio = 100, lowThreshold = 110, highThreshold = 130 } = options
  if (winRatio <= lowThreshold && ratio > minRatio) ratio = minRatio
  if (winRatio >= highThreshold && ratio < maxRatio) ratio = maxRatio

  container.style.paddingTop = ratio + '%'
}

window.addEventListener('DOMContentLoaded', () => resizeGameIframe())
window.addEventListener('resize', () => resizeGameIframe())
// 如需在设备旋转上更灵敏：
window.addEventListener('orientationchange', () => resizeGameIframe())
```

3) 页面结构（语言无关）
```html
<div class="game-iframe-container">
  <iframe id="game-area" class="game-iframe"
          src="{{ 构建好的游戏URL }}"
          width="{{ 原始width }}" height="{{ 原始height }}"
          frameborder="0" allowfullscreen
          allow="autoplay; fullscreen"
          scrolling="no"></iframe>
</div>
```
要点：
- `width/height` 为游戏原始分辨率，用于计算比例；实际渲染尺寸由容器控制。
- `allow` 可按需扩展（如 `gamepad; clipboard-write; accelerometer; gyroscope`）。
- 建议添加 `title` 提升可访问性；必要时设置 `referrerpolicy`、`sandbox`（注意与第三方提供方兼容性）。


## 本项目实现要点与参考

- 样式：`content/themes/dark-grid/style/style.css`
  - `.game-iframe-container` 与 `.game-iframe` 按上述相同定位与铺满写法。
- 结构：`content/themes/dark-grid/game.php`
  - 在 iframe 标签上输出数据库中配置的 `width/height`。
- 脚本：`content/themes/dark-grid/js/script.js`
  - `resize_game_iframe()`：
    - 读取 iframe 的 `width/height` 计算 `ratio`。
    - 根据窗口纵横比对 `ratio` 做了钳制（`win_ratio <= 110` 时最大 80%，`win_ratio >= 130` 时最小 100%），以适配超宽或超高屏幕。
    - 在 `DOMContentLoaded` 与 `resize` 时触发重算。

上述逻辑与本文件给出的“通用 JS”一致，可直接移植到其他语言或前端框架（React/Vue/Svelte 等）中，只需用等效生命周期触发计算即可。


## 可移植的最佳实践

- 元数据来源：
  - 确保在渲染时能获取该游戏的原始 `width/height`。如缺失，可提供全局默认比例（例如 16:9）。
- 事件节流：
  - 频繁的 `resize` 可使用节流/防抖（throttle/debounce）提升性能。
- 多实例支持：
  - 多个游戏卡片同时存在时，可为每个容器/iframe 绑定一组计算，或在循环内计算并设置对应容器的 `padding-top`。
- 全屏与缩放：
  - 全屏调用 `requestFullscreen()` 与本缩放方案不冲突；退出全屏后再次触发 `resizeGameIframe()` 以确保布局正确。
- 旋转与 DPR：
  - 移动端旋转监听 `orientationchange`；对高 DPR 设备无需特殊处理，浏览器会按 CSS 像素渲染，比例自适应即可。
- 样式优先级：
  - 确保没有其他 CSS 覆盖 `.game-iframe-container` 的 `padding-top` 或 `.game-iframe` 的定位。


## 常见问题与排查

- 容器高度为 0：
  - 通常是未设置 `padding-top` 或 `ratio` 计算失败；检查是否正确读取了 iframe 的 `width/height`。
- `NaN%`：
  - 多见于 `width/height` 为空或非数字；增加兜底逻辑（默认 16:9）。
- iframe 未铺满容器：
  - 检查 iframe 样式是否为绝对定位且宽高 100%，容器是否 `position: relative`。
- 极端屏不友好：
  - 参考本项目做法，对 `ratio` 做钳制：例如当窗口特别矮或特别高时，限制 `ratio` 的上下限（如 80%～100%）。


## 其他可选功能（不影响缩放核心）

- 启动页/懒加载（splash）：先渲染 `<iframe data-src>`，点击“开始游戏”后再设置 `src`，`onload` 后移除遮罩（参考 `includes/page-splash.php`）。
- 全屏：为按钮绑定 `requestFullscreen()`（参考 `content/themes/dark-grid/js/script.js` 的 `open_fullscreen()`）。
- 访问校验：在页面初始化时请求后端接口，不通过则替换页面提示订阅/登录（参考 `js/api.js` 与 `includes/api.php`）。
- URL 构建（供应商差异）：独立封装 `buildGameUrl()`，针对 GameDistribution 增加 `gd_sdk_referrer_url`，GamePix 增加 `sid`，以及自托管/远程差异（参考 `includes/commons.php:get_game_url()`）。


## 可直接复用的最小示例

HTML：
```html
<div class="game-iframe-container">
  <iframe class="game-iframe" id="game-area"
          src="/path/to/game/index.html"
          width="1280" height="720"
          frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>
```
CSS：
```css
.game-iframe-container { position: relative; overflow: hidden; width: 100%; }
.game-iframe { position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; }
```
JS：
```js
function resizeGameIframe() {
  const c = document.querySelector('.game-iframe-container')
  const f = document.querySelector('#game-area')
  if (!c || !f) return
  const w = Number(f.getAttribute('width')) || 0
  const h = Number(f.getAttribute('height')) || 0
  c.style.paddingTop = (w && h ? (h / w) * 100 : (9 / 16) * 100) + '%'
}
window.addEventListener('DOMContentLoaded', resizeGameIframe)
window.addEventListener('resize', resizeGameIframe)
```

该方案已在本项目中大规模使用，具备良好的可移植性与稳定性。只需保证：
- 一处可读到游戏原始分辨率；
- 一段容器+iframe 的结构与样式；
- 一段初始化与 resize 时更新 `padding-top` 的脚本。

即可在任意语言/框架实现“依据 `width/height` 自动缩放”的游戏 iframe 嵌入页面。
