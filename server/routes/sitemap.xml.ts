import { procedures } from '#shared/data/procedures'

export default defineEventHandler((event) => {
  const base = siteUrl()
  const today = new Date().toISOString().slice(0, 10)

  const pages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/procedimentos', priority: '0.9', changefreq: 'monthly' },
    ...procedures.map(p => ({ loc: `/procedimentos/${p.slug}`, priority: '0.9', changefreq: 'monthly' })),
    { loc: '/links', priority: '0.5', changefreq: 'monthly' },
  ]

  const urls = pages
    .map(p => `  <url>
    <loc>${base}${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`)
    .join('\n')

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
})
