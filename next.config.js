/** @type {import('next').NextConfig} */
const nextConfig = {
  // Trailing slashes for consistent URLs
  trailingSlash: true,

  // Image optimization (keep unoptimized for simplicity)
  images: {
    unoptimized: true,
  },

  // Redirects for old WordPress URLs
  async redirects() {
    return [
      // Privacy policy
      {
        source: '/privacy-policy/',
        destination: '/privacy/',
        permanent: true,
      },
      // Old Sorgenia pages -> categoria energia
      {
        source: '/codice-amico-sorgenia/',
        destination: '/categoria/energia/',
        permanent: true,
      },
      {
        source: '/category/codice-amico-sorgenia/',
        destination: '/categoria/energia/',
        permanent: true,
      },
      {
        source: '/passa-a-sorgenia-con-codice-amico/',
        destination: '/categoria/energia/',
        permanent: true,
      },
      {
        source: '/porta-un-amico-in-sorgenia/',
        destination: '/categoria/energia/',
        permanent: true,
      },
      {
        source: '/porta-i-tuoi-amici-in-sorgenia/',
        destination: '/categoria/energia/',
        permanent: true,
      },
      {
        source: '/sorgenia-codice-amico-la-promozione-porta-un-amico-in-sorgenia/',
        destination: '/categoria/energia/',
        permanent: true,
      },
      {
        source: '/istruzioni-veloci-per-passare-sorgenia-e-ricevere-il-buono-amazon-sconto-in-bolletta/',
        destination: '/categoria/energia/',
        permanent: true,
      },
      // Old blog articles -> homepage or blog
      {
        source: '/come-risparmiare-sulle-bollette-luce-e-gas/',
        destination: '/categoria/energia/',
        permanent: true,
      },
      {
        source: '/domande-e-risposte/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sorgenia-fantastica-:slug*/',
        destination: '/categoria/energia/',
        permanent: true,
      },
      {
        source: '/sorgenia-ma-quanto-si-risparmia/',
        destination: '/categoria/energia/',
        permanent: true,
      },
      // All WordPress tags -> homepage
      {
        source: '/tag/:slug/',
        destination: '/',
        permanent: true,
      },
      // WordPress category -> categoria
      {
        source: '/category/:slug/',
        destination: '/categoria/:slug/',
        permanent: true,
      },
    ]
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
