<script setup lang="ts">
import { site, whatsappUrl } from '#shared/data/site'
import { getProcedure, procedures } from '#shared/data/procedures'

const route = useRoute()
const procedure = getProcedure(String(route.params.slug))

if (!procedure) {
  throw createError({ statusCode: 404, statusMessage: 'Procedimento não encontrado', fatal: true })
}

const p = procedure
const lowerName = p.slug === 'lipo-hd' ? 'Lipo HD' : p.name.toLowerCase()
const waProcedure = whatsappUrl(`Olá! Vim pelo site e quero agendar uma avaliação de ${lowerName} com o Dr. Sergio Fernandes.`)
const others = procedures.filter(o => o.slug !== p.slug)
const path = `/procedimentos/${p.slug}`
const { base, url } = usePageSeo({
  title: `${p.name} em Balneário Camboriú, Florianópolis e Criciúma`,
  description: p.summary,
  path,
  type: 'article',
})

useJsonLd([
  ...coreSchema(base),
  {
    '@type': 'MedicalWebPage',
    '@id': `${url}#webpage`,
    url,
    'name': `${p.name} · ${site.name}`,
    'description': p.summary,
    'inLanguage': 'pt-BR',
    'isPartOf': { '@id': ids(base).website },
    'about': { '@id': `${url}#procedure` },
    'mainEntity': { '@id': `${url}#procedure` },
    'reviewedBy': { '@id': ids(base).person },
    'author': { '@id': ids(base).person },
    'audience': { '@type': 'PeopleAudience', 'geographicArea': { '@type': 'State', 'name': 'Santa Catarina' } },
    'medicalAudience': { '@type': 'MedicalAudience', 'audienceType': 'Patient' },
  },
  faqSchema(p.faqs, url),
  breadcrumbSchema([
    { name: 'Início', url: `${base}/` },
    { name: 'Procedimentos', url: `${base}/procedimentos` },
    { name: p.name, url },
  ]),
])
</script>

<template>
  <article>
    <PageHero
      :eyebrow="p.technicalName"
      :crumbs="[{ label: 'Início', to: '/' }, { label: 'Procedimentos', to: '/procedimentos' }, { label: p.name }]"
    >
      <div class="ph">
        <div class="ph__copy">
          <h1 v-reveal:lines class="display ph__title">
            <span class="split-line"><span>{{ p.name }}</span></span>
          </h1>
          <p v-reveal="150" class="ph__tagline">{{ p.tagline }}</p>
          <div v-reveal="250" class="ph__actions">
            <a :href="waProcedure" target="_blank" rel="noopener" class="btn btn--lg">
              <AppIcon name="whatsapp" />
              Falar sobre {{ lowerName }}
            </a>
            <a :href="site.links.booking" target="_blank" rel="noopener" class="btn btn--ghost btn--lg">
              Agendar avaliação
            </a>
          </div>
        </div>
        <div v-reveal:scale="200" class="ph__doc">
          <img :src="site.images.instagramAvatar" alt="Dr. Sergio Fernandes" width="96" height="96" class="ph__doc-img">
          <div>
            <p class="ph__doc-name">{{ site.fullName }}</p>
            <p class="ph__doc-meta">{{ site.role }} · {{ site.crm }} · {{ site.rqe }}</p>
            <a :href="site.google.url" target="_blank" rel="noopener" class="ph__doc-rating">
              <span aria-hidden="true">★</span> {{ site.google.rating }} · {{ site.google.reviews }} avaliações no Google
            </a>
          </div>
        </div>
      </div>
    </PageHero>

    <div class="section detail">
      <div class="container detail__grid">
        <aside class="detail__aside">
          <nav class="toc" aria-label="Nesta página">
            <p class="toc__title">Nesta página</p>
            <a href="#o-que-e">O que é</a>
            <a href="#indicacao">Para quem é indicada</a>
            <a href="#como-e-feita">Como é feita</a>
            <a href="#recuperacao">Recuperação</a>
            <a href="#perguntas">Perguntas frequentes</a>
          </nav>
          <div class="aside-card">
            <p class="aside-card__title">Quer saber se é indicado pra você?</p>
            <p class="aside-card__text">A avaliação é o único jeito de ter essa resposta com segurança.</p>
            <a :href="waProcedure" target="_blank" rel="noopener" class="btn btn--gold btn--block">
              <AppIcon name="whatsapp" />
              Chamar no WhatsApp
            </a>
          </div>
        </aside>

        <div class="detail__body">
          <section id="o-que-e" class="block">
            <h2 v-reveal class="h3">O que é a {{ lowerName }}</h2>
            <div v-reveal="80" class="prose"><p>{{ p.intro }}</p></div>
          </section>

          <section id="indicacao" class="block">
            <h2 v-reveal class="h3">Para quem é indicada</h2>
            <ul class="diamond-list">
              <li v-for="(item, i) in p.indications" :key="item" v-reveal="i * 60">{{ item }}</li>
            </ul>
          </section>

          <section id="como-e-feita" class="block">
            <h2 v-reveal class="h3">Como é feita</h2>
            <div v-reveal="80" class="prose">
              <p v-for="t in p.howItWorks" :key="t">{{ t }}</p>
            </div>
          </section>

          <section id="recuperacao" class="block block--card">
            <h2 v-reveal class="h3">Recuperação</h2>
            <div v-reveal="80" class="prose">
              <p v-for="t in p.recovery" :key="t">{{ t }}</p>
            </div>
            <p class="block__note">
              Prazos de recuperação variam de pessoa para pessoa e são definidos nas consultas de retorno.
            </p>
          </section>

          <section id="perguntas" class="block">
            <h2 v-reveal class="h3">Perguntas frequentes sobre {{ lowerName }}</h2>
            <FaqList :items="p.faqs" />
          </section>
        </div>
      </div>
    </div>

    <section class="section section--ivory others" aria-labelledby="others-title">
      <div class="container">
        <div class="section-head">
          <h2 id="others-title" v-reveal class="h2">Outros procedimentos</h2>
        </div>
        <ProcedureList :items="others" />
      </div>
    </section>

    <CtaFinal :procedure="p.name" />
  </article>
</template>

<style scoped>
.ph {
  display: grid;
  gap: var(--space-8);
  align-items: center;
}

.ph__copy {
  display: grid;
  gap: var(--space-5);
}

.ph__tagline {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  line-height: 1.25;
  color: var(--text-muted);
  max-width: 28ch;
}

.ph__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4);
  margin-top: var(--space-2);
}

.ph__doc {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  justify-self: start;
  padding: var(--spacing-card);
  border-radius: var(--radius-xl);
  background: var(--paper);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-md);
  transition: transform var(--dur-med) var(--ease-out), box-shadow var(--dur-med) var(--ease-out);
}

.ph__doc:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.ph__doc-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.ph__doc-name {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  line-height: 1.2;
}

.ph__doc-meta {
  font-size: var(--text-xs);
  color: var(--text-muted);
  margin-top: var(--space-1);
}

.ph__doc-rating {
  display: inline-block;
  margin-top: var(--space-2);
  font-size: var(--text-sm);
  font-weight: 600;
  transition: color var(--dur-fast);
}

.ph__doc-rating span {
  color: var(--gold);
}

.ph__doc-rating:hover {
  color: var(--navy-3);
}

.detail {
  padding-top: var(--space-9);
}

.detail__grid {
  display: grid;
  gap: var(--space-8);
}

.detail__aside {
  display: none;
}

.detail__body {
  display: grid;
  gap: var(--space-9);
  max-width: var(--container-narrow);
}

.block {
  display: grid;
  gap: var(--space-5);
  scroll-margin-top: calc(var(--header-h) + var(--space-6));
}

.block--card {
  padding: var(--spacing-card-lg);
  border-radius: var(--radius-xl);
  background: var(--ivory);
}

.block__note {
  font-size: var(--text-sm);
  color: var(--text-muted);
  padding-top: var(--space-4);
  border-top: 1px solid var(--line);
}

.toc {
  display: grid;
  gap: var(--space-1);
  padding-left: var(--space-4);
  border-left: 1px solid var(--line);
}

.toc__title {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: var(--space-2);
}

.toc a {
  padding-block: var(--space-1);
  font-size: var(--text-sm);
  color: var(--text-muted);
  transition: color var(--dur-fast), transform var(--dur-med) var(--ease-out);
}

.toc a:hover {
  color: var(--ink);
  transform: translateX(4px);
}

.aside-card {
  display: grid;
  gap: var(--space-2);
  margin-top: var(--space-6);
  padding: var(--spacing-card);
  border-radius: var(--radius-lg);
  background: var(--navy);
  color: var(--text-on-dark);
}

.aside-card__title {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  line-height: 1.2;
}

.aside-card__text {
  font-size: var(--text-sm);
  color: var(--text-on-dark-muted);
  margin-bottom: var(--space-3);
}

@media (min-width: 960px) {
  .ph {
    grid-template-columns: 1.3fr 0.7fr;
  }
}

@media (min-width: 1080px) {
  .detail__grid {
    grid-template-columns: 280px 1fr;
    gap: var(--space-10);
  }

  .detail__aside {
    display: block;
    position: sticky;
    top: calc(var(--header-h) + var(--space-8));
    align-self: start;
  }
}
</style>
