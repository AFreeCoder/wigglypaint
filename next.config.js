/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Directory is now stable and enabled by default in Next.js 13.4+
  // Removed experimental.appDir as it's no longer needed
  
  // Image optimization configuration
  images: {
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Modern features for Next.js 14
  experimental: {
    // Optimize package imports for better performance
    optimizePackageImports: ['@/components', '@/utils', '@/config'],
  },
}

module.exports = nextConfig 