import { procedures } from './shared/data/procedures'

const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Frame-Options': 'SAMEORIGIN',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
}

export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },

  css: [
    '@fontsource/instrument-serif/400.css',
    '@fontsource/instrument-serif/400-italic.css',
    '@fontsource-variable/manrope/wght.css',
    '~/assets/css/main.css',
  ],

  runtimeConfig: {
    public: {
      siteUrl: 'https://drsergiofernandes.com.br',
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      meta: [
        { name: 'theme-color', content: '#0E1E36' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'author', content: 'Dr. Sergio Fernandes' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'alternate', type: 'text/plain', href: '/llms.txt', title: 'LLMs.txt' },
      ],
      script: [
        // Ativa as animações de scroll só quando há JS: sem JS, todo o conteúdo fica visível.
        {
          innerHTML:
            "document.documentElement.classList.add('js');if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('reduced-motion')",
          tagPosition: 'head',
        },
      ],
    },
  },

  routeRules: {
    '/**': { headers: securityHeaders },
    '/_nuxt/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
    '/images/**': { headers: { 'Cache-Control': 'public, max-age=2592000' } },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/procedimentos',
        '/links',
        ...procedures.map(p => `/procedimentos/${p.slug}`),
        '/sitemap.xml',
        '/robots.txt',
        '/llms.txt',
        '/llms-full.txt',
      ],
    },
  },

  experimental: {
    payloadExtraction: true,
  },
})
