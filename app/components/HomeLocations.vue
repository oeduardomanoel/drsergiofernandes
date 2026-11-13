<script setup lang="ts">
import { site, mapsUrl } from '#shared/data/site'
</script>

<template>
  <section id="locais" class="section section--ivory locations" aria-labelledby="locais-title">
    <div class="container">
      <div class="section-head section-head--center">
        <p v-reveal:fade class="eyebrow">Onde atende</p>
        <h2 id="locais-title" v-reveal class="h2">
          Três cidades, <em>o mesmo cirurgião.</em>
        </h2>
        <p v-reveal="100" class="lead">
          Consultas e cirurgias em Balneário Camboriú, Florianópolis e Criciúma. Escolha a cidade mais perto de você na hora de agendar.
        </p>
      </div>

      <div class="locations__photos">
        <figure v-if="site.images.reception" v-reveal:mask class="locations__photo">
          <img :src="site.images.reception" alt="Recepção do consultório do Dr. Sergio Fernandes" width="708" height="945" loading="lazy">
          <figcaption>Recepção do consultório</figcaption>
        </figure>
        <figure v-if="site.images.hospital" v-reveal:mask="120" class="locations__photo">
          <img :src="site.images.hospital" alt="Fachada do HBM Hospital" width="708" height="945" loading="lazy">
          <figcaption>HBM Hospital</figcaption>
        </figure>
      </div>

      <ul class="locations__grid" role="list">
        <li v-for="(l, i) in site.locations" :key="l.slug" v-reveal="i * 100">
          <article class="loc">
            <div class="loc__head">
              <span class="loc__pin"><AppIcon name="map-pin" :size="20" /></span>
              <span class="loc__region">{{ l.region }}</span>
            </div>
            <h3 class="loc__city">{{ l.city }}</h3>
            <p class="loc__address">
              <template v-if="l.street">{{ l.street }}<template v-if="l.postalCode"> · CEP {{ l.postalCode }}</template></template>
              <template v-else>Endereço confirmado pela equipe no agendamento.</template>
            </p>
            <div class="loc__actions">
              <a :href="site.links.booking" target="_blank" rel="noopener" class="btn btn--block">
                Agendar em {{ l.shortName }}
                <AppIcon name="arrow-right" />
              </a>
              <a :href="mapsUrl(l.mapsQuery)" target="_blank" rel="noopener" class="link-underline loc__map">
                Ver no Google Maps
                <AppIcon name="arrow-up-right" />
              </a>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.locations__photos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-grid);
  margin-bottom: var(--spacing-grid);
}

.locations__photo {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-xl);
  aspect-ratio: 4 / 3;
  background: var(--sand);
}

.locations__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1200ms var(--ease-out);
}

.locations__photo:first-child img {
  object-position: center 18%;
}

.locations__photo:hover img {
  transform: scale(1.05);
}

.locations__photo figcaption {
  position: absolute;
  left: var(--space-4);
  bottom: var(--space-4);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-pill);
  background: rgba(251, 248, 243, 0.86);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--ink);
}

.locations__grid {
  display: grid;
  gap: var(--spacing-grid);
}

.locations__grid > li {
  display: grid;
}

.loc {
  position: relative;
  display: grid;
  gap: var(--spacing-stack);
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
  min-height: 3.2em;
}

.loc__actions {
  display: grid;
  gap: var(--space-4);
  justify-items: center;
  margin-top: var(--spacing-group);
}

.loc__map {
  color: var(--text-muted);
}

.loc__map:hover {
  color: var(--ink);
}

@media (min-width: 900px) {
  .locations__photo {
    aspect-ratio: 16 / 9;
  }

  .locations__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
