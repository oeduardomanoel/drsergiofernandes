<script setup lang="ts">
import { procedures } from '#shared/data/procedures'
</script>

<template>
  <section id="procedimentos" class="section procedures" aria-labelledby="proc-title">
    <div class="container">
      <div class="procedures__head">
        <div class="section-head">
          <p v-reveal:fade class="eyebrow">Procedimentos</p>
          <h2 id="proc-title" v-reveal class="h2">
            O que mais se faz por aqui, <em>e por que cada caso é único.</em>
          </h2>
        </div>
        <NuxtLink v-reveal:fade="200" to="/procedimentos" class="link-underline procedures__all">
          Ver todos os procedimentos
          <AppIcon name="arrow-up-right" />
        </NuxtLink>
      </div>

      <div class="procedures__grid">
        <div v-for="(p, i) in procedures" :key="p.slug" v-reveal="i * 100">
          <ProcedureCard :procedure="p" :index="i" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.procedures__head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-5);
  margin-bottom: var(--spacing-section-head);
}

.procedures__head .section-head {
  margin-bottom: 0;
}

.procedures__all {
  margin-bottom: var(--space-2);
}

.procedures__grid {
  display: grid;
  gap: var(--spacing-grid);
}

.procedures__grid > div > * {
  height: 100%;
}

@media (min-width: 720px) {
  .procedures__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1180px) {
  .procedures__grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .procedures__grid > div:nth-child(even) {
    margin-top: var(--space-9);
  }
}
</style>
