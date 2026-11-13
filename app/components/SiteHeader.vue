<script setup lang="ts">
import { site } from '#shared/data/site'

const nav = [
  { label: 'Sobre', to: '/#sobre' },
  { label: 'Procedimentos', to: '/procedimentos' },
  { label: 'Jornada', to: '/#jornada' },
  { label: 'Instagram', to: '/#instagram' },
  { label: 'Locais', to: '/#locais' },
  { label: 'Dúvidas', to: '/#duvidas' },
]

const scrolled = ref(false)
const hidden = ref(false)
const open = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => { open.value = false })
watch(open, (v) => {
  if (import.meta.client) document.documentElement.style.overflow = v ? 'hidden' : ''
})

onMounted(() => {
  let lastY = window.scrollY
  let ticking = false
  const update = () => {
    const y = window.scrollY
    scrolled.value = y > 16
    hidden.value = y > 480 && y > lastY && !open.value
    lastY = y
    ticking = false
  }
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(update)
      ticking = true
    }
  }
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <header class="header" :class="{ 'is-scrolled': scrolled, 'is-hidden': hidden, 'is-open': open }">
    <div class="container header__inner">
      <NuxtLink to="/" class="header__brand" aria-label="Dr. Sergio Fernandes, página inicial">
        <BrandMark :light="open" />
      </NuxtLink>

      <nav class="header__nav" aria-label="Principal">
        <NuxtLink v-for="item in nav" :key="item.to" :to="item.to" class="header__link">
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="header__actions">
        <a :href="site.links.booking" class="btn header__cta" target="_blank" rel="noopener">
          Agendar avaliação
          <AppIcon name="arrow-right" />
        </a>
        <button
          class="header__toggle"
          type="button"
          :aria-expanded="open"
          aria-controls="menu-mobile"
          :aria-label="open ? 'Fechar menu' : 'Abrir menu'"
          @click="open = !open"
        >
          <span class="header__toggle-bar" />
          <span class="header__toggle-bar" />
        </button>
      </div>
    </div>

    <Transition name="menu">
      <div v-show="open" id="menu-mobile" class="menu">
        <nav class="container menu__nav" aria-label="Menu">
          <NuxtLink
            v-for="(item, i) in nav"
            :key="item.to"
            :to="item.to"
            class="menu__link"
            :style="{ '--i': i }"
            @click="open = false"
          >
            <span class="menu__index">0{{ i + 1 }}</span>
            {{ item.label }}
          </NuxtLink>
        </nav>
        <div class="container menu__foot">
          <a :href="site.links.booking" class="btn btn--gold btn--lg btn--block" target="_blank" rel="noopener">
            Agendar avaliação
            <AppIcon name="arrow-right" />
          </a>
          <p class="menu__meta">{{ site.crm }} · {{ site.rqe }}</p>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  transition:
    transform var(--dur-med) var(--ease-out),
    background-color var(--dur-med) var(--ease-out),
    box-shadow var(--dur-med) var(--ease-out);
}

.header.is-scrolled {
  background: rgba(251, 248, 243, 0.82);
  backdrop-filter: saturate(1.4) blur(16px);
  -webkit-backdrop-filter: saturate(1.4) blur(16px);
  box-shadow: 0 1px 0 var(--line);
}

.header.is-hidden {
  transform: translateY(-100%);
}

.header.is-open {
  background: var(--navy);
  box-shadow: none;
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-5);
  height: var(--header-h);
}

.header__brand {
  position: relative;
  z-index: 2;
}

.header__nav {
  display: none;
  gap: var(--space-1);
}

.header__link {
  position: relative;
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-muted);
  border-radius: var(--radius-pill);
  transition: color var(--dur-fast) var(--ease-out), background-color var(--dur-fast) var(--ease-out);
}

.header__link:hover {
  color: var(--ink);
  background: rgba(11, 22, 38, 0.05);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  position: relative;
  z-index: 2;
}

.header__cta {
  display: none;
  height: var(--control-sm);
  padding-inline: var(--space-4);
}

.header__toggle {
  display: grid;
  place-content: center;
  gap: 6px;
  width: var(--control-md);
  height: var(--control-md);
  border-radius: var(--radius-pill);
  border: 1px solid var(--line-strong);
  transition: border-color var(--dur-fast), background-color var(--dur-fast);
}

.header__toggle:hover {
  background: rgba(11, 22, 38, 0.05);
}

.header__toggle-bar {
  display: block;
  width: 18px;
  height: 1.5px;
  background: var(--ink);
  transition: transform var(--dur-med) var(--ease-out), background-color var(--dur-fast);
}

.is-open .header__toggle {
  border-color: var(--line-on-dark);
}

.is-open .header__toggle-bar {
  background: var(--paper);
}

.is-open .header__toggle-bar:first-child {
  transform: translateY(3.75px) rotate(45deg);
}

.is-open .header__toggle-bar:last-child {
  transform: translateY(-3.75px) rotate(-45deg);
}

/* Menu mobile */
.menu {
  position: fixed;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: calc(var(--header-h) + var(--space-6));
  padding-bottom: var(--space-6);
  background: var(--navy);
  color: var(--paper);
  overflow-y: auto;
}

.menu__nav {
  display: grid;
}

.menu__link {
  display: flex;
  align-items: baseline;
  gap: var(--space-4);
  padding-block: var(--space-3);
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  line-height: 1.1;
  border-bottom: 1px solid var(--line-on-dark);
  transition: color var(--dur-fast), padding-left var(--dur-med) var(--ease-out);
}

.menu__link:hover {
  color: var(--gold-2);
  padding-left: var(--space-2);
}

.menu__index {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  letter-spacing: 0.14em;
  color: var(--gold-2);
}

.menu__foot {
  display: grid;
  gap: var(--space-4);
  padding-top: var(--space-6);
}

.menu__meta {
  font-size: var(--text-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-on-dark-muted);
  text-align: center;
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity var(--dur-med) var(--ease-out), clip-path 520ms var(--ease-out);
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  clip-path: inset(0 0 100% 0);
}

.menu-enter-active .menu__link {
  animation: menu-in 600ms var(--ease-out) both;
  animation-delay: calc(80ms + var(--i) * 50ms);
}

@keyframes menu-in {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
}

@media (min-width: 640px) {
  .header__cta {
    display: inline-flex;
  }
}

@media (min-width: 1080px) {
  .header__nav {
    display: flex;
  }

  .header__toggle,
  .menu {
    display: none !important;
  }
}
</style>
