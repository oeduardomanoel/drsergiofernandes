<script setup lang="ts">
withDefaults(defineProps<{ light?: boolean, compact?: boolean }>(), { light: false, compact: false })
</script>

<template>
  <span class="brand" :class="{ 'brand--light': light }">
    <svg class="brand__mark" viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="none" stroke="currentColor" stroke-opacity=".28" />
      <text x="24" y="31" text-anchor="middle" font-family="Instrument Serif, serif" font-size="22" fill="currentColor">
        S<tspan font-style="italic" fill="var(--brand-accent)">F</tspan>
      </text>
    </svg>
    <span v-if="!compact" class="brand__text">
      <span class="brand__name">Sergio Fernandes</span>
      <span class="brand__role">Cirurgião Plástico</span>
    </span>
  </span>
</template>

<style scoped>
.brand {
  --brand-accent: var(--gold);
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--ink);
}

.brand--light {
  --brand-accent: var(--gold-2);
  color: var(--paper);
}

.brand__mark {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  transition: transform var(--dur-med) var(--ease-out);
}

.brand:hover .brand__mark {
  transform: rotate(-8deg);
}

.brand__text {
  display: grid;
  line-height: 1.1;
}

.brand__name {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  letter-spacing: -0.01em;
}

.brand__role {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.6;
}
</style>
