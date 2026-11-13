<script setup lang="ts">
/** Ilustrações em traço fino para cada procedimento (sem fotos de pacientes). */
defineProps<{ slug: string }>()
</script>

<template>
  <svg class="art" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" aria-hidden="true">
    <template v-if="slug === 'abdominoplastia'">
      <path d="M62 28c-4 30 2 52 6 70 4 20-2 42-10 74" />
      <path d="M138 28c4 30-2 52-6 70-4 20 2 42 10 74" />
      <path d="M78 66c14 6 30 6 44 0" opacity=".5" />
      <circle cx="100" cy="112" r="3" />
      <path d="M70 150c18 10 42 10 60 0" stroke-dasharray="3 5" />
      <path d="M100 40v56" opacity=".3" />
    </template>
    <template v-else-if="slug === 'cirurgia-de-mama'">
      <path d="M40 40c10 18 14 34 12 50" />
      <path d="M160 40c-10 18-14 34-12 50" />
      <path d="M52 92c4 28 40 34 46 4" />
      <path d="M148 92c-4 28-40 34-46 4" />
      <circle cx="74" cy="112" r="3" />
      <circle cx="126" cy="112" r="3" />
      <path d="M60 160c26 8 54 8 80 0" opacity=".4" stroke-dasharray="3 5" />
    </template>
    <template v-else-if="slug === 'lipo-hd'">
      <path d="M64 24c-6 40 4 60 0 90-3 24-10 40-10 64" />
      <path d="M136 24c6 40-4 60 0 90 3 24 10 40 10 64" />
      <path d="M100 52v90" opacity=".5" />
      <path d="M84 70h32M82 94h36M84 118h32" opacity=".5" />
      <path d="M80 60c-6 30-6 60 2 92" stroke-dasharray="3 5" />
      <path d="M120 60c6 30 6 60-2 92" stroke-dasharray="3 5" />
    </template>
    <template v-else>
      <path d="M70 40c-8 40-8 80 4 120 10 24 42 24 52 0 12-40 12-80 4-120" opacity=".4" />
      <path d="M102 54c-4 24-4 50-8 70-2 10 2 16 10 16 8 0 12-4 12-10" />
      <path d="M88 136c4 4 10 6 16 4" />
      <path d="M86 84c6-2 10-2 14 0" stroke-dasharray="3 5" />
    </template>
  </svg>
</template>

<style scoped>
.art {
  width: 100%;
  height: 100%;
}
</style>
