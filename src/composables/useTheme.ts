import { ref, onMounted } from 'vue'

export type ThemeMode = 'dark' | 'light'

const currentTheme = ref<ThemeMode>('dark')

export function useTheme() {
  const applyTheme = (theme: ThemeMode) => {
    currentTheme.value = theme
    if (typeof document !== 'undefined') {
      const root = document.documentElement
      if (theme === 'light') {
        root.classList.add('light')
        root.classList.remove('dark')
      } else {
        root.classList.add('dark')
        root.classList.remove('light')
      }
      localStorage.setItem('aqavia_theme', theme)
    }
  }

  const toggleTheme = () => {
    applyTheme(currentTheme.value === 'dark' ? 'light' : 'dark')
  }

  onMounted(() => {
    const saved = localStorage.getItem('aqavia_theme') as ThemeMode | null
    if (saved === 'light' || saved === 'dark') {
      applyTheme(saved)
    } else {
      applyTheme('dark')
    }
  })

  return {
    currentTheme,
    toggleTheme,
    applyTheme,
  }
}
