<script setup lang="ts">
import { testimonialsData } from '../../data/testimonialsData'
import { useLanguage } from '../../composables/useLanguage'
import { 
  Quote, 
  Star, 
  Award, 
  Briefcase, 
  Sparkles 
} from 'lucide-vue-next'

const { isArabic } = useLanguage()
</script>

<template>
  <section 
    id="testimonials" 
    class="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
  >
    <!-- Background Ambient Glow -->
    <div class="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#F3CE66]/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12295D]/40 border border-[#F3CE66]/30 shadow-inner">
        <Sparkles class="w-4 h-4 text-[#F3CE66]" />
        <span class="text-xs sm:text-sm font-bold text-[#F3CE66] tracking-wide uppercase">
          {{ isArabic ? 'قصص نجاح خريجي Aqavia' : 'Alumni Success Stories' }}
        </span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-[#0B1A3D] tracking-tight leading-tight">
        <span>{{ isArabic ? 'أين وصل متدربو ' : 'Where Are Our ' }}</span>
        <span class="gold-gradient-text">{{ isArabic ? 'Aqavia اليوم؟' : 'Graduates Today?' }}</span>
      </h2>

      <p class="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-2xl mx-auto">
        {{ isArabic 
          ? 'آراء حقيقية وتجارب موثقة لمهندسين انتقلوا من مرحلة التشتت إلى قيادة وتطوير مشاريع عملاقة في كبرى الشركات التقنية بعد اجتياز التدريب الداخلي.'
          : 'Real experiences from ambitious developers who transitioned from tutorial paralysis into leading enterprise software architectures globally.'
        }}
      </p>
    </div>

    <!-- Testimonials Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
      <div 
        v-for="t in testimonialsData" 
        :key="t.id"
        class="relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl
               bg-[#090E1D]/90 dark:bg-[#090E1D]/95 light:bg-white/95
               border border-slate-800 dark:border-slate-800 light:border-slate-200
               backdrop-blur-xl shadow-2xl hover:border-[#F3CE66]/50 transition-all duration-300 group hover:-translate-y-1"
      >
        <!-- Top Row: Rating & Quote Icon -->
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-1 text-[#F3CE66]">
            <Star v-for="i in t.rating" :key="i" class="w-4 h-4 fill-[#F3CE66] text-[#F3CE66]" />
          </div>
          <Quote class="w-8 h-8 text-[#12295D] dark:text-[#12295D] light:text-slate-200 group-hover:text-[#F3CE66]/40 transition-colors" />
        </div>

        <!-- Student Quote -->
        <p class="text-sm sm:text-base text-slate-200 dark:text-slate-200 light:text-slate-800 leading-relaxed font-normal mb-6 italic">
          "{{ isArabic ? t.quote.ar : t.quote.en }}"
        </p>

        <!-- Capstone Project Completed Badge -->
        <div class="mb-6 p-3 rounded-xl bg-[#060A16] dark:bg-[#060A16] light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center gap-2 text-xs">
          <Award class="w-4 h-4 text-[#F3CE66] shrink-0" />
          <span class="text-slate-400 dark:text-slate-400 light:text-slate-600">
            {{ isArabic ? 'أنجز خلال التدريب:' : 'Capstone Completed:' }}
          </span>
          <span class="font-bold text-white dark:text-white light:text-slate-900">
            {{ isArabic ? t.capstoneCompleted.ar : t.capstoneCompleted.en }}
          </span>
        </div>

        <!-- Student Profile Footer -->
        <div class="pt-5 border-t border-slate-800/70 dark:border-slate-800/70 light:border-slate-200 flex items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <img 
              :src="t.avatar" 
              :alt="isArabic ? t.name.ar : t.name.en"
              class="w-12 h-12 rounded-full object-cover border-2 border-[#F3CE66]/40 shadow-md"
            />
            <div>
              <h4 class="text-sm sm:text-base font-bold text-white dark:text-white light:text-slate-900">
                {{ isArabic ? t.name.ar : t.name.en }}
              </h4>
              <p class="text-xs text-[#38BDF8] font-semibold flex items-center gap-1">
                <Briefcase class="w-3 h-3" />
                {{ isArabic ? t.currentRole.ar : t.currentRole.en }}
              </p>
              <p class="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600">
                {{ t.company }}
              </p>
            </div>
          </div>

          <span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-[#12295D]/40 text-[#93C5FD] border border-[#12295D]/60 hidden sm:inline-block">
            {{ isArabic ? t.track.ar : t.track.en }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
