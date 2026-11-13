<script setup lang="ts">
import { site } from '#shared/data/site'

const main = site.locations.find(l => l.street)
const others = site.locations.filter(l => l !== main).map(l => l.city)

const facts = [
  { label: 'Especialidade', value: `Cirurgia Plástica, com Registro de Qualificação de Especialista (${site.rqe})` },
  { label: 'Registro', value: site.crm },
  { label: 'Experiência', value: `Mais de ${site.stats.years} anos de profissão` },
  { label: 'Consultório', value: main ? `${main.city}, ${main.district}` : site.state },
  { label: 'Atende também', value: others.join(' e ') },
]
</script>

<template>
  <section id="sobre" class="section about" aria-labelledby="sobre-title">
    <div class="container about__grid">
      <figure v-reveal:mask class="about__photo">
        <PortraitFrame :src="site.images.action" alt="Dr. Sergio Fernandes no centro cirúrgico" shape="rounded" />
        <figcaption>No centro cirúrgico</figcaption>
      </figure>

      <div class="about__copy">
        <header class="about__head">
          <h2 id="sobre-title" v-reveal class="h2">Dr. Sergio Fernandes</h2>
          <p v-reveal:fade="80" class="about__role">Cirurgião plástico em Santa Catarina</p>
        </header>

        <div v-reveal="120" class="prose">
          <p>
            No Instagram, quem mostra o trabalho são as próprias pacientes: o diário do segundo dia de pós,
            a primeira troca de curativo, o depoimento meses depois.
          </p>
        </div>

        <dl v-reveal="200" class="facts">
          <div v-for="f in facts" :key="f.label" class="facts__row">
            <dt>{{ f.label }}</dt>
            <dd>{{ f.value }}</dd>
          </div>
        </dl>

        <a v-reveal:fade="260" href="https://portal.cfm.org.br/busca-medicos" target="_blank" rel="noopener" class="link-underline about__cfm">
          Confira o registro no portal do CFM
          <AppIcon name="arrow-up-right" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  gap: var(--space-9);
}

.about__photo {
  position: relative;
  max-width: 480px;
}

.about__photo figcaption {
  margin-top: var(--space-3);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.about__copy {
  display: grid;
  gap: var(--space-6);
  align-content: center;
}

.about__head {
  display: grid;
  gap: var(--spacing-stack);
}

.about__role {
  font-size: var(--text-lg);
  color: var(--text-muted);
}

.facts {
  display: grid;
  margin: 0;
  border-top: 1px solid var(--line);
}

.facts__row {
  display: grid;
  gap: var(--space-1);
  padding-block: var(--space-4);
  border-bottom: 1px solid var(--line);
  transition: background-color var(--dur-med) var(--ease-out), padding var(--dur-med) var(--ease-out);
}

.facts__row:hover {
  background: var(--ivory);
  padding-inline: var(--space-4);
}

.facts dt {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
}

.facts dd {
  margin: 0;
  font-size: var(--text-md);
}

.about__cfm {
  width: fit-content;
  color: var(--navy-3);
}

@media (min-width: 640px) {
  .facts__row {
    grid-template-columns: 180px 1fr;
    gap: var(--space-5);
    align-items: baseline;
  }
}

@media (min-width: 1080px) {
  .about__grid {
    grid-template-columns: 0.85fr 1.15fr;
    gap: var(--space-10);
    align-items: center;
  }
}
</style>
