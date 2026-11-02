// Tous les textes du site, en français (fr) et en arabe (ar).
// Pour corriger une phrase, modifiez-la ici : elle change partout sur le site.
// La partie arabe est en arabe standard simple : adaptez le vocabulaire tchadien si besoin.

export type Lang = "fr" | "ar";

const fr = {
  nav: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    portfolio: "Réalisations",
    contact: "Contact",
    cta: "Discuter d'un projet",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    switchLabel: "عربي", // texte du bouton pour passer à l'autre langue
    switchAria: "Afficher le site en arabe",
  },
  common: {
    whatsapp: "Écrire sur WhatsApp",
    waDefault: "Bonjour, je souhaite discuter d'un projet avec Fikra Tech.",
    seeDetail: "Voir le détail",
    forWho: "Pour qui : ",
    city: "N'Djamena",
    country: "Tchad",
    photoOf: "Photo de",
    onLinkedin: "sur LinkedIn",
  },
  home: {
    eyebrow: "Agence d'intelligence artificielle à N'Djamena",
    title: "L'intelligence artificielle au service des entreprises et institutions tchadiennes",
    intro:
      "Nous installons des outils qui répondent à vos clients sur WhatsApp, numérisent vos archives et transforment vos données en décisions. Conçus au Tchad, utilisables même avec une connexion limitée.",
    ctaPrimary: "Discuter de mon projet",
    ctaSecondary: "Voir nos services",
    checks: ["Premier échange gratuit", "Français et arabe tchadien", "Fonctionne même hors ligne", "Suivi après livraison"],
    changesTitle: "Ce que l'IA change concrètement dans votre quotidien",
    changes: [
      {
        before: "Vos clients écrivent sur WhatsApp à 22 h et attendent le lendemain.",
        after: "Un assistant leur répond tout de suite, prend la commande et vous passe le relais pour les cas importants.",
      },
      {
        before: "Retrouver un dossier dans les archives prend une demi-journée.",
        after: "Vos documents sont numérisés, classés et consultables par mot-clé en quelques secondes.",
      },
      {
        before: "Vos décisions reposent sur des fichiers Excel éparpillés.",
        after: "Vos ventes, stocks ou programmes deviennent un tableau de bord clair, avec des prévisions.",
      },
    ],
    servicesTitle: "Nos services",
    servicesIntro:
      "L'IA est notre spécialité. Nous réalisons aussi les sites et logiciels qui l'accueillent, et formons vos équipes à l'utiliser.",
    strengthsTitle: "Pensé pour le Tchad, pas adapté après coup",
    strengths: [
      {
        title: "Pensé pour la connexion réelle",
        text: "Des solutions légères, et hors ligne quand il le faut. Elles fonctionnent à N'Djamena comme en province.",
      },
      {
        title: "En français et en arabe tchadien",
        text: "Vos clients et vos équipes utilisent nos outils dans la langue qu'ils parlent vraiment.",
      },
      {
        title: "Une équipe formée en IA",
        text: "Des fondateurs tchadiens formés en intelligence artificielle jusqu'au niveau Master, à l'Université de Dschang.",
      },
      {
        title: "Sur place, à vos côtés",
        text: "Nous vous rencontrons, formons vos équipes et assurons le suivi après la livraison, à des tarifs adaptés au Tchad.",
      },
    ],
    projectsTitle: "Nos réalisations",
    projectsAll: "Voir tous les projets",
    projectPreview: "Aperçu du projet",
    stepsTitle: "Comment nous travaillons",
    steps: [
      { title: "Premier échange", text: "Gratuit, sur WhatsApp ou en rendez-vous. Vous nous expliquez votre besoin." },
      { title: "Proposition", text: "Nous vous envoyons une solution claire, un délai et un prix." },
      { title: "Mise en place", text: "Un premier prototype rapide, puis la version finale, testée avec vous." },
      { title: "Formation et suivi", text: "Nous formons vos équipes et restons disponibles après la livraison." },
    ],
  },
  demo: {
    shop: "Boutique Informatique",
    status: "Assistant automatique · en ligne",
    typing: "écrit…",
    caption: "Exemple : un assistant qui répond à 22 h, en français et en arabe.",
    messages: [
      { from: "client", text: "Bonsoir, vous avez encore le HP EliteBook ?", time: "22:14", rtl: false },
      { from: "bot", text: "Bonsoir ! Oui, il en reste 3 à 285 000 FCFA. Je vous en réserve un pour demain ?", time: "22:14", rtl: false },
      { from: "client", text: "Oui, je passe à 10 h.", time: "22:15", rtl: false },
      { from: "bot", text: "C'est noté ✅ Réservation au nom de Mahamat, demain à 10 h. À demain !", time: "22:15", rtl: false },
      { from: "client", text: "السلام عليكم، عندكم شاحن؟", time: "22:31", rtl: true },
      { from: "bot", text: "وعليكم السلام، مرحبا بيك! أيوه، عندنا.", time: "22:31", rtl: true },
    ] as { from: "client" | "bot"; text: string; time: string; rtl: boolean }[],
  },
  pillars: [
    {
      id: "automatisation",
      title: "Automatisation intelligente",
      summary:
        "Des outils qui travaillent pour vous jour et nuit : ils répondent à vos clients, lisent vos documents et suivent vos chiffres.",
      forWho: "PME, commerces, ONG, administrations",
      items: [
        {
          title: "Chatbot WhatsApp et SMS",
          text: "Un assistant qui répond à vos clients 24h/24 en français et en arabe tchadien, prend les commandes et les rendez-vous, et vous transmet les demandes importantes.",
        },
        {
          title: "Numérisation d'archives",
          text: "Vos documents papier deviennent des fichiers classés et consultables par mot-clé. Un dossier se retrouve en quelques secondes au lieu de plusieurs heures.",
        },
        {
          title: "Analyse et prévision",
          text: "Des tableaux de bord et des prévisions construits à partir de vos ventes, de vos stocks ou de vos programmes, pour décider sur des chiffres.",
        },
      ],
    },
    {
      id: "solutions-ia",
      title: "Solutions IA sur mesure",
      summary:
        "Pour les organisations qui veulent aller plus loin : une IA conçue pour vos données, vos contraintes de sécurité et votre terrain.",
      forWho: "Banques, télécoms, institutions, organisations internationales",
      items: [
        {
          title: "Audit et stratégie IA",
          text: "Nous analysons votre organisation, repérons les tâches où l'IA vous fait gagner du temps et vous remettons une feuille de route claire et chiffrée.",
        },
        {
          title: "Assistant IA interne sécurisé",
          text: "Un assistant qui répond aux questions de vos équipes à partir de vos propres documents (procédures, rapports, textes), sans exposer vos données.",
        },
        {
          title: "Vision par ordinateur",
          text: "Détection, comptage et contrôle automatiques à partir d'images ou de caméras : sécurité des sites, suivi de stocks, inspection.",
        },
        {
          title: "Applications IA hors ligne",
          text: "Des applications mobiles qui embarquent l'IA directement sur le téléphone et fonctionnent sans connexion internet.",
        },
      ],
    },
    {
      id: "developpement",
      title: "Sites web et applications",
      summary:
        "Des sites et des logiciels rapides, adaptés au mobile et prêts à accueillir l'IA quand vous en aurez besoin.",
      forWho: "Entreprises, commerces, associations, laboratoires",
      items: [
        {
          title: "Sites vitrines et e-commerce",
          text: "Un site professionnel, rapide même avec une connexion lente, bien référencé sur Google et relié à WhatsApp.",
        },
        {
          title: "Logiciels de gestion",
          text: "Gestion de stock, de caisse, de clients ou de dossiers, qui fonctionnent même hors ligne, comme HopeStock.",
        },
        {
          title: "Applications mobiles",
          text: "Des applications Android et iOS pour vos clients ou vos équipes sur le terrain.",
        },
        {
          title: "Organisation de vos données",
          text: "Nettoyage et structuration de vos fichiers Excel et bases existantes : la base indispensable avant toute automatisation.",
        },
      ],
    },
    {
      id: "formation",
      title: "Formation à l'IA",
      summary:
        "Pour que vos équipes comprennent l'IA, l'utilisent au quotidien et sachent choisir les bons projets.",
      forWho: "Équipes, cadres et décideurs, étudiants",
      items: [
        {
          title: "Initiation pour les équipes",
          text: "Utiliser les outils d'IA au travail en toute sécurité : rédaction, recherche, analyse, gain de temps.",
        },
        {
          title: "Bootcamps Python et données",
          text: "Des formations intensives et pratiques pour apprendre à programmer et à analyser des données.",
        },
        {
          title: "Formations pour décideurs",
          text: "Les enjeux de l'IA, la protection des données et la façon de choisir et piloter un projet IA.",
        },
      ],
    },
  ],
  servicesPage: {
    title: "Des solutions IA qui font gagner du temps et de l'argent",
    intro:
      "Quatre domaines, un même objectif : des outils concrets, simples à utiliser, qui fonctionnent dans les conditions réelles du Tchad.",
    navLabel: "Domaines de services",
    faqTitle: "Questions fréquentes",
    ctaTitle: "Un besoin à étudier ?",
    faq: [
      {
        q: "Faut-il une bonne connexion internet pour utiliser vos solutions ?",
        a: "Non. Nous concevons des outils légers et, quand c'est nécessaire, des applications qui fonctionnent entièrement hors ligne, sur ordinateur ou sur téléphone.",
      },
      {
        q: "Le chatbot WhatsApp parle-t-il arabe tchadien ?",
        a: "Oui. L'assistant répond en français et en arabe tchadien, et vous transmet les conversations qu'il ne sait pas traiter.",
      },
      {
        q: "Nos données restent-elles confidentielles ?",
        a: "Oui. Nous signons un engagement de confidentialité et, pour les données sensibles, nous proposons des solutions hébergées chez vous ou sur un serveur dédié.",
      },
      {
        q: "Combien coûte un projet ?",
        a: "Cela dépend du besoin. Le premier échange est gratuit, puis nous vous envoyons une proposition écrite avec le prix et le délai, adaptée à votre budget.",
      },
      {
        q: "Pouvez-vous commencer petit ?",
        a: "Oui, c'est même ce que nous conseillons : un premier outil simple, rapide à mettre en place, puis des améliorations au fil de vos résultats.",
      },
    ],
  },
  about: {
    badge: "Notre histoire",
    titleStart: "Une équipe tchadienne formée en",
    titleHighlight: "intelligence artificielle",
    intro:
      "Nous voulons que les entreprises et institutions du Tchad profitent de l'intelligence artificielle, avec des outils conçus pour elles, ici.",
    storyTitle: "D'une idée à une agence IA",
    story: [
      "Fikra Tech est née de la rencontre de trois jeunes Tchadiens formés à l'intelligence artificielle. Nous avons d'abord créé des sites et des logiciels pour des entreprises locales.",
      "Ces projets nous ont convaincus d'une chose : l'IA peut transformer le quotidien des organisations tchadiennes, à condition d'être pensée pour leur réalité. C'est devenu notre spécialité.",
    ],
    fikraTitle: "Fikra = « idée »",
    fikraText: "Notre métier : transformer une idée en une solution qui fonctionne vraiment.",
    stepLabel: "Étape",
    journey: [
      { title: "Une idée", text: "Trois étudiants tchadiens en intelligence artificielle, convaincus que leur pays mérite des outils pensés pour lui." },
      { title: "Des premiers projets", text: "Sites web, e-commerce et HopeStock, un logiciel de gestion hors ligne avec assistant IA, utilisé chaque jour par un client." },
      { title: "Une agence IA", text: "Aujourd'hui, nous mettons l'IA au service des entreprises, des ONG et des institutions du Tchad." },
    ],
    teamTitle: "L'équipe fondatrice",
    teamIntro:
      "Trois profils complémentaires, une même ambition : faire du Tchad un acteur de l'intelligence artificielle.",
    // ✏️ Noms, rôles et textes des fondateurs (dans les deux langues)
    team: [
      {
        name: "DINGAMMADJI Espérance",
        role: "Cofondateur et directeur général, stratégie et conseil IA",
        bio: "Il accompagne les organisations de l'audit à la décision : il analyse vos processus, repère où l'IA crée de la valeur et pilote les projets jusqu'aux résultats. Il conçoit aussi les assistants intelligents qui répondent à partir de vos documents.",
        skills: ["Audit et conseil IA", "Assistants intelligents", "Pilotage de projets"],
      },
      {
        name: "Mourra Adoum Mourra",
        role: "Cofondateur, responsable technique",
        bio: "Il transforme les modèles d'IA en produits qui fonctionnent au quotidien : chatbots WhatsApp, applications web et mobiles, intégration à vos outils, mise en ligne et maintenance.",
        skills: ["Chatbots WhatsApp", "Applications web et mobiles", "Mise en ligne et maintenance"],
      },
      {
        name: "MBETEADOUM Nobel",
        role: "Cofondateur, responsable données et vision par ordinateur",
        bio: "Il fait parler vos données et vos images : numérisation et lecture de documents, tableaux de bord, prévisions, et détection automatique sur photos ou vidéos.",
        skills: ["Numérisation (OCR)", "Analyse et prévisions", "Vision par ordinateur"],
      },
    ],
    supportTitle: "Et derrière les fondateurs, toute une équipe",
    supportText:
      "Autour de nous, une équipe de collaborateurs travaille chaque jour pour que vos projets avancent : développement, préparation et annotation des données, tests, support client et communication.",
    supportRoles: ["Développement", "Annotation des données", "Tests et qualité", "Support client", "Communication"],
    valuesTitle: "Ce qui nous guide",
    values: [
      { title: "Des résultats concrets", text: "Nous ne vendons pas de la technologie pour elle-même. Chaque projet doit faire gagner du temps, de l'argent ou de la sécurité." },
      { title: "Le terrain d'abord", text: "Connexion limitée, coupures d'électricité, langues locales : nos solutions partent des réalités du Tchad." },
      { title: "La rigueur scientifique", text: "Notre formation en IA nous permet de choisir les bonnes méthodes et d'expliquer honnêtement ce que l'IA peut faire, et ce qu'elle ne peut pas faire." },
    ],
  },
  portfolio: {
    titleStart: "Des projets livrés,",
    titleHighlight: "utilisés chaque jour",
    intro:
      "Logiciels avec IA, sites e-commerce et sites institutionnels : voici ce que nous avons construit pour nos clients.",
    countChip: "projets en ligne ou en service",
    chips: ["IA intégrée", "Pensés pour le Tchad"],
    featured: "Projet phare",
    seeCaptures: "Voir les captures",
    captures: "captures",
    seeOnline: "Voir le site en ligne",
    close: "Fermer",
    prev: "Capture précédente",
    next: "Capture suivante",
    capture: "capture",
    ctaTitle: "Votre projet pourrait être le prochain",
    demoLabel: "Démonstration réelle",
    playDemo: "Lire la démonstration",
  },
  contact: {
    title: "Parlons de votre projet",
    intro: "Le premier échange est gratuit. Le plus rapide est WhatsApp ; vous pouvez aussi nous laisser un message ci-dessous.",
    email: "Email",
    whereTitle: "Où nous trouver",
    whereText: "Rendez-vous sur demande.",
    formTitle: "Envoyer un message",
    name: "Nom complet",
    org: "Entreprise ou organisation",
    optional: "(facultatif)",
    emailLabel: "Email",
    phone: "Téléphone ou WhatsApp",
    need: "Votre besoin",
    other: "Autre besoin",
    message: "Votre message",
    placeholder: "Décrivez votre activité et ce que vous aimeriez améliorer.",
    submit: "Envoyer le message",
    sending: "Envoi en cours…",
    sentTitle: "Message envoyé",
    sentText: "Merci. Nous vous répondons rapidement, par email ou sur WhatsApp.",
    // Ajouts pour la nouvelle page Contact
    badges: ["Premier échange gratuit", "Réponse en français ou en arabe", "Basés à N'Djamena"],
    fastest: "Le plus rapide",
    whatsappHint: "Réponse directe de l'équipe",
    stepsTitle: "Ce qui se passe ensuite",
    steps: [
      { title: "Nous lisons votre message", text: "Un membre de l'équipe vous répond rapidement, par WhatsApp ou par email." },
      { title: "Un premier échange gratuit", text: "30 minutes pour comprendre votre activité et votre besoin." },
      { title: "Une proposition claire", text: "Une solution, un délai et un prix, envoyés par écrit." },
    ],
    privacy: "Vos informations restent confidentielles et servent uniquement à vous répondre.",
  },
  cta: {
    title: "Parlons de votre projet",
    text: "Le premier échange est gratuit. Choisissez votre besoin : votre message WhatsApp est déjà prêt, il ne reste qu'à l'envoyer.",
    emailLink: "Vous préférez l'email ? Envoyez-nous un message",
    question: "De quoi avez-vous besoin ?",
    groupLabel: "Choisir un besoin",
    greeting: "Bonjour Fikra Tech, ",
    needs: [
      { label: "Chatbot WhatsApp", text: "je veux un assistant WhatsApp qui répond à mes clients" },
      { label: "Numérisation", text: "je veux numériser les archives de mon organisation" },
      { label: "Site web", text: "je veux un site web professionnel pour mon entreprise" },
      { label: "Formation IA", text: "je veux former mon équipe à l'intelligence artificielle" },
    ],
    footnote: "Réponse de l'équipe sur WhatsApp, en français ou en arabe.",
    sendAria: "Envoyer ce message sur WhatsApp",
  },
  footer: {
    description:
      "Agence d'intelligence artificielle et de solutions numériques, à N'Djamena. Nous faisons gagner du temps et de l'argent aux organisations du Tchad.",
    services: "Services",
    agency: "L'agence",
    contact: "Contact",
    rights: "Tous droits réservés.",
  },
  chatbot: {
    title: "Assistant Fikra Tech",
    subtitle: "Réponses instantanées",
    greeting:
      "Bonjour 👋 Je suis l'assistant Fikra Tech. Choisissez une question, ou écrivez directement à l'équipe sur WhatsApp.",
    whatsapp: "Écrire à l'équipe sur WhatsApp",
    open: "Ouvrir l'assistant",
    close: "Fermer l'assistant",
    faq: [
      {
        question: "Que fait Fikra Tech ?",
        answer:
          "Nous sommes une agence d'intelligence artificielle à N'Djamena. Nous créons des chatbots WhatsApp, numérisons des archives, analysons des données, et réalisons aussi des sites web, des applications et des formations à l'IA.",
      },
      {
        question: "Un chatbot WhatsApp, comment ça marche ?",
        answer:
          "L'assistant est relié à votre numéro WhatsApp Business. Il répond à vos clients 24h/24 en français et en arabe tchadien, prend les commandes ou les rendez-vous, et vous transmet les demandes qu'il ne sait pas traiter.",
      },
      {
        question: "L'IA fonctionne-t-elle sans bonne connexion ?",
        answer:
          "Oui, quand c'est nécessaire. Nous concevons des solutions légères, et certaines applications fonctionnent entièrement hors ligne, directement sur l'ordinateur ou le téléphone.",
      },
      {
        question: "Combien ça coûte ?",
        answer:
          "Le prix dépend de votre besoin. Le premier échange est gratuit : décrivez-nous votre projet et nous vous envoyons une proposition claire, adaptée à votre budget.",
      },
      {
        question: "En combien de temps livrez-vous ?",
        answer:
          "Un site vitrine simple peut être livré en une à deux semaines. Pour un chatbot ou un projet IA, nous commençons par un prototype rapide, puis nous l'améliorons avec vous.",
      },
    ],
  },
  testimonials: {
    title: "Ce que nos clients en disent",
  },
};

export type Dict = typeof fr;

const ar: Dict = {
  nav: {
    home: "الرئيسية",
    about: "من نحن",
    services: "خدماتنا",
    portfolio: "أعمالنا",
    contact: "اتصل بنا",
    cta: "ناقش مشروعك",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    switchLabel: "FR",
    switchAria: "Afficher le site en français",
  },
  common: {
    whatsapp: "راسلنا على واتساب",
    waDefault: "مرحبًا، أودّ مناقشة مشروع مع Fikra Tech.",
    seeDetail: "عرض التفاصيل",
    forWho: "لمن: ",
    city: "انجامينا",
    country: "تشاد",
    photoOf: "صورة",
    onLinkedin: "على لينكدإن",
  },
  home: {
    eyebrow: "وكالة ذكاء اصطناعي في انجامينا",
    title: "الذكاء الاصطناعي في خدمة الشركات والمؤسسات التشادية",
    intro:
      "نُركّب أدوات تردّ على عملائكم عبر واتساب، وترقمن أرشيفكم، وتحوّل بياناتكم إلى قرارات. مصمَّمة في تشاد، وتعمل حتى مع اتصال محدود بالإنترنت.",
    ctaPrimary: "ناقش مشروعك",
    ctaSecondary: "اكتشف خدماتنا",
    checks: ["أول استشارة مجانية", "بالفرنسية والعربية التشادية", "تعمل حتى دون إنترنت", "متابعة بعد التسليم"],
    changesTitle: "ما الذي يغيّره الذكاء الاصطناعي فعليًا في يومكم",
    changes: [
      {
        before: "يراسلكم عملاؤكم على واتساب في العاشرة ليلًا وينتظرون حتى الغد.",
        after: "يردّ عليهم مساعد فورًا، ويسجّل الطلب، ويحيل إليكم الحالات المهمة.",
      },
      {
        before: "البحث عن ملف في الأرشيف يستغرق نصف يوم.",
        after: "تصبح وثائقكم رقمية ومصنّفة، ويمكن البحث فيها بكلمة مفتاحية في ثوانٍ.",
      },
      {
        before: "تعتمد قراراتكم على ملفات Excel متفرقة.",
        after: "تتحوّل مبيعاتكم ومخزونكم وبرامجكم إلى لوحة متابعة واضحة مع توقعات.",
      },
    ],
    servicesTitle: "خدماتنا",
    servicesIntro:
      "الذكاء الاصطناعي هو تخصصنا. كما ننجز المواقع والبرامج التي تحتضنه، وندرّب فرقكم على استخدامه.",
    strengthsTitle: "مصمَّم لتشاد، لا مُكيَّف لاحقًا",
    strengths: [
      {
        title: "مصمَّم لواقع الاتصال",
        text: "حلول خفيفة، وتعمل دون إنترنت عند الحاجة، في انجامينا كما في الأقاليم.",
      },
      {
        title: "بالفرنسية والعربية التشادية",
        text: "يستخدم عملاؤكم وفرقكم أدواتنا باللغة التي يتحدثونها فعلًا.",
      },
      {
        title: "فريق متخصص في الذكاء الاصطناعي",
        text: "مؤسسون تشاديون درسوا الذكاء الاصطناعي حتى مستوى الماستر في جامعة دشانغ.",
      },
      {
        title: "قريبون منكم في الميدان",
        text: "نلتقي بكم، وندرّب فرقكم، ونتابع بعد التسليم، بأسعار مناسبة لتشاد.",
      },
    ],
    projectsTitle: "أعمالنا",
    projectsAll: "عرض كل المشاريع",
    projectPreview: "صورة مشروع",
    stepsTitle: "كيف نعمل",
    steps: [
      { title: "أول لقاء", text: "مجاني، عبر واتساب أو بموعد. تشرحون لنا احتياجكم." },
      { title: "العرض", text: "نرسل لكم حلًا واضحًا مع المدة والسعر." },
      { title: "التنفيذ", text: "نموذج أولي سريع، ثم النسخة النهائية مختبَرة معكم." },
      { title: "التدريب والمتابعة", text: "ندرّب فرقكم ونبقى متاحين بعد التسليم." },
    ],
  },
  demo: {
    shop: "متجر المعلوماتية",
    status: "مساعد آلي · متصل",
    typing: "يكتب…",
    caption: "مثال: مساعد يردّ في العاشرة ليلًا، بالعربية والفرنسية.",
    messages: [
      { from: "client", text: "مساء الخير، هل ما زال لديكم حاسوب HP EliteBook؟", time: "22:14", rtl: true },
      { from: "bot", text: "مساء النور! نعم، بقيت 3 أجهزة بسعر 285 000 فرنك. هل أحجز لك واحدًا لغدٍ؟", time: "22:14", rtl: true },
      { from: "client", text: "نعم، سأمرّ الساعة العاشرة.", time: "22:15", rtl: true },
      { from: "bot", text: "تم ✅ الحجز باسم محمد، غدًا الساعة العاشرة. إلى اللقاء!", time: "22:15", rtl: true },
      { from: "client", text: "Bonjour, vous avez un chargeur ?", time: "22:31", rtl: false },
      { from: "bot", text: "Bonjour ! Oui, nous en avons. Je vous en réserve un ?", time: "22:31", rtl: false },
    ],
  },
  pillars: [
    {
      id: "automatisation",
      title: "الأتمتة الذكية",
      summary: "أدوات تعمل لصالحكم ليلًا ونهارًا: تردّ على عملائكم، وتقرأ وثائقكم، وتتابع أرقامكم.",
      forWho: "الشركات الصغيرة والمتوسطة، المتاجر، المنظمات غير الحكومية، الإدارات",
      items: [
        {
          title: "روبوت محادثة واتساب وSMS",
          text: "مساعد يردّ على عملائكم على مدار الساعة بالفرنسية والعربية التشادية، ويسجّل الطلبات والمواعيد، ويحيل إليكم الطلبات المهمة.",
        },
        {
          title: "رقمنة الأرشيف",
          text: "تتحوّل وثائقكم الورقية إلى ملفات مصنّفة يمكن البحث فيها بكلمة مفتاحية. تجدون الملف في ثوانٍ بدل ساعات.",
        },
        {
          title: "التحليل والتوقع",
          text: "لوحات متابعة وتوقعات مبنية على مبيعاتكم أو مخزونكم أو برامجكم، لتتخذوا قراراتكم على أساس الأرقام.",
        },
      ],
    },
    {
      id: "solutions-ia",
      title: "حلول ذكاء اصطناعي حسب الطلب",
      summary: "للمؤسسات التي تريد الذهاب أبعد: ذكاء اصطناعي مصمَّم لبياناتكم ومتطلبات الأمان لديكم وواقعكم الميداني.",
      forWho: "البنوك، شركات الاتصالات، المؤسسات، المنظمات الدولية",
      items: [
        {
          title: "تدقيق واستراتيجية الذكاء الاصطناعي",
          text: "نحلّل مؤسستكم، ونحدّد المهام التي يوفّر فيها الذكاء الاصطناعي الوقت، ونسلّمكم خارطة طريق واضحة ومقدَّرة التكلفة.",
        },
        {
          title: "مساعد ذكي داخلي آمن",
          text: "مساعد يجيب عن أسئلة فرقكم انطلاقًا من وثائقكم الخاصة (إجراءات، تقارير، نصوص)، دون كشف بياناتكم.",
        },
        {
          title: "الرؤية الحاسوبية",
          text: "كشف وعدّ ومراقبة آلية انطلاقًا من الصور أو الكاميرات: أمن المواقع، متابعة المخزون، الفحص.",
        },
        {
          title: "تطبيقات ذكاء اصطناعي دون إنترنت",
          text: "تطبيقات هاتفية تدمج الذكاء الاصطناعي مباشرة في الهاتف وتعمل دون اتصال بالإنترنت.",
        },
      ],
    },
    {
      id: "developpement",
      title: "مواقع وتطبيقات",
      summary: "مواقع وبرامج سريعة، متوافقة مع الهاتف، وجاهزة لاستقبال الذكاء الاصطناعي متى احتجتم إليه.",
      forWho: "الشركات، المتاجر، الجمعيات، المختبرات",
      items: [
        {
          title: "مواقع تعريفية ومتاجر إلكترونية",
          text: "موقع احترافي، سريع حتى مع اتصال ضعيف، يظهر جيدًا في Google ومرتبط بواتساب.",
        },
        {
          title: "برامج التسيير",
          text: "تسيير المخزون والصندوق والعملاء والملفات، وتعمل حتى دون إنترنت، مثل HopeStock.",
        },
        {
          title: "تطبيقات الهاتف",
          text: "تطبيقات Android وiOS لعملائكم أو لفرقكم الميدانية.",
        },
        {
          title: "تنظيم بياناتكم",
          text: "تنظيف وهيكلة ملفات Excel وقواعد البيانات الحالية: الأساس الضروري قبل أي أتمتة.",
        },
      ],
    },
    {
      id: "formation",
      title: "التدريب على الذكاء الاصطناعي",
      summary: "لكي تفهم فرقكم الذكاء الاصطناعي، وتستخدمه يوميًا، وتعرف كيف تختار المشاريع المناسبة.",
      forWho: "الفرق، الأطر وصنّاع القرار، الطلاب",
      items: [
        {
          title: "مدخل للفرق",
          text: "استخدام أدوات الذكاء الاصطناعي في العمل بأمان: الكتابة، البحث، التحليل، وتوفير الوقت.",
        },
        {
          title: "معسكرات Python والبيانات",
          text: "تكوينات مكثفة وتطبيقية لتعلّم البرمجة وتحليل البيانات.",
        },
        {
          title: "تكوين لصنّاع القرار",
          text: "رهانات الذكاء الاصطناعي، وحماية البيانات، وكيفية اختيار مشروع ذكاء اصطناعي وقيادته.",
        },
      ],
    },
  ],
  servicesPage: {
    title: "حلول ذكاء اصطناعي توفّر الوقت والمال",
    intro: "أربعة مجالات وهدف واحد: أدوات ملموسة، سهلة الاستخدام، تعمل في الظروف الحقيقية لتشاد.",
    navLabel: "مجالات الخدمات",
    faqTitle: "أسئلة شائعة",
    ctaTitle: "لديكم احتياج تريدون دراسته؟",
    faq: [
      {
        q: "هل تحتاج حلولكم إلى اتصال جيد بالإنترنت؟",
        a: "لا. نصمّم أدوات خفيفة، وعند الحاجة تطبيقات تعمل كليًا دون إنترنت، على الحاسوب أو الهاتف.",
      },
      {
        q: "هل يتحدث روبوت واتساب العربية التشادية؟",
        a: "نعم. يردّ المساعد بالفرنسية والعربية التشادية، ويحيل إليكم المحادثات التي لا يستطيع معالجتها.",
      },
      {
        q: "هل تبقى بياناتنا سرية؟",
        a: "نعم. نلتزم كتابيًا بالسرية، وللبيانات الحساسة نقترح حلولًا مستضافة لديكم أو على خادم مخصص.",
      },
      {
        q: "كم يكلّف المشروع؟",
        a: "يعتمد ذلك على الاحتياج. أول لقاء مجاني، ثم نرسل لكم عرضًا مكتوبًا بالسعر والمدة، مناسبًا لميزانيتكم.",
      },
      {
        q: "هل يمكن البدء بمشروع صغير؟",
        a: "نعم، بل هذا ما ننصح به: أداة أولى بسيطة وسريعة التنفيذ، ثم تحسينات حسب نتائجكم.",
      },
    ],
  },
  about: {
    badge: "قصتنا",
    titleStart: "فريق تشادي متخصص في",
    titleHighlight: "الذكاء الاصطناعي",
    intro: "نريد أن تستفيد الشركات والمؤسسات في تشاد من الذكاء الاصطناعي، بأدوات مصمَّمة لها، هنا.",
    storyTitle: "من فكرة إلى وكالة ذكاء اصطناعي",
    story: [
      "وُلدت Fikra Tech من لقاء ثلاثة شباب تشاديين درسوا الذكاء الاصطناعي. بدأنا بإنشاء مواقع وبرامج لشركات محلية.",
      "أقنعتنا هذه المشاريع بأمر واحد: يمكن للذكاء الاصطناعي أن يغيّر الحياة اليومية للمؤسسات التشادية، بشرط أن يُصمَّم لواقعها. وأصبح ذلك تخصصنا.",
    ],
    fikraTitle: "Fikra تعني « فكرة »",
    fikraText: "مهنتنا: تحويل فكرة إلى حل يعمل فعلًا.",
    stepLabel: "المرحلة",
    journey: [
      { title: "فكرة", text: "ثلاثة طلاب تشاديين في الذكاء الاصطناعي، مقتنعون بأن بلدهم يستحق أدوات مصمَّمة له." },
      { title: "أولى المشاريع", text: "مواقع ومتاجر إلكترونية وHopeStock، برنامج تسيير يعمل دون إنترنت مع مساعد ذكي، يستخدمه عميل كل يوم." },
      { title: "وكالة ذكاء اصطناعي", text: "اليوم، نضع الذكاء الاصطناعي في خدمة الشركات والمنظمات غير الحكومية والمؤسسات في تشاد." },
    ],
    teamTitle: "الفريق المؤسس",
    teamIntro: "ثلاثة ملفات متكاملة وطموح واحد: أن تصبح تشاد فاعلًا في مجال الذكاء الاصطناعي.",
    team: [
      {
        name: "DINGAMMADJI Espérance",
        role: "شريك مؤسس ومدير عام، الاستراتيجية واستشارات الذكاء الاصطناعي",
        bio: "يرافق المؤسسات من التدقيق إلى القرار: يحلّل عملياتكم، ويحدّد أين يخلق الذكاء الاصطناعي قيمة، ويقود المشاريع حتى تحقيق النتائج. كما يصمّم المساعدات الذكية التي تجيب انطلاقًا من وثائقكم.",
        skills: ["تدقيق واستشارات الذكاء الاصطناعي", "المساعدات الذكية", "قيادة المشاريع"],
      },
      {
        name: "Mourra Adoum Mourra",
        role: "شريك مؤسس، المسؤول التقني",
        bio: "يحوّل نماذج الذكاء الاصطناعي إلى منتجات تعمل يوميًا: روبوتات واتساب، تطبيقات الويب والهاتف، الربط بأدواتكم، النشر والصيانة.",
        skills: ["روبوتات واتساب", "تطبيقات الويب والهاتف", "النشر والصيانة"],
      },
      {
        name: "MBETEADOUM Nobel",
        role: "شريك مؤسس، مسؤول البيانات والرؤية الحاسوبية",
        bio: "يجعل بياناتكم وصوركم تتكلّم: رقمنة الوثائق وقراءتها، لوحات المتابعة، التوقعات، والكشف الآلي في الصور والفيديو.",
        skills: ["رقمنة الوثائق (OCR)", "التحليل والتوقع", "الرؤية الحاسوبية"],
      },
    ],
    supportTitle: "وخلف المؤسسين، فريق كامل",
    supportText:
      "يعمل حولنا فريق من المتعاونين كل يوم لكي تتقدّم مشاريعكم: التطوير، وإعداد البيانات وتوسيمها، والاختبارات، ودعم العملاء، والتواصل.",
    supportRoles: ["التطوير", "توسيم البيانات", "الاختبار والجودة", "دعم العملاء", "التواصل"],
    valuesTitle: "ما يوجّهنا",
    values: [
      { title: "نتائج ملموسة", text: "لا نبيع التكنولوجيا لذاتها. كل مشروع يجب أن يوفّر الوقت أو المال أو الأمان." },
      { title: "الميدان أولًا", text: "اتصال محدود، انقطاع الكهرباء، لغات محلية: حلولنا تنطلق من واقع تشاد." },
      { title: "الصرامة العلمية", text: "يتيح لنا تكويننا في الذكاء الاصطناعي اختيار الأساليب المناسبة، وأن نشرح بصدق ما يستطيع الذكاء الاصطناعي فعله وما لا يستطيع." },
    ],
  },
  portfolio: {
    titleStart: "مشاريع مُسلَّمة،",
    titleHighlight: "تُستخدم كل يوم",
    intro: "برامج بالذكاء الاصطناعي، متاجر إلكترونية ومواقع مؤسساتية: هذا ما أنجزناه لعملائنا.",
    countChip: "مشاريع منشورة أو قيد الاستخدام",
    chips: ["ذكاء اصطناعي مدمج", "مصمَّمة لتشاد"],
    featured: "مشروع رئيسي",
    seeCaptures: "عرض الصور",
    captures: "صور",
    seeOnline: "زيارة الموقع",
    close: "إغلاق",
    prev: "الصورة السابقة",
    next: "الصورة التالية",
    capture: "صورة",
    ctaTitle: "قد يكون مشروعكم القادم",
    demoLabel: "عرض حقيقي",
    playDemo: "تشغيل العرض",
  },
  contact: {
    title: "لنتحدث عن مشروعكم",
    intro: "أول لقاء مجاني. الأسرع هو واتساب، ويمكنكم أيضًا ترك رسالة أدناه.",
    email: "البريد الإلكتروني",
    whereTitle: "أين تجدوننا",
    whereText: "بموعد مسبق.",
    formTitle: "أرسل رسالة",
    name: "الاسم الكامل",
    org: "الشركة أو المؤسسة",
    optional: "(اختياري)",
    emailLabel: "البريد الإلكتروني",
    phone: "الهاتف أو واتساب",
    need: "احتياجكم",
    other: "احتياج آخر",
    message: "رسالتكم",
    placeholder: "صِفوا نشاطكم وما تودّون تحسينه.",
    submit: "إرسال الرسالة",
    sending: "جارٍ الإرسال…",
    sentTitle: "تم إرسال الرسالة",
    sentText: "شكرًا. سنردّ عليكم قريبًا عبر البريد أو واتساب.",
    badges: ["أول لقاء مجاني", "نردّ بالعربية أو الفرنسية", "مقرّنا في انجامينا"],
    fastest: "الأسرع",
    whatsappHint: "ردّ مباشر من الفريق",
    stepsTitle: "ماذا يحدث بعد ذلك",
    steps: [
      { title: "نقرأ رسالتكم", text: "يردّ عليكم أحد أعضاء الفريق بسرعة، عبر واتساب أو البريد الإلكتروني." },
      { title: "لقاء أول مجاني", text: "30 دقيقة لفهم نشاطكم واحتياجكم." },
      { title: "عرض واضح", text: "حل ومدة وسعر، مكتوبة ومرسلة إليكم." },
    ],
    privacy: "تبقى معلوماتكم سرية ولا تُستخدم إلا للردّ عليكم.",
  },
  cta: {
    title: "لنتحدث عن مشروعكم",
    text: "أول لقاء مجاني. اختاروا احتياجكم: رسالتكم على واتساب جاهزة، ما عليكم إلا إرسالها.",
    emailLink: "تفضّلون البريد الإلكتروني؟ أرسلوا لنا رسالة",
    question: "ما الذي تحتاجونه؟",
    groupLabel: "اختيار الاحتياج",
    greeting: "مرحبًا Fikra Tech، ",
    needs: [
      { label: "روبوت واتساب", text: "أريد مساعدًا على واتساب يردّ على عملائي" },
      { label: "الرقمنة", text: "أريد رقمنة أرشيف مؤسستي" },
      { label: "موقع ويب", text: "أريد موقعًا احترافيًا لشركتي" },
      { label: "تدريب", text: "أريد تدريب فريقي على الذكاء الاصطناعي" },
    ],
    footnote: "يردّ الفريق على واتساب بالعربية أو الفرنسية.",
    sendAria: "إرسال هذه الرسالة على واتساب",
  },
  footer: {
    description:
      "وكالة ذكاء اصطناعي وحلول رقمية في انجامينا. نوفّر الوقت والمال للمؤسسات في تشاد.",
    services: "الخدمات",
    agency: "الوكالة",
    contact: "اتصل بنا",
    rights: "جميع الحقوق محفوظة.",
  },
  chatbot: {
    title: "مساعد Fikra Tech",
    subtitle: "ردود فورية",
    greeting: "مرحبًا 👋 أنا مساعد Fikra Tech. اختاروا سؤالًا، أو راسلوا الفريق مباشرة على واتساب.",
    whatsapp: "راسل الفريق على واتساب",
    open: "فتح المساعد",
    close: "إغلاق المساعد",
    faq: [
      {
        question: "ماذا تقدّم Fikra Tech؟",
        answer:
          "نحن وكالة ذكاء اصطناعي في انجامينا. ننشئ روبوتات محادثة على واتساب، ونرقمن الأرشيف، ونحلّل البيانات، وننجز أيضًا مواقع وتطبيقات وتدريبات في الذكاء الاصطناعي.",
      },
      {
        question: "كيف يعمل روبوت واتساب؟",
        answer:
          "يرتبط المساعد برقم واتساب بزنس الخاص بكم. يردّ على عملائكم على مدار الساعة بالفرنسية والعربية التشادية، ويسجّل الطلبات أو المواعيد، ويحيل إليكم ما لا يستطيع معالجته.",
      },
      {
        question: "هل يعمل الذكاء الاصطناعي دون اتصال جيد؟",
        answer:
          "نعم، عند الحاجة. نصمّم حلولًا خفيفة، وبعض التطبيقات تعمل كليًا دون إنترنت، مباشرة على الحاسوب أو الهاتف.",
      },
      {
        question: "كم التكلفة؟",
        answer:
          "يعتمد السعر على احتياجكم. أول لقاء مجاني: صِفوا لنا مشروعكم ونرسل لكم عرضًا واضحًا مناسبًا لميزانيتكم.",
      },
      {
        question: "ما مدة التنفيذ؟",
        answer:
          "يمكن تسليم موقع تعريفي بسيط في أسبوع إلى أسبوعين. أما روبوت المحادثة أو مشروع الذكاء الاصطناعي فنبدأ بنموذج أولي سريع ثم نحسّنه معكم.",
      },
    ],
  },
  testimonials: {
    title: "ماذا يقول عملاؤنا",
  },
};

export const dict: Record<Lang, Dict> = { fr, ar };