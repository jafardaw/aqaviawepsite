import type { TeamMember } from '../types/team'

export const teamData: TeamMember[] = [
  {
    id: 'tariq-almansoor',
    name: {
      ar: 'م. طارق المنصور',
      en: 'Eng. Tariq Al-Mansoor',
    },
    role: {
      ar: 'Lead Mobile Software Architect & Co-Founder',
      en: 'Lead Mobile Software Architect & Co-Founder',
    },
    specialty: {
      ar: 'هندسة تطبيقات الموبايل ومعماريات الـ Clean Code',
      en: 'Mobile Systems & Clean Architecture',
    },
    bio: {
      ar: 'مهندس معماري ومؤسس شريك بخبرة تتجاوز 9 سنوات في بناء وتصميم تطبيقات الـ Fintech ذات التوسع المليوني. قاد فرق تطوير في كبرى المنصات الرقمية العالمية.',
      en: 'Staff Mobile Architect with 9+ years scaling fintech super apps to millions of users. Passionate about strict Clean Architecture and developer mentoring.',
    },
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    linkedinUrl: 'https://linkedin.com',
    githubUrl: 'https://github.com',
    badge: {
      ar: 'خبير سابق بوادي السيليكون',
      en: 'Silicon Valley Veteran',
    },
    skills: ['Flutter', 'Dart', 'BLoC Pattern', 'Clean Architecture', 'CI/CD', 'Dio'],
  },
  {
    id: 'alexander-wright',
    name: {
      ar: 'د. ألكسندر رايت',
      en: 'Dr. Alexander Wright',
    },
    role: {
      ar: 'Principal Backend & Distributed Systems Lead',
      en: 'Principal Backend & Distributed Systems Lead',
    },
    specialty: {
      ar: 'الأنظمة السحابية الموزعة وهندسة Laravel المتقدمة',
      en: 'Distributed Cloud Systems & Enterprise Laravel',
    },
    bio: {
      ar: 'دكتوراه في هندسة النظم السحابية وخبرة 14 عاماً في تصميم وبناء معماريات الـ Microservices ومحركات الفوترة السحابية فائقة الأداء.',
      en: 'PhD in Distributed Systems with 14+ years designing high-throughput APIs, event-driven architectures, and resilient billing engines.',
    },
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    linkedinUrl: 'https://linkedin.com',
    githubUrl: 'https://github.com',
    badge: {
      ar: 'مهندس أنظمة كبرى',
      en: 'Ex-Infrastructure Lead',
    },
    skills: ['Laravel 11', 'PHP 8.3', 'PostgreSQL', 'Redis', 'Docker', 'RabbitMQ', 'Domain DDD'],
  },
  {
    id: 'noor-alhusseini',
    name: {
      ar: 'م. نور الحسيني',
      en: 'Eng. Noor Al-Husseini',
    },
    role: {
      ar: 'Lead Frontend Architect & UI Performance Specialist',
      en: 'Lead Frontend Architect & UI Performance Specialist',
    },
    specialty: {
      ar: 'هندسة واجهات الويب والأنيميشن ثلاثي الأبعاد بـ Vue 3',
      en: 'Vue 3 Ecosystem, TypeScript & Cinematic GSAP',
    },
    bio: {
      ar: 'خبيرة في معمارية واجهات المستخدم الضخمة وتحسين أداء الويب. صممت منصات واستوديوهات تحليلية تفاعلية حازت على جوائز عالمية في تجربة المستخدم.',
      en: 'Specialist in enterprise frontend architecture and Core Web Vitals optimization. Crafts award-winning interactive telemetry studios with Vue 3 & GSAP.',
    },
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    linkedinUrl: 'https://linkedin.com',
    githubUrl: 'https://github.com',
    badge: {
      ar: 'خبيرة معمارية Vue 3',
      en: 'Vue.js Core Specialist',
    },
    skills: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS', 'GSAP', 'Vite', 'Canvas'],
  },
  {
    id: 'ethan-vance',
    name: {
      ar: 'د. إيثان فانس',
      en: 'Dr. Ethan Vance',
    },
    role: {
      ar: 'Senior AI Research Scientist & Agentic Systems Lead',
      en: 'Senior AI Research Scientist & Agentic Systems Lead',
    },
    specialty: {
      ar: 'الذكاء الاصطناعي التوليدي ووكلاء النماذج الكبيرة (LLMs)',
      en: 'Generative AI & Autonomous Agent Architectures',
    },
    bio: {
      ar: 'باحث ومطور ذكاء اصطناعي متخصص في بناء شبكات الوكلاء المستقلين (Multi-Agent Workflows) وأنظمة RAG المتقدمة للقطاعات الطبية والمالية.',
      en: 'AI researcher and systems builder pioneering multi-agent reasoning workflows, fine-tuned foundational LLMs, and low-latency vector pipelines.',
    },
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
    linkedinUrl: 'https://linkedin.com',
    githubUrl: 'https://github.com',
    badge: {
      ar: 'أبحاث الذكاء الاصطناعي',
      en: 'AI Lab Alumnus',
    },
    skills: ['Python', 'FastAPI', 'LangChain', 'Llama 3', 'Vector DBs', 'PyTorch'],
  },
  {
    id: 'sarah-jenkins',
    name: {
      ar: 'سارة جينكينز',
      en: 'Sarah Jenkins',
    },
    role: {
      ar: 'VP of Product Design & Design Systems Architect',
      en: 'VP of Product Design & Design Systems Architect',
    },
    specialty: {
      ar: 'تصميم المنتجات الرقمية وهندسة مكتبات الـ Design Tokens',
      en: 'Enterprise Design Systems & Immersive UX',
    },
    bio: {
      ar: 'قادت فرق التصميم لمنتجات برمجية عالمية سريعة النمو، متخصصة في هندسة أنظمة التصميم القابلة للربط المباشر مع الكود البرمجي (Flutter & Vue).',
      en: '11+ years leading UX and design engineering for global SaaS products. Bridges design and engineering through unified scalable token architectures.',
    },
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80',
    linkedinUrl: 'https://linkedin.com',
    githubUrl: 'https://github.com',
    badge: {
      ar: 'قائدة التصميم العالمي',
      en: 'Design Guild Lead',
    },
    skills: ['Figma Enterprise', 'Design Tokens', 'A11y', 'Micro-interactions', 'System Tokens'],
  },
]
