<script setup lang="ts">
import { site, whatsappUrl } from '#shared/data/site'
import { getProcedure } from '#shared/data/procedures'

const route = useRoute()
const visible = ref(false)

/** Nas páginas de procedimento, a mensagem já chega com o procedimento. */
const message = computed(() => {
  const p = route.params.slug ? getProcedure(String(route.params.slug)) : undefined
  return p ? `Olá! Vim pelo site e quero saber mais sobre ${p.name} com o Dr. Sergio Fernandes.` : undefined
})
const waHref = computed(() => whatsappUrl(message.value))

onMounted(() => {
  const onScroll = () => { visible.value = window.scrollY > window.innerHeight * 0.6 }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <!-- Desktop: botão redondo de WhatsApp -->
  <Transition name="float">
    <a v-show="visible" :href="waHref" target="_blank" rel="noopener" class="float" aria-label="Chamar no WhatsApp">
      <span class="float__icon"><AppIcon name="whatsapp" :size="22" /></span>
      <span class="float__label">Chamar no WhatsApp</span>
    </a>
  </Transition>

  <!-- Mobile: barra fixa com as duas ações -->
  <Transition name="bar">
    <nav v-show="visible" class="bar" aria-label="Contato rápido">
      <a :href="waHref" target="_blank" rel="noopener" class="bar__btn bar__btn--wa">
        <AppIcon name="whatsapp" :size="20" />
        WhatsApp
      </a>
      <a :href="site.links.booking" target="_blank" rel="noopener" class="bar__btn bar__btn--book">
        <AppIcon name="calendar" :size="20" />
        Agendar
      </a>
    </nav>
  </Transition>
</template>

<style scoped>
.float {
  position: fixed;
  right: var(--space-6);
  bottom: var(--space-6);
  z-index: 40;
  display: none;
  align-items: center;
  height: var(--control-lg);
  padding: var(--space-1);
  border-radius: var(--radius-pill);
  background: var(--ink);
  color: var(--paper);
  box-shadow: var(--shadow-lg);
  transition: transform var(--dur-med) var(--ease-out), padding var(--dur-med) var(--ease-out);
}

.float__icon {
  display: grid;
  place-items: center;
  width: var(--control-md);
  height: var(--control-md);
  border-radius: var(--radius-pill);
  background: var(--gold-2);
  color: var(--ink);
  transition: transform var(--dur-med) var(--ease-out);
}

.float__label {
  max-width: 0;
  overflow: hidden;
  white-space: nowrap;
  font-size: var(--text-sm);
  font-weight: 600;
  transition: max-width 420ms var(--ease-out), padding var(--dur-med) var(--ease-out);
}

.float:hover {
  transform: translateY(-2px);
  padding-right: var(--space-5);
}

.float:hover .float__label {
  max-width: 200px;
  padding-left: var(--space-3);
}

.float:hover .float__icon {
  transform: rotate(-12deg);
}

.bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 40;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4) calc(var(--space-2) + env(safe-area-inset-bottom));
  background: rgba(251, 248, 243, 0.92);
  backdrop-filter: saturate(1.4) blur(16px);
  -webkit-backdrop-filter: saturate(1.4) blur(16px);
  border-top: 1px solid var(--line);
}

.bar__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  height: var(--control-md);
  border-radius: var(--radius-pill);
  font-size: var(--text-sm);
  font-weight: 600;
  transition: transform var(--dur-fast) var(--ease-out), background-color var(--dur-fast);
}

.bar__btn:active {
  transform: scale(0.97);
}

.bar__btn--wa {
  background: var(--gold-2);
  color: var(--ink);
}

.bar__btn--book {
  background: var(--ink);
  color: var(--paper);
}

.float-enter-active,
.float-leave-active,
.bar-enter-active,
.bar-leave-active {
  transition: opacity var(--dur-med) var(--ease-out), transform var(--dur-med) var(--ease-out);
}

.float-enter-from,
.float-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.9);
}

.bar-enter-from,
.bar-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

@media (min-width: 768px) {
  .float {
    display: inline-flex;
  }

  .bar {
    display: none !important;
  }
}
</style>
