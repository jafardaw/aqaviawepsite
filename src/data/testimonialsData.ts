import type { TestimonialItem } from '../types/extraSections'

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't1',
    name: {
      ar: 'عمر الخالد',
      en: 'Omar Al-Khaled',
    },
    track: {
      ar: 'مسار هندسة تطبيقات الموبايل (Flutter)',
      en: 'Mobile Engineering (Flutter)',
    },
    currentRole: {
      ar: 'Senior Flutter Developer عن بعد',
      en: 'Remote Senior Flutter Developer',
    },
    company: 'Fintech Hub (Dubai)',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    quote: {
      ar: 'التدريب في Aqavia نقل طريقة تفكيري البرمجية كلياً. لم نكن نكتب كوداً عشوائياً، بل تعلمنا معمارية Clean Architecture وتطبيق اختبارات BLoC. مشروع التخرج كان بمفرده كافياً لإقناع الشركة بتوظيفي مباشرة بعد المقابلة الأولى.',
      en: 'Aqavia completely revolutionized how I think about code architecture. We didn’t just write Flutter UI; we mastered Clean Architecture, TDD, and BLoC. My capstone project alone secured my remote offer after a single round.',
    },
    rating: 5,
    capstoneCompleted: {
      ar: 'مشروع Super App للمدفوعات الرقمية',
      en: 'Digital Payments Super App',
    }
  },
  {
    id: 't2',
    name: {
      ar: 'ريم الشامي',
      en: 'Reem Al-Shami',
    },
    track: {
      ar: 'مسار الأنظمة الخلفية (Laravel & Microservices)',
      en: 'Backend Systems (Laravel & Cloud)',
    },
    currentRole: {
      ar: 'Backend Engineer في شركة SaaS سحابية',
      en: 'Backend Engineer at Cloud SaaS',
    },
    company: 'Aura Cloud Tech',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    quote: {
      ar: 'مراجعة الكود سطر بسطر من قبل المهندس المشرف علمتني كيف تُدار المشاريع الضخمة في وادي السيليكون. تعلمت كيف أتعامل مع ملايين الـ Requests وكيف أصمم قواعد بيانات سريعة بدون بطء.',
      en: 'Line-by-line code reviews from our staff mentor taught me real-world Silicon Valley standards. I learned how to handle high-concurrency requests and scale databases without bottlenecks.',
    },
    rating: 5,
    capstoneCompleted: {
      ar: 'منظومة فوترة سحابية متعددة المستأجرين',
      en: 'Multi-Tenant Billing Microservice',
    }
  },
  {
    id: 't3',
    name: {
      ar: 'يوسف العبدالله',
      en: 'Youssef Al-Abdullah',
    },
    track: {
      ar: 'مسار واجهات الويب (Vue 3 & TypeScript)',
      en: 'Web Engineering (Vue 3 & TypeScript)',
    },
    currentRole: {
      ar: 'Lead Frontend Developer',
      en: 'Lead Frontend Developer',
    },
    company: 'Nexis Systems',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80',
    quote: {
      ar: 'قوة Vue 3 مع الـ Composition API والـ TypeScript أصبحت نقطة قوتي في السيرة الذاتية. أسلوب شرح المعماريات النظيفة والأنيميشن الاحترافي بـ GSAP جعلني أتميز عن جميع المتقدمين للوظائف.',
      en: 'Mastering Vue 3 Composition API with TypeScript and GSAP became my biggest superpower on my CV. Building a production-grade analytics canvas gave me an immediate competitive edge.',
    },
    rating: 5,
    capstoneCompleted: {
      ar: 'لوحة تحكم تفاعلية فورية بـ WebSockets',
      en: 'Realtime WebSockets Analytics Canvas',
    }
  },
  {
    id: 't4',
    name: {
      ar: 'م. سيف الدين زاهر',
      en: 'Eng. Saif Zaher',
    },
    track: {
      ar: 'مسار الذكاء الاصطناعي (Applied AI & LLMs)',
      en: 'AI & Autonomous Systems',
    },
    currentRole: {
      ar: 'AI Systems Engineer',
      en: 'AI Systems Engineer',
    },
    company: 'Cognitive Health AI',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    quote: {
      ar: 'الجميع يتحدث عن الذكاء الاصطناعي، لكن في Aqavia بنينا أنظمة RAG حقيقية وربطنا وكلاء مستقلين بقواعد بيانات متجهة. هذا ليس مجرد كورس، إنه تدريب داخلي هندسي حقيقي يغير مسار مستقبلك المهني.',
      en: 'Everyone talks about AI, but at Aqavia we architected real RAG workflows and autonomous agents hooked to vector stores. It wasn’t a course; it was genuine high-tier engineering apprenticeship.',
    },
    rating: 5,
    capstoneCompleted: {
      ar: 'نظام تشخيص طبي ذكي متعدد الوكلاء',
      en: 'Autonomous Clinical Intelligence System',
    }
  }
]
