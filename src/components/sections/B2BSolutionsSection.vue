<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage'
import { 
  Building, 
  Layers, 
  Cpu, 
  Users, 
  MessageSquare, 
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Code2
} from 'lucide-vue-next'

const { isArabic } = useLanguage()

const services = [
  {
    icon: Code2,
    accent: '#38BDF8',
    title: {
      ar: 'تطوير المنظومات والتطبيقات المؤسسية (Custom Enterprise Software)',
      en: 'Custom Enterprise Software Engineering',
    },
    desc: {
      ar: 'تصميم وبناء تطبيقات ويب وموبايل فائقة السرعة والأداء، بمعماريات Clean Code تضمن قابلية التوسع والصمود أمام ملايين الطلبات المتزامنة.',
      en: 'Engineering scalable, secure web & mobile platforms architected with Clean Architecture for enterprise-grade throughput.',
    },
    features: [
      { ar: 'تطبيقات Flutter مخصصة لنظامي iOS و Android', en: 'High-performance Flutter iOS & Android apps' },
      { ar: 'منصات ويب فائقة التفاعل بـ Vue 3 & TypeScript', en: 'Ultra-reactive SPAs with Vue 3 & TypeScript' },
      { ar: 'بوابات دفع إلكتروني متعددة العملات والبلدان', en: 'Global & regional multi-currency payment gateways' },
    ]
  },
  {
    icon: Layers,
    accent: '#F3CE66',
    title: {
      ar: 'تصميم معماريات السحاب والـ Microservices (Cloud Systems & SRE)',
      en: 'Cloud Architecture & Distributed Microservices',
    },
    desc: {
      ar: 'إعادة هيكلة الأنظمة الحالية وترقيتها إلى معماريات سحابية موزعة عبر Docker و Kubernetes مع خطوط نشر مؤتمتة بدون أي توقف (Zero Downtime).',
      en: 'Architecting containerized cloud infrastructure on AWS/GCP with automated CI/CD and zero-downtime failover orchestration.',
    },
    features: [
      { ar: 'إدارة حاويات Docker و Kubernetes كلاستر', en: 'Enterprise Kubernetes & Docker container clusters' },
      { ar: 'أتمتة النشر والمراقبة الحية (CI/CD & Observability)', en: 'Automated CI/CD pipelines & real-time monitoring' },
      { ar: 'تحسين كفاءة قواعد البيانات واستعلامات الـ SQL', en: 'High-throughput DB replication & query optimization' },
    ]
  },
  {
    icon: Cpu,
    accent: '#A855F7',
    title: {
      ar: 'حلول الذكاء الاصطناعي وأتمتة العمليات (AI & Autonomous Agents)',
      en: 'Applied AI & Multi-Agent Workflow Automation',
    },
    desc: {
      ar: 'دمج تقنيات الذكاء الاصطناعي التوليدي، ونظم استرجاع المعرفة الذكية (RAG)، وبناء وكلاء أذكياء يحللون بيانات شركتك ويؤتمتون المهام المعقدة.',
      en: 'Deploying domain-specific RAG systems, localized LLM fine-tuning, and multi-agent systems automating cognitive corporate workflows.',
    },
    features: [
      { ar: 'مساعدون أذكياء مدربون على بيانات ولوائح الشركة', en: 'Internal enterprise knowledge-base AI agents' },
      { ar: 'أتمتة الفواتير والتقارير والتدقيق الحسابي', en: 'Intelligent doc processing & automated audits' },
      { ar: 'حماية بيانات الشركات والالتزام الصارم بالخصوصية', en: 'Private on-premise & secure vector deployments' },
    ]
  },
  {
    icon: Users,
    accent: '#42B883',
    title: {
      ar: 'تكوين الفرق البرمجية المتخصصة (Dedicated Engineering Squads)',
      en: 'Dedicated Engineering Squads & Tech Staffing',
    },
    desc: {
      ar: 'تزويد شركتك بنخبة من أفضل الكفاءات الهندسية المدربة في أكافيا، لتعمل كامتداد مباشر لفريقك الداخلي بإشراف استشاري دوري من خبرائنا.',
      en: 'Augment your development velocity with elite, pre-vetted engineers trained under Silicon Valley engineering standards.',
    },
    features: [
      { ar: 'مهندسون جاهزون لبدء الإنتاج فوراً بدون هدر وقت', en: 'Immediate onboarding with zero ramp-up friction' },
      { ar: 'إشراف استشاري ومعماري أسبوعي من كبار خبراء أكافيا', en: 'Weekly architectural governance by senior mentors' },
      { ar: 'مرونة تعاقدية تناسب احتياجات الشركات والمشاريع', en: 'Agile engagement models tailored to your sprint goals' },
    ]
  },
]

const handleContactB2B = () => {
  const phone = '963988588859'
  const message = isArabic.value 
    ? 'مرحباً إدارة أكافيا، أود الاستفسار عن خدمات الشركات وتطوير الحلول الرقمية (B2B Solutions) لمشروعي.'
    : 'Hello Aqavia Team, I would like to inquire about your B2B enterprise software development and tech solutions.'
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

    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12295D]/50 border border-[#F3CE66]/30 shadow-inner">
        <Building class="w-4 h-4 text-[#F3CE66]" />
        <span class="text-xs sm:text-sm font-bold text-[#F3CE66] tracking-wide uppercase">
          {{ isArabic ? 'خدمات الشركات والحلول الرقمية' : 'Enterprise B2B Solutions' }}
        </span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-[#0B1A3D] tracking-tight leading-tight">
        <span>{{ isArabic ? 'برمجيات متطورة تقود ' : 'Engineering High-Performance ' }}</span>
        <span class="gold-gradient-text">{{ isArabic ? 'نمو وتوسع أعمالك' : 'Enterprise Systems' }}</span>
      </h2>

      <p class="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl mx-auto">
        {{ isArabic 
          ? 'إلى جانب التدريب الهندسي، تمتلك أكافيا ذراعاً تقنياً متخصصاً في بناء الأنظمة الرقمية المعقدة، وتقديم الاستشارات المعمارية للشركات والمؤسسات التي تبحث عن الجودة الفائقة.'
          : 'Beyond training, Aqavia operates a bespoke engineering practice delivering production-ready platforms, microservices architectures, and AI systems for ambitious enterprises.'
        }}
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-stretch">
      <div 
        v-for="(service, idx) in services" 
        :key="idx"
        class="p-7 sm:p-8 rounded-3xl bg-[#080D1C] border border-slate-800 hover:border-[#F3CE66]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
      >
        <div>
          <div class="flex items-center justify-between mb-6">
            <div 
              class="w-12 h-12 rounded-2xl flex items-center justify-center border group-hover:scale-110 transition-transform duration-300 shadow-md"
              :style="{ backgroundColor: `${service.accent}15`, borderColor: `${service.accent}40`, color: service.accent }"
            >
              <component :is="service.icon" class="w-6 h-6" />
            </div>
            <span class="text-xs font-bold text-slate-500 group-hover:text-[#F3CE66] transition-colors">
              B2B // 0{{ idx + 1 }}
            </span>
          </div>

          <h3 class="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#F3CE66] transition-colors">
            {{ isArabic ? service.title.ar : service.title.en }}
          </h3>

          <p class="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
            {{ isArabic ? service.desc.ar : service.desc.en }}
          </p>
        </div>

        <div class="space-y-2.5 pt-4 border-t border-slate-800/80">
          <div 
            v-for="(feature, fIdx) in service.features" 
            :key="fIdx"
            class="flex items-center gap-2.5 text-xs text-slate-300"
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
          <span>{{ isArabic ? 'استشارة برمجية مجانية لمشروعك' : 'Complimentary Enterprise Architecture Call' }}</span>
        </div>
        <h3 class="text-2xl sm:text-3xl font-black text-white">
          {{ isArabic ? 'هل تبحث عن شريك تقني يمتلك معايير هندسية عالمية؟' : 'Ready to Build or Scale Your Enterprise System?' }}
        </h3>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {{ isArabic 
            ? 'تواصل مباشرة مع فريق الإدارة والاستشارات التقنية في أكافيا لمناقشة متطلبات مشروعك وتحديد أنسب معمارية برمجية وفريق عمل متخصص.'
            : 'Connect directly with Aqavia engineering leadership to scope your system architecture and deploy vetted squads.'
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
          <span>{{ isArabic ? 'تواصل معنا عبر واتساب (+963)' : 'Contact B2B Team on WhatsApp' }}</span>
          <ArrowUpRight class="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
</template>
