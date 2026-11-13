<script setup lang="ts">
import { site } from '#shared/data/site'

const steps = [
  {
    title: 'Avaliação',
    text: 'Você conta o que quer mudar e o Dr. Sergio examina, explica as opções e diz com franqueza o que é possível no seu corpo.',
  },
  {
    title: 'Planejamento',
    text: 'Exames pré-operatórios, escolha da técnica, cicatriz prevista e orçamento detalhado. Tudo conversado antes de marcar a data.',
  },
  {
    title: 'Cirurgia',
    text: 'Feita em ambiente hospitalar, com equipe de anestesia. Você recebe as orientações de preparo com antecedência.',
  },
  {
    title: 'Recuperação',
    text: 'Retornos agendados, orientações por escrito e liberação gradual para trabalho, exercício e rotina.',
  },
]

const { el, progress } = useScrollProgress({ start: 0.7, end: 0.5 })
</script>

<template>
  <section id="jornada" class="section section--dark journey" aria-labelledby="jornada-title">
    <div class="container journey__grid">
      <div class="journey__head">
        <h2 id="jornada-title" v-reveal class="h2">Do primeiro contato à recuperação</h2>
        <p v-reveal="100" class="lead">
          São quatro etapas. Conhecer cada uma antes de começar deixa a decisão mais tranquila.
        </p>
        <figure v-if="site.images.hospitalReception" v-reveal:mask="200" class="journey__photo">
          <img :src="site.images.hospitalReception" alt="Recepção do Hospital Beira Mar" width="708" height="945" loading="lazy">
          <figcaption>Hospital Beira Mar</figcaption>
        </figure>
      </div>

      <ol ref="el" class="journey__steps" role="list">
        <span class="journey__line" aria-hidden="true">
          <span class="journey__line-fill" :style="{ transform: `scaleY(${progress})` }" />
        </span>
        <li
          v-for="(s, i) in steps"
          :key="s.title"
          v-reveal="i * 80"
          class="step"
          :class="{ 'is-active': progress >= i / steps.length }"
        >
          <span class="step__dot" aria-hidden="true" />
          <span class="step__num">Etapa 0{{ i + 1 }}</span>
          <h3 class="step__title">{{ s.title }}</h3>
          <p class="step__text">{{ s.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.journey {
  overflow: clip;
  background:
    radial-gradient(800px 400px at 0% 0%, rgba(74, 134, 240, 0.12), transparent 60%),
    var(--navy);
}

.journey__grid {
  display: grid;
  gap: var(--space-8);
}

.journey__head {
  display: grid;
  gap: var(--space-5);
  align-content: start;
}

.journey__photo {
  position: relative;
  margin-top: var(--space-3);
  overflow: hidden;
  border-radius: var(--radius-xl);
  aspect-ratio: 16 / 10;
  max-width: 520px;
}

.journey__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 18%;
  transition: transform 1200ms var(--ease-out);
}

.journey__photo:hover img {
  transform: scale(1.05);
}

.journey__photo figcaption {
  position: absolute;
  left: var(--space-4);
  bottom: var(--space-4);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-pill);
  background: rgba(14, 30, 54, 0.72);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--paper);
}

.journey__steps {
  position: relative;
  display: grid;
  gap: var(--space-8);
  padding-left: var(--space-8);
}

.journey__line {
  position: absolute;
  left: 7px;
  top: var(--space-2);
  bottom: var(--space-2);
  width: 2px;
  background: var(--line-on-dark);
  border-radius: 2px;
  overflow: hidden;
}

.journey__line-fill {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, var(--gold-2), var(--diamond));
  transform-origin: top;
  transform: scaleY(0);
}

.step {
  position: relative;
  display: grid;
  gap: var(--spacing-stack);
  padding: var(--spacing-card);
  border-radius: var(--radius-lg);
  border: 1px solid transparent;
  transition:
    background-color var(--dur-med) var(--ease-out),
    border-color var(--dur-med) var(--ease-out),
    transform var(--dur-med) var(--ease-out);
  margin-left: calc(var(--spacing-card) * -1);
}

.step:hover {
  background: rgba(245, 239, 229, 0.04);
  border-color: var(--line-on-dark);
  transform: translateX(4px);
}

.step__dot {
  position: absolute;
  left: calc(var(--space-8) * -1 + 1px + var(--spacing-card));
  top: calc(var(--spacing-card) + 2px);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--line-on-dark);
  background: var(--navy);
  transition: border-color var(--dur-med), background-color var(--dur-med), box-shadow var(--dur-med);
}

.step.is-active .step__dot {
  border-color: var(--gold-2);
  background: var(--gold-2);
  box-shadow: 0 0 0 6px rgba(201, 167, 116, 0.18);
}

.step__num {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--gold-2);
}

.step__title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: var(--text-4xl);
  line-height: 1.1;
}

.step__text {
  color: var(--text-on-dark-muted);
  max-width: 52ch;
}

@media (min-width: 1080px) {
  .journey__grid {
    grid-template-columns: 0.9fr 1.1fr;
    gap: var(--space-10);
  }

  .journey__head {
    position: sticky;
    top: calc(var(--header-h) + var(--space-8));
    align-self: start;
  }

  .journey__steps {
    gap: var(--space-10);
  }
}
</style>
