<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TrackItem } from '../../types/track'
import { useLanguage } from '../../composables/useLanguage'
import { useCardTilt } from '../../composables/useCardTilt'
import { 
  Smartphone, 
  Server, 
  Layout, 
  Brain, 
  Palette, 
  Compass, 
  Cpu, 
  Clock, 
  CheckCircle2, 
  FileCheck2, 
  ExternalLink
} from 'lucide-vue-next'

const props = defineProps<{
  track: TrackItem
}>()

const { isArabic } = useLanguage()
const cardRef = ref<HTMLElement | null>(null)
const { rotateX, rotateY, glowX, glowY, isHovered, onMouseMove, onMouseLeave } = useCardTilt(10)

const handleMouseMove = (e: MouseEvent) => {
  if (cardRef.value) {
    onMouseMove(e, cardRef.value)
  }
}

// Map icon strings to Lucide components
const iconComponent = computed(() => {
  switch (props.track.iconName) {
    case 'Smartphone': return Smartphone
    case 'Server': return Server
    case 'Layout': return Layout
    case 'Brain': return Brain
    case 'Palette': return Palette
    case 'Compass': return Compass
    default: return Cpu
  }
})
</script>

<template>
  <div 
    class="relative group h-full"
    style="perspective: 1200px;"
  >
    <!-- Outer Glow Underneath -->
    <div 
      class="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
      :style="{ background: `radial-gradient(circle, ${track.glowColor} 0%, transparent 70%)` }"
    ></div>

    <!-- The 3D Physical Card Surface -->
    <div
      ref="cardRef"
      @mousemove="handleMouseMove"
      @mouseleave="onMouseLeave"
      class="relative flex flex-col justify-between h-full p-6 sm:p-7 rounded-3xl
             bg-[#090E1D]/90 dark:bg-[#090E1D]/95 light:bg-white/95
             border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200
             transition-all duration-200 ease-out backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden"
      :style="{
        transform: isHovered 
          ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)` 
          : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        borderColor: isHovered ? track.accentColor : undefined,
        boxShadow: isHovered ? `0 20px 40px -15px ${track.glowColor}` : undefined
      }"
    >
      <!-- Dynamic Cursor Spotlight Follower -->
      <div 
        class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        :style="{
          background: `radial-gradient(400px circle at ${glowX}% ${glowY}%, ${track.glowColor}, transparent 55%)`
        }"
      ></div>

      <!-- Top Cyber Chamfer Accent Bar -->
      <div 
        class="absolute top-0 inset-x-8 h-1 rounded-b-full transition-all duration-300 group-hover:h-1.5"
        :style="{ background: `linear-gradient(90deg, transparent, ${track.accentColor}, transparent)` }"
      ></div>

      <div class="relative z-10 space-y-5">
        
        <!-- Header: Icon, Badge & Seats -->
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div 
              class="w-12 h-12 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110 shadow-lg"
              :style="{ 
                backgroundColor: `${track.accentColor}18`, 
                border: `1px solid ${track.accentColor}50`,
                boxShadow: `0 0 20px ${track.accentColor}25`
              }"
            >
              <component :is="iconComponent" class="w-6 h-6" :style="{ color: track.accentColor }" />
            </div>
            <div>
              <span 
                class="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase inline-flex items-center gap-1.5"
                :style="{ 
                  backgroundColor: `${track.accentColor}15`, 
                  color: track.accentColor,
                  border: `1px solid ${track.accentColor}30`
                }"
              >
                {{ isArabic ? track.badge.ar : track.badge.en }}
              </span>
            </div>
          </div>

          <!-- Seats Counter -->
          <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/60 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-700/40 text-[11px] font-medium text-slate-300 dark:text-slate-300 light:text-slate-600">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>{{ isArabic ? `متبقي ${track.seatsRemaining} مقاعد` : `${track.seatsRemaining} seats left` }}</span>
          </div>
        </div>

        <!-- Track Title -->
        <div class="space-y-1 text-start">
          <h3 class="text-xl sm:text-2xl font-black text-white dark:text-white light:text-[#0B1A3D] leading-snug group-hover:text-[#F3CE66] transition-colors">
            {{ isArabic ? track.name.ar : track.name.en }}
          </h3>
          <div class="flex items-center gap-2 pt-1 text-xs text-slate-400">
            <span class="px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 font-medium">
              {{ isArabic ? track.level.ar : track.level.en }}
            </span>
            <span>•</span>
            <span class="flex items-center gap-1">
              <Clock class="w-3.5 h-3.5 text-[#F3CE66]" />
              {{ isArabic ? track.duration.ar : track.duration.en }}
            </span>
          </div>
        </div>

        <!-- 1. المتطلبات المسبقة (Prerequisites Box) -->
        <div class="p-3.5 sm:p-4 rounded-2xl bg-[#060A16]/90 border border-slate-700/60 space-y-1.5 text-start">
          <div class="flex items-center gap-2 text-xs font-bold text-amber-400">
            <FileCheck2 class="w-4 h-4 text-amber-400 shrink-0" />
            <span>{{ isArabic ? 'المتطلبات المسبقة:' : 'Prerequisites:' }}</span>
          </div>
          <p class="text-xs text-slate-300 leading-relaxed font-normal">
            {{ isArabic ? track.prerequisites.ar : track.prerequisites.en }}
          </p>
        </div>

        <!-- 2. ما ستنجزه بالتدريب (What you will accomplish Box) -->
        <div class="p-3.5 sm:p-4 rounded-2xl bg-[#0B152E]/60 border border-[#F3CE66]/20 space-y-1.5 text-start">
          <div class="flex items-center gap-2 text-xs font-bold text-[#F3CE66]">
            <CheckCircle2 class="w-4 h-4 text-[#F3CE66] shrink-0" />
            <span>{{ isArabic ? 'ما ستنجزه بالتدريب:' : 'What You Will Build & Accomplish:' }}</span>
          </div>
          <p class="text-xs text-slate-200 leading-relaxed font-normal">
            {{ isArabic ? track.outcomes.ar : track.outcomes.en }}
          </p>
        </div>

      </div>

      <!-- 3. الزر المباشر للاستمارة (Direct Registration Button) -->
      <div class="relative z-10 pt-5 mt-5 border-t border-slate-800/70 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-xs text-slate-400 font-medium">
          {{ isArabic ? 'استمارة التسجيل المعتمدة' : 'Official Application Form' }}
        </span>

        <a 
          :href="track.registrationUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs
                 bg-gradient-to-r from-[#C89B3C] via-[#F3CE66] to-[#C89B3C] text-[#050811]
                 shadow-lg shadow-[#F3CE66]/20 hover:shadow-[#F3CE66]/40 hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <span>{{ isArabic ? 'سجّل في استمارة المسار' : 'Apply via Official Form' }}</span>
          <ExternalLink class="w-3.5 h-3.5 shrink-0" />
        </a>
      </div>

    </div>
  </div>
</template>
