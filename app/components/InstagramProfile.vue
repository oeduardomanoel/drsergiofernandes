<script setup lang="ts">
import { site } from '#shared/data/site'

/** Réplica do perfil do Instagram, para o "ambiente Instagram" do site. */
const tones: Record<string, string> = {
  navy: 'linear-gradient(160deg, #22457c, #0b1626)',
  sand: 'linear-gradient(160deg, #e9dfcf, #9c835c)',
  ivory: 'linear-gradient(160deg, #d9cab2, #6f5d43)',
  rose: 'linear-gradient(160deg, #f6dfe4, #e58fa8)',
  gold: 'linear-gradient(160deg, #f1e2c4, #a8834c)',
}
const tab = ref<'grid' | 'reels'>('grid')
const NuxtLink = resolveComponent('NuxtLink')
</script>

<template>
  <div class="ig" role="group" aria-label="Prévia do perfil @drsergio.fernandes no Instagram">
    <div class="ig__bar">
      <span class="ig__bar-handle">drsergio.fernandes <VerifiedBadge :size="14" /></span>
      <AppIcon name="menu" :size="18" />
    </div>

    <div class="ig__header">
      <a :href="site.links.instagram" target="_blank" rel="noopener" class="ig__avatar" aria-label="Abrir perfil no Instagram">
        <span class="ig__avatar-inner">
          <img v-if="site.images.portrait" :src="site.images.portrait" alt="" width="80" height="80" loading="lazy">
          <BrandMark v-else compact />
        </span>
      </a>
      <dl class="ig__stats">
        <div><dt>posts</dt><dd>608</dd></div>
        <div><dt>seguidores</dt><dd>52,8 mil</dd></div>
        <div><dt>seguindo</dt><dd>6.490</dd></div>
      </dl>
    </div>

    <div class="ig__bio">
      <p class="ig__name">Dr. Sergio Fernandes | Cirurgião Plástico</p>
      <p><i class="ig__dia" />+14 mil cirurgias realizadas</p>
      <p><i class="ig__dia" />+30 anos de experiência</p>
      <p>📍 BC / Florianópolis / Criciúma SC</p>
      <p>{{ site.crm.replace('CRM ', 'CRM: ') }} | {{ site.rqe.replace('RQE ', 'RQE: ') }}</p>
      <a :href="site.links.booking" target="_blank" rel="noopener" class="ig__link">
        <AppIcon name="link" :size="14" /> bit.ly/sergioagendamentos
      </a>
    </div>

    <div class="ig__actions">
      <a :href="site.links.instagram" target="_blank" rel="noopener" class="ig__btn ig__btn--primary">Seguir</a>
      <a :href="site.links.booking" target="_blank" rel="noopener" class="ig__btn">Agendar</a>
    </div>

    <ul class="ig__highlights" role="list">
      <li v-for="h in site.highlights" :key="h.label">
        <component
          :is="h.procedure ? NuxtLink : 'a'"
          :to="h.procedure ? `/procedimentos/${h.procedure}` : undefined"
          :href="h.procedure ? undefined : site.links.instagram"
          :target="h.procedure ? undefined : '_blank'"
          :rel="h.procedure ? undefined : 'noopener'"
          class="ig__hl"
        >
          <span class="ig__hl-ring"><span class="ig__hl-inner">{{ h.label.slice(0, 1) }}</span></span>
          <span class="ig__hl-label">{{ h.label }}</span>
        </component>
      </li>
    </ul>

    <div class="ig__tabs" role="tablist" aria-label="Conteúdo do perfil">
      <button role="tab" :aria-selected="tab === 'grid'" class="ig__tab" :class="{ 'is-active': tab === 'grid' }" @click="tab = 'grid'">
        <AppIcon name="grid" :size="18" /><span class="sr-only">Posts</span>
      </button>
      <button role="tab" :aria-selected="tab === 'reels'" class="ig__tab" :class="{ 'is-active': tab === 'reels' }" @click="tab = 'reels'">
        <AppIcon name="reels" :size="18" /><span class="sr-only">Reels</span>
      </button>
    </div>

    <ul class="ig__grid" :class="{ 'ig__grid--reels': tab === 'reels' }" role="list">
      <li v-for="(post, i) in (tab === 'reels' ? site.instagramPosts.filter(p => p.kind === 'reel') : site.instagramPosts)" :key="i">
        <a
          :href="post.url || site.links.instagram"
          target="_blank"
          rel="noopener"
          class="ig__tile"
          :style="{ background: post.image ? undefined : tones[post.tone] }"
          :aria-label="`Ver no Instagram: ${post.caption}`"
        >
          <img v-if="post.image" :src="post.image" alt="" loading="lazy" width="300" height="400">
          <span class="ig__tile-caption">{{ post.caption }}</span>
          <span v-if="post.kind === 'reel'" class="ig__tile-kind"><AppIcon name="play" :size="14" /></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.ig {
  --ig-pad: var(--space-4);
  width: 100%;
  background: #fff;
  color: #0b1626;
  font-size: var(--text-sm);
  line-height: 1.4;
}

.ig__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--ig-pad);
  font-weight: 700;
  font-size: var(--text-md);
}

.ig__bar-handle {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
}

.ig__header {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  padding: var(--space-2) var(--ig-pad);
}

.ig__avatar {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 80px;
  height: 80px;
  padding: 3px;
  border-radius: 50%;
  background: conic-gradient(from 200deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5, #feda75);
  transition: transform var(--dur-slow) var(--ease-out);
}

.ig__avatar:hover {
  transform: rotate(-12deg) scale(1.04);
}

.ig__avatar-inner {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #fff;
  background: var(--ivory);
}

.ig__avatar-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ig__avatar-inner :deep(.brand__mark) {
  width: 52px;
  height: 52px;
}

.ig__stats {
  flex: 1;
  display: flex;
  justify-content: space-around;
  margin: 0;
  text-align: center;
}

.ig__stats div {
  display: flex;
  flex-direction: column-reverse;
}

.ig__stats dd {
  margin: 0;
  font-weight: 700;
  font-size: var(--text-md);
}

.ig__stats dt {
  font-size: var(--text-xs);
  color: #556175;
}

.ig__bio {
  display: grid;
  gap: 2px;
  padding: var(--space-2) var(--ig-pad) 0;
  font-size: 13px;
}

.ig__name {
  font-weight: 700;
}

.ig__dia {
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: var(--space-2);
  background: var(--diamond);
  transform: rotate(45deg) translateY(-1px);
  border-radius: 1px;
}

.ig__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  color: #2c4a9c;
  font-weight: 600;
  width: fit-content;
}

.ig__link:hover {
  text-decoration: underline;
}

.ig__actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2);
  padding: var(--space-3) var(--ig-pad);
}

.ig__btn {
  display: grid;
  place-items: center;
  height: 32px;
  border-radius: var(--radius-md);
  background: #eef0f3;
  font-weight: 600;
  font-size: 13px;
  transition: background-color var(--dur-fast), transform var(--dur-fast);
}

.ig__btn:hover {
  background: #e1e4e9;
}

.ig__btn:active {
  transform: scale(0.97);
}

.ig__btn--primary {
  background: #4a5df0;
  color: #fff;
}

.ig__btn--primary:hover {
  background: #3346e0;
}

.ig__highlights {
  display: flex;
  gap: var(--space-3);
  padding: var(--space-2) var(--ig-pad) var(--space-3);
  overflow-x: auto;
  scrollbar-width: none;
  list-style: none;
  margin: 0;
}

.ig__hl {
  display: grid;
  justify-items: center;
  gap: var(--space-1);
  width: 64px;
}

.ig__hl-ring {
  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  padding: 2px;
  border-radius: 50%;
  border: 1px solid #dfe2e7;
  transition: border-color var(--dur-med), transform var(--dur-med) var(--ease-out);
}

.ig__hl-inner {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(160deg, var(--sand), var(--gold-2));
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  color: var(--navy);
  transition: background var(--dur-med);
}

.ig__hl:hover .ig__hl-ring {
  border-color: var(--gold);
  transform: translateY(-2px);
}

.ig__hl:hover .ig__hl-inner {
  background: linear-gradient(160deg, var(--navy-3), var(--navy));
  color: var(--gold-2);
}

.ig__hl-label {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11px;
}

.ig__tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid #eceef1;
}

.ig__tab {
  display: grid;
  place-items: center;
  height: var(--control-sm);
  color: #9aa3b2;
  border-bottom: 1px solid transparent;
  transition: color var(--dur-fast), border-color var(--dur-fast);
}

.ig__tab:hover {
  color: #0b1626;
}

.ig__tab.is-active {
  color: #0b1626;
  border-bottom-color: #0b1626;
}

.ig__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.ig__tile {
  position: relative;
  display: block;
  aspect-ratio: 3 / 4;
  overflow: hidden;
}

.ig__tile img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--dur-slow) var(--ease-out);
}

.ig__tile::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(11, 22, 38, 0);
  transition: background-color var(--dur-med);
}

.ig__tile:hover::after {
  background: rgba(11, 22, 38, 0.35);
}

.ig__tile:hover img {
  transform: scale(1.06);
}

.ig__tile-caption {
  position: absolute;
  left: var(--space-2);
  right: var(--space-2);
  bottom: var(--space-2);
  z-index: 1;
  font-size: 10px;
  font-weight: 700;
  line-height: 1.25;
  color: #fff;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.35);
  transition: transform var(--dur-med) var(--ease-out);
}

.ig__tile:hover .ig__tile-caption {
  transform: translateY(-4px);
}

.ig__tile-kind {
  position: absolute;
  top: var(--space-2);
  right: var(--space-2);
  z-index: 1;
  color: #fff;
}
</style>
