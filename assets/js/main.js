/* ===== BBA Main JS ===== */

document.addEventListener('DOMContentLoaded', () => {
  const localeKey = 'bba-lang';
  const page = location.pathname.split('/').pop() || 'index.html';

  const titleMap = {
    'index.html': { en: 'BigBrother Analytics - Data intelligence for strategic decisions', ar: 'BigBrother Analytics - ذكاء بيانات للقرارات الاستراتيجية' },
    'about.html': { en: 'About - BigBrother Analytics', ar: 'من نحن - BigBrother Analytics' },
    'ad-scanner.html': { en: 'AdScanner - Competitive advertising intelligence | BigBrother Analytics', ar: 'AdScanner - ذكاء إعلاني تنافسي | BigBrother Analytics' },
    'bb-white.html': { en: 'BigBrother AI - White - Social Listening & Campaign Intelligence', ar: 'BigBrother AI - White - الاستماع الاجتماعي وذكاء الحملات' },
    'customers.html': { en: 'Customers - BigBrother Analytics', ar: 'العملاء - BigBrother Analytics' },
    'platform.html': { en: 'Platform - BigBrother Analytics', ar: 'المنصة - BigBrother Analytics' },
    'pricing.html': { en: 'Pricing - BigBrother Analytics', ar: 'الأسعار - BigBrother Analytics' },
    'products.html': { en: 'Products - BigBrother Analytics', ar: 'المنتجات - BigBrother Analytics' },
    'prompt-engine.html': { en: 'BigBrother AI - Prompt Engine | AI Marketing Prompt Intelligence', ar: 'BigBrother AI - Prompt Engine | ذكاء برومبتات التسويق' },
    'resources.html': { en: 'Resources & Insights - BigBrother Analytics', ar: 'الموارد والرؤى - BigBrother Analytics' },
    'schedule-demo.html': { en: 'Schedule a Demo - BigBrother Analytics', ar: 'احجز عرضًا توضيحيًا - BigBrother Analytics' },
    'solutions.html': { en: 'Solutions - BigBrother Analytics', ar: 'الحلول - BigBrother Analytics' }
  };

  const copy = {
    ar: {
      Platform: 'المنصة',
      Solutions: 'الحلول',
      Products: 'المنتجات',
      Pricing: 'الأسعار',
      Customers: 'العملاء',
      Resources: 'الموارد',
      Blog: 'المدونة',
      'Case Studies': 'دراسات الحالة',
      Documentation: 'التوثيق',
      About: 'من نحن',
      'Schedule a Demo': 'احجز عرضًا توضيحيًا',
      'Explore the platform': 'استكشف المنصة',
      'Explore solutions': 'استكشف الحلول',
      'See the platform': 'شاهد المنصة',
      'See your brand': 'شاهد علامتك',
      'Learn more': 'اعرف المزيد',
      'Read more': 'اقرأ المزيد',
      'Get a demo': 'احصل على عرض توضيحي',
      'Get in touch': 'تواصل معنا',
      'Get started': 'ابدأ الآن',
      'See Pricing': 'شاهد الأسعار',
      'Start Free Trial': 'ابدأ التجربة المجانية',
      'Request my demo': 'طلب عرض توضيحي',
      'Request Your Demo': 'طلب عرض توضيحي',
      'Book My Demo': 'احجز عرضًا توضيحيًا',
      'Book a personalized walkthrough and see how BigBrother works for your industry.': 'احجز جولة مخصصة وشاهد كيف يعمل BigBrother لقطاعك.',
      'See BigBrother analyze your world.': 'شاهد BigBrother وهو يحلل عالمك.',
      'Tell us a little about you and we\'ll set up a walkthrough of the platform, tailored to your industry and the questions you need answered.': 'أخبرنا قليلًا عنك، وسنرتب لك جولة على المنصة مصممة لقطاعك وللأسئلة التي تحتاج إجابة عنها.',
      'No spam. We\'ll only use your details to arrange the demo.': 'لا رسائل مزعجة. سنستخدم بياناتك فقط لترتيب العرض.',
      'Intelligence for teams that need signal, not noise': 'ذكاء للفرق التي تحتاج إلى إشارة لا ضوضاء',
      'See what is changing.': 'شاهد ما الذي يتغير.',
      'Act before everyone else.': 'تحرك قبل الجميع.',
      'BigBrother turns large, messy conversations into clear direction. Track industries, monitor brands, detect risk, and ask questions in Arabic or English - without losing the nuance.': 'يحوّل BigBrother المحادثات الكبيرة والمبعثرة إلى اتجاه واضح. تتبع القطاعات، راقب العلامات التجارية، اكتشف المخاطر، واطرح الأسئلة بالعربية أو الإنجليزية دون فقدان التفاصيل.',
      'Data intelligence that scales with your questions': 'ذكاء بيانات يتوسع مع أسئلتك',
      'Industry verticals monitored across MENA': 'القطاعات التي نرصدها عبر منطقة الشرق الأوسط وشمال أفريقيا',
      'Data points processed per query': 'نقاط البيانات المعالجة في كل استعلام',
      'Full Arabic & English NLP out of the box': 'معالجة عربية وإنجليزية جاهزة من البداية',
      'Everything you need to listen, understand and act': 'كل ما تحتاجه للاستماع والفهم والتحرك',
      'Empower your business with the most accurate and relevant data - from brand listening to industry-wide intelligence.': 'مكّن عملك بأكثر البيانات دقة وملاءمة - من الاستماع للعلامة التجارية إلى الذكاء على مستوى القطاعات.',
      'Industry Monitoring': 'مراقبة القطاعات',
      'Track entire verticals with industry reports built from normalized online data - banking, real estate, media, pharma, retail, automotive and more.': 'تابع قطاعات كاملة عبر تقارير مبنية من بيانات رقمية موحدة - البنوك، العقارات، الإعلام، الأدوية، التجزئة، السيارات وغيرها.',
      'Brand Listening Report': 'تقرير الاستماع للعلامة التجارية',
      'Listen to your brand\'s reputation and exposure across social media, and see how your competition is performing against you.': 'استمع إلى سمعة علامتك وانتشارها عبر وسائل التواصل، وشاهد أداء منافسيك مقارنة بك.',
      'AI-Powered Prompt Engine': 'محرك الأوامر المدعوم بالذكاء الاصطناعي',
      'Query millions of data pieces in natural language - including Arabic NLP - and get strategic answers in seconds.': 'استعلم عن ملايين البيانات باللغة الطبيعية - بما فيها العربية - واحصل على إجابات استراتيجية خلال ثوانٍ.',
      'TV Channels Monitoring': 'مراقبة القنوات التلفزيونية',
      'Airing-grid and statistical modeling reveal who is watching what - connecting broadcast reach to the social conversation.': 'تكشف جداول البث والنمذجة الإحصائية من يشاهد ماذا - لربط وصول البث بالمحادثة الاجتماعية.',
      'Buying Cycle': 'دورة الشراء',
      'Map audiences and lifestyle segments across the full buying cycle to get strategic answers about the people who matter to your brand.': 'ارسم خريطة الجمهور والشرائح الحياتية عبر دورة الشراء الكاملة للحصول على إجابات استراتيجية عن الأشخاص المهمين لعلامتك.',
      'Crisis Detection': 'اكتشاف الأزمات',
      'Detect sudden changes in conversation or critical actions the moment they happen - predict whether a PR crisis is about to unfold.': 'اكتشف التغيرات المفاجئة في المحادثة أو الأحداث الحرجة لحظة وقوعها - وتنبأ بما إذا كانت أزمة علاقات عامة على وشك الحدوث.',
      'How it works': 'كيف يعمل',
      'From raw data to strategic direction': 'من البيانات الخام إلى التوجيه الاستراتيجي',
      'Built and battle-tested over years of real analysis - from a full control-room system to a subscription platform powered by tens of AI algorithms.': 'بُني واختُبر عبر سنوات من التحليل الحقيقي - من نظام غرفة تحكم كامل إلى منصة اشتراك مدعومة بعشرات خوارزميات الذكاء الاصطناعي.',
      'Collect & Normalize': 'اجمع ونظّم',
      'We gather data from social platforms, news outlets, TV broadcasts, and forums - then normalize it so every source speaks the same language.': 'نجمع البيانات من منصات التواصل، والمنافذ الإخبارية، والبث التلفزيوني، والمنتديات - ثم نوحّدها بحيث تتحدث كل المصادر اللغة نفسها.',
      'Analyze with AI': 'حلّل بالذكاء الاصطناعي',
      'Tens of AI algorithms process the data - sentiment, topic clustering, trend detection, crisis prediction - all with native Arabic and English NLP.': 'تعالج عشرات خوارزميات الذكاء الاصطناعي البيانات - المشاعر، تجميع المواضيع، اكتشاف الاتجاهات، والتنبؤ بالأزمات - مع معالجة عربية وإنجليزية أصلية.',
      'Act on Insights': 'تحرّك بناءً على الرؤى',
      'Get clear reports, real-time dashboards, and natural-language answers you can act on - share with your board or feed directly into campaigns.': 'احصل على تقارير واضحة ولوحات فورية وإجابات بلغة طبيعية يمكنك التحرك بها - شاركها مع مجلس الإدارة أو استخدمها مباشرة في الحملات.',
      'Use cases': 'حالات الاستخدام',
      'One engine, every industry vertical': 'محرك واحد، لكل قطاع',
      'BigBrother monitors industries across the board - normalizing online data into reports you can trust and act on.': 'يراقب BigBrother القطاعات عبر جميع المجالات - ويوحّد البيانات الرقمية إلى تقارير يمكنك الوثوق بها والتحرك وفقها.',
      'Market & Competitor Monitoring': 'مراقبة السوق والمنافسين',
      'Track entire industries and benchmark your brand against competitors with normalized reports built from millions of data points.': 'تابع القطاعات كاملة وقارن علامتك بالمنافسين عبر تقارير موحدة مبنية من ملايين نقاط البيانات.',
      'Brand Safety & Crisis Response': 'سلامة العلامة والاستجابة للأزمات',
      'Detect sudden changes in conversation, predict PR crises before they unfold, and respond with data-backed strategy - not gut feeling.': 'اكتشف التغيرات المفاجئة في المحادثة، وتنبأ بأزمات العلاقات العامة قبل أن تتكشف، واستجب باستراتيجية مدعومة بالبيانات - لا بالحدس.',
      'Audience & Buying Cycle': 'الجمهور ودورة الشراء',
      'Map lifestyle segments across the full buying cycle - awareness to purchase - to build campaigns that meet people where they are.': 'ارسم شرائح نمط الحياة عبر دورة الشراء الكاملة - من الوعي إلى الشراء - لبناء حملات تصل إلى الناس حيث هم.',
      'A suite that scales with your questions': 'مجموعة تتوسع مع أسئلتك',
      'Trusted by decision-makers who don\'t guess': 'موثوق لدى صناع القرار الذين لا يخمنون',
      'Questions we hear often': 'أسئلة نسمعها كثيرًا',
      'What data sources does BigBrother monitor?': 'ما مصادر البيانات التي يراقبها BigBrother؟',
      'We collect and normalize data from social media platforms, news outlets, TV broadcasts, forums, blogs, and review sites - covering Arabic and English content across MENA and global markets.': 'نجمع ونوحّد البيانات من منصات التواصل والمنافذ الإخبارية والبث التلفزيوني والمنتديات والمدونات ومواقع المراجعات - لتغطية المحتوى العربي والإنجليزي في منطقة الشرق الأوسط وشمال أفريقيا والأسواق العالمية.',
      'Does BigBrother support Arabic NLP?': 'هل يدعم BigBrother معالجة اللغة العربية؟',
      'Yes - Arabic NLP is built into every layer of the platform. Sentiment analysis, topic clustering, entity recognition, and natural-language querying all work natively in Arabic and English.': 'نعم - المعالجة العربية مدمجة في كل طبقة من المنصة. تحليل المشاعر، تجميع المواضيع، التعرف على الكيانات، والبحث باللغة الطبيعية كلها تعمل أصلًا بالعربية والإنجليزية.',
      'How is BigBrother different from social listening tools?': 'كيف يختلف BigBrother عن أدوات الاستماع الاجتماعي؟',
      'BigBrother goes beyond social listening - we normalize data across social, news, TV, and forums into industry-level intelligence. We don\'t just tell you what people are saying; we tell you what it means for your business.': 'يتجاوز BigBrother الاستماع الاجتماعي - فنحن نوحّد البيانات عبر التواصل والأخبار والتلفزيون والمنتديات إلى ذكاء على مستوى القطاع. لا نخبرك فقط بما يقوله الناس؛ بل بما يعنيه ذلك لعملك.',
      'What industries do you cover?': 'ما القطاعات التي تغطونها؟',
      'Over 20 verticals - banking, real estate, media, pharma, CPG, retail, automotive, telecom, travel, sports, entertainment, education, insurance, software, and more. If there\'s online conversation about it, we can monitor it.': 'أكثر من 20 قطاعًا - البنوك، العقارات، الإعلام، الأدوية، السلع الاستهلاكية، التجزئة، السيارات، الاتصالات، السفر، الرياضة، الترفيه، التعليم، التأمين، البرمجيات، وغيرها. إذا كانت هناك محادثة رقمية حوله، فنحن نراقبه.',
      'Can I try BigBrother before committing?': 'هل يمكنني تجربة BigBrother قبل الالتزام؟',
      'Absolutely. Schedule a demo and we\'ll walk you through the platform tailored to your industry. We also offer pilot programs so you can evaluate the data quality before scaling.': 'بالتأكيد. احجز عرضًا توضيحيًا وسنرافقك داخل المنصة بما يناسب قطاعك. كما نقدم برامج تجريبية لتقييم جودة البيانات قبل التوسع.',
      'Schedule a Demo': 'احجز عرضًا توضيحيًا',
      'See BigBrother AI in action. Pick a time that works for you - we\'ll tailor the demo to your industry and needs.': 'شاهد BigBrother AI أثناء العمل. اختر الوقت المناسب لك - وسنخصص العرض لقطاعك واحتياجاتك.',
      'Fill in the details below and we\'ll get back to you within 24 hours.': 'املأ التفاصيل أدناه وسنعود إليك خلال 24 ساعة.',
      'Full Name *': 'الاسم الكامل *',
      'Work Email *': 'بريد العمل الإلكتروني *',
      'Company Name *': 'اسم الشركة *',
      'Phone Number *': 'رقم الهاتف *',
      'Job Title *': 'المسمى الوظيفي *',
      'Company Size *': 'حجم الشركة *',
      'Select company size': 'اختر حجم الشركة',
      'Industry *': 'القطاع *',
      'Select your industry': 'اختر قطاعك',
      'Products Interested In *': 'المنتجات التي تهتم بها *',
      'Message': 'الرسالة',
      'No credit card required. Free 14-day trial included.': 'لا حاجة لبطاقة ائتمان. تتضمن الخطة تجربة مجانية لمدة 14 يومًا.',
      'What to Expect': 'ماذا تتوقع',
      'Personalized 30-minute demo': 'عرض مخصص لمدة 30 دقيقة',
      'Tailored to your industry': 'مصمم لقطاعك',
      'Live Q&A with our team': 'جلسة أسئلة وأجوبة مباشرة مع فريقنا',
      'Free trial setup included': 'يتضمن إعداد التجربة المجانية',
      'Or Reach Us Directly': 'أو تواصل معنا مباشرة',
      'Email': 'البريد الإلكتروني',
      'Phone': 'الهاتف',
      'Location': 'الموقع',
      'Trusted by 200+ companies': 'موثوق لدى أكثر من 200 شركة',
      'SOC 2 Compliant': 'متوافق مع SOC 2',
      'GDPR Ready': 'جاهز لـ GDPR',
      '256-bit Encryption': 'تشفير 256 بت',
      'Advertising intelligence · Real-time competitor tracking': 'ذكاء إعلاني · تتبع المنافسين في الوقت الحقيقي',
      'See exactly who is spending where - and how it moves the market.': 'اعرف بالضبط من ينفق أين - وكيف يؤثر ذلك في السوق.',
      'Multi-channel tracking': 'تتبع متعدد القنوات',
      'Real-time alerts': 'تنبيهات فورية',
      'Competitive benchmarks': 'معايير تنافسية',
      'Your Share of Voice': 'حصتك من الصوت',
      'Top Competitor': 'أكبر منافس',
      'Ad spend distribution · last 30 days': 'توزيع الإنفاق الإعلاني · آخر 30 يومًا',
      'Channel mix': 'مزيج القنوات',
      'Platform monitoring': 'مراقبة المنصات',
      'Track every channel, every competitor': 'تتبع كل قناة وكل منافس',
      'TV & Streaming': 'التلفزيون والبث',
      'Digital & Social': 'الرقمي والاجتماعي',
      'Print & Outdoor': 'المطبوعات والإعلانات الخارجية',
      'Radio & Audio': 'الراديو والصوت',
      'Influencer & Creator': 'المؤثرون وصناع المحتوى',
      'From raw ad data to strategic insight': 'من بيانات الإعلانات الخام إلى رؤية استراتيجية',
      'Collect': 'اجمع',
      'Analyze': 'حلّل',
      'Act': 'تحرّك',
      'Built for competitive intelligence': 'مصمم لذكاء تنافسي',
      'Who uses AdScanner': 'من يستخدم AdScanner',
      'Brand Managers': 'مديرو العلامات التجارية',
      'Media Agencies': 'وكالات الإعلام',
      'C-Suite & Strategy': 'الإدارة العليا والاستراتيجية',
      'Stop guessing. Start tracking.': 'توقف عن التخمين. ابدأ التتبع.',
      'Social Listening & Campaign Intelligence': 'الاستماع الاجتماعي وذكاء الحملات',
      'Monitor conversations across Facebook, Instagram, TikTok, X, Telegram, WhatsApp, YouTube, and Google Reviews. Detect campaigns, anomalies, and coordinated propaganda in real time.': 'راقب المحادثات عبر فيسبوك وإنستغرام وتيك توك وX وتليجرام وواتساب ويوتيوب وتقييمات Google. اكتشف الحملات والشذوذ والدعاية المنسقة في الوقت الحقيقي.',
      'Platform Coverage': 'تغطية المنصات',
      'Every conversation, every platform': 'كل محادثة، كل منصة',
      'How It Works': 'كيف يعمل',
      'Three steps to full visibility': 'ثلاث خطوات نحو رؤية كاملة',
      'Connect Accounts': 'ربط الحسابات',
      'AI Monitors 24/7': 'يراقب الذكاء الاصطناعي 24/7',
      'Get Insights & Alerts': 'احصل على الرؤى والتنبيهات',
      'Built for intelligence teams': 'مصمم لفرق الذكاء',
      'Campaign Detection': 'اكتشاف الحملات',
      'Anomaly Alerts': 'تنبيهات الشذوذ',
      'Audience Insights': 'رؤى الجمهور',
      'Competitive Intel': 'ذكاء تنافسي',
      'Early warning system for PR crises - sentiment shifts, viral threats, bot activity, and coordinated negative campaigns detected in real time.': 'نظام إنذار مبكر لأزمات العلاقات العامة - تغيرات المشاعر، التهديدات الفيروسية، نشاط الروبوتات، والحملات السلبية المنسقة تُكتشف في الوقت الحقيقي.',
      'Reporting': 'التقارير',
      'What clients see': 'ما يراه العملاء',
      'Faster crisis response': 'استجابة أسرع للأزمات',
      'Improvement in campaign ROI': 'تحسن في عائد الاستثمار للحملة',
      'Reduction in manual monitoring': 'تقليل المراقبة اليدوية',
      'Ready to See What\'s Really Happening?': 'هل أنت مستعد لرؤية ما يحدث فعلًا؟',
      'AI Marketing Prompts Built, Tested, Perfected': 'أوامر تسويقية بالذكاء الاصطناعي بُنيت واختُبرت وصُقلت',
      'Generate, test, and refine marketing prompts at scale. A prompt engineering workspace for teams that use AI to drive content, ads, and campaigns - with guardrails, versioning, and performance analytics.': 'أنشئ واختبر وصقل أوامر التسويق على نطاق واسع. مساحة عمل لهندسة الأوامر للفرق التي تستخدم الذكاء الاصطناعي لدفع المحتوى والإعلانات والحملات - مع ضوابط وإصدارات وتحليلات أداء.',
      'Prompt Library': 'مكتبة الأوامر',
      'A/B Testing': 'اختبار A/B',
      'Quality Scoring': 'تقييم الجودة',
      'Team Collaboration': 'تعاون الفريق',
      'How It Works': 'كيف يعمل',
      'Three steps to prompt perfection': 'ثلاث خطوات نحو إتقان الأوامر',
      'Generate': 'أنشئ',
      'Test & Compare': 'اختبر وقارن',
      'Deploy & Track': 'انشر وتابع',
      'Built for marketing teams': 'مصمم لفرق التسويق',
      'Centralized, searchable library of every prompt your team has created. Tag by campaign, channel, or persona - so nothing gets lost and everything is reusable.': 'مكتبة مركزية قابلة للبحث لكل أمر أنشأه فريقك. صنّف حسب الحملة أو القناة أو الشخصية - حتى لا يضيع شيء ويصبح كل شيء قابلًا لإعادة الاستخدام.',
      'A/B Prompt Testing': 'اختبار أوامر A/B',
      'Output Quality Scoring': 'تقييم جودة المخرجات',
      'Version Control': 'التحكم بالإصدارات',
      'Approval workflows, commenting, and role-based access. Marketing leads review and approve prompts before they go live - no rogue AI copy in production.': 'مسارات موافقة، وتعليقات، ووصول قائم على الأدوار. يراجع قادة التسويق الأوامر ويوافقون عليها قبل نشرها - لا محتوى ذكي عشوائي في الإنتاج.',
      'API & Integrations': 'API والتكاملات',
      'Use Cases': 'حالات الاستخدام',
      'Prompts for every channel': 'أوامر لكل قناة',
      'Paid Ads': 'الإعلانات المدفوعة',
      'Email Marketing': 'التسويق عبر البريد الإلكتروني',
      'Social Content': 'المحتوى الاجتماعي',
      'Content & SEO': 'المحتوى وSEO',
      'Chatbots & CX': 'الروبوتات المحادثية وتجربة العميل',
      'Reporting & Insights': 'التقارير والرؤى',
      'Results': 'النتائج',
      'What teams achieve': 'ما تحققه الفرق',
      'Faster content production': 'إنتاج أسرع للمحتوى',
      'Higher conversion rates': 'معدلات تحويل أعلى',
      'Brand voice consistency': 'اتساق صوت العلامة',
      'Ready to Supercharge Your AI Prompts?': 'هل أنت مستعد لتضخيم قوة أوامرك بالذكاء الاصطناعي؟',
      'Resources & Insights': 'الموارد والرؤى',
      'Stay ahead with the latest in social listening, AI marketing, and competitive intelligence': 'ابقَ في المقدمة مع أحدث ما في الاستماع الاجتماعي والتسويق بالذكاء الاصطناعي والذكاء التنافسي',
      'All': 'الكل',
      'Social Listening': 'الاستماع الاجتماعي',
      'AI & Marketing': 'الذكاء الاصطناعي والتسويق',
      'Competitive Intel': 'ذكاء تنافسي',
      'Industry Reports': 'تقارير القطاعات',
      'Featured': 'مميز',
      'Read Report →': 'اقرأ التقرير →',
      'Get Insights Delivered': 'استلم الرؤى مباشرة',
      'Subscribe to our newsletter for the latest in social listening, AI marketing, and competitive intelligence.': 'اشترك في نشرتنا لتصلك أحدث أخبار الاستماع الاجتماعي والتسويق بالذكاء الاصطناعي والذكاء التنافسي.',
      'Subscribe': 'اشترك',
      'Data intelligence built in the region, for the region': 'ذكاء بيانات بُني في المنطقة ولأجلها',
      'BigBrother Analytics was founded in 2018 to solve a critical gap: turning the massive volume of Arabic-language data into strategic intelligence that businesses and governments can act on.': 'تأسست BigBrother Analytics عام 2018 لسد فجوة مهمة: تحويل الحجم الهائل من البيانات العربية إلى ذكاء استراتيجي يمكن للشركات والحكومات التحرك به.',
      'Our story': 'قصتنا',
      'From control room to cloud platform': 'من غرفة التحكم إلى المنصة السحابية',
      'BBA Desktop': 'سطح مكتب BBA',
      'We started with a full control-room system that analyzed the complete cycle of a trending topic - from social network to traditional media and back to social again.': 'بدأنا بنظام كامل لغرفة تحكم يحلل الدورة الكاملة للموضوع الرائج - من الشبكات الاجتماعية إلى الإعلام التقليدي ثم العودة إلى الاجتماعي مرة أخرى.',
      'Airing Grid & Modeling': 'شبكة البث والنمذجة',
      'We combined airing-grid data and statistical modeling to calculate who is watching what on TV - turning broadcast noise into audience signal.': 'جمعنا بيانات جداول البث مع النمذجة الإحصائية لحساب من يشاهد ماذا على التلفزيون - لتحويل ضوضاء البث إلى إشارة جمهور.',
      'The BBA Platform': 'منصة BBA',
      'We launched a subscription-based platform powered by tens of AI algorithms, giving our clients every BBA functionality with ease and immediacy.': 'أطلقنا منصة اشتراك مدعومة بعشرات خوارزميات الذكاء الاصطناعي، تمنح عملاءنا كل وظائف BBA بسهولة وفورية.',
      'Values': 'القيم',
      'What drives us': 'ما الذي يدفعنا',
      'Evidence over opinion': 'الدليل قبل الرأي',
      'Every recommendation we make is backed by data. We don\'t guess - we measure, analyze, and prove.': 'كل توصية نقدمها مدعومة بالبيانات. نحن لا نخمن - نقيس ونحلل ونثبت.',
      'Arabic-first intelligence': 'ذكاء عربي أولًا',
      'The Arab world produces massive amounts of digital data. We built the tools to make sense of it - dialects, nuance, and all.': 'العالم العربي ينتج كميات ضخمة من البيانات الرقمية. نحن بنينا الأدوات لفهمها - اللهجات والظلال والمعاني كلها.',
      'Human + AI': 'الإنسان + الذكاء الاصطناعي',
      'AI gives us scale. Humans give us context. Every report is reviewed by our analyst team to ensure accuracy and relevance.': 'الذكاء الاصطناعي يمنحنا النطاق. الإنسان يمنحنا السياق. يراجع فريق التحليل لدينا كل تقرير لضمان الدقة والملاءمة.',
      'Client partnership': 'شراكة العميل',
      'We don\'t just sell software - we work alongside our clients to answer the questions that matter most to their business.': 'نحن لا نبيع البرمجيات فقط - بل نعمل جنبًا إلى جنب مع عملائنا للإجابة عن الأسئلة الأكثر أهمية لأعمالهم.',
      'By the numbers': 'بالأرقام',
      'Impact at scale': 'أثر على نطاق واسع',
      'Years of continuous operation': 'سنوات التشغيل المتواصل',
      'Industry verticals monitored': 'القطاعات التي نراقبها',
      'Million+ data points per query': 'أكثر من مليون نقطة بيانات في كل استعلام',
      'Enterprise clients served': 'عملاء مؤسسيون نخدمهم',
      'AI algorithms in production': 'خوارزميات ذكاء اصطناعي في الإنتاج',
      'Languages: Arabic + English': 'اللغات: العربية + الإنجليزية',
      'Work with us': 'اعمل معنا',
      'Ready to make data-driven decisions?': 'هل أنت مستعد لاتخاذ قرارات مدعومة بالبيانات؟',
      'Whether you\'re a business, government, or NGO - we\'d love to show you what BigBrother can do for your organization.': 'سواء كنت شركة أو جهة حكومية أو منظمة غير ربحية - يسعدنا أن نريك ما يمكن لـ BigBrother فعله لمنظمتك.',
      'Everything you need to listen, understand and act': 'كل ما تحتاجه للاستماع والفهم والتحرك',
      'Core solutions': 'الحلول الأساسية',
      'Four pillars of intelligence': 'أربعة أعمدة للذكاء',
      'Coverage': 'التغطية',
      'One engine, every industry vertical': 'محرك واحد، لكل قطاع',
      'Why BigBrother': 'لماذا BigBrother',
      'Built for decisions, not dashboards': 'مصمم للقرارات، لا للوحات التحكم',
      'Arabic-first NLP': 'معالجة عربية أولًا',
      'Proprietary natural language processing for Arabic - handling dialects, transliteration, and cultural context that generic tools miss.': 'معالجة لغوية طبيعية خاصة بالعربية - تتعامل مع اللهجات والكتابة الصوتية والسياق الثقافي الذي تفوته الأدوات العامة.',
      'API access': 'الوصول عبر API',
      'White-label ready': 'جاهز للعلامة البيضاء',
      'Architecture': 'البنية',
      'Enterprise security & scale': 'أمان وقابلية توسع للمؤسسات',
      '99.9% uptime': 'توافر 99.9%',
      'SOC 2 compliant': 'متوافق مع SOC 2',
      'Role-based access': 'وصول قائم على الأدوار',
      'Data retention': 'الاحتفاظ بالبيانات',
      'Custom dashboards': 'لوحات تحكم مخصصة',
      'Export anywhere': 'التصدير إلى أي مكان',
      'Ready to see it?': 'جاهز لرؤيته؟',
      'Let us show you BigBrother in action.': 'دعنا نريك BigBrother أثناء العمل.',
      'Our Products': 'منتجاتنا',
      'Analytics Tools Built for Modern Marketing': 'أدوات تحليلية مصممة للتسويق الحديث',
      'From ad tracking to AI prompt engineering - three products, one ecosystem, unlimited insight.': 'من تتبع الإعلانات إلى هندسة أوامر الذكاء الاصطناعي - ثلاثة منتجات، نظام واحد، ورؤية بلا حدود.',
      'A fully white-labeled analytics platform you can rebrand and deploy for your clients. Real-time dashboards, automated reporting, and multi-tenant management - all under your brand.': 'منصة تحليلية بعلامة بيضاء بالكامل يمكنك إعادة تسميتها ونشرها لعملائك. لوحات فورية وتقارير تلقائية وإدارة متعددة المستأجرين - كلها تحت علامتك.',
      'White-label dashboards & reports': 'لوحات وتقارير بعلامة بيضاء',
      'Multi-tenant client management': 'إدارة عملاء متعددة المستأجرين',
      'Custom domain & branding': 'نطاق وعلامة مخصصة',
      'Real-time data streaming': 'بث بيانات لحظي',
      'Role-based access control': 'تحكم بالوصول حسب الدور',
      'Ad Intelligence': 'ذكاء إعلاني',
      'Monitor, analyze, and optimize ad campaigns across every major platform. Get competitor intelligence, creative performance scores, and budget recommendations - all in one place.': 'راقب وحلل وحسّن الحملات الإعلانية عبر كل منصة رئيسية. احصل على ذكاء المنافسين وتقييمات الأداء الإبداعي وتوصيات الميزانية - في مكان واحد.',
      'Multi-platform ad tracking': 'تتبع الإعلانات عبر المنصات',
      'Competitor ad intelligence': 'ذكاء إعلاني تنافسي',
      'Creative performance scoring': 'تقييم أداء الإبداع',
      'Budget optimization suggestions': 'اقتراحات لتحسين الميزانية',
      'Automated anomaly alerts': 'تنبيهات شذوذ تلقائية',
      'AI-Powered': 'مدعوم بالذكاء الاصطناعي',
      'Generate, test, and refine marketing prompts at scale. Built for teams that use AI to drive content, ads, and campaigns - with guardrails, versioning, and performance analytics.': 'أنشئ واختبر وصقل أوامر التسويق على نطاق واسع. مصمم للفرق التي تستخدم الذكاء الاصطناعي لدفع المحتوى والإعلانات والحملات - مع ضوابط وإصدارات وتحليلات أداء.',
      'Prompt library & versioning': 'مكتبة الأوامر وإدارة الإصدارات',
      'A/B prompt testing': 'اختبار الأوامر A/B',
      'Output quality scoring': 'تقييم جودة المخرجات',
      'Team collaboration & approval flows': 'تعاون الفريق ومسارات الموافقة',
      'API access for CI/CD integration': 'وصول API للتكامل مع CI/CD',
      'Why BigBrother Analytics': 'لماذا BigBrother Analytics',
      'One Ecosystem. Every Tool You Need.': 'نظام واحد. كل الأدوات التي تحتاجها.',
      'Our products work together seamlessly. Connect your ad data, analytics, and AI workflows into a single source of truth.': 'تعمل منتجاتنا معًا بسلاسة. اربط بياناتك الإعلانية والتحليلات وسير عمل الذكاء الاصطناعي في مصدر واحد للحقيقة.',
      'Unified Data Layer': 'طبقة بيانات موحدة',
      'All three products share a common data layer - no silos, no re-keying, no exports. Your data flows where it\'s needed.': 'تشترك المنتجات الثلاثة في طبقة بيانات واحدة - بلا جزر معزولة أو إعادة إدخال أو تصدير. تتحرك بياناتك حيث تحتاج إليها.',
      'Multi-Tenant by Default': 'متعدد المستأجرين افتراضيًا',
      'Manage clients, teams, and permissions across every product from a single admin console.': 'أدر العملاء والفرق والصلاحيات عبر كل منتج من لوحة تحكم إدارية واحدة.',
      'Real-Time Dashboards': 'لوحات تحكم فورية',
      'Every product feeds into live dashboards. Spot trends, anomalies, and opportunities as they happen.': 'كل منتج يغذي لوحات مباشرة. التقط الاتجاهات والشذوذ والفرص لحظة حدوثها.',
      'Enterprise Security': 'أمان مؤسسي',
      'SOC 2 compliant, SSO ready, encrypted at rest and in transit. Your data stays yours.': 'متوافق مع SOC 2 وجاهز لـ SSO ومشفر أثناء التخزين والنقل. بياناتك تبقى ملكك.',
      'Compare': 'قارن',
      'Which Product Is Right for You?': 'أي منتج يناسبك؟',
      'A quick look at what each product covers - or use all three together.': 'نظرة سريعة على ما يغطيه كل منتج - أو استخدمها جميعًا معًا.',
      'Capability': 'الإمكانية',
      'White-label dashboards': 'لوحات بعلامة بيضاء',
      'Ad campaign tracking': 'تتبع الحملات الإعلانية',
      'Competitor intelligence': 'ذكاء المنافسين',
      'Prompt generation & testing': 'إنشاء الأوامر واختبارها',
      'Automated reporting': 'التقارير الآلية',
      'AI-powered insights': 'رؤى مدعومة بالذكاء الاصطناعي',
      'Ready to See It in Action?': 'هل أنت مستعد لرؤيته أثناء العمل؟',
      'Book a walkthrough and we\'ll show you how our products work together for your use case.': 'احجز جولة وسنريك كيف تعمل منتجاتنا معًا لحالة استخدامك.',
      'Plans that scale with your ambition': 'خطط تتوسع مع طموحك',
      'Start with what you need. Upgrade as your questions grow. Every plan includes Arabic NLP, real-time alerts, and dedicated support.': 'ابدأ بما تحتاجه. ثم طوّر خطتك مع نمو أسئلتك. تتضمن كل خطة معالجة عربية وتنبيهات فورية ودعمًا مخصصًا.',
      'Monthly': 'شهري',
      'Annual': 'سنوي',
      'Save 20%': 'وفّر 20%',
      'Starter': 'المبتدئة',
      'Professional': 'الاحترافية',
      'Enterprise': 'المؤسسية',
      'For small teams getting started with data intelligence.': 'للفرق الصغيرة التي تبدأ رحلة ذكاء البيانات.',
      'For growing teams that need competitive intelligence.': 'للأفرقة النامية التي تحتاج إلى ذكاء تنافسي.',
      'For large organizations with complex intelligence needs.': 'للمؤسسات الكبيرة ذات الاحتياجات المعقدة للذكاء.',
      'Add-ons': 'الإضافات',
      'Customize your plan': 'خصّص خطتك',
      'Need something specific? Add modules to any plan.': 'هل تحتاج شيئًا محددًا؟ أضف وحدات إلى أي خطة.',
      'Track advertising spend and competitor exposure across TV, digital, and social channels.': 'تتبع الإنفاق الإعلاني وتعرض المنافسين عبر التلفزيون والرقمي والاجتماعي.',
      'Query millions of data points in natural language - ask questions, get answers in seconds.': 'استعلم عن ملايين نقاط البيانات بلغة طبيعية - اطرح الأسئلة واحصل على الإجابات خلال ثوانٍ.',
      'Industry Reports': 'تقارير القطاعات',
      'Deep-dive reports on specific verticals with competitive landscape and trend analysis.': 'تقارير متعمقة عن قطاعات محددة مع مشهد تنافسي وتحليل اتجاهات.',
      'Custom Dashboards': 'لوحات تحكم مخصصة',
      'Bespoke dashboards built around your KPIs, branded to your organization.': 'لوحات مصممة حول مؤشراتك الرئيسية وتحمل علامتك.',
      'Training & Onboarding': 'التدريب والتهيئة',
      'Hands-on sessions for your team to get the most out of the platform.': 'جلسات عملية لفريقك للاستفادة القصوى من المنصة.',
      'Priority Support': 'دعم أولوية',
      'Dedicated account manager with guaranteed response times and SLA.': 'مدير حساب مخصص مع أزمنة استجابة مضمونة واتفاقية مستوى خدمة.',
      'Common questions': 'أسئلة شائعة',
      'Can I try before I buy?': 'هل يمكنني التجربة قبل الشراء؟',
      'Yes - every plan includes a 14-day free trial with full access. No credit card required.': 'نعم - تتضمن كل خطة تجربة مجانية لمدة 14 يومًا مع وصول كامل. لا حاجة لبطاقة ائتمان.',
      'Can I switch plans later?': 'هل يمكنني تغيير الخطة لاحقًا؟',
      'Absolutely. Upgrade, downgrade, or add modules at any time. Changes take effect immediately with prorated billing.': 'بالتأكيد. يمكنك الترقية أو التخفيض أو إضافة وحدات في أي وقت. تسري التغييرات فورًا مع احتساب نسبي للفواتير.',
      'Do you offer discounts for nonprofits or education?': 'هل تقدمون خصومات للمنظمات غير الربحية أو التعليم؟',
      'Yes. We offer special pricing for NGOs, academic institutions, and government organizations. Contact us for details.': 'نعم. نقدم تسعيرًا خاصًا للمنظمات غير الحكومية والمؤسسات الأكاديمية والجهات الحكومية. تواصل معنا للتفاصيل.',
      'What languages does the platform support?': 'ما اللغات التي تدعمها المنصة؟',
      'The platform supports Arabic (including dialects) and English out of the box. Additional languages are available as add-ons.': 'تدعم المنصة العربية (بما فيها اللهجات) والإنجليزية بشكل افتراضي. تتوفر لغات إضافية كإضافات.',
      'Is my data secure?': 'هل بياناتي آمنة؟',
      'Yes. We\'re SOC 2 compliant with enterprise-grade encryption, role-based access, and strict data isolation between tenants.': 'نعم. نحن متوافقون مع SOC 2 مع تشفير بمستوى المؤسسات، ووصول قائم على الأدوار، وعزل صارم للبيانات بين المستأجرين.',
      'Still deciding?': 'ما زلت مترددًا؟',
      'Let us help you choose the right plan.': 'دعنا نساعدك في اختيار الخطة المناسبة.',
      'Tell us about your team and what you need - we\'ll recommend the best fit.': 'أخبرنا عن فريقك وما تحتاج إليه - وسنوصي بالحل الأنسب.',
      'The State of Social Listening in the Middle East - 2025': 'حالة الاستماع الاجتماعي في الشرق الأوسط - 2025',
      'A comprehensive analysis of social media trends, platform usage, and brand monitoring challenges across MENA markets': 'تحليل شامل لاتجاهات وسائل التواصل واستخدام المنصات وتحديات مراقبة العلامات عبر أسواق الشرق الأوسط وشمال أفريقيا',
      'BigBrother AI Research': 'فريق أبحاث BigBrother AI',
      'Jan 2025': 'يناير 2025',
      'How to Detect Coordinated Propaganda Campaigns on Social Media': 'كيف تكتشف حملات الدعاية المنسقة على وسائل التواصل',
      'Learn the red flags and AI techniques to identify inauthentic behavior and state-sponsored campaigns': 'تعرّف على العلامات التحذيرية وتقنيات الذكاء الاصطناعي لاكتشاف السلوك غير الأصيل والحملات المدعومة من الدولة',
      'AI-Powered Content: Why Human-AI Collaboration Beats Fully Automated': 'المحتوى المدعوم بالذكاء الاصطناعي: لماذا يتفوق تعاون الإنسان والآلة على الأتمتة الكاملة',
      'The case for keeping humans in the loop when using AI for content creation': 'لماذا يجب إبقاء البشر في الحلقة عند استخدام الذكاء الاصطناعي لصناعة المحتوى',
      'Steal This: How Top Brands Use Ad Intelligence to Win Market Share': 'استفد من هذا: كيف تستخدم العلامات الكبرى الذكاء الإعلاني للفوز بحصة سوقية',
      'Real examples of companies using competitive ad monitoring to gain an edge': 'أمثلة واقعية لشركات تستخدم المراقبة الإعلانية التنافسية لتحقيق أفضلية',
      'Case Study': 'دراسة حالة',
      'How [Brand X] Reduced Crisis Response Time by 85% with BigBrother AI': 'كيف خفّضت [Brand X] زمن الاستجابة للأزمات بنسبة 85% باستخدام BigBrother AI',
      'From 6-hour detection to 45-minute response - a social listening transformation story': 'من اكتشاف يستغرق 6 ساعات إلى استجابة خلال 45 دقيقة - قصة تحول في الاستماع الاجتماعي',
      'Social Media Platform Trends in GCC Countries - Q4 2024': 'اتجاهات منصات التواصل في دول مجلس التعاون الخليجي - الربع الرابع 2024',
      'Platform usage shifts, emerging content formats, and audience behavior changes across the Gulf': 'تحولات استخدام المنصات، وصيغ المحتوى الناشئة، وتغيرات سلوك الجمهور عبر الخليج',
      'Prompt Engineering for Marketing Teams: A Practical Guide': 'هندسة الأوامر لفرق التسويق: دليل عملي',
      'How to write prompts that generate on-brand, high-converting marketing content': 'كيف تكتب أوامر تولد محتوى تسويقيًا متوافقًا مع العلامة وعالي التحويل',

      // AdScanner page
      'AdScanner - Competitive advertising intelligence | BigBrother Analytics': 'AdScanner - ذكاء إعلاني تنافسي | BigBrother Analytics',
      'alerts': 'تنبيهات',
      'tracking': 'تتبع',
      'Full name': 'الاسم الكامل',
      'Job title': 'المسمى الوظيفي',
      'Real-time': 'في الوقت الحقيقي',
      'benchmarks': 'المقارنات المعيارية',
      'Competitive': 'تنافسي',
      'Key features': 'الميزات الرئيسية',
      'Mobile number': 'رقم الهاتف المحمول',
      'Multi-channel': 'متعدد القنوات',
      'Interested in…': 'مهتم بـ…',
      'Share of Voice': 'حصة الصوت',
      'Business email': 'البريد الإلكتروني للعمل',
      'Spend Estimates': 'تقديرات الإنفاق',
      'Setup in minutes': 'الإعداد في دقائق',
      'Real-Time Alerts': 'تنبيهات فورية',
      'Creative Library': 'مكتبة الإبداعات',
      'See how it works': 'شاهد كيف يعمل',
      'Automated Reports': 'التقارير التلقائية',
      'Targeting Insights': 'رؤى الاستهداف',
      '6.2% vs last month': '6.2% مقارنة بالشهر الماضي',
      '2.1% vs last month': '2.1% مقارنة بالشهر الماضي',
      'Free competitive audit': 'تدقيق تنافسي مجاني',
      'See AdScanner in action': 'شاهد AdScanner أثناء العمل',
      'and how it moves the market.': 'وكيف يؤثر ذلك في السوق.',
      'See exactly who is spending where -': 'اعرف بالضبط من ينفق وأين -',
      'Everything you need to track, benchmark, and respond to competitor advertising activity.': 'كل ما تحتاجه لتتبع إعلانات المنافسين ومقارنتها والاستجابة لها.',
      'Get notified the moment a competitor launches a new campaign, shifts spend, or enters a new channel.': 'احصل على تنبيهات لحظة إطلاق المنافس لحملة جديدة، أو تغيير الإنفاق، أو دخول قناة جديدة.',
      'Track radio spots, podcast sponsorships, and audio ad placements to measure reach in the auditory space.': 'تتبع الإعلانات الإذاعية، ورعايات البودكاست، ومواضع الإعلانات الصوتية لقياس الوصول الصوتي.',
      'Reveal audience segments, geotargeting, and dayparting strategies your competitors use to reach customers.': 'اكتشف شرائح الجمهور، والاستهداف الجغرافي، واستراتيجيات تقسيم اليوم التي يستخدمها منافسوك للوصول إلى العملاء.',
      'Compare your advertising presence against every competitor in your category - by channel, by week, by campaign.': 'قارن تواجدك الإعلاني مع كل منافس في فئتك - حسب القناة، والأسبوع، والحملة.',
      'Identify influencer partnerships, sponsored content, and creator collaborations that shape brand conversations.': 'حدد شراكات المؤثرين، والمحتوى الممول، وتعاونات صناع المحتوى التي تشكل نقاشات العلامة التجارية.',
      'Browse and search every ad creative your competitors run - images, videos, copy, and landing pages in one place.': 'تصفح وابحث في كل إبداع إعلاني ينشره منافسوك - الصور، والفيديوهات، والنصوص، وصفحات الهبوط في مكان واحد.',
      'Capture print ad placements, billboard campaigns, and transit advertising to complete your offline media picture.': 'رصد مواضع الإعلانات المطبوعة، وحملات اللوحات الإعلانية، وإعلانات وسائل النقل لإكمال صورتك الإعلامية غير الرقمية.',
      'AI-powered estimates of competitor ad spend by channel, campaign, and time period - benchmarked against your own.': 'تقديرات مدعومة بالذكاء الاصطناعي للإنفاق الإعلاني للمنافسين حسب القناة والحملة والفترة الزمنية - مقارنة بإنفاقك الخاص.',
      'Monitor ad spend, formats, and creative rotations across Meta, Google, TikTok, Snapchat, and programmatic networks.': 'راقب الإنفاق الإعلاني، والتنسيقات، وتدوير الإعلانات عبر ميتا، وجوجل، وتيك توك، وسناب شات، والشبكات البرمجية.',
      'Schedule competitive intelligence reports delivered to your inbox - weekly, monthly, or triggered by campaign events.': 'جدول تقارير الذكاء التنافسي لتصل إلى بريدك الوارد - أسبوعيًا، أو شهريًا، أو عند حدوث أحداث حملة معينة.',
      'Track commercial placements across broadcast, cable, and streaming platforms with airing-grid data and frequency analysis.': 'تتبع مواضع الإعلانات التجارية عبر منصات البث والكابل والبث الرقمي مع بيانات شبكة البث وتحليل التكرار.',
      "Get a bird's-eye view of competitive advertising dynamics to inform budget allocation, market entry, and strategic planning.": 'احصل على نظرة شاملة لديناميكيات إعلانات المنافسين لتوجيه تخصيص الميزانية، ودخول السوق، والتخطيط الاستراتيجي.',
      'Build data-backed pitch decks, track client share of voice, and identify whitespace opportunities across channels and geographies.': 'ابنِ عروضًا تقديمية مدعومة بالبيانات، وتتبع حصة العميل من الصوت، وحدد الفرص المتاحة عبر القنوات والمناطق الجغرافية.',
      'Monitor competitor campaigns in real time, validate your media spend against the market, and prove your advertising ROI with hard data.': 'راقب حملات المنافسين في الوقت الحقيقي، وتحقق من ملاءمة إنفاقك الإعلامي مع السوق، وأثبت عائد الاستثمار الإعلاني ببيانات قاطعة.',
      'AdScanner monitors ad placements and competitor activity across all major media channels - giving you a unified view of who is spending what.': 'يراقب AdScanner مواضع الإعلانات ونشاط المنافسين عبر جميع القنوات الإعلامية الرئيسية - مما يمنحك رؤية موحدة لمن ينفق وماذا ينفق.',
      'Get a personalized demo showing how AdScanner reveals competitor advertising intelligence across every channel that matters to your business.': 'احصل على عرض توضيحي مخصص يوضح كيف يكشف AdScanner ذكاء إعلانات المنافسين عبر كل قناة تهم عملك.',
      'AdScanner continuously scans broadcast schedules, digital ad libraries, social platforms, and print editions to capture every ad placement across your competitive set.': 'يقوم AdScanner بمسح جداول البث، ومكتبات الإعلانات الرقمية، والمنصات الاجتماعية، والنسخ المطبوعة باستمرار لرصد كل موضع إعلاني لمنافسيك.',
      'Access dashboards, automated reports, and real-time alerts that reveal exactly where competitors are investing - so you can optimize your media mix and outmaneuver them.': 'الوصول إلى لوحات التحكم، والتقارير التلقائية، والتنبيهات الفورية التي تكشف بدقة أين يستثمر المنافسون - لتتمكن من تحسين مزيجك الإعلامي والتفوق عليهم.',
      'AdScanner tracks advertising and competitor exposure across channels to reveal who is spending where, how often, and what impact it has on conversation and share of voice.': 'يتتبع AdScanner الإعلانات وتواجد المنافسين عبر القنوات ليكشف من ينفق أين، وكم مرة، وما تأثير ذلك على المحادثات وحصة الصوت.',
      'Our algorithms normalize raw ad data into structured intelligence - calculating spend estimates, frequency, reach, creative themes, and channel distribution for each brand.': 'تقوم خوارزمياتنا بتبسيط بيانات الإعلانات الخام إلى ذكاء منظم - وحساب تقديرات الإنفاق، والتكرار، والوصول، والمحاور الإبداعية، وتوزيع القنوات لكل علامة تجارية.',

      // BBA White page
      'BigBrother AI - White | Social Listening & Campaign Intelligence': 'BigBrother AI - White | الاستماع الاجتماعي وذكاء الحملات',
      'BigBrother AI - White': 'BigBrother AI - White',
      'Social Listening &': 'الاستماع الاجتماعي و',
      'Campaign Intelligence': 'ذكاء الحملات',
      'Start Free Trial →': 'ابدأ التجربة المجانية ←',
      'Feed posts, stories, reels, and mentions': 'منشورات الخلاصة، والقصص، والريلز، والإشارات',
      'Videos, comments, sounds, and hashtag trends': 'الفيديوهات، والتعليقات، والأصوات، واتجاهات الهاشتاج',
      'Ratings, written reviews, and sentiment trends': 'التقييمات، والمراجعات المكتوبة، واتجاهات المشاعر',
      'Channels, groups, bots, and encrypted messaging': 'القنوات، والمجموعات، والروبوتات، والرسائل المشفرة',
      'Posts, comments, pages, groups, and ad activity': 'المنشورات، والتعليقات، والصفحات، والمجموعات، ونشاط الإعلانات',
      'Tweets, threads, spaces, and influencer activity': 'التغريدات، والمساحات، والأنشطة المؤثرة',
      'Videos, comments, channels, and viewer engagement': 'الفيديوهات، والتعليقات، والقنوات، وتفاعل المشاهدين',
      'Business accounts, group discussions, and status updates': 'حسابات الأعمال، والمناقشات الجماعية، وتحديثات الحالة',
      'Go from zero to complete social intelligence in under 24 hours.': 'انتقل من الصفر إلى ذكاء اجتماعي كامل في أقل من 24 ساعة.',
      'Free your team from spreadsheets - let AI handle the heavy lifting.': 'حرر فريقك من جداول البيانات - دع الذكاء الاصطناعي يتولى المهام الشاقة.',
      'Detect and respond to threats hours before competitors - even overnight.': 'اكتشف التهديدات واستجب لها قبل المنافسين بساعات - حتى أثناء الليل.',
      'Everything you need to monitor, detect, and respond - without the noise.': 'كل ما تحتاجه للمراقبة والاكتشاف والاستجابة - دون الضوضاء.',
      'Data-driven decisions replace gut feelings - every campaign backed by evidence.': 'القرارات المدعومة بالبيانات تحل محل الحدس - كل حملة مدعومة بالأدلة.',
      'Measurable impact across crisis response, campaign performance, and operational efficiency.': 'أثر ملموس عبر الاستجابة للأزمات، وأداء الحملات، والكفاءة التشغيلية.',
      'Automated daily and weekly reports with executive summaries and trend analysis - ready to share with stakeholders.': 'تقارير يومية وأسبوعية تلقائية مع ملخصات تنفيذية وتحليل اتجاهات - جاهزة للمشاركة مع أصحاب المصلحة.',
      'Get a personalized demo of BigBrother AI - White and see how it transforms raw social data into strategic advantage.': 'احصل على عرض توضيحي مخصص لـ BigBrother AI - White وشاهد كيف يحول البيانات الاجتماعية الخام إلى ميزة استراتيجية.',
      "Understand who's talking about you - demographics, influence scores, network maps, and behavioral patterns across platforms.": 'افهم من يتحدث عنك - الديموغرافيا، ودرجات التأثير، وخرائط الشبكات، وأنماط السلوك عبر المنصات.',
      'Track competitor mentions, share of voice, and strategic moves across platforms - always know where you stand in the market.': 'تتبع إشارات المنافسين وحصتهم من الصوت وتحركاتهم الاستراتيجية عبر المنصات - اعرف دائمًا موقعك في السوق.',
      'Link your social media accounts, brand pages, and competitor profiles. We support API connections and manual tracking setups.': 'اربط حساباتك على وسائل التواصل، وصفحات علامتك، وملفات المنافسين. نحن ندعم اتصالات API وإعدادات التتبع اليدوي.',
      "Identify coordinated campaigns and propaganda networks using AI graph analysis - see who's driving the narrative and how it spreads.": 'حدد الحملات المنسقة وشبكات الدعاية باستخدام تحليل الرسوم البيانية بالذكاء الاصطناعي - شاهد من يقود الرواية وكيف تنتشر.',
      "Receive actionable insights through dashboards, automated reports, and instant alerts - so you always know what's happening and why.": 'تلقَّ رؤى قابلة للتنفيذ من خلال لوحات التحكم، والتقارير التلقائية، والتنبيهات الفورية - لتكون على دراية دائمًا بما يحدث ولماذا.',
      'Get instant notifications when sentiment spikes or unusual activity is detected - before it becomes a crisis or an opportunity passes.': 'احصل على إشعارات فورية عند ارتفاع المشاعر السلبية أو اكتشاف نشاط غير معتاد - قبل أن يتحول إلى أزمة أو تفوتك الفرصة.',
      'Our algorithms continuously scan every platform - analyzing sentiment, detecting anomalies, and mapping influence networks in real time.': 'تقوم خوارزمياتنا بمسح كل منصة باستمرار - لتحليل المشاعر، واكتشاف الأنماط الشاذة، ورسم خرائط شبكات التأثير في الوقت الحقيقي.',
      'BigBrother White monitors 8 major platforms - capturing the full picture of what people say about you, your competitors, and your industry.': 'يراقب BigBrother White ثماني منصات رئيسية - لالتقاط الصورة الكاملة لما يقوله الناس عنك، ومنافسيك، وقطاعك.',
      '7 Platforms': '7 منصات',
      'Key Features': 'الميزات الرئيسية',
      'Arabic + English': 'عربي + إنجليزي',

      // Customers page & Testimonials
      'Ahmed Nazmy': 'أحمد نظمي',
      'Lamia Kamel': 'لمياء كامل',
      'Ahmed Esmat': 'أحمد عصمت',
      'Islam Zikry': 'إسلام ذكري',
      'Nibal Dahaba': 'نيبال دهبة',
      'CEO, CC Plus': 'الرئيس التنفيذي لشركة CC Plus',
      'Sherif Alexan': 'شريف أليكسان',
      'Wael Fakhrany': 'وائل الفخراني',
      'Heba El Sewedy': 'هبة السويدي',
      'Lamis El Hadidi': 'لميس الحديدي',
      'Dr. Sherif Kamel': 'د. شريف كامل',
      'Chief Data Officer, CIB': 'رئيس قطاع البيانات في البنك التجاري الدولي (CIB)',
      'GM, Sanofi Pasteur Egypt': 'المدير العام لشركة سانوفي باستور مصر',
      'CEO, The Board Consulting': 'الرئيس التنفيذي لشركة The Board Consulting',
      'Journalist & TV Presenter': 'صحفية ومقدمة برامج تلفزيونية',
      'Dean, AUC School of Business': 'عميد كلية إدارة الأعمال بالجامعة الأمريكية بالقاهرة',
      'Former Director, Goldman Sachs': 'المدير السابق في جولدمان ساكس',
      'Regional Director, Google MENA': 'المدير الإقليمي لجوجل في الشرق الأوسط وشمال أفريقيا',
      'CMO, TNC · Al Ahly Real Estate': 'رئيس قطاع التسويق في TNC · الأهلي العقارية',
      'Founder & Chairperson, Ahl Masr Foundation': 'مؤسسة ورئيسة مجلس إدارة مؤسسة أهل مصر',
      "decision-makers who don't guess": 'صناع القرار الذين لا يخمنون',
      'Start making data-driven decisions.': 'ابدأ في اتخاذ قرارات مدعومة بالبيانات.',
      'Leaders across finance, media, government, and FMCG rely on BigBrother to turn data into strategy.': 'يعتمد القادة في قطاعات التمويل، والإعلام، والحكومة، والسلع الاستهلاكية سريعة الدوران على BigBrother لتحويل البيانات إلى استراتيجية.',
      'Customers - BigBrother Analytics': 'العملاء - BigBrother Analytics',
      'Testimonials': 'الشهادات',
      'What our customers say': 'ماذا يقول عملاؤنا',
      'Trusted by': 'موثوق به من قبل',
      'Join them': 'انضم إليهم',
      '"BigBrother is a great tool for analyzing vast amounts of data in an efficient way."': '"BigBrother أداة رائعة لتحليل كميات هائلة من البيانات بطريقة فعالة."',
      '"We always lacked proper analysis. I believe it was a game changer to all industries."': '"لطالما افتقرنا إلى التحليل المناسب. أعتقد أنها كانت نقطة تحول لجميع القطاعات."',
      '"The Big Brother platform allowed us to do rapid prototyping with a wide variety of algorithms."': '"أتاحت لنا منصة Big Brother إجراء النماذج الأولية السريعة باستخدام مجموعة متنوعة من الخوارزميات."',
      '"In a data-driven world, Big Brother as a deep analytical system is crucial for better decision-making."': '"في عالم يعتمد على البيانات، يعد نظام التحليل العميق Big Brother أمرًا حاسمًا لاتخاذ قرارات أفضل."',
      '"The BigBrother Analytics system has been an eye opener for us to map and understand what\'s going on in social media."': '"كان نظام BigBrother Analytics بمثابة عين كاشفة لنا لرسم وفهم ما يدور في وسائل التواصل الاجتماعي."',
      '"BigBrother Analytics has enlightened our understanding of why different people support charity for different reasons."': '"لقد أنار BigBrother Analytics فهمنا لسبب دعم مختلف الأشخاص للعمل الخيري لأسباب متنوعة."',
      '"Big Brother Analytics is timely and innovative. Moving forward, it is all about people, data, and innovative technologies."': '"Big Brother Analytics مبتكر ويأتي في وقته المناسب. للمضي قدمًا، الأمر كله يتعلق بالأشخاص والبيانات والتقنيات المبتكرة."',
      '"A great tool that digs deep - an eye opener that gives the user a wealth of information about the targeted audience and their behaviour."': '"أداة رائعة تحفر عميقاً - تفتح العين وتمنح المستخدم ثروة من المعلومات حول الجمهور المستهدف وسلوكهم."',
      '"I am amazed by this analytics engine. This is the first time I can trust that there is an AI program capable of collecting millions of data pieces and making sense of them."': '"أنا مذهول بمحرك التحليلات هذا. هذه هي المرة الأولى التي يمكنني فيها الثقة بوجود برنامج ذكاء اصطناعي قادر على جمع ملايين البيانات وفهمها."',
      '"BigBrother provides accurate, collective and very insightful data which we found mandatory for our business. BB reports provided a wealth of records, statistics and ultimately relevant knowledge."': '"يوفر BigBrother بيانات دقيقة وجماعية وثاقبة للغاية وجدناها ضرورية لأعمالنا. قدمت تقارير BB ثروة من السجلات والإحصاءات والمعرفة ذات الصلة في النهاية."',

      // Homepage & shared
      'FAQ': 'الأسئلة الشائعة',
      '10M+': 'أكثر من 10 ملايين',
      'Live': 'مباشر',
      'High': 'مرتفع',
      'Mid': 'متوسط',
      'Active': 'نشط',
      'Alert': 'تنبيه',
      'Banking': 'الخدمات المصرفية',
      'Telecom': 'الاتصالات',
      'Insurance': 'التأمين',
      'Government': 'القطاع الحكومي',
      'Automotive': 'السيارات',
      'Real Estate': 'العقارات',
      'Retail': 'التجزئة',
      'Pharma': 'الأدوية',
      'CPG': 'السلع الاستهلاكية',
      'NGOs': 'المنظمات غير الحكومية',
      'Travel': 'السفر',
      'Sports': 'الرياضة',
      'Entertainment': 'الترفيه',
      'AI Analysis': 'تحليل الذكاء الاصطناعي',
      'TV Channels': 'القنوات التلفزيونية',
      'Data Collection': 'جمع البيانات',
      'Topic Clustering': 'تجميع المواضيع',
      'Sentiment Analysis': 'تحليل المشاعر',
      'Unusual volume spike': 'ارتفاع غير عادي في حجم البيانات',
      'Media pickup risk': 'مخاطر الالتقاط الإعلامي',
      'Hashtag coordination': 'تنسيق الهاشتاج',
      '1.4M viewers · 18-35': '1.4 مليون مشاهد · 18-35',
      '2.1M viewers · 18-45': '2.1 مليون مشاهد · 18-45',
      '890K viewers · 25-55': '890 ألف مشاهد · 25-55',
      'Channel A - Prime': 'القناة أ - الرئيسية',
      'Channel B - News': 'القناة ب - الأخبار',
      'Channel C - Sports': 'القناة ج - الرياضة',
      '· Consumer Insights': '· رؤى المستهلك',
      '· Reputation & Crisis': '· السمعة والأزمات',
      '· Competitive Intelligence': '· الذكاء التنافسي',
      'Compare to last quarter': 'مقارنة بالربع الأخير',
      'Export as PDF · Share with team': 'تصدير كـ PDF · مشاركة مع الفريق',
      '+340% in 2h · Negative sentiment': '+340% خلال ساعتين · مشاعر سلبية',
      'Show me the competitor breakdown': 'أظهر لي تصنيف المنافسين',
      "What's the sentiment breakdown for banking this quarter?": '"ما هو تصنيف المشاعر لقطاع البنوك هذا الربع؟"',
      'Positive 62% · Neutral 28% · Negative 10%. Key driver: digital banking adoption up 34% QoQ.': 'إيجابي 62% · محايد 28% · سلبي 10%. المحرك الرئيسي: نمو اعتماد الخدمات المصرفية الرقمية بنسبة 34% مقارنة بالربع السابق.',
      'Banking sector sentiment shifted +14% positive this week. Key driver: CBE interest rate decision coverage.': 'تحولت مشاعر قطاع البنوك بنسبة +14% إيجابية هذا الأسبوع. المحرك الرئيسي: تغطية قرار أسعار الفائدة للبنك المركزي المصري.',
      'Enterprise-grade, white-labeled intelligence reports built from normalized online data - ready to share with your board.': 'تقارير استخباراتية بعلامة بيضاء وبمستوى المؤسسات مبنية من بيانات رقمية موحدة - جاهزة للمشاركة مع مجلس الإدارة.',
      'Track advertising and competitor exposure across channels to see who is spending where, and how it moves the conversation.': 'تتبع الإعلانات وتواجد المنافسين عبر القنوات لمعرفة من ينفق أين، وكيف يحرك ذلك المحادثة.',

      // Platform page
      'Capabilities': 'القدرات',
      'Visualization': 'التصور المرئي',
      'Data intelligence that': 'ذكاء البيانات الذي',
      'scales with your questions': 'يتوسع مع أسئلتك',
      'Platform - BigBrother Analytics': 'المنصة - BigBrother Analytics',
      'From raw data to strategic decisions': 'من البيانات الخام إلى القرارات الاستراتيجية',
      'Built for enterprise-grade intelligence': 'مصمم للذكاء بمستوى المؤسسات',
      'PDF, Excel, API, or embed - take your data where it needs to go.': 'PDF أو Excel أو API أو التضمين - خذ بياناتك حيثما تحتاج.',
      "Build views tailored to your KPIs, your industry, and your team's workflow.": 'ابنِ طرق عرض مخصصة لمؤشرات الأداء الرئيسية الخاصة بك، وقطاعك، وسير عمل فريقك.',
      'Your data is protected by enterprise-grade security standards and encryption.': 'بياناتك محمية بمعايير تشفير وأمان بمستوى المؤسسات.',
      'Control who sees what with granular permissions and multi-tenant architecture.': 'تحكم فيمن يرى ماذا بصلاحيات دقيقة وبنية متعددة المستأجرين.',
      'Historical data preserved for trend analysis - go back years, not just months.': 'البيانات التاريخية محفوظة لتحليل الاتجاهات - ارجع سنوات للوراء، وليس مجرد أشهر.',
      'Redundant infrastructure ensures your data is always accessible when you need it.': 'البنية التحتية الاحتياطية تضمن إمكانية الوصول إلى بياناتك دائمًا عند حاجتك إليها.',
      'Built from day one to handle millions of data points with enterprise-grade reliability.': 'بُني منذ اليوم الأول للتعامل مع ملايين نقاط البيانات بموثوقية على مستوى المؤسسات.',
      'Integrate BigBrother data into your own dashboards, BI tools, and workflows via our RESTful API.': 'ادمج بيانات BigBrother في لوحات التحكم الخاصة بك، وأدوات ذكاء الأعمال، ومسارات العمل عبر واجهة RESTful API الخاصة بنا.',
      'Brand the platform as your own with BBA White - enterprise-grade reports under your logo and design.': 'صمم المنصة بعلامتك التجارية مع BBA White - تقارير بمستوى المؤسسات تحت شعارك وتصميمك.',
      'Book a personalized walkthrough and see how the platform handles your specific industry and questions.': 'احجز جولة مخصصة وشاهد كيف تتعامل المنصة مع قطاعك وأسئلتك المحددة.',
      'Interactive dashboards and reports turn complex data into clear, actionable insights your team can act on immediately.': 'لوحات التحكم والتقارير التفاعلية تحول البيانات المعقدة إلى رؤى واضحة وقابلة للتنفيذ يمكن لفريقك التحرك بناءً عليها على الفور.',
      'Three layers of intelligence working together - collection, analysis, and visualization - all powered by proprietary AI.': 'ثلاث طبقات من الذكاء تعمل معًا - الجمع، والتحليل، والتصور - كلها مدعومة بالذكاء الاصطناعي الخاص بنا.',
      'Social media, traditional media, TV channels, forums, and review sites - all normalized into a single, queryable dataset.': 'وسائل التواصل الاجتماعي، والإعلام التقليدي، والقنوات التلفزيونية، والمنتديات، ومواقع المراجعات - كلها موحدة في مجموعة بيانات واحدة قابلة للاستعلام.',
      "Get notified the moment something changes - a crisis brewing, a competitor move, or a trend emerging - before it's too late.": 'احصل على تنبيهات لحظة تغير شيء ما - أزمة تلوح في الأفق، أو تحرك للمنافسين، أو اتجاه ناشئ - قبل فوات الأوان.',
      'We aggregate millions of data points from social media, news outlets, TV broadcasts, forums, and more - in Arabic and English - every single day.': 'نجمع ونوحّد ملايين نقاط البيانات من وسائل التواصل، والمنافذ الإخبارية، والبث التلفزيوني، والمنتديات وغيرها - باللغتين العربية والإنجليزية - يوميًا.',
      'Tens of AI algorithms process the raw data - sentiment analysis, entity recognition, topic modeling, crisis prediction, and audience segmentation.': 'تعالج عشرات خوارزميات الذكاء الاصطناعي البيانات الخام - تحليل المشاعر، التعرف على الكيانات، نمذجة المواضيع، التنبؤ بالأزمات، وتقسيم الجمهور.',
      'BigBrother collects, analyzes, and visualizes millions of data points - powered by tens of AI algorithms - so you can make decisions backed by real evidence.': 'يجمع BigBrother ملايين نقاط البيانات ويحللها ويعرضها - مدعومًا بعشرات خوارزميات الذكاء الاصطناعي - لتتمكن من اتخاذ قرارات مدعومة بأدلة حقيقية.',

      // Pricing page
      '/mo': '/شهريًا',
      'Plans that': 'خطط',
      'scale with your ambition': 'تتوسع مع طموحك',
      'Pricing - BigBrother Analytics': 'الأسعار - BigBrother Analytics',
      'Email alerts': 'تنبيهات البريد الإلكتروني',
      'TV monitoring': 'مراقبة التلفزيون',
      'Contact sales': 'تواصل مع المبيعات',
      'Weekly reports': 'تقارير أسبوعية',
      'Monthly reports': 'تقارير شهرية',
      'Start free trial': 'ابدأ التجربة المجانية',
      'Dedicated analyst': 'محلل مخصص',
      'Full product suite': 'مجموعة المنتجات الكاملة',
      'Unlimited verticals': 'قطاعات غير محدودة',
      '1 industry vertical': 'قطاع صناعي واحد',
      '5 industry verticals': '5 قطاعات صناعية',
      'Daily reports + alerts': 'تقارير يومية + تنبيهات',
      'SLA & priority support': 'اتفاقية مستوى الخدمة ودعم ذو أولوية',
      'Custom API integrations': 'تكاملات مخصصة لواجهة البرمجة (API)',
      'White-label (BBA White)': 'علامة بيضاء (BBA White)',
      'Real-time crisis alerts': 'تنبيهات الأزمات في الوقت الفعلي',
      'Competitive benchmarking': 'المقارنة التنافسية المعيارية',
      'Brand listening dashboard': 'لوحة الاستماع للعلامة التجارية',

      // Products page
      'One Ecosystem.': 'نظام بيئي واحد.',
      'Every Tool You Need.': 'كل أداة تحتاجها.',
      'for Modern Marketing': 'للتسويق الحديث',
      'Analytics Tools Built': 'أدوات تحليلية مصممة',
      'Products - BigBrother Analytics': 'المنتجات - BigBrother Analytics',
      'Schedule a demo': 'احجز عرضًا توضيحيًا',
      'Learn more →': 'اعرف المزيد ←',

      // Prompt Engine page
      'BigBrother AI - Prompt Engine | AI Marketing Prompt Intelligence': 'BigBrother AI - Prompt Engine | ذكاء برومبتات التسويق بالذكاء الاصطناعي',
      'AI Marketing Prompts': 'أوامر التسويق بالذكاء الاصطناعي',
      'Built, Tested, Perfected': 'بُنيت، واختُبرت، وصُقلت',
      'BigBrother AI - Prompt Engine': 'BigBrother AI - Prompt Engine',
      'One workspace for all your AI-driven marketing content.': 'مساحة عمل واحدة لجميع محتويات التسويق المدفوعة بالذكاء الاصطناعي.',
      'Everything you need to manage AI prompts as a strategic asset.': 'كل ما تحتاجه لإدارة أوامر الذكاء الاصطناعي كأصل استراتيجي.',
      'From idea to production-ready prompts - streamlined for teams.': 'من الفكرة إلى الأوامر الجاهزة للإنتاج - مبسطة للفرق.',
      'Measurable impact on content velocity, quality, and team efficiency.': 'تأثير ملموس على سرعة وجودة المحتوى وكفاءة الفريق.',
      'Data-tested prompts outperform gut-feel copy - every word earns its place.': 'الأوامر المختبرة بالبيانات تتفوق على النصوص المبنية على الحدس - كل كلمة تكتسب قيمتها.',
      'Enforce tone, style, and compliance rules across every prompt and output - automatically.': 'فرض قواعد النبرة والأسلوب والامتثال عبر كل أمر ومخرج - تلقائيًا.',
      'From brief to publish-ready copy in minutes, not hours - with AI handling first drafts and humans refining.': 'من الموجز إلى نص جاهز للنشر في دقائق وليس ساعات - مع تولي الذكاء الاصطناعي المسودات الأولى واللمسات البشرية للتنقيح.',
      'Test subject lines, preview text, and body copy variations. Track open rate predictions and conversion scores before hitting send.': 'اختبر عناوين الرسائل، ونص المعاينة، وتنوعات نصوص المحتوى. تتبع توقعات معدل الفتح ودرجات التحويل قبل الإرسال.',
      'Generate blog outlines, meta descriptions, and long-form drafts. Score for readability, keyword targeting, and E-E-A-T compliance.': 'أنشئ مخططات المدونات، والأوصاف التعريفية، والمسودات الطويلة. قيم القراءة، واستهداف الكلمات المفتاحية، والامتثال لمعايير E-E-A-T.',
      'Get a personalized demo of Prompt Engine and see how your team can produce better content, faster - with data behind every prompt.': 'احصل على عرض توضيحي مخصص لـ Prompt Engine وشاهد كيف يمكن لفريقك إنتاج محتوى أفضل وأسرع - مع وجود بيانات وراء كل أمر.',
      'Full version history for every prompt. Roll back to previous versions, compare changes, and see exactly who modified what and when.': 'سجل إصدارات كامل لكل أمر. استعد الإصدارات السابقة، وقارن التغييرات، واعرف بالضبط من قام بالتعديل ومتى.',
      'Auto-generate executive summaries, campaign reports, and data narratives from raw analytics - consistent format, zero manual writing.': 'إنشاء تلقائي للملخصات التنفيذية، وتقارير الحملات، وسرد البيانات من التحليلات الخام - بتنسيق متسق ودون أي كتابة يدوية.',
      'Create platform-specific social posts, carousel copy, and video scripts. Ensure brand voice consistency across every channel and campaign.': 'أنشئ منشورات اجتماعية مخصصة للمنصات، ونصوص منشورات الكاروسيل، وسيناريوهات الفيديو. اضمن اتساق صوت العلامة التجارية عبر كل قناة وحملة.',
      'Design and refine conversational prompts for customer support bots, sales assistants, and onboarding flows - with tone and escalation controls.': 'صمم وصقل أوامر المحادثة لروبوتات دعم العملاء، ومساعدي المبيعات، ومسارات التهيئة - مع التحكم في النبرة والتصعيد.',
      'Connect your prompt workflows to CMS platforms, ad managers, email tools, and custom apps via our REST API. Automate prompt-to-output pipelines.': 'اربط سير عمل الأوامر بمنصات إدارة المحتوى، ومديري الإعلانات، وأدوات البريد الإلكتروني، والتطبيقات المخصصة عبر REST API الخاصة بنا. أتمت مسارات الأوامر إلى المخرجات.',
      'Generate and test ad copy for Google, Meta, TikTok, and LinkedIn. Optimize headlines, descriptions, and CTAs with A/B data before spending budget.': 'أنشئ واختبر نصوص الإعلانات لجوجل، وميتا، وتيك توك، ولينكد إن. حسّن العناوين والأوصاف ودعوات اتخاذ الإجراء ببيانات اختبار A/B قبل إنفاق الميزانية.',
      "AI-powered scoring evaluates every output for clarity, tone, persuasiveness, and brand consistency - so you know exactly what's ready for production.": 'التقييم المدعوم بالذكاء الاصطناعي يحلل كل مخرج للتأكد من الوضوح، والنبرة، والإقناع، واتساق العلامة التجارية - لتعرف بدقة ما هو جاهز للإنتاج.',
      'Test multiple prompt variations simultaneously. Measure output quality, engagement predictions, and brand alignment - pick winners with data, not guesswork.': 'اختبر تنوعات متعددة للأوامر في وقت واحد. قس جودة المخرجات، وتوقعات التفاعل، ومواءمة العلامة التجارية - اختر الفائزين بالبيانات لا بالتخمين.',
      'Promote winning prompts to your library. Track performance over time, get alerts when output quality drops, and version-control everything with full audit trails.': 'قم بترقية الأوامر الفائزة إلى مكتبتك. تتبع الأداء بمرور الوقت، واحصل على تنبيهات عند انخفاض جودة المخرجات، وتحكم في إصدارات كل شيء مع سجلات تدقيق كاملة.',
      'Run A/B tests on prompt variations. Compare output quality, tone accuracy, and conversion potential side by side - with AI-powered scoring and human feedback loops.': 'أجرِ اختبارات A/B على تنوعات الأوامر. قارن جودة المخرجات، ودقة النبرة، وإمكانات التحويل جنبًا إلى جنب - مع تقييم مدعوم بالذكاء الاصطناعي وحلقات تعليقات بشرية.',
      'Describe what you need - ad copy, email subject lines, social posts, blog outlines. Our engine generates optimized prompt templates tailored to your use case and brand voice.': 'صف ما تحتاجه - نصوص إعلانات، عناوين بريد إلكتروني، منشورات اجتماعية، مخططات مدونات. يقوم محركنا بإنشاء قوالب أوامر محسنة ومخصصة لحالة استخدامك وصوت علامتك.',

      // Resources page
      '5 min read': 'قراءة في 5 دقائق',
      '6 min read': 'قراءة في 6 دقائق',
      '7 min read': 'قراءة في 7 دقائق',
      '8 min read': 'قراءة في 8 دقائق',
      '10 min read': 'قراءة في 10 دقائق',
      '12 min read': 'قراءة في 12 دقيقة',
      'Enter your email': 'أدخل بريدك الإلكتروني',
      'Search articles...': 'ابحث عن المقالات...',
      'Omar Farooq · Nov 2024': 'عمر فاروق · نوفمبر 2024',
      'Layla Hassan · Oct 2024': 'ليلى حسن · أكتوبر 2024',
      'Layla Hassan · Dec 2024': 'ليلى حسن · ديسمبر 2024',
      'Research Team · Oct 2024': 'فريق الأبحاث · أكتوبر 2024',
      'Ahmad Al-Rashid · Dec 2024': 'أحمد الرشيد · ديسمبر 2024',
      'BigBrother AI Team · Nov 2024': 'فريق BigBrother AI · نوفمبر 2024',
      'Resources & Insights - BigBrother Analytics': 'الموارد والرؤى - BigBrother Analytics',
      'Read Report →': 'اقرأ التقرير ←',

      // Schedule demo page
      'John Doe': 'جون دو',
      'Acme Corp': 'شركة أكمي',
      'Dubai, UAE': 'دبي، الإمارات العربية المتحدة',
      'john@company.com': 'john@company.com',
      '+971 XX XXX XXXX': '+971 XX XXX XXXX',
      'hello@bigbrotherai.com': 'hello@bigbrotherai.com',
      'Agency': 'وكالة',
      'Finance': 'التمويل',
      'Healthcare': 'الرعاية الصحية',
      'E-commerce': 'التجارة الإلكترونية',
      'Government': 'حكومي',
      'SaaS / Technology': 'برمجيات كخدمة / تكنولوجيا',
      'Marketing Director': 'مدير التسويق',
      'Media / Publishing': 'الإعلام / النشر',
      'All Products': 'جميع المنتجات',
      'BigBrother AI - White': 'BigBrother AI - White',
      '1–10': '1–10',
      '11–50': '11–50',
      '51–200': '51–200',
      '201–1,000': '201–1,000',
      '1,000+': '1,000+',
      'Other': 'آخر',
      'Tell us about your monitoring needs...': 'أخبرنا عن احتياجات المراقبة الخاصة بك...',
      'Schedule a Demo - BigBrother Analytics': 'احجز عرضًا توضيحيًا - BigBrother Analytics',

      // Solutions page
      'Software': 'البرمجيات',
      'Education': 'التعليم',
      'Pharmaceutical': 'الأدوية',
      'Real estate': 'العقارات',
      'Food & drink': 'الأغذية والمشروبات',
      'Beauty & fitness': 'الجمال واللياقة البدنية',
      'Consumer electronics': 'الأجهزة الإلكترونية الاستهلاكية',
      'Sports & entertainment': 'الرياضة والترفيه',
      'Everything you need to': 'كل ما تحتاجه',
      'listen, understand and act': 'للاستماع والفهم والتحرك',
      'Solutions - BigBrother Analytics': 'الحلول - BigBrother Analytics',
      'See which solution fits your needs.': 'شاهد أي الحلول يناسب احتياجاتك.',
      'Get a Demo →': 'احصل على عرض توضيحي ←',
      'Explore TV data': 'استكشف بيانات التلفزيون',
      'Request a report': 'اطلب تقريرًا',
      'Map your audience': 'ارسم خريطة لجمهورك',
      'Crisis prediction': 'التنبؤ بالأزمات',
      'Compare your brand against competitors in real-time across every metric that matters.': 'قارن علامتك التجارية مع المنافسين في الوقت الفعلي عبر كل مقياس مهم.',
      'Every report is reviewed by our analyst team - AI for scale, humans for context and nuance.': 'يتم مراجعة كل تقرير من قبل فريق المحللين لدينا - الذكاء الاصطناعي للتوسع، والبشر للسياق والفروق الدقيقة.',
      'Every query touches millions of normalized data points from social media, news, TV, and forums.': 'يلامس كل استعلام ملايين نقاط البيانات الموحدة من وسائل التواصل الاجتماعي والأخبار والتلفزيون والمنتديات.',
      'Crisis-journey algorithms predict whether a media event will escalate - so you respond, not react.': 'تتنبأ خوارزميات مسار الأزمات بما إذا كان الحدث الإعلامي سيتصاعد - حتى تستجيب لا أن تنفعل.',
      "Tell us about your industry and the questions you need answered - we'll show you the right approach.": 'أخبرنا عن قطاعك والأسئلة التي تحتاج إلى إجابة عنها - وسنوضح لك النهج الصحيح.',
      'SOC 2 compliant, role-based access, API integration, and white-label options for large organizations.': 'متوافق مع SOC 2، ووصول قائم على الصلاحيات، وتكامل لواجهة البرمجة (API)، وخيارات العلامة البيضاء للمؤسسات الكبيرة.',
      'Proprietary algorithms handle Arabic dialects, transliteration, and cultural nuance that generic tools miss entirely.': 'تتعامل خوارزمياتنا الخاصة مع اللهجات العربية، والكتابة الصوتية، والفروق الدقيقة الثقافية التي تفوتها الأدوات العامة تمامًا.',
      "Listen to your brand's reputation and exposure across social media, and see exactly how your competition is performing against you.": 'استمع لسمعة علامتك التجارية وتواجدها عبر وسائل التواصل الاجتماعي، وشاهد بالضبط كيف أداء منافسيك مقارنة بك.',
      'Empower your business with the most accurate and relevant data when it comes to listening to your customers - and build the most successful campaigns and marketing strategies.': 'سلّح عملك بأكثر البيانات دقة وأهمية عندما يتعلق الأمر بالاستماع لعملائك - وابنِ أنجح الحملات واستراتيجيات التسويق.',

      // Headers, Footers, and Shared Elements
      'GDPR': 'اللائحة العامة لحماية البيانات (GDPR)',
      'Terms': 'الشروط',
      'Sign in': 'تسجيل الدخول',
      'Privacy': 'الخصوصية',
      'Sitemap': 'خريطة الموقع',
      'Company': 'الشركة',
      'Facebook': 'فيسبوك',
      'LinkedIn': 'لينكد إن',
      'Analytics': 'التحليلات',
      'AdScanner': 'ماسح الإعلانات',
      'BBA White': 'بي بي إيه وايت',
      'TV Monitoring': 'مراقبة التلفزيون',
      'Prompt Engine': 'محرك الأوامر',
      'Brand Listening': 'الاستماع للعلامة التجارية',
      'Schedule a Demo →': 'احجز عرضًا توضيحيًا ←',
      'Data intelligence': 'ذكاء البيانات',
      'Languages: Arabic + English': 'اللغات: العربية + الإنجليزية',
      'About - BigBrother Analytics': 'من نحن - BigBrother Analytics',
      'built in the region, for the region': 'بُنيت في المنطقة، ومن أجل المنطقة',
      '© 2025 BigBrother Analytics & its derivatives. All rights reserved.': '© 2025 BigBrother Analytics ومشتقاتها. جميع الحقوق محفوظة.',
      'AI-powered data intelligence for businesses and governments. We collect, analyze, and visualize the data that matters for you.': 'ذكاء البيانات المدعوم بالذكاء الاصطناعي للشركات والحكومات. نجمع ونحلل ونعرض البيانات التي تهمك.',

      // Page specific additional translations
      'BigBrother Analytics was founded in 2018 to solve a critical gap: turning the massive volume of Arabic-language data into strategic intelligence that businesses and governments can act on.': 'تأسست BigBrother Analytics في عام 2018 لسد فجوة حرجة: تحويل الحجم الهائل من البيانات باللغة العربية إلى معلومات استخباراتية استراتيجية يمكن للشركات والحكومات العمل بناءً عليها.',
      'Country': 'البلد',
      'TikTok': 'تيك توك',
      'YouTube': 'يوتيوب',
      'WhatsApp': 'واتساب',
      'Telegram': 'تيليجرام',
      'Real-Time': 'في الوقت الفعلي',
      'Instagram': 'إنستغرام',
      'X (Twitter)': 'إكس (تويتر)',
      'Google Reviews': 'تقييمات جوجل',
      'CIB': 'البنك التجاري الدولي (CIB)',
      'Sanofi': 'سانوفي',
      'CC Plus': 'سي سي بلس',
      'Mai Aly': 'مي علي',
      'Google MENA': 'جوجل الشرق الأوسط وشمال أفريقيا',
      'Alex Media Forum': 'منتدى الإسكندرية للإعلام',
      'Al Ahly Real Estate': 'الأهلي العقارية',
      'Ahl Masr Foundation': 'مؤسسة أهل مصر',
      'AUC School of Business': 'كلية إدارة الأعمال بالجامعة الأمريكية بالقاهرة',
      'Trusted by leaders across finance, media, government & FMCG': 'موثوق به من قِبل قادة القطاع المالي والإعلامي والحكومي والسلع الاستهلاكية سريعة الدوران',
      '"One of the most effective tools we have used so far. Its AI/NLP technology in Arabic and business analytics tools provide a real competitive edge."': '"أحد أكثر الأدوات فعالية التي استخدمناها حتى الآن. توفر تقنية الذكاء الاصطناعي ومعالجة اللغة الطبيعية (NLP) الخاصة بها باللغة العربية وأدوات تحليل الأعمال ميزة تنافسية حقيقية."',
      'AI': 'الذكاء الاصطناعي',
      'News': 'الأخبار',
      'Media': 'وسائل الإعلام',
      'Intent': 'النية',
      'Beauty': 'الجمال',
      'Social': 'التواصل الاجتماعي',
      'Analyst': 'المحلل',
      'Step 01': 'الخطوة 01',
      'Step 02': 'الخطوة 02',
      'AR + EN': 'عربي + إنجليزي',
      'Step 03': 'الخطوة 03',
      'Running': 'قيد التشغيل',
      'Purchase': 'شراء',
      'Use case': 'حالة الاستخدام',
      'Critical': 'حرج',
      'Awareness': 'الوعي',
      'Your brand': 'علامتك التجارية',
      'Advertising': 'الإعلانات',
      'posts / day': 'منشورات / يوم',
      'Brand Health': 'صحة العلامة التجارية',
      'Food & Drink': 'الأغذية والمشروبات',
      'Competitor B': 'المنافس ب',
      'Competitor A': 'المنافس أ',
      'Consideration': 'الاهتمام',
      'Goldman Sachs': 'جولدمان ساكس',
      'BigBrother AI': 'BigBrother AI',
      'Industry Pulse': 'نبض الصناعة',
      'articles / day': 'مقالات / يوم',
      'Trend Detection': 'اكتشاف الاتجاهات',
      'Strategic Output': 'المخرجات الاستراتيجية',
      'Enterprise-ready': 'جاهز للمؤسسات',
      'Real-time signals': 'إشارات في الوقت الفعلي',
      '3 clusters detected': 'تم اكتشاف 3 مجموعات',
      'Auto-categorization': 'التصنيف التلقائي',
      'Arabic + English NLP': 'معالجة اللغة الطبيعية للعربية والإنجليزية',
      'The Board Consulting': 'ذا بورد كونسلتنج',
      'BigBrother Analytics - Data intelligence for strategic decisions': 'BigBrother Analytics - ذكاء البيانات للقرارات الاستراتيجية',
      '阿拉伯语': 'العربية',
      'Arabic NLP': 'معالجة اللغة الطبيعية العربية',
      'Real-time Alerts': 'تنبيهات في الوقت الفعلي',
      'Multi-source aggregation': 'تجميع مصادر متعددة',
      'Prompt Engineering for Marketing Teams: A Practical Guide': 'هندسة الأوامر لفرق التسويق: دليل عملي',
      'Steal This: How Top Brands Use Ad Intelligence to Win Market Share': 'سرقة هذا: كيف تستخدم العلامات التجارية الكبرى ذكاء الإعلانات لكسب حصة في السوق',
      'AI-Powered Content: Why Human-AI Collaboration Beats Fully Automated': 'المحتوى المدعوم بالذكاء الاصطناعي: لماذا يتفوق التعاون البشري-الذكاء الاصطناعي على الأتمتة الكاملة',
      '10M+ data points': 'أكثر من 10 ملايين نقطة بيانات',

      // Minor labels, icons, numbers
      'wa': 'wa',
      'tg': 'tg',
      'tt': 'tt',
      'yt': 'yt',
      'ig': 'ig',
      '3×': '3×',
      '85%': '85%',
      '60%': '60%',
      '28%': '28%',
      '34%': '34%',
      '5×': '5×',
      '90%': '90%',
      '40%': '40%',
      '21%': '21%',
      '38%': '38%',
      '20+': '20+',
      '74%': '74%',
      '↑ 3%': '↑ 3%',
      '↑ 6%': '↑ 6%',
      '↑ 9%': '↑ 9%',
      '↑ 11%': '↑ 11%',
      '2,910': '2,910',
      '4,280': '4,280',
      '↑ 8% vol': '↑ 8% حجمًا',
      '↑ 12% vol': '↑ 12% حجمًا',
      'Positive 62% · Neutral 28% · Negative 10%. Key driver: digital banking adoption up 34% QoQ.': 'إيجابي 62% · محايد 28% · سلبي 10%. المحرك الرئيسي: نمو اعتماد الخدمات المصرفية الرقمية بنسبة 34% مقارنة بالربع السابق.',
      'Banking sector sentiment shifted +14% positive this week. Key driver: CBE interest rate decision coverage.': 'تحولت مشاعر قطاع البنوك بنسبة +14% إيجابية هذا الأسبوع. المحرك الرئيسي: تغطية قرار أسعار الفائدة للبنك المركزي المصري.',
      '380K': '380 ألف',
      '4.2M': '4.2 مليون',
      'LE': 'له',
      'LK': 'لك',
      'SK': 'شك',
      'WF': 'وف',
      'ND': 'ند',
      'HE': 'هس',
      'AN': 'أن',
      'IZ': 'إذ',
      'AE': 'أع',
      'SA': 'شأ',
      'MA': 'مع',
      'Score: 8.4 / 10': 'النتيجة: 8.4 / 10',
      'Sentiment': 'المشاعر',
      '52%': '52%',
       'Watch': 'مراقبة'
    }
  };

  const originalText = new WeakMap();
  const originalAttr = new WeakMap();
  const originalPlaceholder = new WeakMap();
  const animated = new WeakSet();

  const normalize = (value) => value
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const getLocale = () => localStorage.getItem(localeKey) || 'en';

  const cacheText = (node) => {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
  };

  const cacheAttr = (el, name, value) => {
    if (!el) return;
    const key = `${name}:${value}`;
    if (!originalAttr.has(el)) originalAttr.set(el, {});
    const store = originalAttr.get(el);
    if (!(key in store)) store[key] = value;
  };

  const textFor = (source, lang) => {
    if (lang === 'en') return source;
    const trimmed = source.trim();
    if (!trimmed) return source;
    const leadingWs = source.match(/^\s*/)[0];
    const trailingWs = source.match(/\s*$/)[0];
    const key = normalize(source);
    const translated = copy[lang]?.[key];
    if (translated) {
      return leadingWs + translated + trailingWs;
    }
    return source;
  };

  const translateTree = (root, lang) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        if (!normalize(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        if (parent.closest('[data-no-translate]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      cacheText(node);
      node.nodeValue = textFor(originalText.get(node), lang);
    });

    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
      if (!originalPlaceholder.has(el)) originalPlaceholder.set(el, el.getAttribute('placeholder'));
      el.setAttribute('placeholder', textFor(originalPlaceholder.get(el), lang));
    });

    document.querySelectorAll('option').forEach(el => {
      const source = originalAttr.get(el)?.text || el.textContent;
      if (!originalAttr.has(el)) originalAttr.set(el, {});
      if (!originalAttr.get(el).text) originalAttr.get(el).text = source;
      el.textContent = textFor(originalAttr.get(el).text, lang);
    });
  };

  const setLocale = (lang) => {
    const rtl = lang === 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-ar', rtl);

    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.textContent = rtl ? 'AR | EN' : 'EN | AR';
      btn.setAttribute('aria-pressed', String(rtl));
    });

    translateTree(document.body, lang);

    const title = titleMap[page]?.[lang];
    if (title) document.title = title;
    localStorage.setItem(localeKey, lang);
  };

  const animate = (elements) => {
    elements.forEach((el, index) => {
      if (!el || animated.has(el)) return;
      animated.add(el);
      el.dataset.animate = 'true';
      el.style.setProperty('--delay', `${Math.min(index * 70, 420)}ms`);
    });
  };

  /* ----- Brand logo ----- */
  document.querySelectorAll('a.logo').forEach(a => {
    a.setAttribute('aria-label', 'BigBrother Analytics');
    a.setAttribute('title', 'BigBrother Analytics');
    a.replaceChildren();
  });

  document.querySelectorAll('.navcta .btn-ghost, .mobile-menu-cta .btn-ghost').forEach(a => a.remove());

  const desktopCta = document.querySelector('.navcta');
  if (desktopCta && !desktopCta.querySelector('[data-lang-toggle]')) {
    const langBtn = document.createElement('button');
    langBtn.type = 'button';
    langBtn.className = 'btn btn-ghost lang-toggle';
    langBtn.dataset.langToggle = 'true';
    langBtn.addEventListener('click', () => {
      const next = document.documentElement.lang === 'ar' ? 'en' : 'ar';
      setLocale(next);
    });
    desktopCta.insertBefore(langBtn, desktopCta.firstChild);
  }

  const mobileCta = document.querySelector('.mobile-menu-cta');
  if (mobileCta && !mobileCta.querySelector('[data-lang-toggle]')) {
    const langBtn = document.createElement('button');
    langBtn.type = 'button';
    langBtn.className = 'btn btn-ghost lang-toggle';
    langBtn.style.width = '100%';
    langBtn.style.justifyContent = 'center';
    langBtn.dataset.langToggle = 'true';
    langBtn.addEventListener('click', () => {
      const next = document.documentElement.lang === 'ar' ? 'en' : 'ar';
      setLocale(next);
    });
    mobileCta.insertBefore(langBtn, mobileCta.firstChild);
  }

  setLocale(getLocale());

  /* ----- Motion / reveal ----- */
  const motionTargets = [
    ...document.querySelectorAll('section, footer, .strip, header, .bcard, .stepcard, .uc, .pcard, .quote, .faq-item, .fcard, .product-card, .price-card, .panel, .card, .cta, .crisis')
  ];
  animate(motionTargets);

  const revealTargets = document.querySelectorAll('[data-animate], .reveal');
  if (revealTargets.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(el => io.observe(el));
  }

  /* ----- Sticky header / scrolled state ----- */
  const header = document.querySelector('header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ----- Mobile nav toggle ----- */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.navlinks, .nav-links');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (toggle && (navLinks || mobileMenu)) {
    toggle.addEventListener('click', () => {
      const open = mobileMenu ? mobileMenu.classList.toggle('open') : navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.innerHTML = open
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
    });

    document.querySelectorAll('.navlinks a, .nav-links a, .mobile-menu a').forEach(a => a.addEventListener('click', () => {
      navLinks && navLinks.classList.remove('open');
      mobileMenu && mobileMenu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
    }));
  }

  /* ----- Active nav link ----- */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navlinks a, .nav-links a, .dropdown-menu a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const hrefPage = href.split('/').pop();
    if (hrefPage === currentPage || (currentPage === '' && hrefPage === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ----- Pricing toggle ----- */
  const priceSwitch = document.querySelector('#pricing-toggle, .switch');
  if (priceSwitch) {
    const amountNodes = document.querySelectorAll('.amount, [data-monthly]');
    const labels = document.querySelectorAll('.price-toggle span');

    priceSwitch.addEventListener('click', () => {
      priceSwitch.classList.toggle('yes');
      const isAnnual = priceSwitch.classList.contains('yes');
      amountNodes.forEach(el => {
        const monthly = el.getAttribute('data-monthly');
        const annual = el.getAttribute('data-annual');
        if (monthly && annual) el.textContent = isAnnual ? annual : monthly;
      });
      if (labels.length >= 2) {
        labels[0].classList.toggle('active', !isAnnual);
        labels[1].classList.toggle('active', isAnnual);
      }
      priceSwitch.setAttribute('aria-pressed', String(isAnnual));
    });
  }

  /* ----- FAQ accordion ----- */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ----- Counter animation ----- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 1600;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = prefix + Math.round(target * eased).toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => cio.observe(el));
  }

  /* ----- Video modal ----- */
  const videoBtns = document.querySelectorAll('[data-video]');
  const modal = document.getElementById('videoModal');
  if (modal) {
    const iframe = modal.querySelector('iframe');
    const closeBtn = modal.querySelector('.modal-close');
    videoBtns.forEach(btn => btn.addEventListener('click', () => {
      iframe.src = btn.getAttribute('data-video');
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }));
    const closeModal = () => {
      modal.classList.remove('open');
      iframe.src = '';
      document.body.style.overflow = '';
    };
    closeBtn && closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
  }

  /* ----- Smooth anchor scroll ----- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ----- Dynamic Lucide Icon Loader ----- */
  const loadLucide = () => {
    if (window.lucide) {
      window.lucide.createIcons();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/lucide@latest';
    script.onload = () => {
      window.lucide.createIcons();
    };
    document.head.appendChild(script);
  };
  loadLucide();

  window.bbaSuccessButton = (button, label) => {
    if (!button) return;
    button.innerHTML = `<span class="btn-success"><i data-lucide="check" aria-hidden="true"></i><span>${label}</span></span>`;
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  };
});
