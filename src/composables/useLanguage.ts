import { ref, computed, onMounted } from 'vue'

export type LanguageCode = 'ar' | 'en'

const currentLang = ref<LanguageCode>('ar')

export const content = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن أكافيا',
      internship: 'ما هو التدريب الداخلي؟',
      tracks: 'المسارات التدريبية',
      mentors: 'فريق الإشراف والمدربون',
      b2b: 'خدمات الشركات',
      faq: 'الأسئلة الشائعة',
      applyNow: 'سجّل في التدريب الداخلي',
      gifts: 'الهدايا',
      blog: 'المدونة',
    },
    hero: {
      badge: '🇺🇸 AQAVIA LLC — New Mexico, USA',
      badgeStatus: 'باب التسجيل متاح حالياً',
      titlePart1: 'ابنِ خبرتك العملية الحقيقية..',
      titlePart2: 'وانطلق بقوة نحو سوق العمل التقني',
      description: 'شركة تقنية مسجلة رسمياً في الولايات المتحدة الأمريكية، تُدار بنموذج العمل عن بُعد عبر كفاءات هندسية شابة. نردم الفجوة بين التعليم النظري ومتطلبات التوظيف الفعلية عبر إشراكك في كتابة كود حقيقي وبناء مشاريع برمجية متكاملة ضمن بيئة محاكاة احترافية للشركات.',
      exploreBtn: 'استكشف مسارات التدريب الداخلي',
      b2bBtn: 'طلب حلول برمجية للشركات',
      stats: [
        { value: '100%', label: 'تطبيق عملي على مشاريع حقيقية' },
        { value: 'Code Review', label: 'إشراف مباشر ومراجعة دورية للكود' },
        { value: 'New Mexico, USA', label: 'كيان مرخص رسمياً في' },
      ],
      floatingBadges: {
        flutter: 'Flutter & Dart',
        laravel: 'Laravel & APIs',
        react: 'React.js',
        uiux: 'UI/UX Design',
        aiFoundation: 'AI Foundation',
        advancedAi: 'Advanced AI',
        architecture: 'الهندسة المعمارية',
        cybersecurity: 'Cybersecurity',
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      internship: 'Internship Concept',
      tracks: 'Tracks',
      mentors: 'Mentors',
      b2b: 'B2B Solutions',
      faq: 'FAQ',
      applyNow: 'Apply for Internship',
      gifts: 'Rewards',
      blog: 'Blog',
    },
    hero: {
      badge: '🇺🇸 AQAVIA LLC — New Mexico, USA',
      badgeStatus: 'Applications Open',
      titlePart1: 'Build Real Practical Experience..',
      titlePart2: 'And Launch Strongly into Tech',
      description: 'An officially registered US technology company operated remotely by elite engineering talent. We bridge the gap between academic theory and real hiring demands by immersing you in production-grade code and enterprise project workflows.',
      exploreBtn: 'Explore Internship Tracks',
      b2bBtn: 'Request Enterprise Software Solutions',
      stats: [
        { value: '100%', label: 'Hands-on practice on real production projects' },
        { value: 'Code Review', label: 'Direct senior mentorship & periodic code review' },
        { value: 'New Mexico, USA', label: 'Officially registered corporate entity' },
      ],
      floatingBadges: {
        flutter: 'Flutter & Dart',
        laravel: 'Laravel & APIs',
        react: 'React.js',
        uiux: 'UI/UX Design',
        aiFoundation: 'AI Foundation',
        advancedAi: 'Advanced AI',
        architecture: 'Architecture',
        cybersecurity: 'Cybersecurity',
      }
    }
  }
}

export function useLanguage() {
  const applyLanguage = (lang: LanguageCode) => {
    currentLang.value = lang
    if (typeof document !== 'undefined') {
      const isAr = lang === 'ar'
      document.documentElement.setAttribute('lang', lang)
      document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr')
      localStorage.setItem('aqavia_lang', lang)
    }
  }

  const toggleLanguage = () => {
    applyLanguage(currentLang.value === 'ar' ? 'en' : 'ar')
  }

  const t = computed(() => content[currentLang.value])
  const isArabic = computed(() => currentLang.value === 'ar')

  onMounted(() => {
    const saved = localStorage.getItem('aqavia_lang') as LanguageCode | null
    if (saved === 'ar' || saved === 'en') {
      applyLanguage(saved)
    } else {
      applyLanguage('ar')
    }
  })

  return {
    currentLang,
    toggleLanguage,
    applyLanguage,
    t,
    isArabic,
  }
}
