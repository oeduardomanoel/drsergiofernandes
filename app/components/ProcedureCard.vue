<script setup lang="ts">
import type { Procedure } from '#shared/data/procedures'

defineProps<{ procedure: Procedure, index: number }>()

function onMove(e: PointerEvent) {
  const el = e.currentTarget as HTMLElement | null
  if (!el) return
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}
</script>

<template>
  <NuxtLink
    :to="`/procedimentos/${procedure.slug}`"
    class="pcard"
    :class="`pcard--${procedure.tone}`"
    @pointermove="onMove"
  >
    <span class="pcard__glow" aria-hidden="true" />
    <div class="pcard__top">
      <span class="pcard__num">0{{ index + 1 }}</span>
      <span class="pcard__arrow" aria-hidden="true"><AppIcon name="arrow-up-right" :size="18" /></span>
    </div>
    <div class="pcard__art">
      <ProcedureArt :slug="procedure.slug" />
    </div>
    <div class="pcard__body">
      <h3 class="pcard__title">{{ procedure.name }}</h3>
      <p class="pcard__text">{{ procedure.tagline }}</p>
      <ul class="pcard__tags" role="list">
        <li v-for="tag in procedure.alternateNames.slice(0, 3)" :key="tag">{{ tag }}</li>
      </ul>
    </div>
  </NuxtLink>
</template>

<style scoped>
.pcard {
  --card-bg: var(--ivory);
  --card-fg: var(--ink);
  --card-muted: var(--text-muted);
  --card-line: var(--line);
  --card-art: var(--gold);
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: var(--space-5);
  min-height: 480px;
  padding: var(--spacing-card-lg);
  border-radius: var(--radius-xl);
  background: var(--card-bg);
  color: var(--card-fg);
  overflow: hidden;
  isolation: isolate;
  transition:
    transform var(--dur-med) var(--ease-out),
    box-shadow var(--dur-med) var(--ease-out);
}

.pcard--sand { --card-bg: var(--sand); }
.pcard--rose { --card-bg: #f1dcd6; }
.pcard--gold { --card-bg: var(--gold-3); }

.pcard--navy {
  --card-bg: var(--navy);
  --card-fg: var(--paper);
  --card-muted: var(--text-on-dark-muted);
  --card-line: var(--line-on-dark);
  --card-art: var(--gold-2);
}

.pcard:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.pcard__glow {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, 0.5), transparent 60%);
  opacity: 0;
  transition: opacity var(--dur-med) var(--ease-out);
}

.pcard--navy .pcard__glow {
  background: radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), rgba(201, 167, 116, 0.22), transparent 60%);
}

.pcard:hover .pcard__glow {
  opacity: 1;
}

.pcard__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pcard__num {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.16em;
  color: var(--card-muted);
}

.pcard__arrow {
  display: grid;
  place-items: center;
  width: var(--control-sm);
  height: var(--control-sm);
  border-radius: 50%;
  border: 1px solid var(--card-line);
  transition:
    transform var(--dur-med) var(--ease-out),
    background-color var(--dur-med) var(--ease-out),
    color var(--dur-med) var(--ease-out);
}

.pcard:hover .pcard__arrow {
  transform: rotate(45deg);
  background: var(--card-fg);
  color: var(--card-bg);
}

.pcard__art {
  width: 160px;
  height: 160px;
  justify-self: center;
  align-self: center;
  color: var(--card-art);
  transition: transform 900ms var(--ease-out);
}

.pcard:hover .pcard__art {
  transform: scale(1.08) rotate(-3deg);
}

.pcard__body {
  display: grid;
  gap: var(--spacing-stack);
}

.pcard__title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: var(--text-4xl);
  line-height: 1.05;
}

.pcard__text {
  font-size: var(--text-sm);
  color: var(--card-muted);
  line-height: 1.6;
}

.pcard__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-3);
  padding: 0;
  list-style: none;
}

.pcard__tags li {
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-pill);
  border: 1px solid var(--card-line);
  font-size: var(--text-xs);
  color: var(--card-muted);
}
</style>
