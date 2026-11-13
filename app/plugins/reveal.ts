import type { DirectiveBinding } from 'vue'

/**
 * v-reveal            → sobe com fade
 * v-reveal:left       → variações: up | fade | left | right | scale | blur | mask | lines
 * v-reveal:up="120"   → atraso em ms
 */
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  const getObserver = () => {
    if (observer || typeof window === 'undefined') return observer
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          el.classList.add('is-visible')
          observer?.unobserve(el)
          // Depois da entrada, devolve o elemento ao CSS dele (hover, transform próprio etc.)
          const delay = Number.parseInt(el.style.getPropertyValue('--reveal-delay') || '0', 10)
          window.setTimeout(() => {
            if (el.dataset.reveal !== 'lines') el.removeAttribute('data-reveal')
          }, delay + 1300)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    )
    return observer
  }

  nuxtApp.vueApp.directive('reveal', {
    getSSRProps(binding: DirectiveBinding) {
      return { 'data-reveal': binding.arg || 'up' }
    },
    mounted(el: HTMLElement, binding: DirectiveBinding<number | string | undefined>) {
      el.dataset.reveal = binding.arg || 'up'
      if (binding.value) el.style.setProperty('--reveal-delay', `${Number(binding.value)}ms`)
      const io = getObserver()
      if (!io || document.documentElement.classList.contains('reduced-motion')) {
        el.classList.add('is-visible')
        return
      }
      io.observe(el)
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el)
    },
  })
})
