import type { FaqItem } from '../types/extraSections'

export const faqData: FaqItem[] = [
  {
    id: 'f1',
    category: 'general',
    question: {
      ar: 'ما الذي يميز التدريب الداخلي في Aqavia عن الدورات المنتشرة على الإنترنت؟',
      en: 'What distinguishes Aqavia internal training from typical online courses?',
    },
    answer: {
      ar: 'في Aqavia لا نعتمد على الفيديوهات المسجلة أو التطبيقات السطحية (To-Do Lists). التدريب قائم على نظام الـ Apprenticeship المعتمد في الشركات العالمية: تعمل على مشروع إنتاجي ضخم من الصفر، وتمر بدورات عمل حقيقية (Agile Sprints)، مع مراجعة كود فردية 1-on-1 لكل سطر كود ترفعه، بالإضافة لتطبيق مبادئ Clean Architecture و SOLID التي تبحث عنها الشركات.',
      en: 'At Aqavia, we do not rely on pre-recorded lectures or superficial todo-apps. The experience follows the proven Silicon Valley apprenticeship model: you build a high-scale production system from scratch in Agile sprints, guided by weekly 1-on-1 PR reviews focusing strictly on Clean Architecture, scalability, and test coverage.',
    },
  },
  {
    id: 'f2',
    category: 'technical',
    question: {
      ar: 'هل التدريب حضوري أم عن بعد (Remote)؟',
      en: 'Is the training conducted remotely or in-person?',
    },
    answer: {
      ar: 'التدريب متاح بالكامل عن بعد (Interactive Live Remote) بأسلوب يحاكي بيئات العمل في الشركات الأمريكية والعالمية. يتم التواصل والمتابعة عبر قنوات برمجية مخصصة، واجتماعات دورية، واستعراضات أسبوعية للكود عبر Git و GitHub.',
      en: 'The internship is 100% interactive remote, simulating distributed Silicon Valley engineering teams. Mentorship happens through dedicated dev channels, synchronous standups, and rigorous GitHub PR reviews.',
    },
  },
  {
    id: 'f3',
    category: 'technical',
    question: {
      ar: 'كيف تتم مراجعة الكود (Code Review) أسبوعياً؟',
      en: 'How does the weekly 1-on-1 Code Review work?',
    },
    answer: {
      ar: 'تقوم برفع عملك عبر Pull Request على مستودع GitHub مخصص لمشروعك. يقوم المهندس المشرف بفحص الكود سطر بسطر، وتوجيهك لإعادة الهيكلة (Refactoring)، وتطبيق معايير الأمان والأداء، وتقديم تغذية راجعة تقنية دقيقة كما يحدث في كبرى الشركات.',
      en: 'You submit your code via Pull Requests on your dedicated enterprise repo. Your senior mentor reviews each commit line-by-line, recommending architectural refactoring, performance optimizations, and design pattern improvements.',
    },
  },
  {
    id: 'f4',
    category: 'career',
    question: {
      ar: 'هل يؤهلني هذا التدريب للحصول على عمل عن بعد مع شركات دولية؟',
      en: 'Will this qualify me for international remote engineering roles?',
    },
    answer: {
      ar: 'نعم بكل تأكيد. الهدف الأول لشركة Aqavia الأمريكية هو جسر الفجوة بين المطورين وسوق العمل الدولي. مشاريع التخرج مبنية بمواصفات الإنتاج الحقيقية، ومع نهاية التدريب ستحصل على كود مصقول منشور، وسيرة ذاتية هندسية احترافية، وتدريب على مقابلات الـ System Design.',
      en: 'Absolutely. Aqavia’s primary mission is bridging talented engineers into high-paying global remote teams. You graduate with a battle-tested enterprise repo on your GitHub, an optimized technical CV, and proven system design fluency.',
    },
  },
  {
    id: 'f5',
    category: 'general',
    question: {
      ar: 'ما هي متطلبات القبول في مسارات التدريب؟',
      en: 'What are the admission requirements for the tracks?',
    },
    answer: {
      ar: 'نطلب معرفة بأساسيات البرمجة (مثل مفاهيم OOP والمتغيرات وحلقات التكرار في أي لغة)، وشغفاً حقيقياً بالالتزام وتخصيص الوقت الكافي أسبوعياً لبناء المشاريع والتطوير المستمر. نقوم بإجراء تقييم أولي سريع لتحديد مستواك ومساعدتك في اختيار المسار الأنسب.',
      en: 'We require foundational programming literacy (OOP basics, variables, and logic in any language) alongside high dedication and commitment to weekly project sprints. An initial technical placement assessment helps place you in the ideal track.',
    },
  },
]
