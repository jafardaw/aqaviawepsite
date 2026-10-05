<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage'
import { useApplicationModal } from '../../composables/useApplicationModal'
import { 
  Briefcase, 
  XCircle, 
  CheckCircle2, 
  GitPullRequest, 
  Cpu, 
  Award, 
  ArrowUpRight,
  Sparkles,
  Zap
} from 'lucide-vue-next'

const { isArabic } = useLanguage()
const { openModal } = useApplicationModal()

const comparisonPoints = [
  {
    traditional: {
      ar: 'مشاهدة فيديوهات مسجلة سلبية بدون تفاعل أو تحديات غير متوقعة',
      en: 'Passive video streaming without hands-on blockers or real architectural dilemmas',
    },
    aqavia: {
      ar: 'محاكاة بيئة العمل الواقعية في كبرى شركات التقنية مع سبرنتات Agile يومية',
      en: 'Real enterprise Agile sprints, ticketing workflows, and production edge-case handling',
    }
  },
  {
    traditional: {
      ar: 'مشاريع نمطية مكررة (To-Do List, Blog) لا تثير اهتمام مديري التوظيف',
      en: 'Toy projects (basic to-do apps) copied line-by-line with zero production viability',
    },
    aqavia: {
      ar: 'بناء مشاريع تخرج ضخمة بمعمارية Clean Architecture وأنظمة موثوقة متعددة المستأجرين',
      en: 'Architecting high-scale capstones with Clean Architecture, microservices, and live data telemetry',
    }
  },
  {
    traditional: {
      ar: 'انعدام مراجعة الكود، مما يرسخ عادات برمجية خاطئة وأسلوب Spaghetti Code',
      en: 'Zero code reviews: bad design patterns go uncorrected and anti-patterns solidify',
    },
    aqavia: {
      ar: 'مراجعة كود شخصية سطر بسطر (1-on-1 Code Review) من مهندسين كبار لكل Pull Request',
      en: 'Strict 1-on-1 Senior Code Review for every single PR before merging to the mainline branch',
    }
  },
  {
    traditional: {
      ar: 'الوقوع في دوامة الشروحات (Tutorial Hell) والعجز أمام مقابلات الـ System Design',
      en: 'Getting stuck in tutorial hell, unable to defend architectural choices in tech interviews',
    },
    aqavia: {
      ar: 'جاهزية احترافية فورية وسجل GitHub موثق وتوصية مهنية على LinkedIn من المشرفين',
      en: 'Production-tested GitHub portfolio, system design fluency, and senior LinkedIn endorsements',
    }
  },
]

const sprintCycle = [
  {
    step: '01',
    title: { ar: 'تخطيط السبرنت والمهام', en: 'Sprint Planning & User Stories' },
    desc: { ar: 'توزيع تذاكر المهام وفق متطلبات واقعية محددة المعايير (Acceptance Criteria).', en: 'Breaking complex features into structured engineering tickets.' },
    icon: Zap,
    color: '#38BDF8'
  },
  {
    step: '02',
    title: { ar: 'التطوير بمعمارية قياسية', en: 'Clean Architecture Build' },
    desc: { ar: 'بناء الميزات وفق مبادئ SOLID و Clean Code وتغطية اختبارات مؤتمتة.', en: 'Implementing modular domain layers and unit/widget test suites.' },
    icon: Cpu,
    color: '#F3CE66'
  },
  {
    step: '03',
    title: { ar: 'مراجعة الكود والـ PRs', en: '1-on-1 Code Review' },
    desc: { ar: 'مناقشة مباشرة مع المشرف لإعادة هيكلة الكود ورفع كفاءة استهلاك الموارد.', en: 'In-depth PR line comments, refactoring feedback, and performance audits.' },
    icon: GitPullRequest,
    color: '#42B883'
  },
  {
    step: '04',
    title: { ar: 'النشر والاعتماد النهائي', en: 'Production Deploy & Portfolio' },
    desc: { ar: 'دمج الكود في بيئة الإنتاج واعتماد الميزة في ملف أعمالك البرمجي الموثق.', en: 'Automated CI/CD staging build and career portfolio milestone unlocked.' },
    icon: Award,
    color: '#A855F7'
  },
]
</script>

<template>
  <section 
    id="internship" 
    class="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
  >
    <!-- Background Glows -->
    <div class="absolute top-1/2 left-0 w-96 h-96 bg-[#12295D]/25 blur-[120px] rounded-full pointer-events-none -z-10"></div>
    <div class="absolute bottom-10 right-0 w-96 h-96 bg-[#F3CE66]/15 blur-[140px] rounded-full pointer-events-none -z-10"></div>

    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12295D]/50 border border-[#F3CE66]/30 shadow-inner">
        <Briefcase class="w-4 h-4 text-[#F3CE66]" />
        <span class="text-xs sm:text-sm font-bold text-[#F3CE66] tracking-wide uppercase">
          {{ isArabic ? 'ما هو التدريب الداخلي في أكافيا؟' : 'The Aqavia Internship Concept' }}
        </span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-[#0B1A3D] tracking-tight leading-tight">
        <span>{{ isArabic ? 'الفارق الجوهري: ' : 'The Decisive Shift: ' }}</span>
        <span class="gold-gradient-text">{{ isArabic ? 'ليس مجرد كورس، بل بيئة عمل حقيقية' : 'Not a Course, A Living Tech Hub' }}</span>
      </h2>

      <p class="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl mx-auto">
        {{ isArabic 
          ? 'معظم المتعلمين يملكون معلومات نظرية لكنهم يتعثرون عند أول مقابلة عمل أو مشروع فعلي. صممنا التدريب الداخلي لسد هذه الفجوة عبر معايشة كاملة لبيئة شركات التكنولوجيا العالمية.'
          : 'Traditional courses dump theoretical knowledge without real context. Aqavia is engineered as an intensive apprenticeship where you ship code under senior guidance.'
        }}
      </p>
    </div>

    <!-- The Side-by-Side Comparison Matrix -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-stretch">
      <!-- Traditional Courses Card -->
      <div class="p-6 sm:p-8 rounded-3xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100/80 border border-red-500/20 shadow-xl flex flex-col justify-between">
        <div class="space-y-6">
          <div class="flex items-center justify-between pb-4 border-b border-red-500/20">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                <XCircle class="w-5 h-5 text-red-400" />
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900">
                {{ isArabic ? 'الكورسات التقليدية واليوتيوب' : 'Traditional Video Courses' }}
              </h3>
            </div>
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
              {{ isArabic ? 'تعليم سلبي' : 'Passive Theory' }}
            </span>
          </div>

          <div class="space-y-4">
            <div 
              v-for="(point, idx) in comparisonPoints" 
              :key="idx"
              class="flex items-start gap-3 p-3.5 rounded-2xl bg-black/20 dark:bg-black/20 light:bg-white/60 border border-red-500/10"
            >
              <div class="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                <span class="text-xs font-black">✕</span>
              </div>
              <p class="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {{ isArabic ? point.traditional.ar : point.traditional.en }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-slate-800 text-center">
          <span class="text-xs text-slate-500 dark:text-slate-500 light:text-slate-600 font-medium">
            {{ isArabic ? 'النتيجة: صعوبة بالغة في إقناع الشركات واجتياز المقابلات' : 'Outcome: Stuck in tutorial purgatory with weak portfolio' }}
          </span>
        </div>
      </div>

      <!-- Aqavia Internship Card -->
      <div class="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0F1A36] via-[#091024] to-[#070B18] border-2 border-[#F3CE66]/40 shadow-2xl shadow-[#F3CE66]/10 flex flex-col justify-between overflow-hidden">
        <!-- Ambient corner light -->
        <div class="absolute top-0 right-0 w-48 h-48 bg-[#F3CE66]/15 blur-3xl pointer-events-none"></div>

        <div class="space-y-6 relative z-10">
          <div class="flex items-center justify-between pb-4 border-b border-[#F3CE66]/30">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#F3CE66]/20 border border-[#F3CE66]/50 flex items-center justify-center shadow-md">
                <CheckCircle2 class="w-5 h-5 text-[#F3CE66]" />
              </div>
              <div>
                <h3 class="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                  <span>{{ isArabic ? 'التدريب الداخلي في أكافيا' : 'The Aqavia Internship' }}</span>
                  <Sparkles class="w-4 h-4 text-[#F3CE66]" />
                </h3>
              </div>
            </div>
            <span class="text-xs font-bold px-3 py-1 rounded-full bg-[#F3CE66]/20 text-[#F3CE66] border border-[#F3CE66]/40 animate-pulse">
              {{ isArabic ? 'خبرة عملية موثقة' : 'Production Grade' }}
            </span>
          </div>

          <div class="space-y-4">
            <div 
              v-for="(point, idx) in comparisonPoints" 
              :key="idx"
              class="flex items-start gap-3 p-3.5 rounded-2xl bg-[#12224A]/40 border border-[#F3CE66]/20 hover:border-[#F3CE66]/40 transition-colors"
            >
              <div class="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 class="w-3.5 h-3.5" />
              </div>
              <p class="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed">
                {{ isArabic ? point.aqavia.ar : point.aqavia.en }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-[#F3CE66]/20 flex items-center justify-between relative z-10">
          <span class="text-xs font-bold text-[#F3CE66]">
            {{ isArabic ? 'النتيجة: مهندس إنتاجي واثق ينافس في كبرى الشركات' : 'Outcome: Senior-vetted, high-impact software engineer' }}
          </span>
          <button 
            @click="openModal" 
            type="button"
            class="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#F3CE66] transition-colors cursor-pointer"
          >
            <span>{{ isArabic ? 'سجل الآن' : 'Apply' }}</span>
            <ArrowUpRight class="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>

    <!-- The 4-Stage Apprenticeship Agile Lifecycle -->
    <div class="mt-8 space-y-8">
      <div class="text-center max-w-xl mx-auto">
        <h3 class="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900">
          {{ isArabic ? 'كيف تسير دورة العمل خلال التدريب؟' : 'How the Weekly Apprenticeship Sprints Work' }}
        </h3>
        <p class="text-xs sm:text-sm text-slate-400 mt-2">
          {{ isArabic ? 'نظام أسبوعي متكامل يحاكي سير العمل في شركات وادي السيليكون' : 'A structured weekly rhythm mirroring high-velocity tech teams' }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="sprint in sprintCycle" 
          :key="sprint.step"
          class="p-6 rounded-3xl bg-[#090E1D] border border-slate-800 hover:border-[#F3CE66]/40 transition-all duration-300 relative group"
        >
          <div class="flex items-center justify-between mb-4">
            <span class="text-2xl font-black text-slate-700 group-hover:text-[#F3CE66] transition-colors">
              {{ sprint.step }}
            </span>
            <div 
              class="w-10 h-10 rounded-xl flex items-center justify-center border"
              :style="{ backgroundColor: `${sprint.color}15`, borderColor: `${sprint.color}40`, color: sprint.color }"
            >
              <component :is="sprint.icon" class="w-5 h-5" />
            </div>
          </div>

          <h4 class="text-base font-bold text-white mb-2">
            {{ isArabic ? sprint.title.ar : sprint.title.en }}
          </h4>
          <p class="text-xs text-slate-400 leading-relaxed">
            {{ isArabic ? sprint.desc.ar : sprint.desc.en }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
