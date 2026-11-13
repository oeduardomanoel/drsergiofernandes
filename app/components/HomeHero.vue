<script setup lang="ts">
import { site } from '#shared/data/site'

const visual = ref<HTMLElement | null>(null)
const shift = ref(0)

onMounted(() => {
  if (document.documentElement.classList.contains('reduced-motion')) return
  let ticking = false
  const update = () => {
    ticking = false
    // Parallax só em telas largas: no mobile os cards ficariam por cima da foto.
    shift.value = window.innerWidth >= 960 ? Math.min(window.scrollY, 900) : 0
  }
  const onScroll = () => {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(update)
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__rings" aria-hidden="true" :style="{ transform: `translate3d(0, ${shift * 0.15}px, 0) rotate(${shift * 0.04}deg)` }">
      <span /><span /><span />
    </div>

    <div class="container hero__grid">
      <div class="hero__copy">
        <p v-reveal:fade class="eyebrow">
          Cirurgião plástico em Santa Catarina
        </p>

        <h1 id="hero-title" v-reveal:lines class="display hero__title">
          <span class="split-line"><span>Cirurgia plástica</span></span>
          <span class="split-line" style="--line-delay: 90ms"><span>com a experiência de</span></span>
          <span class="split-line" style="--line-delay: 180ms"><span><em>mais de 14 mil</em> cirurgias.</span></span>
        </h1>

        <p v-reveal="300" class="lead hero__lead">
          Há mais de 30 anos o Dr. Sergio Fernandes opera em Balneário Camboriú, Florianópolis e Criciúma.
          Antes de qualquer cirurgia, vem a conversa: o que você quer mudar, o que o seu corpo permite e como vai ser a recuperação.
        </p>

        <div v-reveal="420" class="hero__actions">
          <a :href="site.links.booking" class="btn btn--lg" target="_blank" rel="noopener">
            Agendar minha avaliação
            <AppIcon name="arrow-right" />
          </a>
          <NuxtLink to="/procedimentos" class="btn btn--ghost btn--lg">
            Ver procedimentos
          </NuxtLink>
        </div>

        <div v-reveal="540" class="hero__proof">
          <a :href="site.links.instagram" target="_blank" rel="noopener" class="hero__ig">
            <span class="hero__ig-ring"><span><BrandMark compact /></span></span>
            <span class="hero__ig-text">
              <strong>{{ site.stats.followers }}</strong> pessoas acompanham a rotina
              <span class="hero__ig-handle">{{ site.links.instagramHandle }} <VerifiedBadge :size="14" /></span>
            </span>
          </a>
          <span class="hero__divider" aria-hidden="true" />
          <p class="hero__creds">
            {{ site.crm }}<br>{{ site.rqe }}
          </p>
        </div>
      </div>

      <div ref="visual" class="hero__visual">
        <div v-reveal:mask="150" class="hero__portrait" :style="{ transform: `translate3d(0, ${shift * -0.06}px, 0)` }">
          <PortraitFrame :src="site.images.portrait" alt="Dr. Sergio Fernandes, cirurgião plástico" eager />
        </div>

        <div class="hero__float hero__float--top" :style="{ transform: `translate3d(0, ${shift * -0.14}px, 0)` }">
          <div v-reveal:scale="700" class="hero__card">
            <span class="hero__card-num">+30</span>
            <span class="hero__card-label">anos de<br>cirurgia plástica</span>
          </div>
        </div>

        <div class="hero__float hero__float--bottom" :style="{ transform: `translate3d(0, ${shift * -0.22}px, 0)` }">
          <div v-reveal:scale="850" class="hero__card">
            <AppIcon name="map-pin" :size="18" />
            <span class="hero__card-label">
              <strong>BC · Floripa · Criciúma</strong><br>
              atendimento em 3 cidades
            </span>
          </div>
        </div>
      </div>
    </div>

    <a href="#numeros" class="hero__scroll" aria-label="Rolar para continuar">
      <span>Role</span>
      <AppIcon name="arrow-down" :size="16" />
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding-top: calc(var(--header-h) + var(--space-8));
  padding-bottom: var(--space-10);
  background:
    radial-gradient(1200px 600px at 85% 10%, rgba(201, 167, 116, 0.18), transparent 60%),
    linear-gradient(180deg, var(--paper), var(--ivory));
}

.hero__rings {
  position: absolute;
  top: -10%;
  right: -20%;
  width: 900px;
  height: 900px;
  pointer-events: none;
}

.hero__rings span {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(168, 131, 76, 0.18);
  border-radius: 50%;
}

.hero__rings span:nth-child(2) {
  inset: 12%;
}

.hero__rings span:nth-child(3) {
  inset: 24%;
  border-style: dashed;
  border-color: rgba(168, 131, 76, 0.24);
}

.hero__grid {
  position: relative;
  display: grid;
  gap: var(--space-9);
  align-items: center;
}

.hero__copy {
  display: grid;
  gap: var(--space-5);
}

.hero__title {
  margin-top: var(--space-1);
}

.hero__lead {
  max-width: 52ch;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-3);
}

.hero__proof {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4);
  margin-top: var(--space-4);
  padding-top: var(--space-5);
  border-top: 1px solid var(--line);
}

.hero__ig {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.hero__ig-ring {
  display: grid;
  place-items: center;
  width: var(--control-md);
  height: var(--control-md);
  border-radius: 50%;
  padding: 2px;
  background: conic-gradient(from 200deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5, #feda75);
  transition: transform var(--dur-slow) var(--ease-out);
}

.hero__ig-ring > span {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--paper);
  border: 2px solid var(--paper);
}

.hero__ig-ring :deep(.brand__mark) {
  width: 36px;
  height: 36px;
}

.hero__ig:hover .hero__ig-ring {
  transform: rotate(180deg);
}

.hero__ig-text {
  display: grid;
  font-size: var(--text-sm);
  color: var(--text-muted);
  line-height: 1.4;
}

.hero__ig-text strong {
  color: var(--ink);
}

.hero__ig-handle {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  color: var(--ink);
  font-weight: 600;
}

.hero__divider {
  width: 1px;
  height: var(--space-7);
  background: var(--line-strong);
}

.hero__creds {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  line-height: 1.6;
}

.hero__visual {
  position: relative;
  max-width: 460px;
  width: 100%;
  justify-self: center;
  padding-inline: var(--space-6);
}

.hero__portrait {
  will-change: transform;
}

.hero__portrait :deep(.frame) {
  box-shadow: var(--shadow-lg);
}

.hero__float {
  position: absolute;
  z-index: 2;
  will-change: transform;
}

.hero__card {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-lg);
  background: rgba(251, 248, 243, 0.86);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: var(--shadow-md);
  transition: transform var(--dur-med) var(--ease-out), box-shadow var(--dur-med) var(--ease-out);
}

.hero__card:hover {
  box-shadow: var(--shadow-lg);
}

.hero__float--top {
  top: 12%;
  left: 0;
}

.hero__float--bottom {
  bottom: 10%;
  right: 0;
}

.hero__card svg {
  color: var(--gold);
  flex-shrink: 0;
}

.hero__card-num {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  line-height: 1;
  color: var(--gold);
}

.hero__card-label {
  font-size: var(--text-xs);
  line-height: 1.4;
  color: var(--text-muted);
}

.hero__card-label strong {
  color: var(--ink);
  font-size: var(--text-sm);
}

.hero__scroll {
  position: absolute;
  left: 50%;
  bottom: var(--space-5);
  display: none;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--text-xs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
  transform: translateX(-50%);
  transition: color var(--dur-fast);
}

.hero__scroll svg {
  animation: nudge 2.4s var(--ease-in-out) infinite;
}

.hero__scroll:hover {
  color: var(--ink);
}

@keyframes nudge {
  50% {
    transform: translateY(6px);
  }
}

@media (min-width: 960px) {
  .hero {
    min-height: 100svh;
    display: grid;
    align-items: center;
    padding-bottom: var(--space-11);
  }

  .hero__grid {
    grid-template-columns: 1.15fr 0.85fr;
    gap: var(--space-10);
  }

  .hero__visual {
    max-width: none;
    padding-inline: var(--space-8) 0;
  }

  .hero__float--bottom {
    right: calc(var(--space-6) * -1);
  }

  .hero__scroll {
    display: inline-flex;
  }
}
</style>
