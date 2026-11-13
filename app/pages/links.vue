<script setup lang="ts">
import { site, whatsappUrl } from '#shared/data/site'
import { procedures } from '#shared/data/procedures'

definePageMeta({ layout: 'bare' })

const { base } = usePageSeo({
  title: 'Links',
  description: 'Agende sua avaliação com o Dr. Sergio Fernandes, cirurgião plástico em Balneário Camboriú, Florianópolis e Criciúma. Todos os links oficiais em um lugar.',
  path: '/links',
})
useJsonLd(coreSchema(base).slice(0, 3))

const utm = (path: string) => `${path}?utm_source=instagram&utm_medium=bio&utm_campaign=links`

const main = [
  { label: 'Agendar minha avaliação', sub: 'Atendimento em BC, Floripa e Criciúma', href: site.links.booking, icon: 'calendar', external: true, featured: true },
  ...(site.links.whatsappNumber
    ? [{ label: 'Falar no WhatsApp', sub: 'Tire dúvidas com a equipe', href: whatsappUrl(), icon: 'whatsapp', external: true, featured: false }]
    : []),
  { label: 'Conheça o Dr. Sergio', sub: '+30 anos e +14 mil cirurgias', href: utm('/#sobre'), icon: 'shield', external: false, featured: false },
  { label: 'Como funciona a jornada', sub: 'Da avaliação à recuperação', href: utm('/#jornada'), icon: 'clipboard', external: false, featured: false },
  { label: 'Onde atende', sub: 'Balneário Camboriú · Florianópolis · Criciúma', href: utm('/#locais'), icon: 'map-pin', external: false, featured: false },
]
</script>

<template>
  <div class="lk">
    <div class="lk__bg" aria-hidden="true" />
    <div class="lk__wrap">
      <header class="lk__head">
        <div v-reveal:scale class="lk__avatar">
          <span class="lk__avatar-inner">
            <img v-if="site.images.instagramAvatar" :src="site.images.instagramAvatar" alt="Dr. Sergio Fernandes" width="112" height="112">
            <BrandMark v-else compact light />
          </span>
        </div>
        <h1 v-reveal="80" class="lk__name">
          Dr. Sergio Fernandes <VerifiedBadge :size="20" />
        </h1>
        <p v-reveal="140" class="lk__role">Cirurgião Plástico · {{ site.crm }} · {{ site.rqe }}</p>
        <ul v-reveal="200" class="lk__chips" role="list">
          <li><i />+14 mil cirurgias</li>
          <li><i />+30 anos</li>
          <li><i />3 cidades em SC</li>
        </ul>
      </header>

      <nav class="lk__list" aria-label="Links">
        <a
          v-for="(item, i) in main"
          :key="item.label"
          v-reveal="260 + i * 70"
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener' : undefined"
          class="lk__item"
          :class="{ 'lk__item--featured': item.featured }"
        >
          <span class="lk__icon"><AppIcon :name="item.icon" :size="20" /></span>
          <span class="lk__text">
            <strong>{{ item.label }}</strong>
            <span>{{ item.sub }}</span>
          </span>
          <span class="lk__arrow"><AppIcon name="arrow-right" :size="18" /></span>
        </a>
      </nav>

      <section class="lk__procs" aria-labelledby="lk-procs">
        <h2 id="lk-procs" v-reveal class="lk__section-title">Procedimentos</h2>
        <div class="lk__grid">
          <NuxtLink
            v-for="(p, i) in procedures"
            :key="p.slug"
            v-reveal="i * 70"
            :to="`/procedimentos/${p.slug}`"
            class="lk__proc"
            :class="`lk__proc--${p.tone}`"
          >
            <span class="lk__proc-num">0{{ i + 1 }}</span>
            <span class="lk__proc-name">{{ p.name }}</span>
          </NuxtLink>
        </div>
      </section>

      <footer class="lk__foot">
        <a :href="site.links.instagram" target="_blank" rel="noopener" aria-label="Instagram"><AppIcon name="instagram" /></a>
        <a :href="site.links.threads" target="_blank" rel="noopener" aria-label="Threads"><AppIcon name="threads" /></a>
        <NuxtLink to="/" class="lk__site">Visitar o site completo</NuxtLink>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.lk {
  position: relative;
  min-height: 100svh;
  padding: var(--space-8) var(--space-4) var(--space-9);
  background: var(--navy);
  color: var(--text-on-dark);
  overflow: hidden;
}

.lk__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(520px 320px at 50% -5%, rgba(201, 167, 116, 0.35), transparent 70%),
    radial-gradient(400px 400px at 100% 100%, rgba(74, 134, 240, 0.18), transparent 70%);
  pointer-events: none;
}

.lk__wrap {
  position: relative;
  max-width: 480px;
  margin-inline: auto;
  display: grid;
  gap: var(--space-8);
}

.lk__head {
  display: grid;
  justify-items: center;
  gap: var(--space-2);
  text-align: center;
}

.lk__avatar {
  width: 112px;
  height: 112px;
  padding: 3px;
  margin-bottom: var(--space-3);
  border-radius: 50%;
  background: conic-gradient(from 200deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5, #feda75);
}

.lk__avatar-inner {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 4px solid var(--navy);
  background: var(--navy-2);
  overflow: hidden;
}

.lk__avatar-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lk__avatar-inner :deep(.brand__mark) {
  width: 64px;
  height: 64px;
}

.lk__name {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-display);
  font-weight: 400;
  font-size: var(--text-4xl);
  line-height: 1.1;
}

.lk__role {
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-on-dark-muted);
}

.lk__chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-3);
}

.lk__chips li {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-pill);
  border: 1px solid var(--line-on-dark);
  font-size: var(--text-xs);
}

.lk__chips i {
  width: 6px;
  height: 6px;
  background: var(--diamond);
  transform: rotate(45deg);
}

.lk__list {
  display: grid;
  gap: var(--space-3);
}

.lk__item {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  min-height: 72px;
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-lg);
  background: rgba(245, 239, 229, 0.06);
  border: 1px solid var(--line-on-dark);
  transition:
    background-color var(--dur-med) var(--ease-out),
    border-color var(--dur-med) var(--ease-out),
    transform var(--dur-med) var(--ease-out);
}

.lk__item:hover {
  background: rgba(245, 239, 229, 0.12);
  border-color: rgba(201, 167, 116, 0.5);
  transform: translateY(-2px);
}

.lk__item:active {
  transform: scale(0.98);
}

.lk__item--featured {
  background: var(--gold-2);
  border-color: var(--gold-2);
  color: var(--ink);
}

.lk__item--featured:hover {
  background: var(--gold-3);
  border-color: var(--gold-3);
}

.lk__icon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: var(--control-sm);
  height: var(--control-sm);
  border-radius: var(--radius-md);
  background: rgba(245, 239, 229, 0.08);
}

.lk__item--featured .lk__icon {
  background: rgba(11, 22, 38, 0.1);
}

.lk__text {
  flex: 1;
  display: grid;
  gap: 2px;
  line-height: 1.3;
}

.lk__text strong {
  font-size: var(--text-md);
}

.lk__text span {
  font-size: var(--text-xs);
  opacity: 0.7;
}

.lk__arrow {
  transition: transform var(--dur-med) var(--ease-out);
}

.lk__item:hover .lk__arrow {
  transform: translateX(4px);
}

.lk__procs {
  display: grid;
  gap: var(--space-4);
}

.lk__section-title {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--gold-2);
  text-align: center;
}

.lk__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3);
}

.lk__proc {
  display: grid;
  align-content: space-between;
  gap: var(--space-6);
  min-height: 120px;
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  background: var(--sand);
  color: var(--ink);
  transition: transform var(--dur-med) var(--ease-out), box-shadow var(--dur-med) var(--ease-out);
}

.lk__proc:hover {
  transform: translateY(-4px) rotate(-1deg);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
}

.lk__proc--rose { background: #f1dcd6; }
.lk__proc--gold { background: var(--gold-3); }

.lk__proc--navy {
  background: var(--navy-2);
  color: var(--paper);
}

.lk__proc-num {
  justify-self: start;
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.14em;
  opacity: 0.6;
}

.lk__proc-name {
  font-family: var(--font-display);
  font-size: var(--text-xl);
}

.lk__foot {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-4);
}

.lk__foot a {
  display: grid;
  place-items: center;
  min-width: var(--control-sm);
  height: var(--control-sm);
  border-radius: var(--radius-pill);
  border: 1px solid var(--line-on-dark);
  transition: background-color var(--dur-fast), color var(--dur-fast);
}

.lk__foot a:hover {
  background: var(--paper);
  color: var(--ink);
}

.lk__site {
  padding-inline: var(--space-4);
  font-size: var(--text-sm);
  font-weight: 600;
}
</style>
