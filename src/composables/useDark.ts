import { useDark as useVueDark, useToggle } from '@vueuse/core'

// Simplified dark mode composable for Tailwind CSS v4
export function useDark() {
  const isDark = useVueDark()
  const toggleDark = useToggle(isDark)
  
  return { 
    isDark, 
    toggleDark 
  }
}