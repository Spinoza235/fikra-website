// Vos réalisations. Ajoutez un projet ici : il apparaît sur l'accueil et dans Réalisations.

export type Project = {
  id: number;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription?: string;
  images: string[];
  isVideo?: boolean;
  videoSrc?: string; // vidéo de démonstration (dans /public/videos/)
  poster?: string; // image affichée avant la lecture de la vidéo
  url?: string; // lien vers le site en ligne, si applicable
  highlights?: string[]; // 3 ou 4 points forts affichés sur la page Réalisations
  tags?: string[]; // technologies ou mots-clés
  // Version arabe des textes (laisser vide = le français s'affiche)
  ar?: {
    category?: string;
    shortDescription?: string;
    highlights?: string[];
    tags?: string[];
  };
};

// Renvoie le projet dans la langue choisie
export function localizeProject(p: Project, lang: "fr" | "ar"): Project {
  if (lang !== "ar" || !p.ar) return p;
  return {
    ...p,
    category: p.ar.category ?? p.category,
    shortDescription: p.ar.shortDescription ?? p.shortDescription,
    highlights: p.ar.highlights ?? p.highlights,
    tags: p.ar.tags ?? p.tags,
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "HopeStock",
    category: "Logiciel de gestion avec IA",
    shortDescription:
      "Un logiciel de gestion de boutique qui fonctionne entièrement hors ligne, avec un assistant IA qui répond aux questions sur les ventes et le stock. Utilisé chaque jour par un client réel.",
    fullDescription:
      "HopeStock est une application de bureau conçue pour répondre aux vraies réalités du commerce de détail en Afrique — pas une adaptation d'un logiciel occidental, mais un outil pensé dès le départ pour ce contexte. Elle fonctionne entièrement hors-ligne : aucune connexion internet requise pour vendre, suivre son stock ou consulter ses finances, ce qui la rend fiable même dans les zones à connectivité limitée.\n\nDeux fonctionnalités reflètent particulièrement cette approche africaine : la gestion de la négociation de prix, pour accompagner la pratique courante du marchandage en boutique, et un système de crédit client pour les clients qui repartent avec un produit sans payer immédiatement et règlent plus tard.\n\nL'application intègre aussi un assistant IA consultable depuis le tableau de bord, capable de répondre en langage naturel à des questions sur les ventes, le stock ou les finances de la boutique.\n\nHopeStock n'est pas resté un projet de démonstration : l'application a été développée et déployée pour un client réel, une boutique d'informatique et d'électronique, qui l'utilise aujourd'hui au quotidien pour gérer ses ventes et son stock.\n\nParmi les autres fonctionnalités : historique des ventes mois par mois, système de retour produit, génération de reçus avec QR code, sauvegardes et export de rapports mensuels.",
    ar: {
      category: "برنامج تسيير بالذكاء الاصطناعي",
      shortDescription:
        "برنامج لتسيير المتاجر يعمل كليًا دون إنترنت، مع مساعد ذكي يجيب عن الأسئلة حول المبيعات والمخزون. يستخدمه عميل حقيقي كل يوم.",
      highlights: [
        "يعمل كليًا دون إنترنت",
        "مساعد ذكي يجيب عن المبيعات والمخزون",
        "تسيير المساومة والبيع بالدَّين",
        "إيصالات برمز QR وتقارير شهرية",
      ],
      tags: ["تطبيق حاسوب", "ذكاء اصطناعي مدمج", "دون إنترنت"],
    },
    highlights: [
      "Fonctionne entièrement hors ligne",
      "Assistant IA qui répond sur les ventes et le stock",
      "Gestion du marchandage et du crédit client",
      "Reçus avec QR code et rapports mensuels",
    ],
    tags: ["Application desktop", "IA intégrée", "Hors ligne"],
    images: [
      "/images/portfolio/hopestock-1.png",
      "/images/portfolio/hopestock-2.png",
      "/images/portfolio/hopestock-3.png",
      "/images/portfolio/hopestock-4.png",
      "/images/portfolio/hopestock-5.png",
      "/images/portfolio/hopestock-6.png",
      "/images/portfolio/hopestock-7.png",
      "/images/portfolio/hopestock-8.png",
      "/images/portfolio/hopestock-9.png",
      "/images/portfolio/hopestock-10.png",
    ],
    // Vidéo de démonstration réelle (fichiers dans /public/videos/)
    videoSrc: "/videos/hopestock-demo.mp4",
    poster: "/videos/hopestock-demo-poster.jpg",
    // Pas d'url : application desktop, pas de site web à visiter
  },
  {
    id: 4,
    title: "Archives intelligentes",
    category: "Numérisation d'archives avec IA",
    shortDescription:
      "Des documents scannés ou photographiés sont redressés, lus en français et en arabe, classés automatiquement, puis retrouvés en une seconde en tapant un nom ou un mot.",
    fullDescription:
      "Archives intelligentes transforme des documents papier (factures, attestations, contrats, courriers, procès-verbaux) en archives numériques que l'on retrouve instantanément.\n\nUne simple photo prise au téléphone suffit : l'image est remise à plat et redressée, même si le document a été photographié de travers ou à l'envers, puis les ombres sont effacées. Le texte est ensuite lu en français et en arabe, et le type et la date de chaque document sont détectés automatiquement.\n\nLa recherche retrouve un document en quelques millisecondes à partir d'un nom ou d'un mot, même avec une faute de frappe, et se filtre par type, par langue et par année. Le système peut fonctionner entièrement hors ligne, dans les locaux du client : les documents ne quittent jamais l'organisation.\n\nPensé pour les administrations, les écoles, les cliniques, les cabinets d'avocats et les entreprises qui accumulent des archives papier.",
    ar: {
      category: "رقمنة الأرشيف بالذكاء الاصطناعي",
      shortDescription:
        "وثائق ممسوحة ضوئيًا أو مصوَّرة تُقوَّم وتُقرأ بالفرنسية والعربية وتُصنَّف تلقائيًا، ثم يُعثر عليها في ثانية بكتابة اسم أو كلمة.",
      highlights: [
        "قراءة الفرنسية والعربية",
        "تقويم الصور المائلة أو المقلوبة تلقائيًا",
        "التعرّف التلقائي على نوع الوثيقة وتاريخها",
        "بحث في أجزاء من الثانية رغم الأخطاء الإملائية",
      ],
      tags: ["قراءة آلية للنصوص", "بحث ذكي", "دون إنترنت"],
    },
    highlights: [
      "Lecture du français et de l'arabe",
      "Photos de travers ou à l'envers remises droites",
      "Type et date du document détectés automatiquement",
      "Recherche en millisecondes, même avec une faute de frappe",
    ],
    tags: ["OCR", "Recherche intelligente", "Hors ligne"],
    images: [
      "/images/portfolio/archives-1.png",
      "/images/portfolio/archives-2.png",
      "/images/portfolio/archives-3.png",
      "/images/portfolio/archives-4.png",
      "/images/portfolio/archives-5.png",
    ],
    // Vidéo de démonstration réelle (fichiers dans /public/videos/)
    videoSrc: "/videos/archives-demo.mp4",
    poster: "/videos/archives-demo-poster.jpg",
  },
  {
    id: 5,
    title: "Assistant IA interne sécurisé",
    category: "IA sur vos documents internes",
    shortDescription:
      "Les employés posent leurs questions avec leurs propres mots. L'assistant répond à partir des documents internes de l'institution, en citant le document et la page. Tout reste sur l'ordinateur de l'institution : rien ne part sur Internet.",
    fullDescription:
      "Assistant IA interne sécurisé donne au personnel une réponse immédiate sur les procédures, les règlements et les tarifs de l'institution, sans fouiller dans des dizaines de PDF.\n\nL'accès est protégé par mot de passe. L'employé pose sa question en langage courant ; en quelques secondes, l'assistant répond à partir des documents internes indexés et cite sa source : le nom du document et la page exacte. Un clic ouvre la page du PDF avec le passage surligné, pour vérifier soi-même.\n\nSi l'information n'existe pas dans les documents, l'assistant le dit au lieu d'inventer une réponse. Le modèle d'IA tourne en local : aucune donnée ne quitte les bureaux.\n\nPensé pour les banques, les institutions de microfinance, les administrations et toute organisation qui gère des documents confidentiels.",
    ar: {
      category: "ذكاء اصطناعي على وثائقكم الداخلية",
      shortDescription:
        "يطرح الموظفون أسئلتهم بكلماتهم الخاصة، فيجيب المساعد انطلاقًا من الوثائق الداخلية للمؤسسة مع ذكر الوثيقة والصفحة. كل شيء يبقى على حاسوب المؤسسة: لا شيء يُرسَل إلى الإنترنت.",
      highlights: [
        "إجابات مأخوذة من وثائقكم فقط، مع المصدر والصفحة",
        "المقطع المطلوب مظلَّل في ملف PDF بنقرة واحدة",
        "يقول بوضوح عندما لا توجد المعلومة",
        "يعمل محليًا 100٪ ودخوله محمي بكلمة مرور",
      ],
      tags: ["ذكاء اصطناعي توليدي", "بحث في الوثائق", "محلي 100٪"],
    },
    highlights: [
      "Réponses tirées uniquement de vos documents, avec la source et la page",
      "Le passage exact surligné dans le PDF, en un clic",
      "Dit clairement quand l'information n'existe pas",
      "100 % local, accès protégé par mot de passe",
    ],
    tags: ["IA générative", "Recherche documentaire", "100 % local"],
    images: [
      "/images/portfolio/assistant-1.jpg",
      "/images/portfolio/assistant-2.jpg",
      "/images/portfolio/assistant-3.jpg",
      "/images/portfolio/assistant-4.jpg",
      "/images/portfolio/assistant-5.jpg",
    ],
    // Vidéo de démonstration réelle (fichiers dans /public/videos/)
    videoSrc: "/videos/assistant-ia-demo.mp4",
    poster: "/videos/assistant-ia-demo-poster.jpg",
  },
  {
    id: 2,
    title: "Jeff Computer",
    category: "Site e-commerce",
    shortDescription:
      "Boutique en ligne d'ordinateurs portables reconditionnés : catalogue filtrable par marque, fiches produits claires et prix affichés en FCFA.",
    fullDescription:
      "Jeff Computer est un site e-commerce développé pour un vendeur d'ordinateurs portables reconditionnés, aujourd'hui en ligne et utilisé activement pour présenter et vendre ses produits.\n\nLe site met l'accent sur la clarté de l'offre : chaque ordinateur est présenté avec ses caractéristiques techniques essentielles (processeur, RAM, stockage, écran) et son prix directement affiché en FCFA, sans étape cachée. Un système de filtre par catégorie (marques HP, Dell, Lenovo...) permet aux visiteurs de retrouver rapidement le modèle qui correspond à leur besoin et à leur budget.\n\nUne barre de recherche, un bouton de contact direct toujours visible et une fiche produit extensible (\"Voir plus\") complètent l'expérience pour faciliter la prise de contact et la conversion, même pour des visiteurs peu familiers avec les achats en ligne.",
    ar: {
      category: "متجر إلكتروني",
      shortDescription:
        "متجر إلكتروني لحواسيب محمولة مُجدَّدة: كتالوج مصنَّف حسب العلامة، صفحات منتجات واضحة وأسعار بالفرنك الإفريقي.",
      highlights: ["كتالوج مصنَّف حسب العلامة", "أسعار بالفرنك الإفريقي", "تواصل مباشر ظاهر دائمًا"],
      tags: ["تجارة إلكترونية", "متجاوب مع الهاتف", "SEO"],
    },
    highlights: [
      "Catalogue filtrable par marque",
      "Prix affichés en FCFA",
      "Contact direct toujours visible",
    ],
    tags: ["E-commerce", "Responsive", "SEO"],
    images: [
      "/images/portfolio/jeffcomputer-1.png",
      "/images/portfolio/jeffcomputer-2.png",
      "/images/portfolio/jeffcomputer-3.png",
    ],
    url: "https://vente-ordinateur-jeff.vercel.app/",
  },
  {
    id: 3,
    title: "URCHINGE",
    category: "Site vitrine scientifique",
    shortDescription:
      "Site d'un laboratoire de recherche en chimie : projets, équipe et équipements, avec une recherche filtrable par statut et par domaine.",
    fullDescription:
      "URCHINGE est le site vitrine développé pour un laboratoire de recherche en chimie, conçu pour refléter son sérieux scientifique et faciliter la découverte de ses travaux par des partenaires, chercheurs ou étudiants.\n\nLe cœur du site est sa section Projets de Recherche : chaque projet est présenté avec sa durée, le nombre de chercheurs impliqués, son domaine (chimie organique, etc.), son statut d'avancement et ses partenaires institutionnels (comme le CNRS ou l'Université de Paris). Une recherche par mot-clé et des filtres par statut et par domaine permettent de naviguer facilement dans l'ensemble des recherches menées.\n\nLe site regroupe aussi les sections Équipe, Équipement et Actualités, donnant une vue complète et professionnelle de l'activité du laboratoire — un outil de crédibilité autant qu'une vitrine.",
    ar: {
      category: "موقع علمي مؤسساتي",
      shortDescription:
        "موقع مختبر بحث في الكيمياء: المشاريع والفريق والتجهيزات، مع بحث مصنَّف حسب الحالة والمجال.",
      highlights: ["مشاريع بحث قابلة للتصفية", "تقديم الفريق والتجهيزات", "قسم الأخبار"],
      tags: ["موقع مؤسساتي", "بحث علمي", "تصفية"],
    },
    highlights: [
      "Projets de recherche filtrables",
      "Présentation de l'équipe et des équipements",
      "Section actualités",
    ],
    tags: ["Site institutionnel", "Recherche", "Filtres"],
    images: [
      "/images/portfolio/urchinge-1.png",
      "/images/portfolio/urchinge-2.png",
    ],
    url: "https://lab-tmp.vercel.app/",
  },
];