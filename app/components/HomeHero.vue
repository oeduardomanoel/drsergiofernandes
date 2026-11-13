<script setup lang="ts">
import { site, whatsappUrl } from '#shared/data/site'

const shift = ref(0)

onMounted(() => {
  if (document.documentElement.classList.contains('reduced-motion')) return
  let ticking = false
  const update = () => {
    ticking = false
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
    <div class="container hero__grid">
      <div class="hero__copy">
        <h1 id="hero-title" v-reveal:lines class="display hero__title">
          <span class="split-line"><span>Cirurgia plástica</span></span>
          <span class="split-line" style="--line-delay: 90ms"><span>com a experiência de</span></span>
          <span class="split-line" style="--line-delay: 180ms"><span><em>mais de 14 mil</em> cirurgias.</span></span>
        </h1>

        <p v-reveal="300" class="lead hero__lead">
          O Dr. Sergio Fernandes é cirurgião plástico em Florianópolis e também atende em Balneário Camboriú e Criciúma.
          Antes de qualquer cirurgia, vem a conversa: o que você quer mudar, o que o seu corpo permite e como vai ser a recuperação.
        </p>

        <div v-reveal="420" class="hero__actions">
          <a :href="site.links.booking" class="btn btn--lg" target="_blank" rel="noopener">
            Agendar avaliação
            <AppIcon name="arrow-right" />
          </a>
          <a :href="whatsappUrl()" class="btn btn--ghost btn--lg" target="_blank" rel="noopener">
            <AppIcon name="whatsapp" />
            Chamar no WhatsApp
          </a>
        </div>

        <div v-reveal="540" class="hero__proof">
          <a :href="site.google.url" target="_blank" rel="noopener" class="hero__rating">
            <span class="hero__rating-score">{{ site.google.rating }}</span>
            <span class="hero__rating-meta">
              <span class="hero__stars" aria-hidden="true">★★★★★</span>
              <span>{{ site.google.reviews }} avaliações no Google</span>
            </span>
          </a>
          <span class="hero__divider" aria-hidden="true" />
          <p class="hero__creds">
            {{ site.crm }}<br>{{ site.rqe }}
          </p>
        </div>
      </div>

      <div class="hero__visual">
        <div class="hero__portrait" :style="{ transform: `translate3d(0, ${shift * -0.05}px, 0)` }">
          <div v-reveal:mask="150">
            <PortraitFrame :src="site.images.portrait" alt="Dr. Sergio Fernandes, cirurgião plástico" eager />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding-top: calc(var(--header-h) + var(--space-8));
  padding-bottom: var(--space-10);
  background: linear-gradient(180deg, var(--paper), var(--ivory));
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
  gap: var(--space-5);
  margin-top: var(--space-4);
  padding-top: var(--space-5);
  border-top: 1px solid var(--line);
}

.hero__rating {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  border-radius: var(--radius-md);
  transition: opacity var(--dur-fast);
}

.hero__rating:hover {
  opacity: 0.75;
}

.hero__rating-score {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  line-height: 1;
}

.hero__rating-meta {
  display: grid;
  font-size: var(--text-sm);
  color: var(--text-muted);
  line-height: 1.4;
}

.hero__stars {
  color: var(--gold);
  letter-spacing: 0.12em;
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
  max-width: 440px;
  width: 100%;
  justify-self: center;
}

.hero__portrait {
  will-change: transform;
}

.hero__portrait :deep(.frame) {
  box-shadow: var(--shadow-lg);
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
    padding-left: var(--space-8);
  }
}
</style>
