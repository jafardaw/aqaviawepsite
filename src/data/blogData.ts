import type { BlogPostItem } from '../types/extraSections'

export const blogData: BlogPostItem[] = [
  {
    id: 'b1',
    slug: 'clean-architecture-flutter-laravel',
    title: {
      ar: 'كيف تنتقل من كتابة كود مبتدئ إلى معمارية Clean Architecture في Flutter و Laravel',
      en: 'Level Up from Spaghetti Code to Clean Architecture in Flutter & Laravel',
    },
    excerpt: {
      ar: 'دليل عملي لفصل الواجهات عن منطق الأعمال (Business Logic) وبناء طبقات Domain و Data و Presentation بطريقة يسهل اختبارها وتطويرها.',
      en: 'A practical guide to decoupling UI from business logic using Domain, Data, and Presentation layers for rock-solid testability and maintainability.',
    },
    category: {
      ar: 'معمارية برمجية',
      en: 'Software Architecture',
    },
    readTime: {
      ar: '7 دقائق قراءة',
      en: '7 min read',
    },
    date: {
      ar: '10 سبتمبر 2026',
      en: 'Sep 10, 2026',
    },
    author: {
      name: {
        ar: 'م. طارق المنصور',
        en: 'Eng. Tariq Al-Mansoor',
      },
      role: {
        ar: 'Staff Mobile Architect',
        en: 'Staff Mobile Architect',
      },
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    tags: ['Flutter', 'Clean Architecture', 'Laravel', 'SOLID'],
    content: {
      ar: `
### لماذا تصبح المشاريع كابوساً بعد 6 أشهر؟

المشكلة الكبرى التي تواجه معظم المطورين في بداية مسيرتهم، سواء في **Flutter** أو **Laravel**، هي خلط المسؤوليات:
- استدعاء قواعد البيانات أو الـ APIs مباشرة داخل الـ Widget في Flutter.
- وضع منطق الحسابات المالية داخل الـ Controllers في Laravel.

عندما يكبر المشروع إلى أكثر من 50 شاشة أو مئات الآلاف من المستخدمين، فإن أي تعديل بسيط يتسبب في انهيار أجزاء أخرى، وتصبح كتابة الاختبارات (Unit Tests) أمراً شبه مستحيل.

---

### الطبقات الثلاث المقدسة في الـ Clean Architecture

#### 1. طبقة الـ Domain (قلب النظام النابض):
- تحتوي على الـ **Entities** (النماذج النقية بدون أي ارتباط بمكتبات خارجية).
- تحتوي على الـ **Use Cases** (مثل: \`TransferMoneyUseCase\` أو \`AuthenticateUserUseCase\`).
- تحتوي على الـ **Repository Interfaces** (عقود مجردة تحدد العمليات دون تحديد كيف تُنفذ).

#### 2. طبقة الـ Data (تنفيذ العقود وجلب البيانات):
- تحتوي على الـ **Models** وتوابع التحويل (JSON Parsing).
- تحتوي على الـ **Data Sources** (Local Cache عبر SQLite/Hive، و Remote API عبر Dio/Http).
- تطبيق الـ Repository الحقيقي وربطه بالـ API الخارجي.

#### 3. طبقة الـ Presentation (الواجهات وإدارة الحالة):
- الـ **State Management** (مثل BLoC / Riverpod في Flutter، أو Pinia في Vue).
- الواجهات الخالصة والـ Widgets الغبية (Dumb Components) التي تكتفي بعرض الحالة دون معرفة مصدر البيانات.

---

### نصيحة عملية من كبار المهندسين
> "لا تجعل واجهتك ذكية أبداً؛ الواجهة الذكية تعني كوداً غبياً يصعب اختباره. اجعل الـ Use Cases هي التي تقود كل قرار منطقي في تطبيقك."
      `,
      en: `
### Why Codebases Become Unmaintainable After 6 Months

The number one pitfall junior-to-mid engineers face in both **Flutter** and **Laravel** is responsibility coupling:
- Direct HTTP/Database queries invoked inside Flutter State classes.
- Heavy business domain calculations stuffed inside Laravel HTTP Controllers.

As enterprise codebases scale past hundreds of thousands of lines, a single database schema migration triggers cascading breakages across unrelated UI screens.

---

### The Three Sacred Layers of Clean Architecture

#### 1. The Domain Layer (The Pure Business Core):
- **Entities**: Framework-agnostic data models.
- **Use Cases / Interactors**: Encapsulates discrete business operations (e.g. \`ExecuteInstantTransferUseCase\`).
- **Repository Contracts**: Abstract interfaces dictating data operations.

#### 2. The Data Layer (Concrete Implementations):
- **Data Transfer Objects (DTOs)** with strict serializations.
- **Data Sources**: Segregated Remote (Dio/REST) and Local (Hive/SQLite) pipelines.
- Concrete repository implementations orchestrating cache policies.

#### 3. The Presentation Layer (Decoupled Reactive UI):
- **State Management** (BLoC / Riverpod / Pinia).
- Decoupled, stateless view components that react strictly to emitted state states.

---

### Senior Engineer Golden Rule
> "Keep your views completely dumb. A smart view produces fragile code that resists automated unit testing. Let Use Cases govern all business rules."
      `
    }
  },
  {
    id: 'b2',
    slug: 'why-vue3-composition-api-enterprise',
    title: {
      ar: 'لماذا اعتمدنا Vue 3 Composition API و TypeScript لبناء منصات الشركات الضخمة؟',
      en: 'Why Vue 3 Composition API & TypeScript are Dominating Enterprise Frontends',
    },
    excerpt: {
      ar: 'مقارنة تقنية عميقة بين خيارات بناء واجهات الويب وكيف تساعد Composables في مشاركة المنطق البرمجي بدون تعقيد وبكفاءة وسرعة فائقة.',
      en: 'An architectural deep-dive into how composables, fine-grained reactivity, and type safety eliminate frontend bloat and boost dev velocity.',
    },
    category: {
      ar: 'هندسة الواجهات',
      en: 'Frontend Engineering',
    },
    readTime: {
      ar: '5 دقائق قراءة',
      en: '5 min read',
    },
    date: {
      ar: '6 سبتمبر 2026',
      en: 'Sep 6, 2026',
    },
    author: {
      name: {
        ar: 'م. نور الحسيني',
        en: 'Eng. Noor Al-Husseini',
      },
      role: {
        ar: 'Lead Frontend Architect',
        en: 'Lead Frontend Architect',
      },
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    },
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    tags: ['Vue 3', 'TypeScript', 'Composables', 'Clean Code'],
    content: {
      ar: `
### التحول الجذري: من Options API إلى Composition API

في السابق، كان Vue 2 يعتمد على نمط الـ Options API (\`data\`, \`methods\`, \`computed\`, \`watch\`). هذا النمط كان لطيفاً في الصفحات البسيطة، لكنه في الأنظمة المعقدة أدى إلى ما يسمى بـ "Code Fragmentation"؛ حيث كان المنطق المتعلق بميزة واحدة مبعثراً في أربعة أماكن مختلفة داخل الملف.

مع إطلاق **Vue 3** ونمط الـ **Composition API**، تغير كل شيء:
1. **الجمع المنطقي (Logical Grouping):** أصبح بإمكانك كتابة كامل المتغيرات والدوال المتعلقة بخاصية معينة متجاورة معاً.
2. **الـ Composables القابلة لإعادة الاستخدام:** استخراج المنطق البرمجي المعقد إلى دوال خارجية تبدأ بـ \`use...\`، تماماً مثل الـ Custom Hooks أو Mixins في Flutter.
3. **توافق كامل مع TypeScript:** لا مزيد من التخمين؛ كل خاصية ودالة تمتلك Type Definition صارماً يمنع الأخطاء أثناء التطوير.

---

### مقارنة الأداء مع المكتبات الأخرى

| المعيار | Vue 3 (Composition API) | أطر العمل الأخرى |
| :--- | :--- | :--- |
| **حجم الحزمة (Bundle Size)** | أقل من 16KB بفضل التخلص من الأكواد غير المستخدمة (Tree-shaking) | أثقل بمعدل 2 إلى 3 أضعاف |
| **الاستجابة الدقيقة (Reactivity)** | تعتمد على JavaScript Proxies (تحديث المكون المحدد فقط بدون Virtual DOM Diffing كامل) | إعادة تصيير كامل الشجرة |
| **سرعة التطوير والبناء** | Vite مع HMR بسرعة البرق (أجزاء من الثانية) | أبطأ بشكل ملحوظ |
      `,
      en: `
### The Paradigm Shift: Options API to Composition API

Vue 2's Options API (\`data\`, \`methods\`, \`computed\`) was intuitive for lightweight pages, but at enterprise scale it introduced cognitive fragmentation: code for a single logical feature was fragmented across 4 disparate component blocks.

**Vue 3 Composition API** fundamentally solved this:
1. **Logical Colocation**: Related reactive state and side effects live together cleanly.
2. **First-Class Composables**: Seamless code reuse via pure composable functions (\`useCardTilt\`, \`useLanguage\`), mirroring modern Flutter services and React hooks without boilerplate.
3. **End-to-End TypeScript Safety**: Automatic type inference for reactive refs and template props.

---

### High-Scale Performance Benchmark

- **Granular Reactivity**: Powered by native ES6 Proxies, tracking exact dependency graphs so only mutated DOM nodes re-render.
- **Sub-Millisecond HMR**: Coupled with Vite 8 and Rust-based Rolldown bundler for instant developer feedback.
      `
    }
  },
  {
    id: 'b3',
    slug: 'system-design-interviews-global-startups',
    title: {
      ar: 'أسرار اجتياز مقابلات الـ System Design في الشركات الأمريكية والعالمية',
      en: 'How to Ace System Design & Code Review Interviews for US Remote Roles',
    },
    excerpt: {
      ar: 'ما الذي يبحث عنه كبار المهندسين أثناء تقييم مشروعك في المقابلة؟ من التوسع الأفقي وقواعد البيانات إلى التخزين المؤقت والأمان.',
      en: 'What senior engineering interviewers genuinely look for: horizontal scaling, database sharding, caching strategies, and defensive error handling.',
    },
    category: {
      ar: 'التطوير المهني',
      en: 'Career & Growth',
    },
    readTime: {
      ar: '9 دقائق قراءة',
      en: '9 min read',
    },
    date: {
      ar: '1 سبتمبر 2026',
      en: 'Sep 1, 2026',
    },
    author: {
      name: {
        ar: 'د. ألكسندر رايت',
        en: 'Dr. Alexander Wright',
      },
      role: {
        ar: 'Principal Backend Architect',
        en: 'Principal Backend Architect',
      },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    tags: ['System Design', 'Remote Hiring', 'Interviews', 'Microservices'],
    content: {
      ar: `
### الخطأ الفادح الذي يرتكبه معظم المرشحين

عندما يسألك مدير التوظيف التقني: *"كيف تصمم نظام إشعارات فوري يتحمل 10 ملايين مستخدم؟"*، فإن معظم المرشحين يندفعون فوراً لرسم مربعات وأسهم ويكتبون "نستخدم Redis و WebSockets".

كبار المهندسين لا يبحثون عن الكلمات الطنانة؛ إنهم يبحثون عن **طريقة تفكيرك الهندسي (Trade-off Analysis)**:
1. **توضيح المتطلبات (Clarify Functional & Non-Functional Requirements):**
   - هل النظام يتطلب دقة فورية صارمة (Strict Consistency) أم تسامح مع التأخير (Eventual Consistency)؟
   - ما هو معدل القراءة مقابل الكتابة (Read/Write Ratio)؟
2. **تقدير الحجم والأرقام (Back-of-the-Envelope Estimation):**
   - كم جيجابايت تخزين سنحتاج شهرياً؟
   - كم طلب في الثانية (Requests Per Second - RPS) نتوقع في ساعات الذروة؟
3. **تحديد نقاط الاختناق (Bottlenecks):**
   - ماذا لو تعطلت قاعدة البيانات الرئيسية؟
   - كيف ندير الـ Backpressure عندما تفيض الرسائل في الطابور؟

---

### المعادلة الذهبية للنجاح
> "في مقابلات الشركات العالمية، لا توجد إجابة واحدة صحيحة مطلقة. التصميم الهندسي هو فن إدارة التنازلات (Trade-offs). كل تقنية تختارها لها ثمن؛ واجتيازك للمقابلة يعتمد على قدرتك على تبرير لماذا اخترت هذا الثمن."
      `,
      en: `
### The Critical Mistake Most Candidates Make

When an engineering director asks: *"How would you architect a real-time notification engine for 10 million concurrent users?"*, juniors rush to draw boxes labeled "Redis" and "WebSockets".

Staff interviewers do not evaluate buzzwords; they evaluate your **Trade-off Analysis Framework**:
1. **Clarify Requirements First**:
   - High availability vs. strict ACID consistency (CAP Theorem)?
   - Peak read/write throughput ratios?
2. **Back-of-the-Envelope Estimations**:
   - Projected memory footprint for connection sockets?
   - Max expected IOPS on storage clusters?
3. **Mitigating System Bottlenecks**:
   - Failover replicas and circuit-breaker patterns.
   - Managing backpressure and dead-letter queues under burst traffic.

---

### The Golden Rule
> "There is no single correct architecture. Engineering is the discipline of managed trade-offs. The senior engineer is the one who articulates precisely why they accepted trade-off A over trade-off B."
      `
    }
  },
]
