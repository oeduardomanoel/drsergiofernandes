<script setup lang="ts">
import { site, whatsappUrl } from '#shared/data/site'

const props = defineProps<{ procedure?: string }>()
const main = site.locations.find(l => l.street)
const message = props.procedure
  ? `Olá! Vim pelo site e quero agendar uma avaliação de ${props.procedure} com o Dr. Sergio Fernandes.`
  : undefined
</script>

<template>
  <section class="section section--dark cta" aria-labelledby="cta-title">
    <div class="container cta__inner">
      <div class="cta__copy">
        <h2 id="cta-title" v-reveal class="display cta__title">
          Agende sua avaliação<template v-if="procedure"> de {{ procedure.toLowerCase() === 'lipo hd' ? 'Lipo HD' : procedure.toLowerCase() }}</template>.
        </h2>
        <p v-reveal="100" class="lead">
          Na consulta você tira suas dúvidas, entende as opções para o seu caso e sai sabendo os próximos passos.
          Não há compromisso de marcar cirurgia.
        </p>
      </div>

      <div v-reveal="200" class="cta__panel">
        <a :href="whatsappUrl(message)" target="_blank" rel="noopener" class="btn btn--gold btn--lg btn--block">
          <AppIcon name="whatsapp" />
          Chamar no WhatsApp
        </a>
        <a :href="site.links.booking" target="_blank" rel="noopener" class="btn btn--ghost btn--lg btn--block">
          Agendar pelo link
          <AppIcon name="arrow-right" />
        </a>
        <dl v-if="main" class="cta__info">
          <div>
            <dt>Telefone</dt>
            <dd><a :href="`tel:${main.phone}`">{{ main.phoneDisplay }}</a></dd>
          </div>
          <div>
            <dt>Horário</dt>
            <dd>{{ main.hoursLabel }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  background: var(--navy);
}

.cta__inner {
  display: grid;
  gap: var(--space-8);
  align-items: end;
}

.cta__copy {
  display: grid;
  gap: var(--space-5);
}

.cta__title {
  max-width: 14ch;
}

.cta__panel {
  display: grid;
  gap: var(--space-3);
  padding: var(--spacing-card-lg);
  border-radius: var(--radius-xl);
  border: 1px solid var(--line-on-dark);
  background: rgba(245, 239, 229, 0.04);
}

.cta__info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  margin: var(--space-3) 0 0;
  padding-top: var(--space-4);
  border-top: 1px solid var(--line-on-dark);
}

.cta__info dt {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold-2);
}

.cta__info dd {
  margin: var(--space-1) 0 0;
  font-size: var(--text-sm);
  color: var(--text-on-dark-muted);
}

.cta__info a {
  color: var(--paper);
  font-weight: 600;
  transition: color var(--dur-fast);
}

.cta__info a:hover {
  color: var(--gold-2);
}

@media (min-width: 960px) {
  .cta__inner {
    grid-template-columns: 1.3fr 0.7fr;
    gap: var(--space-10);
  }
}
</style>
