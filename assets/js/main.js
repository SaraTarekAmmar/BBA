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
      'Request my demo': 'اطلب عرضي',
      'Request Your Demo': 'اطلب عرضك التوضيحي',
      'Book My Demo': 'احجز عرضي',
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
      'How to write prompts that generate on-brand, high-converting marketing content': 'كيف تكتب أوامر تولد محتوى تسويقيًا متوافقًا مع العلامة وعالي التحويل'
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
    const key = normalize(source);
    return copy[lang]?.[key] || source;
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
});
