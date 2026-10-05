<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage'
import { useApplicationModal } from '../../composables/useApplicationModal'
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowUpRight, 
  GitPullRequest, 
  Layers, 
  Users, 
  Award,
  BookOpen
} from 'lucide-vue-next'

const { isArabic } = useLanguage()
const { openModal } = useApplicationModal()

const comparisonAxes = [
  {
    axis: {
      ar: 'المحتوى والمنهج',
      en: 'Curriculum & Methodology'
    },
    icon: BookOpen,
    accent: '#38BDF8',
    aqavia: {
      ar: 'تطبيق عملي 100% على متطلبات وتاسكات مشاريع حقيقية تُبنى بالكامل.',
      en: '100% hands-on implementation on live tasks & full-scale production projects.'
    },
    traditional: {
      ar: 'محاضرات نظرية، شروحات مسجلة، وتلقين للأساسيات البرمجية البسيطة.',
      en: 'Passive theoretical videos, recorded playlists, and basic script tutorials.'
    }
  },
  {
    axis: {
      ar: 'بيئة العمل اليومية',
      en: 'Daily Working Environment'
    },
    icon: Users,
    accent: '#F3CE66',
    aqavia: {
      ar: 'محاكاة واقعية لفرق العمل: استخدام Git, GitHub, Sprints, Agile، وتقسيم الأدوار.',
      en: 'Authentic team simulation: Git, GitHub, weekly Agile sprints, and role distribution.'
    },
    traditional: {
      ar: 'عمل فردي معزول دون احتكاك بالزملاء أو منظومة عمل الشركات.',
      en: 'Isolated individual coding with zero interaction with team pipelines or corporate tooling.'
    }
  },
  {
    axis: {
      ar: 'التوجيه والمتابعة',
      en: 'Mentorship & Supervision'
    },
    icon: GitPullRequest,
    accent: '#42B883',
    aqavia: {
      ar: 'مراجعة مستمرة للكود (Code Review)، توجيه معماري، وتحسين الأداء والأمان.',
      en: 'Continuous 1-on-1 code reviews, architectural guidance, performance & security audits.'
    },
    traditional: {
      ar: 'إجابة استفسارات سطحية دون نقد للكود أو أداء النظام.',
      en: 'Superficial Q&A forums without system scrutiny, profiling, or architectural refactoring.'
    }
  },
  {
    axis: {
      ar: 'المخرجات النهائية',
      en: 'Final Concrete Outcomes'
    },
    icon: Award,
    accent: '#A855F7',
    aqavia: {
      ar: 'مشاريع حية وموثقة في معرض الأعمال (GitHub / Portfolio) تدعم الـ CV بقوة.',
      en: 'Production repos documented on GitHub & live portfolio that powerfully backs your CV.'
    },
    traditional: {
      ar: 'شهادة حضور دورة غالباً لا تعترف بها الشركات بدون مشاريع.',
      en: 'Paper attendance certificates usually overlooked by hiring leads without live code proof.'
    }
  }
]
</script>

<template>
  <section 
    id="internship" 
    class="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
  >
    <!-- Background Ambient Glow -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#12295D]/30 via-[#F3CE66]/15 to-[#2B5DE0]/20 blur-[140px] rounded-full pointer-events-none -z-10"></div>

    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12295D]/50 border border-[#F3CE66]/35 shadow-inner">
        <Sparkles class="w-4 h-4 text-[#F3CE66]" />
        <span class="text-xs sm:text-sm font-bold text-[#F3CE66] tracking-wide uppercase">
          {{ isArabic ? 'مفهوم التدريب الداخلي وفارق الكورسات' : 'The Internship Concept & Course Differentiation' }}
        </span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-[#0B1A3D] tracking-tight leading-tight">
        <span>{{ isArabic ? 'الفارق الجوهري: ' : 'The Fundamental Difference: ' }}</span>
        <span class="gold-gradient-text">{{ isArabic ? 'لسنا دورة تعليمية، بل بيئة عمل حقيقية' : 'Not a Course, An Authentic Tech Environment' }}</span>
      </h2>

      <p class="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
        {{ isArabic 
          ? 'صُممت أكافيا لمن يملك المعرفة الأساسية ويبحث عن القفزة الحقيقية نحو الاحتراف وسوق العمل: العمل على كود إنتاجي ضخم، بمراجعات صارمة ومحاكاة دقيقة لشركات البرمجة.'
          : 'Aqavia is engineered for aspiring developers who already possess fundamentals and seek the decisive leap to production: building large-scale codebases under senior scrutiny.'
        }}
      </p>
    </div>

    <!-- ⚠️ Prominent Banner Alert (تنبيه هام ومحكم للمتقدمين) -->
    <div class="mb-14 sm:mb-16 p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-[#2A1805]/90 via-[#181106]/95 to-[#2A1805]/90 border-2 border-[#F59E0B]/60 shadow-2xl shadow-amber-950/40 relative overflow-hidden">
      <!-- Glow accent -->
      <div class="absolute -top-12 -right-12 w-40 h-40 bg-[#F59E0B]/20 rounded-full blur-2xl pointer-events-none"></div>

      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 relative z-10">
        <div class="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center shrink-0 shadow-lg">
          <AlertTriangle class="w-6 h-6 text-amber-400" />
        </div>

        <div class="space-y-1.5 flex-1 text-start">
          <div class="flex items-center gap-2">
            <span class="text-xs font-black px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase tracking-wider">
              {{ isArabic ? 'تنبيه هام للمتقدمين' : 'Important Notice for Applicants' }}
            </span>
          </div>

          <p class="text-xs sm:text-sm text-amber-100 font-medium leading-relaxed">
            {{ isArabic 
              ? 'مسارات البرمجة، الذكاء الاصطناعي، وتصميم الـ UI/UX ليست دورات لشرح الأساسيات للمبتدئين من الصفر؛ بل تتطلب معرفتك بمبادئ التخصص لتنخرط فوراً في كتابة الكود وبناء المشاريع. (الاستثناء الوحيد هو مسار الهندسة المعمارية الذي يبدأ معك من الصفر التام).'
              : 'Our programming, AI, and UI/UX tracks are not entry-level beginner courses explaining syntax from scratch; they require foundational familiarity so you can immediately dive into production code and capstones. (The sole exception is the Architecture Track which starts from ground zero).'
            }}
          </p>
        </div>
      </div>
    </div>

    <!-- Structured Comparison Matrix Table (Desktop & Tablet) -->
    <div class="hidden md:block overflow-hidden rounded-3xl border border-[#F3CE66]/30 bg-[#080D1C]/90 backdrop-blur-xl shadow-2xl shadow-black/80 mb-12">
      <div class="grid grid-cols-12 bg-slate-900/80 border-b border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-300">
        <div class="col-span-3 p-4 ps-6 flex items-center gap-2 text-slate-400">
          <Layers class="w-4 h-4 text-[#F3CE66]" />
          <span>{{ isArabic ? 'محور المقارنة' : 'Comparison Criterion' }}</span>
        </div>
        <div class="col-span-5 p-4 flex items-center gap-2 bg-[#12224A]/40 text-[#F3CE66] border-x border-slate-800/80 font-black">
          <CheckCircle2 class="w-4 h-4 text-[#F3CE66]" />
          <span>{{ isArabic ? 'التدريب الداخلي في أكافيا (Internship)' : 'Aqavia Internship Model' }}</span>
        </div>
        <div class="col-span-4 p-4 flex items-center gap-2 text-slate-400">
          <XCircle class="w-4 h-4 text-red-400" />
          <span>{{ isArabic ? 'الدورات والكورسات التقليدية' : 'Traditional Courses & Videos' }}</span>
        </div>
      </div>

      <div 
        v-for="(item, idx) in comparisonAxes" 
        :key="idx"
        class="grid grid-cols-12 border-b last:border-b-0 border-slate-800/80 transition-colors hover:bg-white/[0.02]"
      >
        <!-- Axis Title -->
        <div class="col-span-3 p-5 ps-6 flex items-center gap-3">
          <div 
            class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border shadow-sm"
            :style="{ backgroundColor: `${item.accent}15`, borderColor: `${item.accent}40`, color: item.accent }"
          >
            <component :is="item.icon" class="w-4 h-4" />
          </div>
          <span class="text-sm font-bold text-white">
            {{ isArabic ? item.axis.ar : item.axis.en }}
          </span>
        </div>

        <!-- Aqavia Column (Highlighted Winner) -->
        <div class="col-span-5 p-5 bg-[#101C3A]/30 border-x border-slate-800/80 flex items-start gap-3">
          <div class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
            <CheckCircle2 class="w-3.5 h-3.5" />
          </div>
          <p class="text-xs sm:text-sm text-slate-100 font-semibold leading-relaxed">
            {{ isArabic ? item.aqavia.ar : item.aqavia.en }}
          </p>
        </div>

        <!-- Traditional Courses Column -->
        <div class="col-span-4 p-5 flex items-start gap-3 bg-black/10">
          <div class="w-5 h-5 rounded-full bg-red-500/15 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
            <span class="text-xs font-black">✕</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
            {{ isArabic ? item.traditional.ar : item.traditional.en }}
          </p>
        </div>
      </div>
    </div>

    <!-- Mobile Comparison Cards (Under md) -->
    <div class="md:hidden space-y-5 mb-12">
      <div 
        v-for="(item, idx) in comparisonAxes" 
        :key="idx"
        class="p-5 rounded-3xl bg-[#080D1C] border border-slate-800 shadow-xl space-y-4"
      >
        <div class="flex items-center gap-2.5 pb-3 border-b border-slate-800">
          <div 
            class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border"
            :style="{ backgroundColor: `${item.accent}15`, borderColor: `${item.accent}40`, color: item.accent }"
          >
            <component :is="item.icon" class="w-4 h-4" />
          </div>
          <h3 class="text-sm font-bold text-white">
            {{ isArabic ? item.axis.ar : item.axis.en }}
          </h3>
        </div>

        <!-- Aqavia Point -->
        <div class="p-3.5 rounded-2xl bg-[#12224A]/40 border border-[#F3CE66]/25 space-y-1">
          <div class="flex items-center gap-1.5 text-[11px] font-bold text-[#F3CE66]">
            <CheckCircle2 class="w-3.5 h-3.5 text-emerald-400" />
            <span>{{ isArabic ? 'في أكافيا' : 'In Aqavia' }}</span>
          </div>
          <p class="text-xs text-slate-100 font-medium leading-relaxed">
            {{ isArabic ? item.aqavia.ar : item.aqavia.en }}
          </p>
        </div>

        <!-- Traditional Point -->
        <div class="p-3.5 rounded-2xl bg-black/25 border border-red-500/15 space-y-1">
          <div class="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
            <XCircle class="w-3.5 h-3.5 text-red-400" />
            <span>{{ isArabic ? 'في الكورسات التقليدية' : 'Traditional Courses' }}</span>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed font-normal">
            {{ isArabic ? item.traditional.ar : item.traditional.en }}
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom Action CTA -->
    <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0C152B] via-[#0E1B38] to-[#0C152B] border border-[#F3CE66]/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start">
      <div class="space-y-1">
        <h4 class="text-base sm:text-lg font-black text-white">
          {{ isArabic ? 'هل تملك الأساسيات وجاهز لبناء مشاريع حقيقية؟' : 'Ready to transition from basic theory to real production?' }}
        </h4>
        <p class="text-xs sm:text-sm text-slate-300">
          {{ isArabic ? 'اختر مسارك المتخصص وابدأ العمل مع فريق وإشراف كبار المهندسين.' : 'Select your specialization track and join structured engineering sprints.' }}
        </p>
      </div>

      <div class="flex items-center gap-3 shrink-0">
        <a 
          href="#tracks"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm
                 bg-gradient-to-r from-[#C89B3C] via-[#F3CE66] to-[#C89B3C] text-[#050811]
                 shadow-lg shadow-[#F3CE66]/20 hover:shadow-[#F3CE66]/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <span>{{ isArabic ? 'استكشف المسارات الـ 7' : 'Explore The 7 Tracks' }}</span>
          <ArrowUpRight class="w-4 h-4" />
        </a>

        <button 
          @click="openModal"
          type="button"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-xs sm:text-sm
                 bg-slate-900 text-slate-200 border border-slate-700 hover:border-[#F3CE66]/50 hover:text-white transition-all cursor-pointer"
        >
          <span>{{ isArabic ? 'سجّل الآن' : 'Apply Now' }}</span>
        </button>
      </div>
    </div>
  </section>
</template>
