<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage'
import { 
  Building2, 
  Layers, 
  GitBranch, 
  CheckCircle2, 
  ShieldCheck,
  Target
} from 'lucide-vue-next'

const { isArabic } = useLanguage()

const pillars = [
  {
    step: '01',
    title: {
      ar: 'المعمارية النظيفة أولاً (Clean Architecture First)',
      en: 'Clean Architecture First',
    },
    desc: {
      ar: 'نتجاوز البرمجة العشوائية ونبدأ من التصميم المعماري للأنظمة (Domain-Driven Design, SOLID, Separation of Concerns).',
      en: 'Eliminating spaghetti code by mastering foundational system design (DDD, SOLID principles, and clean layer decoupling).',
    },
    icon: Layers,
    accent: '#38BDF8',
  },
  {
    step: '02',
    title: {
      ar: 'سبرنتات برمجية على مشاريع إنتاجية (Production Sprints)',
      en: 'High-Impact Production Sprints',
    },
    desc: {
      ar: 'العمل بأسلوب الـ Agile تماماً كما في كبرى شركات التكنولوجيا، مع مهام وتحديات حقيقية ترفع كفاءتك اليومية.',
      en: 'Hands-on Agile sprints simulating distributed tech teams, tackling real business edge cases and performance hurdles.',
    },
    icon: GitBranch,
    accent: '#F3CE66',
  },
  {
    step: '03',
    title: {
      ar: 'مراجعة كود شخصية سطر بسطر (1-on-1 Code Review)',
      en: '1-on-1 Senior Code Reviews',
    },
    desc: {
      ar: 'لكل ميزة تبنيها Pull Request مخصص يُراجع ويوجهك فيه مهندس خبير لإعادة الهيكلة وتحسين جودة الكود والأداء.',
      en: 'Every PR is inspected commit-by-commit by a senior engineer, guiding rigorous refactoring and enterprise standards.',
    },
    icon: ShieldCheck,
    accent: '#42B883',
  },
  {
    step: '04',
    title: {
      ar: 'التأهيل المهني والمنافسة العالمية (Global Career Launch)',
      en: 'Global Tech Career Launch',
    },
    desc: {
      ar: 'تخريج مهندسين جاهزين بملف أعمال واقعي على GitHub وتدريب مكثف على مقابلات الـ System Design والمقابلات التقنية.',
      en: 'Graduating job-ready talent equipped with live repos, optimized resumes, and proven system design interview confidence.',
    },
    icon: Target,
    accent: '#A855F7',
  },
]
</script>

<template>
  <section 
    id="about" 
    class="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
  >
    <!-- Background Ambient Glow -->
    <div class="absolute -top-10 left-1/3 w-[500px] h-[500px] bg-[#12295D]/25 rounded-full blur-[140px] pointer-events-none -z-10"></div>

    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12295D]/40 border border-[#F3CE66]/30 shadow-inner">
        <Building2 class="w-4 h-4 text-[#F3CE66]" />
        <span class="text-xs sm:text-sm font-bold text-[#F3CE66] tracking-wide uppercase">
          {{ isArabic ? 'عن شركة Aqavia ومنهجيتنا' : 'About Aqavia & Our Methodology' }}
        </span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-[#0B1A3D] tracking-tight leading-tight">
        <span>{{ isArabic ? 'صرح أمريكي يصنع ' : 'An American Hub Crafting ' }}</span>
        <span class="gold-gradient-text">{{ isArabic ? 'جيل المهندسين القياديين' : 'Next-Gen Tech Leaders' }}</span>
      </h2>

      <p class="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-2xl mx-auto">
        {{ isArabic 
          ? 'تأسست شركة Aqavia الأمريكية لردم الهوة السحيقة بين التعليم النظري ومتطلبات كبرى شركات التكنولوجيا العالمية. منهجيتنا مبنية على التحول الفعلي من مجرد مبرمج هاوٍ إلى مهندس برمجيات حقيقي يبني أنظمة متينة وموثوقة.'
          : 'Aqavia US was engineered to eliminate the critical gap between academic theory and high-performing tech engineering. Our proven 4-stage apprenticeship transforms developers into confident software architects ready for the global stage.'
        }}
      </p>
    </div>

    <!-- 4-Stage Methodology Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div 
        v-for="pillar in pillars" 
        :key="pillar.step"
        class="relative p-6 sm:p-7 rounded-3xl bg-[#090E1D]/90 dark:bg-[#090E1D]/95 light:bg-white/90 border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl hover:border-[#F3CE66]/40 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
      >
        <!-- Top Step Counter & Icon -->
        <div class="space-y-5">
          <div class="flex items-center justify-between">
            <span 
              class="text-3xl font-black opacity-40 font-mono group-hover:opacity-100 transition-opacity"
              :style="{ color: pillar.accent }"
            >
              {{ pillar.step }}
            </span>
            <div 
              class="w-12 h-12 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110 shadow-md"
              :style="{ backgroundColor: `${pillar.accent}15`, border: `1px solid ${pillar.accent}40` }"
            >
              <component :is="pillar.icon" class="w-6 h-6" :style="{ color: pillar.accent }" />
            </div>
          </div>

          <h3 class="text-base sm:text-lg font-black text-white dark:text-white light:text-slate-900 group-hover:text-[#F3CE66] transition-colors leading-snug">
            {{ isArabic ? pillar.title.ar : pillar.title.en }}
          </h3>

          <p class="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed font-normal">
            {{ isArabic ? pillar.desc.ar : pillar.desc.en }}
          </p>
        </div>

        <div class="pt-5 mt-5 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-[#F3CE66] transition-colors">
          <span>{{ isArabic ? 'معيار تطبيقي صارم' : 'Enterprise Pillar' }}</span>
          <CheckCircle2 class="w-3.5 h-3.5 text-emerald-400" />
        </div>
      </div>
    </div>

    <!-- Company Stats / Highlight Band -->
    <div class="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#12295D]/30 via-[#0A1021] to-[#12295D]/30 border border-[#F3CE66]/25 shadow-2xl flex flex-wrap items-center justify-around gap-8 text-center">
      <div>
        <div class="text-3xl sm:text-4xl font-black gold-gradient-text">96%</div>
        <div class="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium mt-1">
          {{ isArabic ? 'نسبة نجاح التوظيف بعد التدريب' : 'Graduate Career Placement' }}
        </div>
      </div>
      <div class="h-10 w-px bg-slate-800 hidden sm:block"></div>
      <div>
        <div class="text-3xl sm:text-4xl font-black text-[#60A5FA]">12,000+</div>
        <div class="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium mt-1">
          {{ isArabic ? 'أسطر كود تمت مراجعتها فردياً' : 'Lines of Code Reviewed 1-on-1' }}
        </div>
      </div>
      <div class="h-10 w-px bg-slate-800 hidden sm:block"></div>
      <div>
        <div class="text-3xl sm:text-4xl font-black text-[#42B883]">100%</div>
        <div class="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium mt-1">
          {{ isArabic ? 'مشاريع حقيقية بنية Clean Code' : 'Clean Architecture Adherence' }}
        </div>
      </div>
      <div class="h-10 w-px bg-slate-800 hidden sm:block"></div>
      <div>
        <div class="text-3xl sm:text-4xl font-black text-[#F59E0B]">US Hub</div>
        <div class="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium mt-1">
          {{ isArabic ? 'معايير وادي السيليكون الدولية' : 'Silicon Valley Standards' }}
        </div>
      </div>
    </div>
  </section>
</template>
