<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useLanguage } from '../../composables/useLanguage'
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Code2, 
  ChevronDown
} from 'lucide-vue-next'
import logoImg from '../../assets/logo.jpg'
import gsap from 'gsap'

const { t, isArabic } = useLanguage()

const heroContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  if (heroContainer.value) {
    // GSAP Entrance Animations
    gsap.from('.gsap-fade-up', {
      opacity: 0,
      y: 30,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
    })
  }
})
</script>

<template>
  <section 
    id="home" 
    ref="heroContainer" 
    class="relative min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden"
  >
    <!-- Background Futuristic Lighting Atmosphere -->
    <div class="absolute inset-0 pointer-events-none -z-10">
      <!-- Radial Sapphire Blue Glow (Top Left / Right) -->
      <div 
        class="absolute -top-32 w-96 sm:w-[600px] h-96 sm:h-[600px] rounded-full blur-[120px] opacity-25 dark:opacity-30 light:opacity-20"
        :class="isArabic ? '-right-20 bg-gradient-to-b from-[#2B5DE0] to-[#12295D]' : '-left-20 bg-gradient-to-b from-[#2B5DE0] to-[#12295D]'"
      ></div>

      <!-- Luxury Gold Ambient Core Glow (Center Right) -->
      <div 
        class="absolute top-1/3 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full blur-[140px] opacity-20 dark:opacity-25 light:opacity-15"
        :class="isArabic ? '-left-10 bg-gradient-to-tr from-[#C89B3C] via-[#F3CE66] to-transparent' : '-right-10 bg-gradient-to-tr from-[#C89B3C] via-[#F3CE66] to-transparent'"
      ></div>

      <!-- Subtle Cyber Grid Overlay -->
      <div 
        class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40 dark:opacity-40 light:opacity-10"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Left / Text & Overview Column -->
        <div class="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start space-y-6 sm:space-y-8">
          
          <!-- Identity Badge -->
          <div class="gsap-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0A1124]/90 dark:bg-[#0A1124]/90 light:bg-slate-100 border border-[#F3CE66]/30 shadow-lg shadow-black/40">
            <span class="flex h-2 w-2 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span class="text-xs sm:text-sm font-semibold tracking-wide text-slate-200 dark:text-slate-200 light:text-slate-800">
              {{ t.hero.badge }}
            </span>
            <span class="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-[#F3CE66]/15 text-[#F3CE66] border border-[#F3CE66]/30">
              {{ t.hero.badgeStatus }}
            </span>
          </div>

          <!-- Main Bold Headline -->
          <h1 class="gsap-fade-up text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.2] sm:leading-[1.15]">
            <span class="text-white dark:text-white light:text-[#0B1A3D] block sm:inline">
              {{ t.hero.titlePrefix }}
            </span>
            <span class="gold-gradient-text px-2 inline-block drop-shadow-sm">
              {{ t.hero.titleHighlight }}
            </span>
            <span class="text-slate-200 dark:text-slate-200 light:text-[#12295D] block mt-1 sm:mt-2">
              {{ t.hero.titleSuffix }}
            </span>
          </h1>

          <!-- Company Overview / Bio -->
          <p class="gsap-fade-up text-base sm:text-lg lg:text-xl text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed max-w-2xl font-normal">
            {{ t.hero.description }}
          </p>

          <!-- Action Buttons -->
          <div class="gsap-fade-up flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
            <!-- Primary Gold CTA -->
            <a 
              href="#tracks" 
              class="relative group overflow-hidden px-7 py-3.5 rounded-full font-bold text-sm sm:text-base
                     bg-gradient-to-r from-[#C89B3C] via-[#F3CE66] to-[#C89B3C] text-[#050811]
                     shadow-xl shadow-[#F3CE66]/25 hover:shadow-[#F3CE66]/45 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-3 cursor-pointer"
            >
              <Sparkles class="w-5 h-5 text-[#050811]" />
              <span>{{ t.hero.exploreBtn }}</span>
              <component :is="isArabic ? ArrowLeft : ArrowRight" class="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </a>

            <!-- Secondary Outline Button -->
            <a 
              href="#methodology"
              class="px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base
                     bg-slate-900/60 dark:bg-slate-900/60 light:bg-white/80 text-slate-200 dark:text-slate-200 light:text-slate-900
                     border border-[#12295D]/80 hover:border-[#F3CE66]/60 hover:text-[#F3CE66] backdrop-blur-md transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Code2 class="w-4 h-4 text-[#3B82F6]" />
              <span>{{ t.hero.aboutBtn }}</span>
            </a>
          </div>

          <!-- Trust & Value Pillars (Stats Counter) -->
          <div class="gsap-fade-up grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 w-full border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
            <div 
              v-for="(stat, index) in t.hero.stats" 
              :key="index"
              class="p-3 sm:p-3.5 rounded-2xl bg-slate-900/40 dark:bg-slate-900/50 light:bg-white/60 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 backdrop-blur-sm"
            >
              <div class="text-base sm:text-lg font-black text-[#F3CE66]">
                {{ stat.value }}
              </div>
              <div class="text-[11px] sm:text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium mt-0.5 leading-snug">
                {{ stat.label }}
              </div>
            </div>
          </div>

        </div>

        <!-- Right / Visual Centerpiece (The 3D Aqavia Emblem & Interactive Orbit) -->
        <div class="lg:col-span-5 flex justify-center items-center relative">
          
          <div ref="logoOrbital" class="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
            
            <!-- Outer Pulsing Glow Ambient Ring -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-[#12295D] via-[#F3CE66]/20 to-[#2B5DE0]/30 blur-2xl animate-pulse"></div>

            <!-- Orbit 1: Decorative Spinning Ring -->
            <div class="absolute inset-[-14px] rounded-full border border-dashed border-[#F3CE66]/30 animate-[spin_40s_linear_infinite]"></div>

            <!-- Orbit 2: Golden Highlight Arc -->
            <div class="absolute inset-[-6px] rounded-full border border-t-[#F3CE66] border-r-[#2B5DE0] border-b-transparent border-l-transparent animate-[spin_25s_linear_infinite]"></div>

            <!-- Main Shield Plate with Logo -->
            <div 
              class="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2.5 
                     bg-gradient-to-br from-[#12295D] via-[#050811] to-[#C89B3C] 
                     shadow-[0_0_60px_rgba(243,206,102,0.25)] flex items-center justify-center group"
            >
              <!-- Center Core Image Container -->
              <div class="relative w-full h-full rounded-full overflow-hidden border-2 border-[#F3CE66]/40 bg-[#050811] flex items-center justify-center">
                <img 
                  :src="logoImg" 
                  alt="Aqavia Emblem" 
                  class="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                <!-- Sheen / Glare Light Reflection Effect -->
                <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>

            <!-- Orbiting Floating Badges (Company Technologies) -->
            <!-- 1. Flutter / Mobile Badge -->
            <div 
              class="absolute -top-3 -right-2 sm:-right-4 px-3 py-1.5 rounded-full bg-[#070E20]/90 border border-[#38BDF8]/40 shadow-xl backdrop-blur-md
                     flex items-center gap-2 text-xs font-bold text-slate-200 animate-bounce duration-1000"
              style="animation-duration: 4s;"
            >
              <div class="w-2 h-2 rounded-full bg-[#38BDF8]"></div>
              <span>{{ t.hero.floatingBadges.mobile }}</span>
            </div>

            <!-- 2. Laravel / Backend Badge -->
            <div 
              class="absolute -bottom-2 -left-2 sm:-left-4 px-3 py-1.5 rounded-full bg-[#070E20]/90 border border-[#FF2D20]/40 shadow-xl backdrop-blur-md
                     flex items-center gap-2 text-xs font-bold text-slate-200 animate-bounce"
              style="animation-duration: 5s;"
            >
              <div class="w-2 h-2 rounded-full bg-[#FF2D20]"></div>
              <span>{{ t.hero.floatingBadges.backend }}</span>
            </div>

            <!-- 3. Vue.js & TS Badge -->
            <div 
              class="absolute top-1/2 -left-6 sm:-left-8 -translate-y-1/2 px-3 py-1.5 rounded-full bg-[#070E20]/90 border border-[#42B883]/40 shadow-xl backdrop-blur-md
                     flex items-center gap-2 text-xs font-bold text-slate-200 hover:scale-105 transition-transform"
            >
              <div class="w-2 h-2 rounded-full bg-[#42B883]"></div>
              <span>{{ t.hero.floatingBadges.frontend }}</span>
            </div>

            <!-- 4. AI Badge -->
            <div 
              class="absolute bottom-6 -right-4 sm:-right-6 px-3 py-1.5 rounded-full bg-[#070E20]/90 border border-[#A855F7]/40 shadow-xl backdrop-blur-md
                     flex items-center gap-2 text-xs font-bold text-slate-200"
            >
              <div class="w-2 h-2 rounded-full bg-[#A855F7]"></div>
              <span>{{ t.hero.floatingBadges.ai }}</span>
            </div>

          </div>

        </div>

      </div>
    </div>

    <!-- Bottom Scroll Indicator -->
    <div class="absolute bottom-3 sm:bottom-6 inset-x-0 flex justify-center pointer-events-none">
      <a 
        href="#tracks" 
        class="pointer-events-auto flex flex-col items-center gap-1 text-slate-400 hover:text-[#F3CE66] transition-colors group cursor-pointer"
      >
        <span class="text-[10px] tracking-widest uppercase font-semibold text-slate-500 group-hover:text-[#F3CE66]">
          Scroll
        </span>
        <ChevronDown class="w-4 h-4 animate-bounce text-[#F3CE66]" />
      </a>
    </div>
  </section>
</template>
