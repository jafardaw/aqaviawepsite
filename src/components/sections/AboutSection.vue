<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage'
import { 
  Building2, 
  GraduationCap, 
  Laptop, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  GitBranch, 
  ShieldCheck, 
  Target,
  Sparkles
} from 'lucide-vue-next'

const { isArabic } = useLanguage()

const operationalArms = [
  {
    num: '01',
    id: 'internship-arm',
    tag: { ar: 'المسار الأول', en: 'Track 01' },
    title: {
      ar: '1. ذراع التدريب العملي الداخلي (Internships)',
      en: '1. Practical Internship & Apprenticeship Arm',
    },
    desc: {
      ar: 'برامج تدريبية موجهة لمن يملك الأساسيات ويريد العمل على مشاريع إنتاجية، بناء بورتفوليو احترافي، والتعلم وفق أدوات الفرق البرمجية العالمية.',
      en: 'Hands-on apprenticeship programs tailored for candidates with foundational knowledge looking to build production capstones, assemble strong portfolios, and adopt modern dev tools.',
    },
    actionText: { ar: 'استكشف مسارات التدريب', en: 'Explore Tracks' },
    link: '#tracks',
    accent: '#F3CE66',
    icon: GraduationCap,
    features: [
      { ar: 'العمل على مشاريع إنتاجية بمعمارية Clean Architecture', en: 'Production-grade Clean Architecture projects' },
      { ar: 'مراجعة كود فردية دورية ومباشرة (Code Review)', en: 'Direct 1-on-1 regular senior code reviews' },
      { ar: 'محاكاة لبيئة العمل في الفرق البرمجية العالمية', en: 'Real-world Agile workflow and team simulation' },
    ]
  },
  {
    num: '02',
    id: 'b2b-arm',
    tag: { ar: 'المسار الثاني', en: 'Track 02' },
    title: {
      ar: '2. ذراع تطوير البرمجيات والحلول الرقمية',
      en: '2. Custom Software & Digital Solutions Arm',
    },
    desc: {
      ar: 'تصميم وبناء تطبيقات الويب، الهواتف الذكية، وحلول الذكاء الاصطناعي للمؤسسات والشركات الناشئة بأعلى معايير الجودة والأداء.',
      en: 'Designing and engineering scalable web apps, mobile solutions, and applied AI systems for startups and enterprises with uncompromising quality.',
    },
    actionText: { ar: 'استكشف خدمات الشركات', en: 'Explore B2B Solutions' },
    link: '#b2b',
    accent: '#38BDF8',
    icon: Laptop,
    features: [
      { ar: 'تطوير تطبيقات Flutter فائقة الأداء وويب متكامل', en: 'High-performance Flutter mobile & full-stack web' },
      { ar: 'أنظمة سحابية موزعة وحلول الذكاء الاصطناعي', en: 'Distributed cloud systems & applied AI pipelines' },
      { ar: 'كفاءات هندسية مدربة وفرق عمل مخصصة', en: 'Vetted dedicated squads and tech consulting' },
    ]
  }
]

const pillars = [
  {
    step: '01',
    title: {
      ar: 'المعمارية النظيفة (Clean Architecture)',
      en: 'Clean Architecture First',
    },
    desc: {
      ar: 'الانتقال من كتابة الأكواد العشوائية إلى التصميم المعماري الرصين للأنظمة وفق مبادئ SOLID و Domain-Driven Design.',
      en: 'Moving beyond unorganized scripts to robust modular system design following SOLID and Domain-Driven principles.',
    },
    icon: Layers,
    accent: '#38BDF8',
  },
  {
    step: '02',
    title: {
      ar: 'سبرنتات واقعية (Agile Sprints)',
      en: 'Realistic Agile Sprints',
    },
    desc: {
      ar: 'معايشة بيئة العمل بأسلوب الـ Agile تماماً كما في الشركات، مع تذاكر مهام محددة المعايير وتحديات إنتاجية حقيقية.',
      en: 'Living genuine Agile sprint cycles with structured task tickets, PR workflows, and realistic production blockers.',
    },
    icon: GitBranch,
    accent: '#F3CE66',
  },
  {
    step: '03',
    title: {
      ar: 'مراجعة دورية للكود (Code Review)',
      en: 'Direct Code Review',
    },
    desc: {
      ar: 'كل ميزة برمجية تُراجع سطر بسطر من مهندس مشرف لتقديم الملاحظات وإعادة الهيكلة وتحسين جودة الكود المكتوب.',
      en: 'Line-by-line inspection on pull requests by senior engineers to guide refactoring and adhere to industry standards.',
    },
    icon: ShieldCheck,
    accent: '#42B883',
  },
  {
    step: '04',
    title: {
      ar: 'التأهيل لسوق العمل (Career Readiness)',
      en: 'Job Market Readiness',
    },
    desc: {
      ar: 'تأهيل عملي يمنحك بورتفوليو برمجياً حقيقياً على GitHub، والجاهزية التامة لمناقشة التفاصيل المعمارية في مقابلات التوظيف.',
      en: 'Graduating with verified production code on GitHub and confidence defending system decisions in technical interviews.',
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
          {{ isArabic ? 'عن أكافيا (Who We Are)' : 'Who We Are — About AQAVIA' }}
        </span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-[#0B1A3D] tracking-tight leading-tight">
        <span>{{ isArabic ? 'شركة تقنية بنموذج عمل ' : 'A Registered Tech Company Built On ' }}</span>
        <span class="gold-gradient-text">{{ isArabic ? 'حديث، واقعي وشفاف' : 'Modern, Realistic Standards' }}</span>
      </h2>

      <!-- The Core Approved Institutional Paragraph -->
      <div class="p-6 sm:p-8 rounded-3xl bg-slate-900/40 dark:bg-slate-900/50 light:bg-slate-100/80 border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl text-start">
        <p class="text-sm sm:text-base text-slate-200 dark:text-slate-200 light:text-slate-700 leading-relaxed font-normal">
          {{ isArabic 
            ? 'أكافيا (AQAVIA) هي شركة تقنية مسجلة رسمياً في الولايات المتحدة الأمريكية (New Mexico)، تعمل بنموذج العمل الحديث عن بُعد (Remote-first). انطلقت فكرة الشركة من واقع ملموس يعايشه معظم الخريجين والمهتمين بالتقنية: الفجوة الواسعة بين ما تقدمه الكورسات الأكاديمية النظرية، وبين المعايير الحقيقية المطلوبة لاجتياز مقابلات العمل في الشركات البرمجية.'
            : 'AQAVIA is an officially registered technology company in the United States (New Mexico), operating under a modern remote-first model. The inception of the company emerged from a tangible reality faced by graduates and software enthusiasts: the substantial divide between passive academic coursework and the rigorous practical standards required to succeed in software engineering interviews.'
          }}
        </p>
      </div>
    </div>

    <!-- The Two Operational Arms (تعمل الشركة وفق مسارين رئيسيين متكاملين) -->
    <div class="space-y-6 mb-20">
      <div class="text-center sm:text-start">
        <h3 class="text-xl sm:text-2xl font-black text-white dark:text-white light:text-slate-900 flex items-center justify-center sm:justify-start gap-2.5">
          <Sparkles class="w-5 h-5 text-[#F3CE66]" />
          <span>{{ isArabic ? 'تعمل الشركة وفق مسارين رئيسيين متكاملين:' : 'Our Integrated Core Operations:' }}</span>
        </h3>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div 
          v-for="arm in operationalArms" 
          :key="arm.id"
          class="relative p-7 sm:p-8 rounded-3xl bg-[#080D1C] dark:bg-[#080D1C] light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl flex flex-col justify-between group hover:border-[#F3CE66]/40 transition-all duration-300"
        >
          <div>
            <div class="flex items-center justify-between mb-5">
              <span class="text-xs font-bold px-3 py-1 rounded-full border"
                    :style="{ backgroundColor: `${arm.accent}15`, borderColor: `${arm.accent}40`, color: arm.accent }">
                {{ isArabic ? arm.tag.ar : arm.tag.en }}
              </span>
              <div 
                class="w-12 h-12 rounded-2xl flex items-center justify-center border shadow-md group-hover:scale-105 transition-transform"
                :style="{ backgroundColor: `${arm.accent}15`, borderColor: `${arm.accent}40`, color: arm.accent }"
              >
                <component :is="arm.icon" class="w-6 h-6" />
              </div>
            </div>

            <h4 class="text-xl font-black text-white dark:text-white light:text-slate-900 mb-3 group-hover:text-[#F3CE66] transition-colors">
              {{ isArabic ? arm.title.ar : arm.title.en }}
            </h4>

            <p class="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-6 font-normal">
              {{ isArabic ? arm.desc.ar : arm.desc.en }}
            </p>

            <div class="space-y-2.5 pt-4 border-t border-slate-800/80">
              <div 
                v-for="(feature, fIdx) in arm.features" 
                :key="fIdx"
                class="flex items-center gap-2.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700"
              >
                <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{{ isArabic ? feature.ar : feature.en }}</span>
              </div>
            </div>
          </div>

          <div class="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-end">
            <a 
              :href="arm.link"
              class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-[#F3CE66] transition-colors cursor-pointer"
            >
              <span>{{ isArabic ? arm.actionText.ar : arm.actionText.en }}</span>
              <ArrowUpRight class="w-4 h-4 text-[#F3CE66]" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 4-Stage Methodology Grid (Transparent Foundation) -->
    <div class="space-y-8">
      <div class="text-center max-w-2xl mx-auto">
        <h3 class="text-xl sm:text-2xl font-black text-white dark:text-white light:text-slate-900">
          {{ isArabic ? 'الركائز الهندسية لبيئة العمل' : 'Our Engineering Methodology' }}
        </h3>
        <p class="text-xs sm:text-sm text-slate-400 mt-1">
          {{ isArabic ? 'معايير عمل واضحة وصارمة تنقل المطور من التلقي النظري إلى الاحتراف البرمجي' : 'Clear standards guiding candidates from theoretical basics to engineering competency' }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="pillar in pillars" 
          :key="pillar.step"
          class="relative p-6 sm:p-7 rounded-3xl bg-[#090E1D]/90 dark:bg-[#090E1D]/95 light:bg-white/90 border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl hover:border-[#F3CE66]/40 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
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
            <span>{{ isArabic ? 'معيار تطبيقي واقعي' : 'Core Pillar' }}</span>
            <CheckCircle2 class="w-3.5 h-3.5 text-emerald-400" />
          </div>
        </div>
      </div>
    </div>

    <!-- Company Stats / Highlight Band (Realistic & Credible) -->
    <div class="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#12295D]/30 via-[#0A1021] to-[#12295D]/30 border border-[#F3CE66]/25 shadow-2xl flex flex-wrap items-center justify-around gap-8 text-center">
      <div>
        <div class="text-2xl sm:text-3xl font-black text-[#F3CE66] font-mono">New Mexico, USA</div>
        <div class="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium mt-1">
          {{ isArabic ? 'كيان تقني مسجل رسمياً' : 'Officially Registered Entity' }}
        </div>
      </div>
      <div class="h-10 w-px bg-slate-800 hidden sm:block"></div>
      <div>
        <div class="text-2xl sm:text-3xl font-black text-[#60A5FA] font-mono">Remote-First</div>
        <div class="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium mt-1">
          {{ isArabic ? 'نموذج العمل الحديث عن بُعد' : 'Modern Remote-First Model' }}
        </div>
      </div>
      <div class="h-10 w-px bg-slate-800 hidden sm:block"></div>
      <div>
        <div class="text-2xl sm:text-3xl font-black text-[#42B883] font-mono">100%</div>
        <div class="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium mt-1">
          {{ isArabic ? 'مشاريع حقيقية وكود إنتاجي' : 'Production-Grade Projects' }}
        </div>
      </div>
      <div class="h-10 w-px bg-slate-800 hidden sm:block"></div>
      <div>
        <div class="text-2xl sm:text-3xl font-black text-[#F59E0B] font-mono">Code Review</div>
        <div class="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium mt-1">
          {{ isArabic ? 'إشراف مباشر ومراجعة دورية' : 'Regular Senior Code Reviews' }}
        </div>
      </div>
    </div>
  </section>
</template>
