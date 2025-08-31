import { ref, onMounted, onUnmounted, Ref } from 'vue'

export function useIntersectionObserver(
  elementRef: Ref<HTMLElement | null>,
  options: IntersectionObserverInit = {}
) {
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        if (observer && options.rootMargin === undefined) {
          observer.disconnect()
        }
      }
    })
  }

  onMounted(() => {
    if (elementRef.value) {
      observer = new IntersectionObserver(callback, {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      })
      observer.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    isVisible
  }
}