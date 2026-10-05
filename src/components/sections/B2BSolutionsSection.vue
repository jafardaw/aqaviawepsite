<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage'
import { 
  Building2, 
  Smartphone, 
  Cpu, 
  Palette, 
  MessageSquare, 
  ArrowUpRight,
  Sparkles,
  CheckCircle2
} from 'lucide-vue-next'

const { isArabic } = useLanguage()

const services = [
  {
    icon: Smartphone,
    accent: '#38BDF8',
    title: {
      ar: 'تطوير تطبيقات الويب والهواتف',
      en: 'Web & Mobile Application Engineering',
    },
    desc: {
      ar: 'بناء تطبيقات تفاعلية متجاوبة للأنظمة السحابية والجوّال (iOS & Android) بالاعتماد على أحدث أطر العمل (React, Flutter, Laravel).',
      en: 'Engineering responsive, interactive web and mobile systems for iOS & Android utilizing state-of-the-art frameworks (React, Flutter, Laravel).',
    },
    techTags: ['Flutter', 'React.js', 'Laravel', 'RESTful APIs', 'Cross-Platform'],
    features: [
      { ar: 'تطبيقات جوّال فائقة السرعة والأداء', en: 'Ultra-fast native-feel mobile applications' },
      { ar: 'منظومات ويب سحابية متجاوبة وآمنة', en: 'Responsive and secure cloud web architectures' },
      { ar: 'معمارية نظيفة تضمن سهولة الصيانة والتوسع', en: 'Clean architecture ensuring scalable maintainability' },
    ]
  },
  {
    icon: Cpu,
    accent: '#A855F7',
    title: {
      ar: 'حلول الذكاء الاصطناعي والأتمتة',
      en: 'Applied AI & Process Automation',
    },
    desc: {
      ar: 'تطوير نماذج ذكاء اصطناعي مخصصة للمؤسسات، أتمتة العمليات المتكررة، وتكامل أنظمة الـ LLMs لتحسين الإنتاجية.',
      en: 'Developing custom enterprise AI models, cognitive workflow automation, and seamless integration of LLMs to dramatically boost productivity.',
    },
    techTags: ['Custom LLMs', 'RAG Pipelines', 'Automated Agents', 'Python', 'FastAPI'],
    features: [
      { ar: 'أتمتة العمليات والمهام المؤسسية المتكررة', en: 'End-to-end cognitive corporate task automation' },
      { ar: 'تكامل النماذج اللغوية (LLMs) وقواعد المعرفة', en: 'Enterprise RAG knowledge base integrations' },
      { ar: 'حماية خصوصية وأمان بيانات الشركات', en: 'Strict enterprise data privacy and local sandboxing' },
    ]
  },
  {
    icon: Palette,
    accent: '#F59E0B',
    title: {
      ar: 'تصميم المنتجات الرقمية (UI/UX)',
      en: 'Digital Product Design (UI/UX)',
    },
    desc: {
      ar: 'تصميم واجهات وتجارب استخدام متطورة تركز على سهولة الاستخدام وزيادة معدل التحويل لرواد الأعمال والشركات.',
      en: 'Crafting sophisticated interfaces and intuitive user journeys engineered to maximize user adoption and conversion rates for ambitious brands.',
    },
    techTags: ['Figma Pro', 'Design Systems', 'UX Research', 'Prototyping', 'Conversion Optimization'],
    features: [
      { ar: 'أبحاث مستخدم معمقة وتصميم رحلة العميل', en: 'Qualitative user research and friction-free journeys' },
      { ar: 'بناء Design Systems متكاملة وقابلة للتوسع', en: 'Modular scalable component design systems' },
      { ar: 'رفع معدلات التحويل وسهولة الاستخدام', en: 'Conversion rate optimization & developer-ready handoff' },
    ]
  }
]

const handleContactB2B = () => {
  const phone = '963988588859'
  const message = isArabic.value 
    ? 'مرحباً إدارة أكافيا، أود طلب استشارة تقنية وبحث حلول برمجية ورقمية مخصصة لشركتي.'
    : 'Hello Aqavia Leadership, I would like to request an enterprise tech consultation regarding custom software development for my business.'
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}
</script>

<template>
  <section 
    id="b2b" 
    class="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
  >
    <!-- Background Gradient Ambience -->
    <div class="absolute -top-24 right-1/4 w-[600px] h-[350px] bg-[#12295D]/30 blur-[130px] rounded-full pointer-events-none -z-10"></div>
    <div class="absolute bottom-10 left-1/4 w-[500px] h-[300px] bg-[#C89B3C]/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>

    <!-- Section Header (Clear B2B Separation) -->
    <div class="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12295D]/50 border border-[#F3CE66]/30 shadow-inner">
        <Building2 class="w-4 h-4 text-[#F3CE66]" />
        <span class="text-xs sm:text-sm font-bold text-[#F3CE66] tracking-wide uppercase">
          {{ isArabic ? 'خدمات الأعمال للشركات (B2B Solutions)' : 'Enterprise B2B Technology Solutions' }}
        </span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-[#0B1A3D] tracking-tight leading-tight">
        <span>{{ isArabic ? 'حلول برمجية ورقمية تقود ' : 'Engineering High-Performance ' }}</span>
        <span class="gold-gradient-text">{{ isArabic ? 'نمو وتوسع الشركات' : 'Digital Growth' }}</span>
      </h2>

      <p class="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
        {{ isArabic 
          ? 'لضمان الفصل التام بين مسار التدريب وخدمات قطاع الأعمال؛ تخصص أكافيا فريقاً هندسياً مستقلاً لتنفيذ المشاريع التقنية المعقدة للشركات والمؤسسات ورواد الأعمال بأعلى معايير الجودة العالمية.'
          : 'Dedicated enterprise engineering: Aqavia operates an independent digital practice delivering robust web & mobile architectures, AI systems, and conversion-focused UX design.'
        }}
      </p>
    </div>

    <!-- 3 Core Services Grid (Focused & High Impact) -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
      <div 
        v-for="(service, idx) in services" 
        :key="idx"
        class="relative p-7 sm:p-8 rounded-3xl bg-[#080D1C] dark:bg-[#080D1C] light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl flex flex-col justify-between group hover:border-[#F3CE66]/50 transition-all duration-300 overflow-hidden"
      >
        <!-- Top accent line -->
        <div 
          class="absolute top-0 inset-x-8 h-1 transition-all group-hover:h-1.5"
          :style="{ background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)` }"
        ></div>

        <div>
          <div class="flex items-center justify-between mb-6">
            <div 
              class="w-12 h-12 rounded-2xl flex items-center justify-center border group-hover:scale-110 transition-transform duration-300 shadow-md"
              :style="{ backgroundColor: `${service.accent}15`, borderColor: `${service.accent}40`, color: service.accent }"
            >
              <component :is="service.icon" class="w-6 h-6" />
            </div>
            <span class="text-xs font-bold text-slate-500 group-hover:text-[#F3CE66] transition-colors font-mono">
              SERVICE // 0{{ idx + 1 }}
            </span>
          </div>

          <h3 class="text-lg sm:text-xl font-black text-white dark:text-white light:text-slate-900 mb-3 group-hover:text-[#F3CE66] transition-colors text-start">
            {{ isArabic ? service.title.ar : service.title.en }}
          </h3>

          <p class="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-6 font-normal text-start">
            {{ isArabic ? service.desc.ar : service.desc.en }}
          </p>

          <!-- Tech Tags -->
          <div class="flex flex-wrap gap-1.5 mb-6">
            <span 
              v-for="tag in service.techTags" 
              :key="tag"
              class="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-900/90 text-slate-300 border border-slate-800"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="space-y-2.5 pt-4 border-t border-slate-800/80 text-start">
          <div 
            v-for="(feature, fIdx) in service.features" 
            :key="fIdx"
            class="flex items-center gap-2.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700"
          >
            <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{{ isArabic ? feature.ar : feature.en }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Enterprise Direct Consultation Banner -->
    <div class="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0C152B] via-[#101C3D] to-[#0C152B] border-2 border-[#F3CE66]/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
      <div class="space-y-3 text-center md:text-start max-w-xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3CE66]/10 text-[#F3CE66] text-xs font-bold border border-[#F3CE66]/20">
          <Sparkles class="w-3.5 h-3.5" />
          <span>{{ isArabic ? 'استشارة برمجية مؤسسية لمشروعك' : 'Enterprise Tech Consultation' }}</span>
        </div>
        <h3 class="text-2xl sm:text-3xl font-black text-white">
          {{ isArabic ? 'هل تبحث عن فريق برمجي يمتلك معايير هندسية عالمية؟' : 'Ready to Engineer Your Enterprise Software?' }}
        </h3>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          {{ isArabic 
            ? 'تواصل مباشرة مع إدارة الحلول الرقمية في أكافيا لتحديد متطلبات مشروعك، دراسة الجدوى التقنية، وبدء التنفيذ بفريق متخصص.'
            : 'Connect directly with Aqavia digital solutions leadership to scope your system architecture and deploy vetted squads.'
          }}
        </p>
      </div>

      <div class="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
        <button 
          @click="handleContactB2B"
          type="button"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm
                 bg-gradient-to-r from-[#C89B3C] via-[#F3CE66] to-[#C89B3C] text-[#050811]
                 shadow-lg shadow-[#F3CE66]/25 hover:shadow-[#F3CE66]/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <MessageSquare class="w-4 h-4" />
          <span>{{ isArabic ? 'طلب استشارة تقنية لشركتك (+963)' : 'Request Tech Consultation' }}</span>
          <ArrowUpRight class="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
</template>
