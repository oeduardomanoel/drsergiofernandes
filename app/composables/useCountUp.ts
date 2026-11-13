/** Anima um número de 0 até `target` quando o elemento entra na tela. */
export function useCountUp(target: number, duration = 1800) {
  const el = ref<HTMLElement | null>(null)
  const value = ref(target)

  onMounted(() => {
    if (!el.value || document.documentElement.classList.contains('reduced-motion')) return
    value.value = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - t, 4)
        value.value = Math.round(target * eased)
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el.value)
  })

  return { el, value }
}
