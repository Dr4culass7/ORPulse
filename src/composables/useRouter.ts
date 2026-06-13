import { ref } from 'vue'

// Global shared reactive state for the active path
export const currentPath = ref(window.location.pathname)

// Listen for browser back/forward buttons
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    currentPath.value = window.location.pathname
  })
}

export function useRouter() {
  const navigate = (path: string) => {
    window.history.pushState({}, '', path)
    currentPath.value = path
    // Reset scroll position to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return {
    currentPath,
    navigate
  }
}
