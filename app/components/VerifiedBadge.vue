<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 18 })
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" role="img" aria-label="Perfil verificado">
    <path
      fill="#3b8bf5"
      d="M12 1.8l2.4 1.7 2.9-.2 1 2.7 2.5 1.5-.6 2.9 1.2 2.6-1.9 2.2.1 2.9-2.8.8-1.6 2.4-2.8-.8-2.4 1.6-2.4-1.6-2.8.8-1.6-2.4-2.8-.8.1-2.9-1.9-2.2 1.2-2.6-.6-2.9 2.5-1.5 1-2.7 2.9.2z"
    />
    <path d="m8 12.2 2.7 2.6L16.2 9" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>
