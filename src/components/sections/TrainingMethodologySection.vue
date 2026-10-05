<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage'
import { 
  Users, 
  GitBranch, 
  GitPullRequest, 
  Award, 
  ArrowLeft, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-vue-next'

const { isArabic } = useLanguage()

const workflowStages = [
  {
    stage: '01',
    accentColor: '#38BDF8',
    icon: Users,
    title: {
      ar: 'المرحلة 1: التقييم وفرز الفرق المتكاملة',
      en: 'Stage 1: Assessment & Cross-Functional Squad Formation',
    },
    desc: {
      ar: 'مراجعة استمارة المتقدم للتأكد من امتلاكه الأساسيات المناسبة، ثم توزيعه ضمن فريق عمل مصغر يضم تخصصات متكاملة (Frontend, Backend, UI/UX) لضمان بيئة عمل تشاركية تحاكي الشركات الحقيقية.',
      en: 'Evaluating candidate applications to verify foundational skills, then embedding each talent into cross-functional squads (Frontend, Backend, UI/UX) mirroring real software house dynamics.',
    },
    deliverables: [
      { ar: 'فحص استمارة المتقدم للتأكد من المعرفة التأسيسية', en: 'Application audit for foundational readiness' },
      { ar: 'تكوين فرق عمل مصغرة متكاملة التخصصات', en: 'Cross-functional agile pod assignment' },
    ]
  },
  {
    stage: '02',
    accentColor: '#F3CE66',
    icon: GitBranch,
    title: {
      ar: 'المرحلة 2: تحليل المشروع وتوزيع المهام (Agile)',
      en: 'Stage 2: Project Breakdown & Agile Task Allocation',
    },
    desc: {
      ar: 'تفكيك فكرة المشروع إلى User Stories ومهام محددة يتم توزيعها أسبوعياً، مع تحديد المواعيد النهائية (Deadlines) وجلسات Sprint Planning للمتابعة الدورية.',
      en: 'Deconstructing the product roadmap into concrete User Stories and sprint tickets, establishing clear deadlines, and executing weekly Sprint Planning sessions.',
    },
    deliverables: [
      { ar: 'تفكيك المتطلبات إلى تذاكر User Stories أسبوعية', en: 'Feature breakdown into sprint backlog tickets' },
      { ar: 'جلسات تخطيط سبرنت (Sprint Planning) ومواعيد نهائية', en: 'Weekly sprint planning & deadline commitments' },
    ]
  },
  {
    stage: '03',
    accentColor: '#42B883',
    icon: GitPullRequest,
    title: {
      ar: 'المرحلة 3: كتابة الكود ومراجعة الجودة (Code Review)',
      en: 'Stage 3: Implementation & Strict 1-on-1 Code Review',
    },
    desc: {
      ar: 'كتابة كود فعلي ورفعه عبر GitHub، مع إخضاع كل Pull Request لمراجعة دقيقة من المدربين المشرفين لتقديم ملاحظات فورية على بنية الكود، الأمان، وسرعة الاستجابة.',
      en: 'Writing production code tracked on GitHub, submitting PRs to comprehensive line-by-line inspection from senior mentors covering architecture, security, and performance.',
    },
    deliverables: [
      { ar: 'إخضاع كل Pull Request لمراجعة كود سطر بسطر', en: 'Line-by-line PR audits on GitHub' },
      { ar: 'ملاحظات فورية لتحسين المعمارية والأداء والأمان', en: 'Actionable feedback on system design & security' },
    ]
  },
  {
    stage: '04',
    accentColor: '#A855F7',
    icon: Award,
    title: {
      ar: 'المرحلة 4: إطلاق المشروع، البورتفوليو، والشهادة',
      en: 'Stage 4: Product Launch, Verified Portfolio & Certification',
    },
    desc: {
      ar: 'نشر المشروع وتجريبه، وتوثيقه كعمل حقيقي ضمن سيرة المتدرب ومعرض أعماله (GitHub / Portfolio)، مع منحه شهادة إتمام تدريب داخلي معتمدة من شركة أكافيا.',
      en: 'Staging deployment, end-to-end user testing, documenting real projects on GitHub and portfolio, culminating in an accredited Internship Completion Certificate from AQAVIA LLC.',
    },
    deliverables: [
      { ar: 'نشر وتوثيق كود المشروع في Portfolio و GitHub', en: 'Live production repo & portfolio artifact' },
      { ar: 'شهادة إتمام تدريب داخلي رسمية ومعتمدة من أكافيا', en: 'Official accredited internship completion certificate' },
    ]
  }
]
</script>

<template>
  <section 
    id="methodology" 
    class="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
  >
    <!-- Background Gradient Glow -->
    <div class="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-[#12295D]/25 blur-[140px] rounded-full pointer-events-none -z-10"></div>

    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12295D]/40 border border-[#F3CE66]/30 shadow-inner">
        <Sparkles class="w-4 h-4 text-[#F3CE66]" />
        <span class="text-xs sm:text-sm font-bold text-[#F3CE66] tracking-wide uppercase">
          {{ isArabic ? 'منهجية وسير التدريب العملي' : 'Practical Internship Lifecycle' }}
        </span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-[#0B1A3D] tracking-tight leading-tight">
        <span>{{ isArabic ? 'تسلسل تجربة المتدرب في ' : 'Your Apprenticeship Journey in ' }}</span>
        <span class="gold-gradient-text">{{ isArabic ? '4 مراحل مؤسسية واضحة' : '4 Clear Enterprise Stages' }}</span>
      </h2>

      <p class="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
        {{ isArabic 
          ? 'نظام عمل مؤسسي متكامل يضمن انتقالك من مجرد فهم الأساسيات إلى كتابة كود إنتاجي معتمد، تماماً كما تعمل الفرق البرمجية في كبرى الشركات التقنية.'
          : 'A disciplined operational workflow ensuring your progression from fundamental concepts to shipping production-ready code in an authentic Agile environment.'
        }}
      </p>
    </div>

    <!-- 4 Stages Timeline / Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
      <div 
        v-for="step in workflowStages" 
        :key="step.stage"
        class="relative p-7 sm:p-8 rounded-3xl bg-[#080D1C] dark:bg-[#080D1C] light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl flex flex-col justify-between group hover:border-[#F3CE66]/50 transition-all duration-300 overflow-hidden"
      >
        <!-- Top accent bar -->
        <div 
          class="absolute top-0 inset-x-8 h-1 transition-all group-hover:h-1.5"
          :style="{ background: `linear-gradient(90deg, transparent, ${step.accentColor}, transparent)` }"
        ></div>

        <div class="space-y-5">
          <!-- Stage number and Icon -->
          <div class="flex items-center justify-between">
            <span 
              class="text-3xl sm:text-4xl font-black font-mono tracking-tight"
              :style="{ color: step.accentColor }"
            >
              {{ step.stage }}
            </span>
            <div 
              class="w-12 h-12 rounded-2xl flex items-center justify-center border shadow-md group-hover:scale-110 transition-transform duration-300"
              :style="{ backgroundColor: `${step.accentColor}15`, borderColor: `${step.accentColor}40`, color: step.accentColor }"
            >
              <component :is="step.icon" class="w-6 h-6" />
            </div>
          </div>

          <!-- Title -->
          <h3 class="text-lg sm:text-xl font-black text-white dark:text-white light:text-slate-900 group-hover:text-[#F3CE66] transition-colors leading-snug text-start">
            {{ isArabic ? step.title.ar : step.title.en }}
          </h3>

          <!-- Description -->
          <p class="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-normal text-start">
            {{ isArabic ? step.desc.ar : step.desc.en }}
          </p>

          <!-- Deliverables -->
          <div class="space-y-2 pt-4 border-t border-slate-800/80 text-start">
            <div 
              v-for="(item, idx) in step.deliverables" 
              :key="idx"
              class="flex items-start gap-2.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700"
            >
              <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{{ isArabic ? item.ar : item.en }}</span>
            </div>
          </div>
        </div>

        <!-- Footer indicator -->
        <div class="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span class="font-medium text-slate-400">{{ isArabic ? 'معيار عمل إلزامي' : 'Mandatory Standard' }}</span>
          <span 
            class="font-bold inline-flex items-center gap-1"
            :style="{ color: step.accentColor }"
          >
            <span>{{ isArabic ? 'الخطوة التالية' : 'Next Step' }}</span>
            <component :is="isArabic ? ArrowLeft : ArrowRight" class="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
