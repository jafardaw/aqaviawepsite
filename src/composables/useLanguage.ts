import { ref, computed, onMounted } from 'vue'

export type LanguageCode = 'ar' | 'en'

const currentLang = ref<LanguageCode>('ar')

export const content = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن Aqavia',
      team: 'فريق العمل',
      tracks: 'مسارات التدريب',
      gifts: 'الهدايا',
      blog: 'المدونة',
      faq: 'الأسئلة الشائعة',
      applyNow: 'انضم للتدريب',
    },
    hero: {
      badge: '🇺🇸 صرح Aqavia الأمريكي للتدريب البرمجي والهندسي المتقدم',
      badgeStatus: 'باب التسجيل متاح حالياً',
      titlePrefix: 'نصنع نخبة',
      titleHighlight: 'مهندسي البرمجيات',
      titleSuffix: 'بمعايير وادي السيليكون',
      description: 'شركة Aqavia الأمريكية الرائدة: نوفر بيئة تدريب داخلي مكثفة تنقلك من مرحلة المعرفة الأكاديمية إلى الاحتراف الهندسي الميداني. تدريب تطبيقي على مشاريع حية حقيقية في تطبيقات الموبايل (Flutter)، وتطوير الواجهات والباك إند (Laravel & Vue.js)، والذكاء الاصطناعي، والـ UI/UX Design، مع الالتزام الصارم بمعايير الـ Clean Architecture ومراجعة الكود الفردية.',
      exploreBtn: 'استكشف مسارات التدريب',
      aboutBtn: 'تعرف على منهجيتنا',
      stats: [
        { value: '100%', label: 'تدريب تطبيقي ومشاريع حية' },
        { value: '1-on-1', label: 'مراجعة كود فردية (Code Review)' },
        { value: 'Clean Code', label: 'معمارية برمجية قياسية (SOLID)' },
        { value: 'Global', label: 'تأهيل للمنافسة في السوق العالمي' },
      ],
      floatingBadges: {
        mobile: 'Flutter & Dart',
        backend: 'Laravel & APIs',
        frontend: 'Vue 3 & TypeScript',
        ai: 'AI & Data Science',
        design: 'UI/UX & Systems',
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      team: 'Mentors Team',
      tracks: 'Tracks',
      gifts: 'Gifts',
      blog: 'Blog',
      faq: 'FAQ',
      applyNow: 'Apply Now',
    },
    hero: {
      badge: '🇺🇸 Aqavia US Technology & Software Engineering Hub',
      badgeStatus: 'Applications Open',
      titlePrefix: 'Forging Elite',
      titleHighlight: 'Software Engineers',
      titleSuffix: 'With Silicon Valley Standards',
      description: 'Aqavia US: An elite intensive software training hub bridging academic theory with high-impact engineering practice. Master mobile engineering (Flutter), modern web & backend (Laravel & Vue.js), AI/ML, and UI/UX Design through real-world production projects, strict Clean Architecture, and personalized 1-on-1 Code Reviews.',
      exploreBtn: 'Explore Tracks',
      aboutBtn: 'Our Methodology',
      stats: [
        { value: '100%', label: 'Hands-on Production Projects' },
        { value: '1-on-1', label: 'Direct Senior Code Reviews' },
        { value: 'Clean Code', label: 'Enterprise Architecture (SOLID)' },
        { value: 'Global', label: 'US & Global Market Ready' },
      ],
      floatingBadges: {
        mobile: 'Flutter & Dart',
        backend: 'Laravel & APIs',
        frontend: 'Vue 3 & TypeScript',
        ai: 'AI & Data Science',
        design: 'UI/UX & Systems',
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
