export const SITE_CONFIG = {
  // 部署时可通过环境变量 NEXT_PUBLIC_SITE_URL 覆盖
  BASE_URL: (process.env.NEXT_PUBLIC_SITE_URL || 'https://wigglypaint.co').replace(/\/$/, ''),
}

export function getBaseUrl(): string {
  return SITE_CONFIG.BASE_URL
}

