<script setup lang="ts">
import { site } from '#shared/data/site'
import { homeFaqs } from '#shared/data/procedures'
</script>

<template>
  <section id="duvidas" class="section faq-section" aria-labelledby="faq-title">
    <div class="container faq-section__grid">
      <div class="faq-section__head">
        <div class="section-head">
          <p v-reveal:fade class="eyebrow">Dúvidas frequentes</p>
          <h2 id="faq-title" v-reveal class="h2">
            Perguntas que <em>quase toda paciente</em> faz.
          </h2>
          <p v-reveal="100" class="lead">
            Não encontrou a sua? A equipe responde pelo link de agendamento.
          </p>
        </div>
        <a v-reveal="200" :href="site.links.booking" target="_blank" rel="noopener" class="btn btn--ghost">
          Falar com a equipe
          <AppIcon name="arrow-right" />
        </a>
      </div>
      <FaqList :items="homeFaqs" />
    </div>
  </section>
</template>

<style scoped>
.faq-section__grid {
  display: grid;
  gap: var(--space-8);
}

.faq-section__head .section-head {
  margin-bottom: var(--space-5);
}

@media (min-width: 1080px) {
  .faq-section__grid {
    grid-template-columns: 0.8fr 1.2fr;
    gap: var(--space-10);
  }

  .faq-section__head {
    position: sticky;
    top: calc(var(--header-h) + var(--space-8));
    align-self: start;
  }
}
</style>
