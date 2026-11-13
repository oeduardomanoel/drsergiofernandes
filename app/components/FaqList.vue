<script setup lang="ts">
import type { Faq } from '#shared/data/procedures'

defineProps<{ items: Faq[] }>()
</script>

<template>
  <div class="faq">
    <details v-for="(f, i) in items" :key="f.q" v-reveal="i * 60" class="faq__item" :open="i === 0">
      <summary class="faq__q">
        <h3>{{ f.q }}</h3>
        <span class="faq__icon" aria-hidden="true"><AppIcon name="plus" :size="18" /></span>
      </summary>
      <div class="faq__a">
        <p>{{ f.a }}</p>
      </div>
    </details>
  </div>
</template>

<style scoped>
.faq {
  display: grid;
  border-top: 1px solid var(--line);
}

.faq__item {
  border-bottom: 1px solid var(--line);
}

.faq__q {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-5);
  min-height: var(--control-lg);
  padding-block: var(--space-5);
  cursor: pointer;
  list-style: none;
  transition: color var(--dur-fast);
}

.faq__q::-webkit-details-marker {
  display: none;
}

.faq__q h3 {
  font-size: var(--text-lg);
  font-weight: 600;
  line-height: 1.4;
}

.faq__q:hover {
  color: var(--navy-3);
}

.faq__icon {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: var(--control-sm);
  height: var(--control-sm);
  border-radius: 50%;
  border: 1px solid var(--line-strong);
  transition:
    transform var(--dur-med) var(--ease-out),
    background-color var(--dur-med),
    color var(--dur-med),
    border-color var(--dur-med);
}

.faq__q:hover .faq__icon {
  border-color: var(--ink);
}

.faq__item[open] .faq__icon {
  transform: rotate(45deg);
  background: var(--ink);
  border-color: var(--ink);
  color: var(--paper);
}

.faq__a {
  padding-bottom: var(--space-5);
  padding-right: var(--space-9);
  color: var(--text-muted);
  line-height: 1.7;
}

.faq__item[open] .faq__a {
  animation: faq-in 420ms var(--ease-out);
}

@keyframes faq-in {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
}
</style>
