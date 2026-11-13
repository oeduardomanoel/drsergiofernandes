<script setup lang="ts">
import { site } from '#shared/data/site'
</script>

<template>
  <section id="numeros" class="section section--dark stats" aria-label="Números">
    <div class="container">
      <div class="stats__grid">
        <StatItem v-reveal :value="site.stats.surgeries" prefix="+" format label="cirurgias realizadas ao longo da carreira" />
        <StatItem v-reveal="100" :value="site.stats.years" prefix="+" label="anos de experiência em cirurgia plástica" />
        <StatItem v-reveal="200" :value="site.stats.cities" label="cidades de atendimento em Santa Catarina" />
        <div v-reveal="300" class="stats__ig">
          <p class="stats__ig-value">52,8<span>mil</span></p>
          <p class="stats__ig-label">seguidores acompanham bastidores e depoimentos no Instagram</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  padding-block: var(--space-10);
}

.stats__grid {
  display: grid;
  gap: var(--space-2) var(--space-6);
}

.stats__ig {
  display: grid;
  gap: var(--space-2);
  padding-block: var(--space-5);
  border-top: 1px solid var(--line-on-dark);
  transition: border-color var(--dur-med) var(--ease-out);
}

.stats__ig:hover {
  border-color: var(--gold-2);
}

.stats__ig-value {
  font-family: var(--font-display);
  font-size: clamp(48px, 6vw, 80px);
  line-height: 1;
  letter-spacing: -0.02em;
}

.stats__ig-value span {
  font-style: italic;
  color: var(--gold-2);
  margin-left: var(--space-2);
}

.stats__ig-label {
  font-size: var(--text-sm);
  color: var(--text-on-dark-muted);
  max-width: 28ch;
}

@media (min-width: 640px) {
  .stats__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1080px) {
  .stats__grid {
    grid-template-columns: 1.3fr 1fr 1fr 1fr;
  }
}
</style>
