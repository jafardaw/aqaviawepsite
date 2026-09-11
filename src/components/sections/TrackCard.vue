<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TrackItem } from '../../types/track'
import { useLanguage } from '../../composables/useLanguage'
import { useCardTilt } from '../../composables/useCardTilt'
import { useApplicationModal } from '../../composables/useApplicationModal'
import { 
  Smartphone, 
  Server, 
  Layout, 
  Brain, 
  Palette, 
  Rocket, 
  Clock, 
  Flame, 
  ArrowUpRight,
  ShieldCheck,
  Cpu
} from 'lucide-vue-next'

const props = defineProps<{
  track: TrackItem
}>()

const { isArabic } = useLanguage()
const { openModal } = useApplicationModal()
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
    default: return Cpu
  }
})
</script>

<template>
  <div 
    class="relative group"
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

      <div class="relative z-10 space-y-6">
        
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
                <Flame class="w-3 h-3" />
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

        <!-- Track Title & Overview -->
        <div class="space-y-2">
          <h3 class="text-xl sm:text-2xl font-black text-white dark:text-white light:text-[#0B1A3D] leading-snug group-hover:text-[#F3CE66] transition-colors">
            {{ isArabic ? track.name.ar : track.name.en }}
          </h3>
          <p class="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-normal line-clamp-3">
            {{ isArabic ? track.overview.ar : track.overview.en }}
          </p>
        </div>

        <!-- Capstone Production Project Box (المشروع الضخم الذي سيعمل عليه المتدرب) -->
        <div 
          class="relative p-4 sm:p-5 rounded-2xl bg-[#060A16]/90 dark:bg-[#060A16]/90 light:bg-slate-50 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-200 transition-colors group-hover:border-[#F3CE66]/40"
        >
          <!-- Accent Corner Pill -->
          <div class="flex items-center justify-between mb-2.5">
            <div class="flex items-center gap-2 text-xs font-bold text-[#F3CE66]">
              <Rocket class="w-4 h-4 text-[#F3CE66]" />
              <span>{{ isArabic ? 'مشروع التخرج الميداني الضخم:' : 'Capstone Production Project:' }}</span>
            </div>
            <span class="text-[10px] px-2 py-0.5 rounded-md bg-[#12295D]/60 text-[#60A5FA] border border-[#12295D] font-medium">
              {{ isArabic ? track.capstoneProject.type.ar : track.capstoneProject.type.en }}
            </span>
          </div>

          <!-- Project Title -->
          <h4 class="text-sm sm:text-base font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1.5">
            {{ isArabic ? track.capstoneProject.name.ar : track.capstoneProject.name.en }}
          </h4>

          <!-- Project Description -->
          <p class="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-3">
            {{ isArabic ? track.capstoneProject.description.ar : track.capstoneProject.description.en }}
          </p>

          <!-- Tech Stack Pills -->
          <div class="flex flex-wrap gap-1.5">
            <span 
              v-for="tech in track.capstoneProject.techStack" 
              :key="tech"
              class="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-800/80 dark:bg-slate-800/80 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Senior Mentor Profile (المدرب والخبير المشرف) -->
        <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-900/40 dark:bg-slate-900/50 light:bg-slate-100/60 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
          <div class="flex items-center gap-3">
            <div class="relative">
              <img 
                :src="track.mentor.avatar" 
                :alt="isArabic ? track.mentor.name.ar : track.mentor.name.en"
                class="w-11 h-11 rounded-full object-cover border-2 border-[#F3CE66]/50 shadow-md"
              />
              <span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#090E1D] rounded-full"></span>
            </div>
            <div class="text-start">
              <div class="flex items-center gap-1.5">
                <span class="text-xs sm:text-sm font-bold text-white dark:text-white light:text-slate-900">
                  {{ isArabic ? track.mentor.name.ar : track.mentor.name.en }}
                </span>
                <ShieldCheck class="w-3.5 h-3.5 text-[#38BDF8]" />
              </div>
              <p class="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium leading-tight">
                {{ isArabic ? track.mentor.role.ar : track.mentor.role.en }}
              </p>
              <p class="text-[10px] text-[#C89B3C] font-semibold mt-0.5">
                {{ isArabic ? track.mentor.experience.ar : track.mentor.experience.en }}
              </p>
            </div>
          </div>
          
          <span class="hidden sm:inline-block px-2 py-1 rounded-md text-[10px] font-bold uppercase bg-[#12295D]/40 text-[#93C5FD] border border-[#12295D]">
            {{ track.mentor.companyTag }}
          </span>
        </div>

      </div>

      <!-- Bottom Meta & Action Button -->
      <div class="relative z-10 pt-5 mt-5 border-t border-slate-800/70 dark:border-slate-800/70 light:border-slate-200 flex items-center justify-between gap-3">
        <div class="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
          <div class="flex items-center gap-1.5">
            <Clock class="w-3.5 h-3.5 text-[#F3CE66]" />
            <span>{{ isArabic ? track.duration.ar : track.duration.en }}</span>
          </div>
        </div>

        <!-- Join / Apply Button -->
        <button 
          @click="openModal"
          type="button"
          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-100 dark:text-slate-100 light:text-slate-900
                 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 border border-slate-700/60
                 hover:border-[#F3CE66] hover:bg-[#F3CE66] hover:text-[#050811] transition-all duration-300 group/btn cursor-pointer shadow-md"
        >
          <span>{{ isArabic ? 'احجز مقعدك' : 'Enroll Now' }}</span>
          <ArrowUpRight class="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>
      </div>

    </div>
  </div>
</template>
