import type { DiscountOffer, WheelSegment } from '../types/rewards'

export const discountOffers: DiscountOffer[] = [
  {
    id: 'early-bird',
    title: {
      ar: 'خصم التسجيل المبكر (Early Bird)',
      en: 'Early Bird Registration Discount',
    },
    badge: {
      ar: 'متاح للدفعة القادمة',
      en: 'Upcoming Cohort Only',
    },
    discountPercent: 25,
    code: 'AQAVIA-EARLY25',
    description: {
      ar: 'خصم مباشر 25% على أي مسار تدريبي عند التسجيل وتأكيد المقعد قبل اكتمال الدفعة.',
      en: 'Instant 25% discount across all engineering tracks upon early seat confirmation.',
    },
    expiresIn: {
      ar: 'متبقي 4 أيام',
      en: '4 Days Left',
    },
    accentColor: '#F3CE66',
  },
  {
    id: 'merit-scholarship',
    title: {
      ar: 'منحة التفوق الهندسي (Tech Merit)',
      en: 'Engineering Merit Scholarship',
    },
    badge: {
      ar: 'للمتفوقين برمجياً',
      en: 'For Top Talents',
    },
    discountPercent: 40,
    code: 'AQAVIA-MERIT40',
    description: {
      ar: 'خصم استثنائي 40% للمهندسين الذين يجتازون اختبار التقييم البرمجي بدرجة امتياز.',
      en: 'Exclusive 40% grant for applicants scoring above 90% in our algorithmic diagnostic.',
    },
    expiresIn: {
      ar: 'متبقي 3 مقاعد فقط',
      en: '3 Seats Left',
    },
    accentColor: '#38BDF8',
  },
  {
    id: 'fullstack-bundle',
    title: {
      ar: 'حزمة المسار المزدوج (Full-Stack Track)',
      en: 'Dual-Specialization Bundle',
    },
    badge: {
      ar: 'وفر أكثر',
      en: 'Maximum Savings',
    },
    discountPercent: 35,
    code: 'AQAVIA-DUAL35',
    description: {
      ar: 'خصم 35% عند الجمع بين مسارين (مثل: Flutter + Laravel أو Vue 3 + Laravel).',
      en: 'Save 35% when bundling two complementary tracks (e.g. Flutter + Laravel or Vue + Laravel).',
    },
    expiresIn: {
      ar: 'عرض مستمر',
      en: 'Ongoing Special',
    },
    accentColor: '#A855F7',
  },
]

export const wheelSegments: WheelSegment[] = [
  {
    id: 'seg-1',
    label: { ar: 'خصم 30%', en: '30% OFF' },
    color: '#12295D',
    textColor: '#F3CE66',
    isWin: false,
  },
  {
    id: 'seg-2',
    label: { ar: 'حظ أوفر 🍀', en: 'Better Luck 🍀' },
    color: '#070C1B',
    textColor: '#94A3B8',
    isWin: false, // Target 1
  },
  {
    id: 'seg-3',
    label: { ar: 'خصم 50%', en: '50% OFF' },
    color: '#1B3B80',
    textColor: '#FFF',
    isWin: false,
  },
  {
    id: 'seg-4',
    label: { ar: 'استشارة مع مهندس', en: '1-on-1 Mentor' },
    color: '#12295D',
    textColor: '#38BDF8',
    isWin: false,
  },
  {
    id: 'seg-5',
    label: { ar: 'حظ أوفر ✨', en: 'Try Tomorrow ✨' },
    color: '#0A1226',
    textColor: '#94A3B8',
    isWin: false, // Target 2
  },
  {
    id: 'seg-6',
    label: { ar: 'منحة مجانية 100%', en: '100% Scholarship' },
    color: '#C89B3C',
    textColor: '#050811',
    isWin: false,
  },
]
