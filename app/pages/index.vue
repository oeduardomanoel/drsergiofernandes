<script setup lang="ts">
import { site } from '#shared/data/site'
import { homeFaqs } from '#shared/data/procedures'

const { base, url } = usePageSeo({
  title: site.title,
  description: site.description,
  path: '/',
  absoluteTitle: true,
})

useJsonLd([
  ...coreSchema(base),
  {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    'name': site.title,
    'description': site.description,
    'inLanguage': 'pt-BR',
    'isPartOf': { '@id': ids(base).website },
    'about': { '@id': ids(base).physician },
    'primaryImageOfPage': `${base}/og-image.png`,
  },
  faqSchema(homeFaqs, url),
])
</script>

<template>
  <div>
    <HomeHero />
    <HomeStats />
    <ProcedureMarquee />
    <HomeAbout />
    <HomeProcedures />
    <HomeJourney />
    <HomeInstagram />
    <HomeLocations />
    <HomeFaq />
    <CtaFinal />
  </div>
</template>
