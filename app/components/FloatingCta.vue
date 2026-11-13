<script setup lang="ts">
import { whatsappUrl, site } from '#shared/data/site'

const visible = ref(false)
const href = whatsappUrl()
const label = site.links.whatsappNumber ? 'Falar no WhatsApp' : 'Agendar avaliação'

onMounted(() => {
  const onScroll = () => { visible.value = window.scrollY > window.innerHeight * 0.8 }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <Transition name="float">
    <a v-show="visible" :href="href" target="_blank" rel="noopener" class="float" :aria-label="label">
      <span class="float__icon">
        <AppIcon :name="site.links.whatsappNumber ? 'whatsapp' : 'calendar'" :size="22" />
      </span>
      <span class="float__label">{{ label }}</span>
    </a>
  </Transition>
</template>

<style scoped>
.float {
  position: fixed;
  right: var(--space-4);
  bottom: calc(var(--space-4) + env(safe-area-inset-bottom));
  z-index: 40;
  display: inline-flex;
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

.float:hover .float__label {
  padding-left: var(--space-3);
}

.float:hover {
  transform: translateY(-2px);
  padding-right: var(--space-5);
}

@media (hover: none) {
  .float__label {
    display: none;
  }
}

.float:hover .float__label {
  max-width: 200px;
}

.float:hover .float__icon {
  transform: rotate(-12deg);
}

.float-enter-active,
.float-leave-active {
  transition: opacity var(--dur-med) var(--ease-out), transform var(--dur-med) var(--ease-out);
}

.float-enter-from,
.float-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.9);
}

@media (min-width: 768px) {
  .float {
    right: var(--space-6);
    bottom: var(--space-6);
  }
}
</style>
