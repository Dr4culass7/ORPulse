import { createSharedComposable, useDark, useToggle } from '@vueuse/core'

// Create a shared useDark with manual DOM control
const useSharedDarkBase = createSharedComposable(() => 
  useDark({
    onChanged(dark: boolean) {
      // Manual DOM manipulation for reliable dark mode
      const html = document.documentElement
      
      if (dark) {
        html.classList.add('dark')
      } else {
        html.classList.remove('dark')
      }
    }
  })
)

export const useSharedDark = useSharedDarkBase

export const useSharedThemeToggle = () => {
  const isDark = useSharedDark()
  const toggleTheme = useToggle(isDark)

  return { isDark, toggleTheme }
}