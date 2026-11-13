<script setup lang="ts">
const props = defineProps<{ value: number, prefix?: string, suffix?: string, label: string, format?: boolean }>()
const { el, value } = useCountUp(props.value)
const display = computed(() => props.format ? value.value.toLocaleString('pt-BR') : String(value.value))
</script>

<template>
  <div ref="el" class="stat">
    <p class="stat__value">
      <span v-if="prefix" class="stat__affix">{{ prefix }}</span>{{ display }}<span v-if="suffix" class="stat__affix">{{ suffix }}</span>
    </p>
    <p class="stat__label">{{ label }}</p>
  </div>
</template>

<style scoped>
.stat {
  display: grid;
  gap: var(--space-2);
  padding-block: var(--space-5);
  border-top: 1px solid var(--line-on-dark);
  transition: border-color var(--dur-med) var(--ease-out);
}

.stat:hover {
  border-color: var(--gold-2);
}

.stat__value {
  font-family: var(--font-display);
  font-size: clamp(48px, 6vw, 80px);
  line-height: 1;
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
}

.stat__affix {
  color: var(--gold-2);
  font-style: italic;
}

.stat__label {
  font-size: var(--text-sm);
  color: var(--text-on-dark-muted);
  max-width: 24ch;
}
</style>
