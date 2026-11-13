<script setup lang="ts">
const props = withDefaults(defineProps<{ name: string, size?: number }>(), { size: 20 })

const paths: Record<string, string> = {
  'arrow-right': '<path d="M5 12h14M13 6l6 6-6 6"/>',
  'arrow-up-right': '<path d="M7 17 17 7M8 7h9v9"/>',
  'arrow-down': '<path d="M12 5v14M6 13l6 6 6-6"/>',
  'calendar': '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  'map-pin': '<path d="M12 21s-7-6.1-7-11.5a7 7 0 1 1 14 0C19 14.9 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
  'instagram': '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/>',
  'threads': '<path d="M16.5 11.2c-.3-2.6-2-4-4.6-4-2 0-3.5.9-4.2 2.4M8.8 15.4c.7 1 1.8 1.6 3.3 1.6 2.4 0 3.9-1.4 3.9-3.3 0-1.6-1.3-2.7-3.6-2.7-2 0-3.2.9-3.2 2.1 0 1.1 1 1.8 2.3 1.8 2.2 0 3.3-1.6 3.3-4.3"/><path d="M19.5 12c0 5-3 8.5-7.5 8.5S4.5 17 4.5 12 7.5 3.5 12 3.5c3.4 0 5.9 1.8 7 4.9"/>',
  'whatsapp': '<path d="M4 20l1.2-4.1A8.5 8.5 0 1 1 8.4 19L4 20Z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8c-1.1-.5-2-1.4-2.5-2.5l.8-1-1-2L9 8.5Z"/>',
  'check': '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  'plus': '<path d="M12 5v14M5 12h14"/>',
  'menu': '<path d="M4 8h16M4 16h16"/>',
  'close': '<path d="M6 6l12 12M18 6 6 18"/>',
  'shield': '<path d="M12 3 5 6v5.5c0 4.3 3 8 7 9.5 4-1.5 7-5.2 7-9.5V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
  'chat': '<path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12Z"/>',
  'clipboard': '<rect x="5" y="4.5" width="14" height="16.5" rx="2.5"/><path d="M9 4.5V3.5h6v1M9 11h6M9 15h4"/>',
  'heart': '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 2.8C19.5 15.4 12 20 12 20Z"/>',
  'scalpel': '<path d="M14 4.5 20 10.5 9.5 21 3 21l0-6.5L14 4.5Z"/><path d="m11 7.5 5.5 5.5"/>',
  'play': '<path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor"/>',
  'grid': '<rect x="4" y="4" width="6.5" height="6.5" rx="1"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1"/>',
  'reels': '<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M3.5 8.5h17M8 3.5l3 5M13 3.5l3 5"/><path d="M10.5 12v5l4.5-2.5-4.5-2.5Z" fill="currentColor"/>',
  'phone': '<path d="M5 4.5h3.5l1.5 4-2 1.5a10 10 0 0 0 6 6l1.5-2 4 1.5V19a1.5 1.5 0 0 1-1.6 1.5C10.6 20 4 13.4 3.5 5.6A1.5 1.5 0 0 1 5 4.5Z"/>',
  'clock': '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  'link': '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
}
</script>

<template>
  <svg
    :width="props.size"
    :height="props.size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
    v-html="paths[props.name] || ''"
  />
</template>
