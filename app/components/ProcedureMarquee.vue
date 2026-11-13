<script setup lang="ts">
const words = ['Abdominoplastia', 'Prótese de silicone', 'Lipo HD', 'Rinoplastia', 'Mastopexia', 'Redução de mama', 'Contorno corporal']
</script>

<template>
  <div class="marquee" aria-hidden="true">
    <div class="marquee__track">
      <template v-for="n in 2" :key="n">
        <span v-for="w in words" :key="`${n}-${w}`" class="marquee__item">
          {{ w }}<i class="marquee__diamond" />
        </span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  overflow: hidden;
  padding-block: var(--space-5);
  background: var(--ivory);
  border-block: 1px solid var(--line);
  mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
}

.marquee__track {
  display: flex;
  width: max-content;
  animation: marquee 48s linear infinite;
}

.marquee:hover .marquee__track {
  animation-play-state: paused;
}

.marquee__item {
  display: inline-flex;
  align-items: center;
  gap: var(--space-6);
  padding-right: var(--space-6);
  font-family: var(--font-display);
  font-size: clamp(24px, 3.4vw, 40px);
  font-style: italic;
  color: var(--ink);
  white-space: nowrap;
  transition: color var(--dur-fast);
}

.marquee__item:hover {
  color: var(--gold);
}

.marquee__diamond {
  width: 10px;
  height: 10px;
  background: var(--diamond);
  transform: rotate(45deg);
  border-radius: 1px;
}

@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}
</style>
