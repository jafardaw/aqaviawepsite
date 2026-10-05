import type { FaqItem } from '../types/extraSections'

export const faqData: FaqItem[] = [
  {
    id: 'f1',
    category: 'general',
    question: {
      ar: 'هل التدريب أونلاين أم حضوري؟',
      en: 'Is the training conducted online or in-person?',
    },
    answer: {
      ar: 'التدريب أونلاين 100% عبر جلسات واجتماعات تفاعلية وأدوات إدارة مهام مستمرة، مما يتيح لك المشاركة من أي مكان في العالم.',
      en: 'The training is 100% online through interactive live sessions, daily standups, and structured project management tools, enabling you to participate from anywhere in the world.',
    },
  },
  {
    id: 'f2',
    category: 'general',
    question: {
      ar: 'هل التدريب مجاني؟',
      en: 'Is the training program free?',
    },
    answer: {
      ar: 'التدريب رمزي التكلفة لتغطية نفقات المتابعة الهندسية والبنية التحتية، والتفاصيل محددة بالكامل داخل استمارة التسجيل.',
      en: 'The training has a nominal operational fee to cover senior engineering mentorship, code reviews, and cloud infrastructure expenses. Full pricing details are clearly specified inside the registration form.',
    },
  },
  {
    id: 'f3',
    category: 'technical',
    question: {
      ar: 'أنا مبتدئ تماماً، هل أسجل في مسارات البرمجة؟',
      en: 'I am a complete beginner, can I enroll in programming tracks?',
    },
    answer: {
      ar: 'لا؛ المسارات التقنية مخصصة لمن أنهى الأساسيات أو الدورات النظرية ويحتاج تطبيقاً ومشاريع. بينما يمكن لجميع المبتدئين التسجيل في مسار الهندسة المعمارية لأنه يبدأ من الصفر التام.',
      en: 'No; our software engineering tracks are specifically designed for candidates who have completed foundational syntax or theory courses and need practical project experience. However, complete beginners are welcome to enroll in the Comprehensive Architectural Engineering track which starts from ground zero.',
    },
  },
  {
    id: 'f4',
    category: 'career',
    question: {
      ar: 'ماذا أحصل بعد إنهاء التدريب؟',
      en: 'What do I receive upon completing the internship?',
    },
    answer: {
      ar: 'مشاريع برمجية حقيقية تدعم معرض أعمالك (Portfolio/GitHub)، شهادة تدريب داخلي معتمدة من أكافيا، وجاهزية لاجتياز المقابلات التقنية.',
      en: 'Production-ready projects published to your Portfolio & GitHub, an accredited official Internship Completion Certificate from AQAVIA LLC, and battle-tested readiness to ace technical system interviews.',
    },
  },
]
