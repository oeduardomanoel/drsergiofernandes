<script setup lang="ts">
withDefaults(defineProps<{
  src?: string
  alt: string
  shape?: 'arch' | 'rounded'
  eager?: boolean
  width?: number
  height?: number
}>(), { src: '', shape: 'arch', eager: false, width: 1200, height: 1517 })
</script>

<template>
  <figure class="frame" :class="`frame--${shape}`">
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : 'auto'"
      decoding="async"
      class="frame__img"
    >
    <div v-else class="frame__placeholder" role="img" :aria-label="alt">
      <svg viewBox="0 0 400 500" class="frame__art" aria-hidden="true">
        <defs>
          <linearGradient id="pf-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#22457c" />
            <stop offset="1" stop-color="#0b1626" />
          </linearGradient>
          <radialGradient id="pf-glow" cx=".72" cy=".22" r=".7">
            <stop offset="0" stop-color="#e7d3ae" stop-opacity=".55" />
            <stop offset="1" stop-color="#e7d3ae" stop-opacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="500" fill="url(#pf-g)" />
        <rect width="400" height="500" fill="url(#pf-glow)" />
        <g fill="none" stroke="#c9a774" stroke-opacity=".28">
          <circle cx="200" cy="250" r="120" />
          <circle cx="200" cy="250" r="168" />
          <circle cx="200" cy="250" r="216" />
        </g>
        <text x="200" y="292" text-anchor="middle" font-family="Instrument Serif, serif" font-size="150" fill="#f5efe5">
          S<tspan font-style="italic" fill="#c9a774">F</tspan>
        </text>
        <text x="200" y="356" text-anchor="middle" font-family="Manrope, sans-serif" font-size="11" letter-spacing="4" fill="#f5efe5" fill-opacity=".6">
          CIRURGIÃO PLÁSTICO
        </text>
      </svg>
    </div>
    <slot />
  </figure>
</template>

<style scoped>
.frame {
  position: relative;
  overflow: hidden;
  background: var(--navy);
  aspect-ratio: 4 / 5;
  isolation: isolate;
}

.frame--arch {
  border-radius: 999px 999px var(--radius-xl) var(--radius-xl);
}

.frame--rounded {
  border-radius: var(--radius-xl);
}

.frame__img,
.frame__placeholder,
.frame__art {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.frame__img {
  transition: transform 1200ms var(--ease-out);
}

.frame:hover .frame__img {
  transform: scale(1.04);
}
</style>
