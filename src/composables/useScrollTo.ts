import { useRouter, useRoute } from 'vue-router'

export function useScrollTo() {
  const router = useRouter()
  const route = useRoute()

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      if (route && route.path !== '/') {
        router.push('/').then(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    if (route && route.path !== '/') {
      router.push('/').then(() => {
        setTimeout(() => {
          const el = document.getElementById(sectionId)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          }
        }, 150)
      })
    } else {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return {
    scrollToSection
  }
}
