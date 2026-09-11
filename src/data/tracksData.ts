import type { TrackItem } from '../types/track'

export const tracksData: TrackItem[] = [
  {
    id: 'flutter-mobile',
    category: 'mobile',
    name: {
      ar: 'هندسة تطبيقات الموبايل المتقدمة (Flutter & Dart)',
      en: 'Advanced Mobile Engineering (Flutter & Dart)',
    },
    badge: {
      ar: 'المسار الأكثر طلباً',
      en: 'Most Popular',
    },
    accentColor: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    iconName: 'Smartphone',
    overview: {
      ar: 'بناء تطبيقات مؤسسية متقدمة بمعمارية Clean Architecture وأنماط إدارة الحالة المتقدمة (BLoC & Riverpod) مع التزامن الفوري واختبارات الكود المؤتمتة.',
      en: 'Build enterprise-grade cross-platform apps using Clean Architecture, advanced state management (BLoC & Riverpod), real-time sync, and automated CI/CD testing pipelines.',
    },
    capstoneProject: {
      name: {
        ar: 'تطبيق OmniPay & Logistics Super App',
        en: 'OmniPay & Logistics Super App',
      },
      type: {
        ar: 'تطبيق فائق التوسع (Fintech & Super App)',
        en: 'High-Scale Multi-Service Super App',
      },
      description: {
        ar: 'منظومة مالية ولوجستية كاملة تتضمن محافظ دفع رقمية، تتبع حي عبر الخرائط، إشعارات فورية عبر WebSockets، وتغطية اختبارات Unit & Widget بنسبة تتجاوز 85%.',
        en: 'A full-fledged fintech and dispatch platform featuring real-time biometric payments, live GPS fleet telemetry, WebSockets chat, and strict 85%+ test coverage.',
      },
      techStack: ['Flutter 3.x', 'Dart', 'BLoC', 'Clean Architecture', 'Dio', 'WebSockets', 'Hive'],
    },
    mentor: {
      name: {
        ar: 'م. طارق المنصور',
        en: 'Eng. Tariq Al-Mansoor',
      },
      role: {
        ar: 'Senior Mobile Staff Architect',
        en: 'Senior Mobile Staff Architect',
      },
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      experience: {
        ar: 'خبرة 9+ سنوات في هندسة تطبيقات الـ Fintech الكبرى',
        en: '9+ Years leading enterprise fintech mobile apps',
      },
      companyTag: 'Aqavia US Lead',
    },
    duration: {
      ar: '12 أسبوع مكثف',
      en: '12 Intensive Weeks',
    },
    level: {
      ar: 'متقدم (Advanced)',
      en: 'Advanced',
    },
    seatsRemaining: 4,
  },
  {
    id: 'laravel-backend',
    category: 'backend',
    name: {
      ar: 'هندسة الأنظمة الخلفية والسحابية (Laravel & Microservices)',
      en: 'Enterprise Backend & Cloud Systems (Laravel)',
    },
    badge: {
      ar: 'هندسة معماريات ضخمة',
      en: 'High Scale Architecture',
    },
    accentColor: '#FF2D20',
    glowColor: 'rgba(255, 45, 32, 0.4)',
    iconName: 'Server',
    overview: {
      ar: 'إتقان بناء وتصميم APIs السحابية، معماريات الـ Microservices والـ Event-Driven Systems باستخدام أحدث ممارسات Domain-Driven Design (DDD) وتأمين الأنظمة.',
      en: 'Master enterprise backend architectures, scalable REST & GraphQL APIs, Event-Driven microservices, domain-driven design (DDD), caching, and containerized deployments.',
    },
    capstoneProject: {
      name: {
        ar: 'منصة Aether Cloud Multi-Tenant SaaS & Billing Engine',
        en: 'Aether Cloud Multi-Tenant SaaS & Billing Engine',
      },
      type: {
        ar: 'منصة سحابية متعددة المستأجرين (Enterprise SaaS)',
        en: 'Multi-Tenant Cloud Billing Infrastructure',
      },
      description: {
        ar: 'بناء بنية تحتية سحابية تعالج ملايين العمليات الحسابية والفواتير والاشتراكات شهرياً بالاعتماد على Redis Queues، PostgreSQL عالي الأداء، و Docker containers.',
        en: 'Architecting a distributed billing engine executing millions of events with resilient Redis queuing, high-throughput PostgreSQL, and Docker container orchestration.',
      },
      techStack: ['Laravel 11', 'PHP 8.3', 'PostgreSQL', 'Redis', 'Docker', 'RabbitMQ', 'Clean DDD'],
    },
    mentor: {
      name: {
        ar: 'د. ألكسندر رايت',
        en: 'Dr. Alexander Wright',
      },
      role: {
        ar: 'Principal Backend & Distributed Systems Architect',
        en: 'Principal Backend & Distributed Systems Architect',
      },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      experience: {
        ar: 'خبرة 14 عاماً في بناء أنظمة البنوك والـ High-load Systems',
        en: '14+ Years in high-frequency financial backend systems',
      },
      companyTag: 'Ex-Stripe Infrastructure',
    },
    duration: {
      ar: '14 أسبوع مكثف',
      en: '14 Intensive Weeks',
    },
    level: {
      ar: 'متقدم / خبير',
      en: 'Advanced / Pro',
    },
    seatsRemaining: 3,
  },
  {
    id: 'vue-frontend',
    category: 'frontend',
    name: {
      ar: 'هندسة واجهات الويب التفاعلية (Vue 3, TypeScript & GSAP)',
      en: 'Modern Frontend Engineering (Vue 3 & TypeScript)',
    },
    badge: {
      ar: 'أداء فائق وأنيميشن',
      en: 'Creative & Performant',
    },
    accentColor: '#42B883',
    glowColor: 'rgba(66, 184, 131, 0.4)',
    iconName: 'Layout',
    overview: {
      ar: 'احتراف بناء تطبيقات الويب العصرية ذات الكود النظيف مع Vue 3 Composition API، وإدارة الحالة المتقدمة عبر Pinia، والأنيميشن الاحترافي بـ GSAP.',
      en: 'Engineer blazing-fast, award-worthy web applications leveraging Vue 3 Composition API, Pinia architecture, TypeScript type safety, and cinematic GSAP transitions.',
    },
    capstoneProject: {
      name: {
        ar: 'استوديو Nexus Realtime Data Analytics & Workflow',
        en: 'Nexus Realtime Data Analytics & Workflow Studio',
      },
      type: {
        ar: 'منصة تحليلات تفاعلية ولوحة تحكم معقدة',
        en: 'Interactive Canvas & Real-time Analytics Studio',
      },
      description: {
        ar: 'استوديو تفاعلي حي لمعالجة وتصور البيانات الضخمة، محرك رسومات تفاعلية، ولوحات تحكم قابلة للتخصيص الكامل مع سرعة استجابة بمعدل 60 إطار بالثانية.',
        en: 'High-performance real-time telemetry studio featuring custom canvas nodes, reactive data pipelines, and cinematic 60FPS micro-interactions.',
      },
      techStack: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS', 'GSAP', 'Vite', 'Charts.js'],
    },
    mentor: {
      name: {
        ar: 'م. نور الحسيني',
        en: 'Eng. Noor Al-Husseini',
      },
      role: {
        ar: 'Lead Frontend & UI Performance Architect',
        en: 'Lead Frontend & UI Performance Architect',
      },
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      experience: {
        ar: 'خبرة 8 سنوات في تصميم وتطوير واجهات المستخدم العالمية',
        en: '8+ Years crafting award-winning high-performance web UIs',
      },
      companyTag: 'Aqavia Core Team',
    },
    duration: {
      ar: '10 أسابيع مكثفة',
      en: '10 Intensive Weeks',
    },
    level: {
      ar: 'متوسط إلى متقدم',
      en: 'Intermediate to Advanced',
    },
    seatsRemaining: 5,
  },
  {
    id: 'ai-ml-systems',
    category: 'ai',
    name: {
      ar: 'هندسة الذكاء الاصطناعي وتطبيقات النماذج الكبيرة (AI & LLMs)',
      en: 'Applied AI & Autonomous Agent Engineering',
    },
    badge: {
      ar: 'تقنية المستقبل',
      en: 'Cutting Edge',
    },
    accentColor: '#A855F7',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    iconName: 'Brain',
    overview: {
      ar: 'بناء ونشر حلول الذكاء الاصطناعي التوليدي العملية، وتطبيق تقنيات RAG المتطورة ودمج وكلاء الذكاء الاصطناعي (AI Autonomous Agents) في أنظمة الإنتاج الحقيقية.',
      en: 'Design and deploy production-ready Generative AI systems, RAG pipelines, fine-tuned foundational models, and multi-agent workflows with rigorous safety guardrails.',
    },
    capstoneProject: {
      name: {
        ar: 'نظام CognitiveMed: المساعد التشخيصي الذكي الفوري',
        en: 'CognitiveMed: Autonomous Clinical Inference System',
      },
      type: {
        ar: 'منظومة وكلاء ذكاء اصطناعي (AI Agentic System)',
        en: 'Multi-Agent Medical Intelligence System',
      },
      description: {
        ar: 'بناء شبكة وكلاء ذكاء اصطناعي مستقلة قادرة على تحليل السجلات الطبية الضخمة، والبحث المتجهي عبر ملايين المقالات العلمية، وصياغة تقارير استدلالية فورية.',
        en: 'A multi-agent reasoning architecture analyzing high-volume clinical records with vector embeddings, semantic retrieval, and low-latency inference.',
      },
      techStack: ['Python', 'FastAPI', 'LangChain', 'Llama 3', 'Qdrant Vector DB', 'PyTorch'],
    },
    mentor: {
      name: {
        ar: 'د. إيثان فانس',
        en: 'Dr. Ethan Vance',
      },
      role: {
        ar: 'Senior AI Research Scientist & LLM Lead',
        en: 'Senior AI Research Scientist & LLM Lead',
      },
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      experience: {
        ar: 'دكتوراه في الذكاء الاصطناعي وباحث سابق في أبحاث وادي السيليكون',
        en: 'PhD in Computer Science, Silicon Valley AI Lab alumnus',
      },
      companyTag: 'Aqavia US R&D',
    },
    duration: {
      ar: '14 أسبوع مكثف',
      en: '14 Intensive Weeks',
    },
    level: {
      ar: 'متقدم (Advanced)',
      en: 'Advanced',
    },
    seatsRemaining: 2,
  },
  {
    id: 'ui-ux-design',
    category: 'design',
    name: {
      ar: 'تصميم المنتجات الرقمية وهندسة الأنظمة (UI/UX Design Systems)',
      en: 'Digital Product Design & Enterprise UX Systems',
    },
    badge: {
      ar: 'تصميم تجارب عالمية',
      en: 'World-Class UX',
    },
    accentColor: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    iconName: 'Palette',
    overview: {
      ar: 'من أبحاث المستخدم المعمقة (UX Research) وتصميم رحلة العميل إلى بناء أنظمة التصميم البرمجية (Design Systems) المتوافقة مع الكود والبروتوتايب التفاعلي.',
      en: 'From qualitative UX research and information architecture to architecting production design tokens, scalable component libraries, and micro-interaction prototypes.',
    },
    capstoneProject: {
      name: {
        ar: 'نظام Vanguard المصرفي وأنظمة التداول العالمية',
        en: 'Vanguard Global Banking & Trading Design System',
      },
      type: {
        ar: 'نظام تصميم ومكتبة مكونات مؤسسية (Design System)',
        en: 'Multi-Brand Enterprise Banking Design System',
      },
      description: {
        ar: 'إنشاء نظام تصميم شامل يضم أكثر من 250 مكوّن مخصص، مع اختبارات إمكانية الوصول (Accessibility A11y)، وتوثيق كامل متصل مع كود Flutter و Vue.',
        en: 'A production design system containing 250+ accessible components, responsive grid mechanics, interactive prototypes, and direct developer handoff specs.',
      },
      techStack: ['Figma Pro', 'Tokens Studio', 'Zeroheight', 'A11y Standards', 'Interactive Prototyping'],
    },
    mentor: {
      name: {
        ar: 'سارة جينكينز',
        en: 'Sarah Jenkins',
      },
      role: {
        ar: 'VP of Product Design & Global UX Strategist',
        en: 'VP of Product Design & Global UX Strategist',
      },
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      experience: {
        ar: 'خبرة 11 عاماً في قيادة فرق التصميم لمنتجات Fintech و SaaS',
        en: '11+ Years leading product design for hyper-growth SaaS',
      },
      companyTag: 'Aqavia Design Guild',
    },
    duration: {
      ar: '10 أسابيع مكثفة',
      en: '10 Intensive Weeks',
    },
    level: {
      ar: 'جميع المستويات حتى الاحتراف',
      en: 'Comprehensive / Industry Ready',
    },
    seatsRemaining: 4,
  },
]
