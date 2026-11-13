<script setup lang="ts">
defineProps<{
  eyebrow?: string
  crumbs: { label: string, to?: string }[]
}>()
</script>

<template>
  <section class="phero">
    <div class="container">
      <nav aria-label="Você está em" class="phero__crumbs">
        <ol role="list">
          <li v-for="(c, i) in crumbs" :key="c.label">
            <NuxtLink v-if="c.to" :to="c.to">{{ c.label }}</NuxtLink>
            <span v-else aria-current="page">{{ c.label }}</span>
            <span v-if="i < crumbs.length - 1" class="phero__sep" aria-hidden="true">/</span>
          </li>
        </ol>
      </nav>
      <p v-if="eyebrow" v-reveal:fade class="eyebrow">{{ eyebrow }}</p>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.phero {
  padding-top: calc(var(--header-h) + var(--space-9));
  padding-bottom: var(--space-9);
  background:
    radial-gradient(900px 400px at 90% 0%, rgba(201, 167, 116, 0.18), transparent 60%),
    linear-gradient(180deg, var(--paper), var(--ivory));
}

.phero .container {
  display: grid;
  gap: var(--space-5);
}

.phero__crumbs ol {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  font-size: var(--text-xs);
  color: var(--text-muted);
}

.phero__crumbs li {
  display: inline-flex;
  gap: var(--space-2);
}

.phero__crumbs a {
  transition: color var(--dur-fast);
}

.phero__crumbs a:hover {
  color: var(--ink);
}

.phero__sep {
  opacity: 0.5;
}
</style>
