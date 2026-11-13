import { site } from '#shared/data/site'

export function useSiteUrl(): string {
  const config = useRuntimeConfig()
  return String(config.public.siteUrl || site.defaultUrl).replace(/\/$/, '')
}

interface PageSeo {
  title: string
  description: string
  path: string
  type?: 'website' | 'article' | 'profile'
  /** Título completo, sem o sufixo do template. */
  absoluteTitle?: boolean
}

export function usePageSeo(opts: PageSeo) {
  const base = useSiteUrl()
  const url = `${base}${opts.path === '/' ? '/' : opts.path}`
  const image = `${base}/og-image.png`
  const fullTitle = opts.absoluteTitle ? opts.title : `${opts.title} | ${site.name}`

  useSeoMeta({
    title: opts.absoluteTitle ? opts.title : opts.title,
    titleTemplate: opts.absoluteTitle ? '%s' : `%s | ${site.name}`,
    description: opts.description,
    ogTitle: fullTitle,
    ogDescription: opts.description,
    ogUrl: url,
    ogType: opts.type || 'website',
    ogSiteName: site.name,
    ogLocale: 'pt_BR',
    ogImage: image,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: `${site.name}, ${site.role} em Santa Catarina`,
    twitterCard: 'summary_large_image',
    twitterTitle: fullTitle,
    twitterDescription: opts.description,
    twitterImage: image,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  })

  useHead({
    link: [{ rel: 'canonical', href: url }],
  })

  return { url, base }
}

export function useJsonLd(graph: Record<string, unknown>[]) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      },
    ],
  })
}
