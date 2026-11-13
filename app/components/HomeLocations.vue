<script setup lang="ts">
import { site, mapsUrl } from '#shared/data/site'

const main = site.locations.find(l => l.street) || site.locations[0]!
const others = site.locations.filter(l => l.slug !== main.slug)
const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(main.mapsQuery)}&output=embed&hl=pt-BR`
</script>

<template>
  <section id="locais" class="section section--ivory locations" aria-labelledby="locais-title">
    <div class="container">
      <div class="locations__head">
        <h2 id="locais-title" v-reveal class="h2">Consultório em {{ main.city }}</h2>
        <p v-if="others.length" v-reveal="100" class="lead">
          Também atende em {{ others.map(o => o.city).join(' e ') }}. Escolha a cidade na hora de agendar.
        </p>
      </div>

      <div class="locations__main">
        <article v-reveal class="loc">
          <div class="loc__head">
            <span class="loc__pin"><AppIcon name="map-pin" :size="20" /></span>
            <span class="loc__region">{{ main.region }}</span>
          </div>
          <h3 class="loc__city">{{ main.city }}</h3>
          <address class="loc__address">
            <template v-if="main.street">
              {{ main.street }}<template v-if="main.district">, {{ main.district }}</template><br>
              {{ main.city }} · {{ site.stateCode }}<template v-if="main.postalCode"> · CEP {{ main.postalCode }}</template>
            </template>
            <template v-else>Endereço confirmado pela equipe no agendamento.</template>
          </address>
          <ul v-if="main.phone || main.hoursLabel" class="loc__info" role="list">
            <li v-if="main.phone">
              <AppIcon name="phone" :size="16" />
              <a :href="`tel:${main.phone}`" class="loc__phone">{{ main.phoneDisplay || main.phone }}</a>
            </li>
            <li v-if="main.hoursLabel">
              <AppIcon name="clock" :size="16" />
              <span>{{ main.hoursLabel }}</span>
            </li>
          </ul>
          <div class="loc__actions">
            <a :href="site.links.booking" target="_blank" rel="noopener" class="btn btn--block">
              Agendar avaliação
              <AppIcon name="arrow-right" />
            </a>
            <a :href="mapsUrl(main.mapsQuery)" target="_blank" rel="noopener" class="link-underline loc__map">
              Como chegar pelo Google Maps
              <AppIcon name="arrow-up-right" />
            </a>
          </div>
        </article>

        <div v-reveal:scale="120" class="locations__map">
          <iframe
            :src="embedUrl"
            :title="`Mapa do consultório em ${main.city}`"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.locations__head {
  display: grid;
  gap: var(--space-4);
  margin-bottom: var(--spacing-section-head);
}

@media (min-width: 900px) {
  .locations__head {
    grid-template-columns: 1fr 1fr;
    align-items: end;
    gap: var(--space-8);
  }

  .locations__head .lead {
    justify-self: end;
    max-width: 44ch;
  }
}

.locations__main {
  display: grid;
  gap: var(--spacing-grid);
}

.locations__map {
  min-height: 320px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--sand);
  border: 1px solid var(--line);
}

.locations__map iframe {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 320px;
  border: 0;
  filter: saturate(0.85);
  transition: filter var(--dur-med) var(--ease-out);
}

.locations__map:hover iframe {
  filter: none;
}

.loc {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-stack);
  height: 100%;
  padding: var(--spacing-card-lg);
  border-radius: var(--radius-xl);
  background: var(--paper);
  border: 1px solid var(--line);
  overflow: hidden;
  transition:
    transform var(--dur-med) var(--ease-out),
    box-shadow var(--dur-med) var(--ease-out),
    border-color var(--dur-med) var(--ease-out);
}

.loc::before {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: 3px;
  background: linear-gradient(90deg, var(--gold-2), var(--diamond));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 600ms var(--ease-out);
}

.loc:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}

.loc:hover::before {
  transform: scaleX(1);
}

.loc__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-4);
}

.loc__pin {
  display: grid;
  place-items: center;
  width: var(--control-md);
  height: var(--control-md);
  border-radius: 50%;
  background: var(--ivory);
  color: var(--gold);
  transition: background-color var(--dur-med), color var(--dur-med);
}

.loc:hover .loc__pin {
  background: var(--navy);
  color: var(--gold-2);
}

.loc:hover .loc__pin svg {
  animation: pin-bounce 700ms var(--ease-out);
}

@keyframes pin-bounce {
  30% { transform: translateY(-6px); }
  60% { transform: translateY(0); }
  80% { transform: translateY(-2px); }
}

.loc__region {
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.loc__city {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: var(--text-4xl);
  line-height: 1.1;
}

.loc__address {
  color: var(--text-muted);
  font-size: var(--text-sm);
  font-style: normal;
  line-height: 1.6;
  min-height: 3.2em;
}

.loc__info {
  display: grid;
  gap: var(--space-2);
  margin-top: var(--space-2);
  padding-top: var(--space-3);
  border-top: 1px solid var(--line);
  font-size: var(--text-sm);
  color: var(--text-muted);
}

.loc__info li {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.loc__info svg {
  flex-shrink: 0;
  color: var(--gold);
}

.loc__phone {
  font-weight: 600;
  color: var(--ink);
  transition: color var(--dur-fast);
}

.loc__phone:hover {
  color: var(--navy-3);
}

.loc__actions {
  display: grid;
  gap: var(--space-4);
  justify-items: center;
  margin-top: auto;
  padding-top: var(--spacing-group);
}

.loc__map {
  color: var(--text-muted);
}

.loc__map:hover {
  color: var(--ink);
}

@media (min-width: 900px) {
  .locations__main {
    grid-template-columns: 5fr 7fr;
  }
}
</style>
