<script setup lang="ts">
import { site } from '#shared/data/site'

const { el, progress } = useScrollProgress()
</script>

<template>
  <section ref="el" class="section section--dark cta" aria-labelledby="cta-title">
    <svg
      class="cta__seal"
      viewBox="0 0 200 200"
      aria-hidden="true"
      :style="{ transform: `rotate(${progress * 220}deg)` }"
    >
      <defs>
        <path id="cta-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
      </defs>
      <text font-family="Manrope, sans-serif" font-size="11.5" letter-spacing="4.2" fill="currentColor">
        <textPath href="#cta-circle">AGENDE SUA AVALIAÇÃO ◆ DR. SERGIO FERNANDES ◆ CIRURGIÃO PLÁSTICO ◆</textPath>
      </text>
    </svg>

    <div class="container container--narrow cta__inner">
      <p v-reveal:fade class="eyebrow">Próximo passo</p>
      <h2 id="cta-title" v-reveal:lines class="display cta__title">
        <span class="split-line"><span>O primeiro passo</span></span>
        <span class="split-line" style="--line-delay: 100ms"><span>é <em>uma conversa.</em></span></span>
      </h2>
      <p v-reveal="200" class="lead cta__lead">
        Na avaliação você tira suas dúvidas, entende as opções para o seu caso e sai sabendo os próximos passos.
        Sem compromisso de marcar cirurgia.
      </p>
      <div v-reveal="300" class="cta__actions">
        <a :href="site.links.booking" target="_blank" rel="noopener" class="btn btn--gold btn--lg">
          Agendar minha avaliação
          <AppIcon name="arrow-right" />
        </a>
        <a :href="site.links.instagram" target="_blank" rel="noopener" class="btn btn--ghost btn--lg">
          <AppIcon name="instagram" />
          Ver o Instagram
        </a>
      </div>
      <p v-reveal:fade="400" class="cta__meta">{{ site.crm }} · {{ site.rqe }}</p>
    </div>
  </section>
</template>

<style scoped>
.cta {
  overflow: hidden;
  text-align: center;
  background:
    radial-gradient(700px 360px at 50% 120%, rgba(201, 167, 116, 0.28), transparent 70%),
    radial-gradient(600px 300px at 0% 0%, rgba(74, 134, 240, 0.14), transparent 70%),
    var(--navy);
}

.cta__seal {
  position: absolute;
  top: var(--space-6);
  right: var(--space-6);
  width: 160px;
  height: 160px;
  color: var(--gold-2);
  opacity: 0.6;
  display: none;
}

.cta__inner {
  position: relative;
  display: grid;
  justify-items: center;
  gap: var(--space-5);
}

.cta__lead {
  margin-inline: auto;
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-3);
  margin-top: var(--space-3);
}

.cta__meta {
  font-size: var(--text-xs);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-on-dark-muted);
}

@media (min-width: 900px) {
  .cta__seal {
    display: block;
  }
}
</style>
