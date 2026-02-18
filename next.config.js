/** @type {import('next').NextConfig} */
const nextConfig = {
    // React configuration
    reactStrictMode: true,
    output: 'export',
    
    // Build configuration (consider fixing these instead of ignoring)
    typescript: { ignoreBuildErrors: true },
    
    // Performance optimizations
    compress: true, // Enable gzip compression
    productionBrowserSourceMaps: false, // Disable source maps in production
    
    // Image optimization
    images: {
      unoptimized: true, // Disable Next.js image optimization
      formats: ['image/avif', 'image/webp'], // Modern image formats
      remotePatterns: [
        { protocol: "https", hostname: "picsum.photos", pathname: "/**" },
        { protocol: "https", hostname: "res.cloudinary.com", pathname: "/**" },
      ],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    
    // Security and performance headers
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'X-DNS-Prefetch-Control',
              value: 'on'
            },
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=63072000; includeSubDomains; preload'
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff'
            },
            {
              key: 'X-Frame-Options',
              value: 'SAMEORIGIN'
            },
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin'
            },
            {
              key: 'Permissions-Policy',
              value: 'camera=(), microphone=(), geolocation=()'
            },
          ],
        },
        // Cache static assets
        {
          source: '/static/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
    
    // Experimental features for better performance
    experimental: {
      optimizePackageImports: ['@mui/material', '@mui/icons-material', 'lucide-react'],
    },
  };
  
  module.exports = nextConfig;