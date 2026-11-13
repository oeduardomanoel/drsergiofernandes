<script setup lang="ts">
import { procedures as all, type Procedure } from '#shared/data/procedures'

const props = withDefaults(defineProps<{ items?: Procedure[] }>(), { items: undefined })
const list = computed(() => props.items ?? all)
const indexOf = (p: Procedure) => all.findIndex(x => x.slug === p.slug) + 1
</script>

<template>
  <ol class="plist" role="list">
    <li v-for="(p, i) in list" :key="p.slug" v-reveal="i * 80">
      <NuxtLink :to="`/procedimentos/${p.slug}`" class="plist__row">
        <span class="plist__num">0{{ indexOf(p) }}</span>
        <span class="plist__name">{{ p.name }}</span>
        <span class="plist__desc">{{ p.tagline }}</span>
        <span class="plist__arrow" aria-hidden="true"><AppIcon name="arrow-right" :size="18" /></span>
      </NuxtLink>
    </li>
  </ol>
</template>

<style scoped>
.plist {
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--line-strong);
}

.plist li {
  border-bottom: 1px solid var(--line-strong);
}

.plist__row {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas:
    'num name arrow'
    'num desc arrow';
  column-gap: var(--space-4);
  row-gap: var(--space-1);
  align-items: center;
  padding: var(--space-5) var(--space-2);
  isolation: isolate;
  transition: color var(--dur-med) var(--ease-out), padding var(--dur-med) var(--ease-out);
}

.plist__row::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: var(--navy);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 520ms var(--ease-out);
}

.plist__row:hover,
.plist__row:focus-visible {
  color: var(--paper);
  padding-inline: var(--space-5);
}

.plist__row:hover::before,
.plist__row:focus-visible::before {
  transform: scaleX(1);
}

.plist__num {
  grid-area: num;
  align-self: start;
  padding-top: var(--space-2);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.14em;
  color: var(--gold);
}

.plist__name {
  grid-area: name;
  font-family: var(--font-display);
  font-size: clamp(30px, 4vw, 48px);
  line-height: 1.1;
}

.plist__desc {
  grid-area: desc;
  font-size: var(--text-sm);
  color: var(--text-muted);
  transition: color var(--dur-med) var(--ease-out);
}

.plist__row:hover .plist__desc {
  color: var(--text-on-dark-muted);
}

.plist__arrow {
  grid-area: arrow;
  display: grid;
  place-items: center;
  width: var(--control-md);
  height: var(--control-md);
  border-radius: 50%;
  border: 1px solid var(--line-strong);
  transition:
    transform var(--dur-med) var(--ease-out),
    background-color var(--dur-med) var(--ease-out),
    color var(--dur-med) var(--ease-out),
    border-color var(--dur-med) var(--ease-out);
}

.plist__row:hover .plist__arrow {
  transform: rotate(-45deg);
  background: var(--gold-2);
  border-color: var(--gold-2);
  color: var(--ink);
}

@media (min-width: 900px) {
  .plist__row {
    grid-template-columns: 64px minmax(0, 1.1fr) minmax(0, 1fr) auto;
    grid-template-areas: 'num name desc arrow';
    column-gap: var(--space-6);
    padding-block: var(--space-6);
  }

  .plist__num {
    align-self: center;
    padding-top: 0;
  }
}
</style>
