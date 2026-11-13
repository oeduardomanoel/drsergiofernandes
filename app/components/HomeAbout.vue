<script setup lang="ts">
import { site } from '#shared/data/site'

const pillars = [
  {
    icon: 'chat',
    title: 'Avaliação individual',
    text: 'A consulta começa ouvindo o que te incomoda. A indicação vem depois do exame, e às vezes ela é não operar agora.',
  },
  {
    icon: 'clipboard',
    title: 'Plano explicado',
    text: 'Técnica, cicatriz, exames e tempo de recuperação são conversados antes. Você decide sabendo o que esperar.',
  },
  {
    icon: 'shield',
    title: 'Segurança primeiro',
    text: 'Cirurgias em ambiente hospitalar, com equipe de anestesia e avaliação pré-operatória completa.',
  },
  {
    icon: 'heart',
    title: 'Pós acompanhado',
    text: 'Orientações por escrito e retornos agendados. A volta à rotina é liberada por etapas, no seu tempo.',
  },
]
</script>

<template>
  <section id="sobre" class="section about" aria-labelledby="sobre-title">
    <div class="container about__grid">
      <div class="about__visual">
        <div v-reveal:mask class="about__photo">
          <PortraitFrame :src="site.images.action || site.images.portrait" alt="Dr. Sergio Fernandes no centro cirúrgico" shape="rounded" />
        </div>
        <div v-reveal:right="300" class="about__badge">
          <AppIcon name="shield" :size="24" />
          <div>
            <p class="about__badge-title">Especialista registrado</p>
            <p class="about__badge-text">{{ site.crm }} · {{ site.rqe }}</p>
            <a href="https://portal.cfm.org.br/busca-medicos" target="_blank" rel="noopener" class="link-underline about__badge-link">
              Consultar no portal do CFM
              <AppIcon name="arrow-up-right" />
            </a>
          </div>
        </div>
      </div>

      <div class="about__copy">
        <div class="section-head about__head">
          <p v-reveal:fade class="eyebrow">Quem vai cuidar de você</p>
          <h2 id="sobre-title" v-reveal class="h2">
            Trinta anos de cirurgia plástica, <em>construídos uma paciente de cada vez.</em>
          </h2>
        </div>

        <div v-reveal="100" class="prose">
          <p>
            Sergio Fernandes é cirurgião plástico com registro de especialista no CRM de Santa Catarina.
            São mais de três décadas de profissão e mais de 14 mil cirurgias, entre Balneário Camboriú, Florianópolis e Criciúma.
          </p>
          <p>
            No Instagram, quem mostra o trabalho são as próprias pacientes: o diário do segundo dia de pós,
            a primeira troca de curativo, o depoimento meses depois. Dá pra ver como a jornada acontece de verdade, sem filtro de propaganda.
          </p>
        </div>

        <ul class="about__pillars" role="list">
          <li v-for="(p, i) in pillars" :key="p.title" v-reveal="i * 90" class="pillar">
            <span class="pillar__icon"><AppIcon :name="p.icon" :size="20" /></span>
            <h3 class="pillar__title">{{ p.title }}</h3>
            <p class="pillar__text">{{ p.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  gap: var(--space-9);
}

.about__visual {
  position: relative;
  padding-bottom: var(--space-8);
}

.about__photo {
  max-width: 520px;
}

.about__photo::after {
  content: '';
  position: absolute;
  inset: var(--space-5) calc(var(--space-5) * -1) calc(var(--space-5) * -1) var(--space-5);
  z-index: -1;
  border: 1px solid var(--gold-2);
  border-radius: var(--radius-xl);
}

.about__photo {
  position: relative;
  isolation: isolate;
}

.about__badge {
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  gap: var(--space-3);
  max-width: 300px;
  padding: var(--spacing-card);
  border-radius: var(--radius-lg);
  background: var(--paper);
  box-shadow: var(--shadow-lg);
  transition: transform var(--dur-med) var(--ease-out);
}

.about__badge:hover {
  transform: translateY(-4px);
}

.about__badge > svg {
  flex-shrink: 0;
  color: var(--diamond);
}

.about__badge-title {
  font-weight: 700;
  font-size: var(--text-sm);
}

.about__badge-text {
  font-size: var(--text-sm);
  color: var(--text-muted);
  margin-top: var(--space-1);
}

.about__badge-link {
  margin-top: var(--space-2);
  color: var(--navy-3);
  font-size: var(--text-xs);
}

.about__copy {
  display: grid;
  gap: var(--space-6);
  align-content: center;
}

.about__head {
  margin-bottom: 0;
}

.about__pillars {
  display: grid;
  gap: var(--space-4);
  margin-top: var(--space-3);
}

.pillar {
  display: grid;
  align-content: start;
  gap: var(--space-2);
  padding: var(--spacing-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: var(--paper);
  transition:
    transform var(--dur-med) var(--ease-out),
    box-shadow var(--dur-med) var(--ease-out),
    border-color var(--dur-med) var(--ease-out);
}

.pillar:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--gold-3);
}

.pillar__icon {
  display: grid;
  place-items: center;
  width: var(--control-sm);
  height: var(--control-sm);
  margin-bottom: var(--space-2);
  border-radius: var(--radius-md);
  background: var(--ivory);
  color: var(--gold);
  transition: background-color var(--dur-med), color var(--dur-med), transform var(--dur-med) var(--ease-out);
}

.pillar:hover .pillar__icon {
  background: var(--navy);
  color: var(--gold-2);
  transform: rotate(-6deg);
}

.pillar__title {
  font-size: var(--text-md);
  font-weight: 700;
}

.pillar__text {
  font-size: var(--text-sm);
  color: var(--text-muted);
  line-height: 1.6;
}

@media (min-width: 640px) {
  .about__pillars {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1080px) {
  .about__grid {
    grid-template-columns: 0.9fr 1.1fr;
    gap: var(--space-10);
    align-items: center;
  }

  .about__visual {
    padding-right: var(--space-8);
  }
}
</style>
