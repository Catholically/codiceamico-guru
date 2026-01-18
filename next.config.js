/** @type {import('next').NextConfig} */
const nextConfig = {
  // Trailing slashes for consistent URLs
  trailingSlash: true,

  // Image optimization (keep unoptimized for simplicity)
  images: {
    unoptimized: true,
  },

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
