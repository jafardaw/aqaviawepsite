<script setup lang="ts">
import { ref, computed } from 'vue'
import { tracksData } from '../../data/tracksData'
import type { TrackCategory } from '../../types/track'
import { useLanguage } from '../../composables/useLanguage'
import TrackCard from './TrackCard.vue'
import { 
  Terminal, 
  CheckCircle2, 
  GitPullRequest, 
  Sparkles 
} from 'lucide-vue-next'

const { isArabic } = useLanguage()
const selectedCategory = ref<TrackCategory>('all')

const categories = [
  { id: 'all' as TrackCategory, label: { ar: 'كافة المسارات', en: 'All Tracks' } },
  { id: 'mobile' as TrackCategory, label: { ar: 'تطبيقات الموبايل (Flutter)', en: 'Mobile (Flutter)' } },
  { id: 'backend' as TrackCategory, label: { ar: 'الأنظمة الخلفية (Laravel)', en: 'Backend (Laravel)' } },
  { id: 'frontend' as TrackCategory, label: { ar: 'واجهات الويب (Vue 3)', en: 'Web (Vue 3)' } },
  { id: 'ai' as TrackCategory, label: { ar: 'الذكاء الاصطناعي (AI/LLMs)', en: 'AI & Data' } },
  { id: 'design' as TrackCategory, label: { ar: 'تصميم المنتجات (UI/UX)', en: 'UI/UX Design' } },
]

const filteredTracks = computed(() => {
  if (selectedCategory.value === 'all') {
    return tracksData
  }
  return tracksData.filter(track => track.category === selectedCategory.value)
})
</script>

<template>
  <section 
    id="tracks" 
    class="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
  >
    <!-- Top Ambient Lights -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#12295D]/20 via-[#F3CE66]/15 to-[#2B5DE0]/20 blur-[130px] rounded-full pointer-events-none -z-10"></div>

    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-20">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12295D]/40 border border-[#F3CE66]/30 shadow-inner">
        <Sparkles class="w-4 h-4 text-[#F3CE66]" />
        <span class="text-xs sm:text-sm font-bold text-[#F3CE66] tracking-wide uppercase">
          {{ isArabic ? 'برامج التدريب الداخلي المعتمدة' : 'Official Apprenticeship Tracks' }}
        </span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-[#0B1A3D] tracking-tight leading-tight">
        <span>{{ isArabic ? 'تدريب هندسي مكثف على ' : 'Master High-Impact ' }}</span>
        <span class="gold-gradient-text">{{ isArabic ? 'مشاريع حية عملاقة' : 'Production Systems' }}</span>
      </h2>

      <p class="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl mx-auto">
        {{ isArabic 
          ? 'لا ندرّس أمثلة تقليدية أو دروساً نظرية معزولة؛ كل مسار مبني حول مشروع تخرج متكامل بمعمارية مؤسسية Clean Code، مع إشراف ومراجعة كود فردية 1-on-1 من كبار مهندسي البرمجيات.'
          : 'No toy apps or isolated tutorials. Every track is anchored on a massive production capstone built with strict Clean Architecture, governed by weekly 1-on-1 code reviews with staff engineers.'
        }}
      </p>

      <!-- Category Filter Pills (Tabs) -->
      <div class="flex flex-wrap items-center justify-center gap-2 pt-4">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="selectedCategory = cat.id"
          type="button"
          class="relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer"
          :class="selectedCategory === cat.id 
            ? 'bg-gradient-to-r from-[#C89B3C] via-[#F3CE66] to-[#C89B3C] text-[#050811] shadow-lg shadow-[#F3CE66]/25 scale-105' 
            : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-300 hover:border-[#F3CE66]/40 hover:text-white'"
        >
          <span>{{ isArabic ? cat.label.ar : cat.label.en }}</span>
        </button>
      </div>
    </div>

    <!-- Tracks Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
      <TrackCard 
        v-for="track in filteredTracks" 
        :key="track.id"
        :track="track"
      />
    </div>

    <!-- Bottom Engineering Quality Guarantee Banner -->
    <div class="mt-16 sm:mt-24 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#090E1D] via-[#0E162B] to-[#090E1D] border border-[#F3CE66]/20 shadow-2xl relative overflow-hidden">
      <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-[#F3CE66]/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-start">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-2xl bg-[#12295D]/60 border border-[#2B5DE0]/40 flex items-center justify-center shrink-0">
            <GitPullRequest class="w-6 h-6 text-[#60A5FA]" />
          </div>
          <div>
            <h4 class="text-sm font-bold text-white dark:text-white light:text-slate-900">
              {{ isArabic ? 'مراجعة كود احترافية (Code Review)' : 'Rigorous Code Reviews' }}
            </h4>
            <p class="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
              {{ isArabic ? 'كل Pull Request يُفحص سطر بسطر لترسيخ معايير الـ Clean Architecture.' : 'Every PR is reviewed line-by-line to internalize Clean Code standards.' }}
            </p>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-2xl bg-[#F3CE66]/15 border border-[#F3CE66]/30 flex items-center justify-center shrink-0">
            <Terminal class="w-6 h-6 text-[#F3CE66]" />
          </div>
          <div>
            <h4 class="text-sm font-bold text-white dark:text-white light:text-slate-900">
              {{ isArabic ? 'مشاريع تفخر بإضافتها للـ CV' : 'Production Portfolio Showcase' }}
            </h4>
            <p class="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
              {{ isArabic ? 'كود حقيقي منشور على GitHub يثبت قدرتك البرمجية أمام مسؤولي التوظيف.' : 'Battle-tested open repos showcasing architecture and test coverage.' }}
            </p>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-2xl bg-[#42B883]/15 border border-[#42B883]/30 flex items-center justify-center shrink-0">
            <CheckCircle2 class="w-6 h-6 text-[#42B883]" />
          </div>
          <div>
            <h4 class="text-sm font-bold text-white dark:text-white light:text-slate-900">
              {{ isArabic ? 'تأهيل للمقابلات التقنية الكبرى' : 'Mock Tech Interviews' }}
            </h4>
            <p class="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
              {{ isArabic ? 'محاكاة لأسئلة الـ System Design ومقابلات الشركات العالمية.' : 'System design drills and behavioral rounds to ace tech hiring.' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
