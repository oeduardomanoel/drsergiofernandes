<script setup lang="ts">
import { procedures } from '#shared/data/procedures'

const title = 'Procedimentos de cirurgia plástica'
const description = 'Abdominoplastia, cirurgia de mama, Lipo HD e rinoplastia com o Dr. Sergio Fernandes em Balneário Camboriú, Florianópolis e Criciúma (SC).'
const { base, url } = usePageSeo({ title, description, path: '/procedimentos' })

useJsonLd([
  ...coreSchema(base),
  {
    '@type': 'CollectionPage',
    '@id': `${url}#webpage`,
    url,
    'name': title,
    description,
    'inLanguage': 'pt-BR',
    'isPartOf': { '@id': ids(base).website },
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': procedures.map((p, i) => ({
        '@type': 'ListItem',
        'position': i + 1,
        'url': `${base}/procedimentos/${p.slug}`,
        'name': p.name,
      })),
    },
  },
  breadcrumbSchema([
    { name: 'Início', url: `${base}/` },
    { name: 'Procedimentos', url },
  ]),
])
</script>

<template>
  <div>
    <PageHero :crumbs="[{ label: 'Início', to: '/' }, { label: 'Procedimentos' }]">
      <h1 v-reveal:lines class="display">
        <span class="split-line"><span>Procedimentos</span></span>
      </h1>
      <p v-reveal="200" class="lead">
        Estes são os procedimentos mais procurados no consultório do Dr. Sergio Fernandes.
        Cada página explica indicação, cirurgia e recuperação em linguagem simples. A decisão final, sempre, vem da avaliação.
      </p>
    </PageHero>

    <section class="section list">
      <div class="container">
        <ProcedureList />
      </div>
    </section>

    <CtaFinal />
  </div>
</template>

<style scoped>
.list {
  padding-top: var(--space-9);
}

</style>
