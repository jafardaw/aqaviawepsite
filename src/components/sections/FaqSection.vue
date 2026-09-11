<script setup lang="ts">
import { ref } from 'vue'
import { faqData } from '../../data/faqData'
import { useLanguage } from '../../composables/useLanguage'
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-vue-next'

const { isArabic } = useLanguage()

// Keep first question open by default
const openFaqId = ref<string | null>('f1')

const toggleFaq = (id: string) => {
  openFaqId.value = openFaqId.value === id ? null : id
}
</script>

<template>
  <section 
    id="faq" 
    class="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden"
  >
    <!-- Background Light -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#12295D]/20 rounded-full blur-[130px] pointer-events-none -z-10"></div>

    <!-- Section Header -->
    <div class="text-center space-y-4 mb-14 sm:mb-18">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12295D]/40 border border-[#F3CE66]/30 shadow-inner">
        <HelpCircle class="w-4 h-4 text-[#F3CE66]" />
        <span class="text-xs sm:text-sm font-bold text-[#F3CE66] tracking-wide uppercase">
          {{ isArabic ? 'إجابات واضحة لجميع تساؤلاتك' : 'Frequently Asked Questions' }}
        </span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-[#0B1A3D] tracking-tight leading-tight">
        <span>{{ isArabic ? 'الأسئلة ' : 'Frequently Asked ' }}</span>
        <span class="gold-gradient-text">{{ isArabic ? 'الشائعة' : 'Questions' }}</span>
      </h2>

      <p class="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-xl mx-auto">
        {{ isArabic 
          ? 'كل ما تحتاج معرفته عن طبيعة التدريب الداخلي في شركة Aqavia، نظام القبول، ومنهجية مراجعة الكود.'
          : 'Clear answers regarding Aqavia apprenticeship structure, code reviews, and remote placement eligibility.'
        }}
      </p>
    </div>

    <!-- Accordion Items -->
    <div class="space-y-4">
      <div 
        v-for="faq in faqData" 
        :key="faq.id"
        class="rounded-2xl bg-[#090E1D]/90 dark:bg-[#090E1D]/95 light:bg-white/95 border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl transition-all duration-300 overflow-hidden"
        :class="openFaqId === faq.id ? 'border-[#F3CE66]/50 shadow-xl shadow-black/30' : 'hover:border-slate-700'"
      >
        <button
          @click="toggleFaq(faq.id)"
          type="button"
          class="w-full px-6 py-5 flex items-center justify-between text-start gap-4 cursor-pointer"
        >
          <div class="flex items-center gap-3">
            <div 
              class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors"
              :class="openFaqId === faq.id ? 'bg-[#F3CE66]/20 text-[#F3CE66]' : 'bg-slate-800/60 text-slate-400'"
            >
              <MessageSquare class="w-4 h-4" />
            </div>
            <span class="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 leading-snug">
              {{ isArabic ? faq.question.ar : faq.question.en }}
            </span>
          </div>

          <ChevronDown 
            class="w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0"
            :class="openFaqId === faq.id ? 'rotate-180 text-[#F3CE66]' : ''"
          />
        </button>

        <!-- Collapsible Content -->
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-2 max-h-0"
          enter-to-class="opacity-100 translate-y-0 max-h-96"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0 max-h-96"
          leave-to-class="opacity-0 -translate-y-2 max-h-0"
        >
          <div 
            v-if="openFaqId === faq.id" 
            class="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed border-t border-slate-800/50 dark:border-slate-800/50 light:border-slate-100"
          >
            {{ isArabic ? faq.answer.ar : faq.answer.en }}
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>
