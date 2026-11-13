<script setup lang="ts">
import { site, mapsUrl } from '#shared/data/site'
import { procedures } from '#shared/data/procedures'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer section--dark">
    <div class="container">
      <div class="footer__top">
        <div class="footer__intro">
          <BrandMark light />
          <p class="footer__claim">
            Mais de 14 mil cirurgias e 30 anos de cirurgia plástica em Santa Catarina.
          </p>
          <div class="footer__social">
            <a :href="site.links.instagram" target="_blank" rel="noopener" class="footer__icon" aria-label="Instagram">
              <AppIcon name="instagram" />
            </a>
            <a :href="site.links.threads" target="_blank" rel="noopener" class="footer__icon" aria-label="Threads">
              <AppIcon name="threads" />
            </a>
          </div>
        </div>

        <nav class="footer__col" aria-label="Procedimentos">
          <p class="footer__title">Procedimentos</p>
          <NuxtLink v-for="p in procedures" :key="p.slug" :to="`/procedimentos/${p.slug}`" class="footer__link">
            {{ p.name }}
          </NuxtLink>
        </nav>

        <nav class="footer__col" aria-label="Atendimento">
          <p class="footer__title">Atendimento</p>
          <a
            v-for="l in site.locations"
            :key="l.slug"
            :href="mapsUrl(l.mapsQuery)"
            target="_blank"
            rel="noopener"
            class="footer__link"
          >
            {{ l.city }}, {{ site.stateCode }}
          </a>
        </nav>

        <nav class="footer__col" aria-label="Contato">
          <p class="footer__title">Contato</p>
          <a :href="site.links.booking" target="_blank" rel="noopener" class="footer__link">Agendar avaliação</a>
          <a :href="site.links.instagram" target="_blank" rel="noopener" class="footer__link">{{ site.links.instagramHandle }}</a>
          <NuxtLink to="/links" class="footer__link">Links rápidos</NuxtLink>
        </nav>
      </div>

      <div class="footer__bottom">
        <p>
          {{ site.fullName }} · {{ site.role }} · {{ site.crm }} · {{ site.rqe }}
        </p>
        <p class="footer__legal">
          As informações deste site têm caráter educativo e não substituem a consulta médica. Resultados variam de pessoa para pessoa.
        </p>
        <p>© {{ year }} {{ site.name }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--ink);
  color: var(--text-on-dark);
  padding-block: var(--space-10) var(--space-6);
}

.footer__top {
  display: grid;
  gap: var(--space-8);
  padding-bottom: var(--space-8);
  border-bottom: 1px solid var(--line-on-dark);
}

.footer__intro {
  display: grid;
  gap: var(--space-4);
  align-content: start;
  max-width: 360px;
}

.footer__claim {
  color: var(--text-on-dark-muted);
  font-size: var(--text-sm);
}

.footer__social {
  display: flex;
  gap: var(--space-2);
}

.footer__icon {
  display: grid;
  place-items: center;
  width: var(--control-sm);
  height: var(--control-sm);
  border-radius: var(--radius-pill);
  border: 1px solid var(--line-on-dark);
  transition: background-color var(--dur-fast), color var(--dur-fast), transform var(--dur-med) var(--ease-out);
}

.footer__icon:hover {
  background: var(--paper);
  color: var(--ink);
  transform: translateY(-2px);
}

.footer__col {
  display: grid;
  gap: var(--space-2);
  align-content: start;
}

.footer__title {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--gold-2);
  margin-bottom: var(--space-2);
}

.footer__link {
  width: fit-content;
  font-size: var(--text-sm);
  color: var(--text-on-dark-muted);
  transition: color var(--dur-fast), transform var(--dur-med) var(--ease-out);
}

.footer__link:hover {
  color: var(--paper);
  transform: translateX(4px);
}

.footer__bottom {
  display: grid;
  gap: var(--space-2);
  padding-top: var(--space-6);
  font-size: var(--text-xs);
  color: var(--text-on-dark-muted);
}

.footer__legal {
  max-width: 72ch;
}

@media (min-width: 768px) {
  .footer__top {
    grid-template-columns: 1.6fr repeat(3, 1fr);
  }
}
</style>
