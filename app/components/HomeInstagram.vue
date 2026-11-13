<script setup lang="ts">
import { site } from '#shared/data/site'

const { el, progress } = useScrollProgress()
const tilt = computed(() => (progress.value - 0.5) * -10)
</script>

<template>
  <section id="instagram" class="section section--sand insta" aria-labelledby="insta-title">
    <div class="container insta__grid">
      <div class="insta__copy">
        <div class="section-head">
          <p v-reveal:fade class="eyebrow">No Instagram</p>
          <h2 id="insta-title" v-reveal class="h2">
            A rotina do consultório, <em>contada por quem viveu.</em>
          </h2>
          <p v-reveal="100" class="lead">
            São {{ site.stats.followers }} pessoas acompanhando bastidores do centro cirúrgico, diários de recuperação e depoimentos de pacientes.
            Se você ainda está decidindo, é o melhor lugar pra ver a jornada inteira antes da consulta.
          </p>
        </div>

        <ul class="insta__list" role="list">
          <li v-reveal="150"><strong>Depoimentos</strong> nos destaques, com pacientes contando a própria experiência</li>
          <li v-reveal="220"><strong>Diários de pós</strong> do dia 1 em diante, sem edição de propaganda</li>
          <li v-reveal="290"><strong>Dúvidas respondidas</strong> sobre abdominoplastia, mama, Lipo HD e rinoplastia</li>
        </ul>

        <div v-reveal="360" class="insta__actions">
          <a :href="site.links.instagram" target="_blank" rel="noopener" class="btn btn--lg">
            <AppIcon name="instagram" />
            Seguir {{ site.links.instagramHandle }}
          </a>
          <NuxtLink to="/links" class="link-underline">
            Links da bio
            <AppIcon name="arrow-up-right" />
          </NuxtLink>
        </div>
      </div>

      <div ref="el" class="insta__stage">
        <div class="insta__glow" aria-hidden="true" />
        <div class="insta__phone-wrap" :style="{ transform: `rotate(${tilt}deg)` }">
          <div v-reveal:scale="100">
            <div class="phone">
              <span class="phone__notch" aria-hidden="true" />
              <div class="phone__screen">
                <InstagramProfile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.insta {
  overflow: clip;
}

.insta__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-9);
  align-items: center;
}

.insta__copy .section-head {
  margin-bottom: var(--space-6);
}

.insta__list {
  display: grid;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.insta__list li {
  position: relative;
  padding: var(--space-4) var(--space-4) var(--space-4) var(--space-8);
  border-radius: var(--radius-md);
  background: rgba(251, 248, 243, 0.6);
  color: var(--text-muted);
  font-size: var(--text-sm);
  transition: background-color var(--dur-med), transform var(--dur-med) var(--ease-out);
}

.insta__list li:hover {
  background: var(--paper);
  transform: translateX(4px);
}

.insta__list li::before {
  content: '';
  position: absolute;
  left: var(--space-4);
  top: 50%;
  width: 8px;
  height: 8px;
  margin-top: -4px;
  background: var(--diamond);
  transform: rotate(45deg);
  border-radius: 1px;
}

.insta__list strong {
  color: var(--ink);
}

.insta__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-5);
}

.insta__stage {
  position: relative;
  display: grid;
  place-items: center;
  padding-block: var(--space-6);
}

.insta__glow {
  position: absolute;
  width: 80%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: conic-gradient(from 200deg, rgba(254, 218, 117, 0.5), rgba(214, 41, 118, 0.35), rgba(79, 91, 213, 0.4), rgba(254, 218, 117, 0.5));
  filter: blur(64px);
  opacity: 0.55;
}

.insta__phone-wrap {
  position: relative;
  width: min(360px, 100%);
  transition: transform 120ms linear;
}

.phone {
  position: relative;
  padding: var(--space-3);
  border-radius: 48px;
  background: var(--ink);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08) inset,
    var(--shadow-lg),
    0 48px 96px rgba(11, 22, 38, 0.25);
  transition: transform var(--dur-med) var(--ease-out);
}

.phone:hover {
  transform: translateY(-8px);
}

.phone__notch {
  position: absolute;
  top: calc(var(--space-3) + var(--space-2));
  left: 50%;
  z-index: 2;
  width: 96px;
  height: 24px;
  border-radius: var(--radius-pill);
  background: var(--ink);
  transform: translateX(-50%);
}

.phone__screen {
  max-height: 680px;
  padding-top: var(--space-7);
  border-radius: 36px;
  background: #fff;
  overflow: hidden auto;
  scrollbar-width: none;
}

@media (min-width: 1080px) {
  .insta__grid {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: var(--space-10);
  }
}
</style>
