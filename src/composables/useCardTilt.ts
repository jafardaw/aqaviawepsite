import { ref } from 'vue'

export function useCardTilt(maxRotation = 12) {
  const rotateX = ref(0)
  const rotateY = ref(0)
  const glowX = ref(50)
  const glowY = ref(50)
  const isHovered = ref(false)

  const onMouseMove = (e: MouseEvent, targetEl: HTMLElement) => {
    const rect = targetEl.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    rotateX.value = (0.5 - y) * maxRotation
    rotateY.value = (x - 0.5) * maxRotation
    glowX.value = Math.round(x * 100)
    glowY.value = Math.round(y * 100)
    isHovered.value = true
  }

  const onMouseLeave = () => {
    rotateX.value = 0
    rotateY.value = 0
    isHovered.value = false
  }

  return {
    rotateX,
    rotateY,
    glowX,
    glowY,
    isHovered,
    onMouseMove,
    onMouseLeave,
  }
}
