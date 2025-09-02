export type IframePolicy = {
  allow: string
  sandbox?: string
  referrerPolicy?: React.IframeHTMLAttributes<HTMLIFrameElement>['referrerPolicy']
}

export const DEFAULT_IFRAME_POLICY: IframePolicy = {
  allow: 'autoplay; fullscreen; gamepad; clipboard-write; accelerometer; gyroscope; encrypted-media; picture-in-picture',
  referrerPolicy: 'no-referrer-when-downgrade',
}

export function getIframePolicyFor(url?: string): IframePolicy {
  if (!url) return DEFAULT_IFRAME_POLICY
  try {
    const { hostname } = new URL(url)
    // 可在此针对不同提供方细化策略
    // 例如：
    // if (hostname.endsWith('gamepix.com')) { return { ...DEFAULT_IFRAME_POLICY, allow: DEFAULT_IFRAME_POLICY.allow + '; cross-origin-isolated' } }
    return DEFAULT_IFRAME_POLICY
  } catch {
    return DEFAULT_IFRAME_POLICY
  }
}

