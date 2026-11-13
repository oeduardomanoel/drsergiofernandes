/**
 * Progresso (0 → 1) de um elemento atravessando a viewport.
 * 0 = topo do elemento encostando no fundo da tela; 1 = fundo do elemento saindo pelo topo.
 */
export function useScrollProgress(opts: { start?: number, end?: number } = {}) {
  const el = ref<HTMLElement | null>(null)
  const progress = ref(0)

  onMounted(() => {
    if (document.documentElement.classList.contains('reduced-motion')) {
      progress.value = 1
      return
    }
    let ticking = false
    const update = () => {
      ticking = false
      if (!el.value) return
      const rect = el.value.getBoundingClientRect()
      const vh = window.innerHeight
      const startAt = vh * (opts.start ?? 1)
      const endAt = vh * (opts.end ?? 0)
      const total = rect.height + (startAt - endAt)
      const passed = startAt - rect.top
      progress.value = Math.min(1, Math.max(0, passed / total))
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    })
  })

  return { el, progress }
}
