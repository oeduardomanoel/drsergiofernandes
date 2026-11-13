<script setup lang="ts">
import type { NuxtError } from '#app'
import { site } from '#shared/data/site'

const props = defineProps<{ error: NuxtError }>()
const is404 = computed(() => props.error?.statusCode === 404)

useSeoMeta({
  title: is404.value ? 'Página não encontrada' : 'Algo deu errado',
  robots: 'noindex, follow',
})
</script>

<template>
  <NuxtLayout>
    <section class="err">
      <div class="container container--narrow err__inner">
        <p class="eyebrow">Erro {{ error?.statusCode }}</p>
        <h1 class="display">
          {{ is404 ? 'Essa página' : 'Algo' }} <em>{{ is404 ? 'não existe.' : 'deu errado.' }}</em>
        </h1>
        <p class="lead">
          {{ is404 ? 'O link pode ter mudado. Volte para o início ou agende sua avaliação direto.' : 'Tente novamente em alguns instantes.' }}
        </p>
        <div class="err__actions">
          <NuxtLink to="/" class="btn btn--lg" @click="clearError({ redirect: '/' })">Voltar ao início</NuxtLink>
          <a :href="site.links.booking" target="_blank" rel="noopener" class="btn btn--ghost btn--lg">Agendar avaliação</a>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped>
.err {
  min-height: 80svh;
  display: grid;
  align-items: center;
  padding-top: calc(var(--header-h) + var(--space-9));
  padding-bottom: var(--space-10);
  background: linear-gradient(180deg, var(--paper), var(--ivory));
}

.err__inner {
  display: grid;
  gap: var(--space-5);
}

.err__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}
</style>
