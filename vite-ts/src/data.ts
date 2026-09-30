// ── Types ─────────────────────────────────────────────────────────
export type BadgeStatus = 'LIVE' | 'DEPLOYED' | 'DEVELOPMENT' | 'PILOT' | 'R&D' | 'CONCEPT';
export type DotVariant   = 'edu' | 'work' | 'main' | 'founder';
export type TagVariant   = DotVariant;

export interface Stat {
  count: number;
  label: string;
}

export interface JourneyItem {
  period: string;
  highlight?: string;
  title: string;
  role: string;
  desc: string;
  dot: DotVariant;
  tags: Array<{ label: string; variant: TagVariant }>;
  featured?: boolean;
}

export interface JourneyColumn {
  flag: string;
  continent: string;
  subtitle: string;
  items: JourneyItem[];
}

export interface Product {
  id: string;
  eyebrow: string;
  title: string;
  image: string;
  alt: string;
  desc: string[];
  link?: { href: string; label: string };
  badges: Array<{ status: BadgeStatus }>;
}

export interface Experience {
  id: string;
  company: string;
  period: string;
  role: string;
  location: string;
  category: 'europe' | 'africa';
  highlight?: string;
  featured?: boolean;
  skills: string[];
  paragraphs: string[];
}

export interface Formation {
  year: string;
  type: string;
  title: string;
  degree?: string;
  major?: string;
  institution?: string;
  country?: string;
  levelBadge?: string;
  description?: string;
  skills?: string[];
  iconType?: 'cyber' | 'embedded' | 'systems' | 'data';
}

export interface Certification {
  category: string;
  title: string;
  issuer?: string;
  year?: string;
  badge?: string;
  description?: string;
  iconType?: 'safety' | 'plc' | 'data' | 'mgmt' | 'pr';
}

export interface CaseMetric {
  value: string;
  label: string;
}

export interface CasePhase {
  phase: string;
  heading: string;
  text: string;
}

export interface CaseStudy {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  alt: string;
  desc: string;
  metrics: CaseMetric[];
  tags: string[];
  link?: { href: string; label: string };
  items: CasePhase[];
}

export interface InternationalHub {
  id: string;
  city: string;
  country: string;
  flag: string;
  code: string;
  role: string;
  organization: string;
  period: string;
  context: string;
  metrics: Array<{ value: string; label: string }>;
  tags: string[];
}

export interface SkillItem {
  name: string;
  level: string;
  context: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface ProductModalData {
  id: string;
  title: string;
  eyebrow: string;
  tagline: string;
  image: string;
  architecture: string[];
  techStack: string[];
  features: string[];
  liveUrl?: string;
  status: string;
}

export interface TrajectoryMilestone {
  id: string;
  period: string;
  highlight?: string;
  continent: 'europe' | 'africa';
  location: string;
  flag: string;
  title: string;
  role: string;
  typeBadge: string;
  featured?: boolean;
  desc: string;
  achievements: string[];
  tags: string[];
}

// ── Data ──────────────────────────────────────────────────────────
export const stats: Stat[] = [
  { count: 8,  label: "Années Honeywell,\ningénierie système" },
  { count: 3,  label: "Diplômes\nUniversität Bremen" },
  { count: 2,  label: "Continents :\nEurope et Afrique" },
];

export const journey: { europe: JourneyColumn; africa: JourneyColumn } = {
  europe: {
    flag: "",
    continent: "Europe",
    subtitle: "Formation & Ingénierie · 2010 – 2022",
    items: [
      {
        period: "2010 – 2012",
        title: "DFKI",
        role: "Tutoring & Student Assistance",
        desc: "Centre de recherche allemand en intelligence artificielle à Brême. Soutien académique et encadrement technique d'étudiants.",
        dot: "edu",
        tags: [{ label: "Recherche", variant: "edu" }],
      },
      {
        period: "2012 – 2014",
        title: "SIKORA AG",
        role: "Software & System Testing",
        desc: "Tests logiciels et validation de systèmes dans un environnement industriel. Première expérience en rigueur technique terrain.",
        dot: "work",
        tags: [{ label: "Industrie", variant: "work" }],
      },
      {
        period: "2014 – 2022",
        highlight: "8 ans",
        title: "Honeywell",
        role: "Application / System Engineering · Safety · Airport VDGS",
        desc: "Ingénierie système sur un périmètre EMEA : automatisation industrielle, systèmes de sécurité, puis systèmes d'aide au stationnement des aéronefs à Zürich, Amsterdam et Istanbul.",
        dot: "main",
        featured: true,
        tags: [
          { label: "Systèmes",  variant: "main" },
          { label: "Sécurité",  variant: "main" },
          { label: "Aéroports", variant: "main" },
          { label: "EMEA",      variant: "main" },
        ],
      },
      {
        period: "2013 / 2016 / 2023",
        title: "Universität Bremen",
        role: "BSc System Engineering · MSc Software · MSc Cybersecurity",
        desc: "Trois diplômes sur dix ans : ingénierie des systèmes, systèmes embarqués, puis cybersécurité.",
        dot: "edu",
        tags: [{ label: "Formation", variant: "edu" }],
      },
    ],
  },
  africa: {
    flag: "",
    continent: "Cameroun",
    subtitle: "Entrepreneuriat & Digital · 2021 – présent",
    items: [
      {
        period: "2021 – présent",
        title: "TAG Services SARL",
        role: "Founder & Managing Director",
        desc: "Création et direction de l'entreprise depuis Yaoundé. Définition de l'offre, pilotage des produits, structuration des équipes. Le lien concret entre une formation d'ingénieur internationale et des besoins numériques africains.",
        dot: "founder",
        tags: [
          { label: "Direction", variant: "founder" },
          { label: "Digital",   variant: "founder" },
          { label: "IA",        variant: "founder" },
        ],
      },
      {
        period: "2022 – 2024",
        title: "Digital College Yaoundé",
        role: "Teaching & Technical Training",
        desc: "Enseignement de l'informatique et des systèmes. Transmettre des bases solides à des étudiants en lien avec les réalités du marché local.",
        dot: "edu",
        tags: [{ label: "Formation", variant: "edu" }],
      },
      {
        period: "2024 – 2026",
        title: "Solutions numériques TAG",
        role: "MOTSOA · ASDO · SIBA",
        desc: "Structuration des produits phares de TAG : marketplace automobile, aide à la décision par les données, digitalisation des activités commerciales.",
        dot: "work",
        tags: [
          { label: "MOTSOA", variant: "work" },
          { label: "ASDO",   variant: "work" },
          { label: "SIBA",   variant: "work" },
        ],
      },
    ],
  },
};

export const products: Product[] = [
  {
    id: "motsoa",
    eyebrow: "MOTSOA · Automotive",
    title: "Mettre de l'ordre dans le marché automobile.",
    image: "/assets/logo-motsoa.png",
    alt: "Plateforme MOTSOA : Vendez Achetez en toute fiabilité",
    desc: [
      "Marketplace automobile au Cameroun : achat, vente, location et importation de véhicules et pièces certifiés.",
    ],
    link: { href: "https://motsoa.com", label: "motsoa.com →" },
    badges: [{ status: "DEVELOPMENT" }, { status: "PILOT" }],
  },
  {
    id: "dogspa",
    eyebrow: "DOG SPA · Pet Services",
    title: "Digitalisation d'une activité de services de proximité.",
    image: "/assets/logo-dogspa.png",
    alt: "Centre et plateforme DOG SPA Yaoundé",
    desc: ["Digitalisation des soins et du toilettage animalier à Yaoundé : présence web, réservations et gestion d'activité."],
    link: { href: "https://dogspa-cm.com", label: "dogspa-cm.com →" },
    badges: [{ status: "LIVE" }, { status: "DEPLOYED" }],
  },
  {
    id: "asdo",
    eyebrow: "ASDO · AI / Data",
    title: "Des données vers la décision.",
    image: "/assets/asdo.jpg",
    alt: "Tableaux de bord analytiques et décisionnels ASDO",
    desc: [
      "Plateforme d'aide à la décision par la data : transformation des flux d'information bruts en indicateurs actionnables pour dirigeants.",
    ],
    badges: [{ status: "R&D" }, { status: "DEVELOPMENT" }],
  },
  {
    id: "siba",
    eyebrow: "SIBA · Business Management",
    title: "Digitaliser l'activité commerciale.",
    image: "/assets/siba.jpg",
    alt: "Digitalisation commerciale et point de vente SIBA",
    desc: ["Gestion commerciale et point de vente (POS) tactile conçue pour fluidifier les stocks, encaissements et marges sur le terrain."],
    badges: [{ status: "DEVELOPMENT" }, { status: "CONCEPT" }],
  },
];

export const experiences: Experience[] = [
  {
    id: "tag-services",
    company: "TAG Services SARL",
    period: "2021 – Présent",
    role: "Fondateur & Directeur Général",
    location: "Yaoundé, Cameroun",
    category: "africa",
    featured: true,
    highlight: "Direction & Entrepreneuriat",
    skills: ["MOTSOA", "ASDO", "SIBA", "Gouvernance IT", "Transformation Digitale"],
    paragraphs: [
      "Direction générale et pilotage des plateformes numériques propriétaires (MOTSOA, ASDO, SIBA) et conseil stratégique pour entreprises.",
    ],
  },
  {
    id: "honeywell",
    company: "Honeywell",
    period: "2014 – 2022 · 8 ans",
    role: "Lead Application & System Engineer",
    location: "Bremen, Allemagne · International",
    category: "europe",
    featured: true,
    highlight: "8 ans · Systèmes Critiques",
    skills: ["Sûreté RAMS", "Systèmes VDGS", "Beckhoff TwinCAT", "TwinSAFE", "Zürich · Amsterdam · Istanbul"],
    paragraphs: [
      "Ingénierie de systèmes critiques : déploiement de guidage aéroportuaire VDGS (ZRH, AMS, IST) et programmation d'automatismes de sécurité Beckhoff (TwinCAT / TwinSAFE).",
    ],
  },
  {
    id: "digital-college",
    company: "Digital College Yaoundé",
    period: "2022 – 2024",
    role: "Enseignant & Formateur Technique",
    location: "Yaoundé, Cameroun",
    category: "africa",
    skills: ["Cybersécurité", "Architectures Réseaux", "Administration Système"],
    paragraphs: [
      "Enseignement supérieur en cybersécurité, architectures réseau et administration des systèmes d'information.",
    ],
  },
  {
    id: "sikora",
    company: "SIKORA AG",
    period: "2012 – 2014",
    role: "Software & System Testing Engineer",
    location: "Bremen, Allemagne",
    category: "europe",
    skills: ["Tests Logiciels", "Bancs de Métrologie", "Validation Industrielle"],
    paragraphs: [
      "Qualification logicielle et bancs de mesure pour équipements industriels de haute précision.",
    ],
  },
  {
    id: "dfki",
    company: "DFKI (Centre Allemand de Recherche en IA)",
    period: "2010 – 2012",
    role: "Assistant Technique & Tutorat",
    location: "Bremen, Allemagne",
    category: "europe",
    skills: ["Algorithmique", "Intelligence Artificielle", "Recherche Appliquée"],
    paragraphs: [
      "Appui algorithmique et tutorat académique au sein de l'institut allemand de recherche en intelligence artificielle.",
    ],
  },
];

export const formations: Formation[] = [
  {
    year: "2023",
    type: "Master of Science (M.Sc.)",
    title: "Cybersecurity",
    institution: "Universität Bremen",
    country: "Allemagne",
  },
  {
    year: "2016",
    type: "Master of Science (M.Sc.)",
    title: "Software and Embedded Systems",
    institution: "Universität Bremen",
    country: "Allemagne",
  },
  {
    year: "2013",
    type: "Bachelor of Science (B.Sc.)",
    title: "System Engineering",
    institution: "Universität Bremen",
    country: "Allemagne",
  },
];

export const certifications: Certification[] = [
  {
    category: "Certification",
    title: "TwinCAT TR1012",
    issuer: "Beckhoff Automation",
  },
  {
    category: "Certification",
    title: "TwinSAFE TR3066",
    issuer: "Beckhoff Automation",
  },
  {
    category: "Formation",
    title: "Big Data Management",
    issuer: "CS Visor",
    year: "2023",
  },
  {
    category: "Formation professionnelle",
    title: "Project Management & Teamwork",
  },
  {
    category: "Formation professionnelle",
    title: "Public Relations",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "airport",
    num: "01",
    title: "Systèmes d'Accostage Aéroportuaire (VDGS)",
    subtitle: "Déploiement et intégration de systèmes critiques à Zürich, Amsterdam et Istanbul",
    category: "Systèmes Critiques & Aéroportuaire",
    image: "/assets/real-systems.jpg",
    alt: "Systèmes d'accostage aéroportuaire VDGS",
    desc: "Ingénierie système, sûreté de fonctionnement (RAMS) et mise en service d'équipements de guidage visuel des avions sur trois grands carrefours aériens internationaux.",
    metrics: [
      { value: "3", label: "Hubs internationaux (ZRH, AMS, IST)" },
      { value: "SIL / RAMS", label: "Conformité sûreté de fonctionnement" },
      { value: "24/7", label: "Haute disponibilité sans interruption" },
    ],
    tags: ["Honeywell", "VDGS", "Sûreté RAMS", "Normes ICAO", "Systèmes Temps Réel"],
    items: [
      {
        phase: "01",
        heading: "Contexte & Contraintes Opérationnelles",
        text: "Intégrer une technologie d'accostage optique et laser sur des pistes en activité continue, avec des impératifs absolus de sécurité, d'étanchéité logicielle et de conformité aux normes aéronautiques mondiales.",
      },
      {
        phase: "02",
        heading: "Spécifications & Méthodologie RAMS",
        text: "Modélisation des défaillances potentielles, calculs de fiabilité, maintenabilité et disponibilité (RAMS), rédaction des matrices de traçabilité des exigences et des protocoles d'essais complets.",
      },
      {
        phase: "03",
        heading: "Intégration Matériel & Logiciel Sol",
        text: "Interconnexion entre les capteurs haute résolution, les afficheurs pilotes sur passerelle, le réseau avionique au sol et le système central de gestion aéroportuaire (AODB).",
      },
      {
        phase: "04",
        heading: "Impact & Retour d'Expérience",
        text: "Optimisation du temps d'accostage aux portes, réduction des risques de collision au sol et capitalisation d'une culture d'ingénierie où la rigueur documentaire est un gage de sécurité vitale.",
      },
    ],
  },
  {
    id: "motsoa",
    num: "02",
    title: "Plateforme MOTSOA",
    subtitle: "Structuration digitale du marché automobile, pièces détachées et engins au Cameroun",
    category: "Plateforme Digitale & Marketplace",
    image: "/assets/logo-motsoa.png",
    alt: "Plateforme MOTSOA : Vendez Achetez en toute fiabilité",
    desc: "Création d'une marketplace nationale centralisant l'achat, la vente, la location et l'importation de véhicules et pièces avec des profils vérifiés.",
    link: { href: "https://motsoa.com", label: "Consulter motsoa.com →" },
    metrics: [
      { value: "B2B & B2C", label: "Particuliers & Concessionnaires" },
      { value: "4 Services", label: "Vente, Location, Pièces & Import" },
      { value: "En ligne", label: "Plateforme accessible au Cameroun" },
    ],
    tags: ["Marketplace", "TypeScript", "Catalogue Produit", "Sécurisation", "Cameroun"],
    items: [
      {
        phase: "01",
        heading: "Diagnostic du Marché Local",
        text: "Les transactions automobiles au Cameroun reposent en grande partie sur l'informel et des réseaux sociaux non structurés, provoquant asymétrie d'information, fraudes et opacité sur les prix réels.",
      },
      {
        phase: "02",
        heading: "Architecture & Modèle Fonctionnel",
        text: "Conception d'une plateforme web moderne intégrant recherche multicritère, fiches techniques précises, vérification des marchands professionnels et espace d'administration sécurisé.",
      },
      {
        phase: "03",
        heading: "Mise en Œuvre & Déploiement",
        text: "Lancement des modules de petites annonces pour véhicules neufs et d'occasion, catalogue de pièces détachées et accompagnement dédié aux commandes d'importation depuis l'Europe.",
      },
      {
        phase: "04",
        heading: "Bénéfices & Perspectives",
        text: "Émergence d'un tiers de confiance technologique local facilitant la rencontre entre acheteurs sérieux et distributeurs automobiles professionnels certifiés.",
      },
    ],
  },
  {
    id: "asdo",
    num: "03",
    title: "Plateforme ASDO",
    subtitle: "Valorisation des données organisationnelles et aide à la décision stratégique par l'IA",
    category: "Data Engineering & Intelligence Artificielle",
    image: "/assets/asdo.jpg",
    alt: "Analyse décisionnelle ASDO",
    desc: "Solution d'ingénierie de données permettant de collecter, nettoyer et synthétiser les flux d'informations pour éclairer les décisions de direction.",
    link: { href: "https://tag-service.com", label: "Découvrir TAG Services →" },
    metrics: [
      { value: "Pipeline", label: "Ingestion, Nettoyage & Synthèse" },
      { value: "Hybride", label: "Assistance IA + Jugement humain" },
      { value: "Décision", label: "Rapports exécutifs opérationnels" },
    ],
    tags: ["Big Data", "Data Pipeline", "Aide à la Décision", "Tableaux de Bord", "IA"],
    items: [
      {
        phase: "01",
        heading: "Problématique Décisionnelle",
        text: "Beaucoup d'entreprises et d'administrations collectent des volumes conséquents de données sans disposer de processus automatisés pour les exploiter à temps pour arbitrer leurs choix opérationnels.",
      },
      {
        phase: "02",
        heading: "Pipeline de Traitement des Données",
        text: "Mise en place d'une chaîne logique continue : Ingestion des données brutes → Normalisation et filtrage → Traitement analytique → Génération de vues synthétiques intelligentes.",
      },
      {
        phase: "03",
        heading: "Modèles d'Assistance & IA",
        text: "Intégration d'algorithmes d'analyse pour faire émerger les tendances significatives, signaler les anomalies et synthétiser les indicateurs essentiels sans jargon technique superflu.",
      },
      {
        phase: "04",
        heading: "Valeur Opérationnelle",
        text: "Les dirigeants disposent d'un éclairage objectif et synthétique en temps utile, replaçant la donnée au service de l'action stratégique et de la rentabilité.",
      },
    ],
  },
];

export const internationalHubs: InternationalHub[] = [
  {
    id: "zurich",
    city: "Zürich",
    country: "Suisse",
    flag: "",
    code: "ZRH",
    role: "Ingénieur Systèmes & Validation VDGS",
    organization: "Honeywell Building Solutions",
    period: "2014 – 2022",
    context: "Mise en service des systèmes d'accostage laser VDGS (Gates A) selon les standards critiques de sûreté aéroportuaire suisse.",
    metrics: [
      { value: "Gates A", label: "Portes d'embarquement équipées" },
      { value: "RAMS", label: "Fiabilité et sûreté certifiées" },
      { value: "24/7", label: "Haute disponibilité continue" },
    ],
    tags: ["Aéroport Zürich", "VDGS", "Sûreté RAMS", "Optique & Laser"],
  },
  {
    id: "amsterdam",
    city: "Amsterdam",
    country: "Pays-Bas",
    flag: "",
    code: "AMS",
    role: "Intégration & Protocoles d'Essais",
    organization: "Honeywell HBS",
    period: "2016 – 2021",
    context: "Essais d'interopérabilité passerelles-sol et qualification des calculateurs de guidage sur le hub de Schiphol.",
    metrics: [
      { value: "Schiphol", label: "Hub international majeur" },
      { value: "ICAO", label: "Conformité aéronautique mondiale" },
      { value: "0 fail", label: "Tolérance aux pannes critique" },
    ],
    tags: ["Schiphol C8", "Passerelles", "Interopérabilité", "Tests Sol"],
  },
  {
    id: "istanbul",
    city: "Istanbul",
    country: "Turquie",
    flag: "",
    code: "IST",
    role: "Déploiement & Validation Grand Hub",
    organization: "Honeywell",
    period: "2018 – 2022",
    context: "Déploiement grande échelle des équipements VDGS temps réel sur le mégaprojet du nouvel aéroport d'Istanbul.",
    metrics: [
      { value: "Mégaprojet", label: "Nouvel aéroport international IST" },
      { value: "Scale", label: "Déploiement grande échelle" },
      { value: "Temps Réel", label: "Supervision centralisée" },
    ],
    tags: ["Istanbul IST", "Mégaprojet", "Temps Réel", "Validation"],
  },
  {
    id: "bremen",
    city: "Brême",
    country: "Allemagne",
    flag: "",
    code: "BRE",
    role: "Formation Master of Science & Recherche",
    organization: "Universität Bremen · DFKI · SIKORA",
    period: "2007 – 2014",
    context: "Double Master of Science à l'Universität Bremen, recherche en IA au DFKI et métrologie industrielle chez SIKORA AG.",
    metrics: [
      { value: "M.Sc", label: "Diplôme Master of Science" },
      { value: "DFKI", label: "Centre IA allemand" },
      { value: "SIKORA", label: "Instrumentation industrielle" },
    ],
    tags: ["Univ Bremen", "DFKI IA", "SIKORA AG", "Automatisme"],
  },
  {
    id: "yaounde",
    city: "Yaoundé",
    country: "Cameroun",
    flag: "",
    code: "",
    role: "Fondateur & Directeur Général",
    organization: "TAG Services SARL",
    period: "2021 – Présent",
    context: "Direction de TAG Services SARL, déploiement des plateformes MOTSOA, DOG SPA, ASDO, SIBA et enseignement supérieur.",
    metrics: [
      { value: "4 Solutions", label: "Écosystème technologique" },
      { value: "Entreprise", label: "Siège TAG Services Yaoundé" },
      { value: "Enseignement", label: "Partage académique (IUC, Univ)" },
    ],
    tags: ["TAG Services", "MOTSOA", "DOG SPA", "ASDO / SIBA", "Enseignement"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "cyber",
    name: "Cybersécurité & Réseaux",
    icon: "",
    description: "Protection des systèmes d'information, architectures réseau résilientes et gouvernance des risques numériques.",
    skills: [
      { name: "Sécurité Réseau (Firewalls, VPN, DMZ)", level: "Expert", context: "Infrastructures critiques d'entreprise" },
      { name: "Protocoles TCP/IP, VLAN, OSPF, BGP", level: "Avancé", context: "Routage industriel et segmentation" },
      { name: "Analyse de Vulnérabilités & Audit SSI", level: "Avancé", context: "Évaluation préventive des menaces" },
      { name: "Gestion des Risques & Politiques SI", level: "Maîtrisé", context: "Gouvernance et plans de continuité" },
    ],
  },
  {
    id: "systems",
    name: "Ingénierie Systèmes & Automatisme",
    icon: "",
    description: "Conception, modélisation des exigences, sûreté de fonctionnement (RAMS) et automatisme industriel.",
    skills: [
      { name: "Systèmes d'Accostage Aéroportuaire (VDGS)", level: "Expert", context: "8 ans chez Honeywell (ZRH, AMS, IST)" },
      { name: "Méthodologie RAMS & Fiabilité Système", level: "Expert", context: "Calculs MTTF, MTBF, disponibilité continue" },
      { name: "Automates Programmables (PLC / Beckhoff)", level: "Avancé", context: "TwinCAT 2/3, TwinSAFE, bus de terrain" },
      { name: "Modélisation UML / SysML & Traçabilité", level: "Avancé", context: "Matrices d'exigences et cycles en V" },
    ],
  },
  {
    id: "software",
    name: "Développement & Architecture Web",
    icon: "",
    description: "Conception de plateformes digitales modulaires, architectures backend robustes et interfaces web réactives.",
    skills: [
      { name: "Python / Django / FastEngine", level: "Avancé", context: "Services backend, scripts et automatisation" },
      { name: "TypeScript & JavaScript moderne", level: "Avancé", context: "Frontends réactifs et typage strict" },
      { name: "PHP / SQL / PostgreSQL / MySQL", level: "Avancé", context: "Gestion de données relationnelles et e-commerce" },
      { name: "Docker & Administration Linux", level: "Maîtrisé", context: "Déploiements conteneurisés et serveurs cloud" },
    ],
  },
  {
    id: "data",
    name: "Data & Intelligence Artificielle",
    icon: "",
    description: "Valorisation de la donnée d'entreprise, pipelines analytiques et outils d'aide à la décision stratégique.",
    skills: [
      { name: "Pipelines de Données & ETL Métiers", level: "Avancé", context: "Ingestion, normalisation et consolidation" },
      { name: "Tableaux de Bord Décisionnels & KPI", level: "Avancé", context: "Plateforme ASDO et Business Intelligence" },
      { name: "Modèles Décisionnels & Algorithmes IA", level: "Maîtrisé", context: "Assistance intelligente sans boîte noire" },
      { name: "Enseignement IA & Algorithmique", level: "Expert", context: "Cours universitaires (IUC, instituts)" },
    ],
  },
];

export const productModalData: Record<string, ProductModalData> = {
  motsoa: {
    id: "motsoa",
    title: "Plateforme Automobile MOTSOA",
    eyebrow: "Place de marché & services automobiles au Cameroun",
    tagline: "Vendez, achetez et importez vos véhicules en toute fiabilité et transparence.",
    image: "/assets/logo-motsoa.png",
    status: "EN PRODUCTION (V1 LIVE)",
    liveUrl: "https://motsoa.com",
    architecture: [
      "Architecture web moderne hébergée sur cloud sécurisé",
      "Moteur de recherche multicritère par marque, modèle, budget, boîte et énergie",
      "Espace marchand certifié pour concessionnaires et importateurs",
      "Système de modération préventive anti-fraude",
    ],
    techStack: ["TypeScript", "PHP / Laravel", "MySQL", "TailwindCSS / CSS3", "Docker", "REST API"],
    features: [
      "Petites annonces de véhicules vérifiés (Douala, Yaoundé et tout le Cameroun)",
      "Catalogue de pièces détachées et accessoires d'origine",
      "Service d'assistance et commandes directes d'importation depuis l'Europe",
      "Filtrage dynamique instantané sans rechargement de page",
    ],
  },
  dogspa: {
    id: "dogspa",
    title: "Centre & Solution DOG SPA",
    eyebrow: "Digitalisation des soins et services animaliers",
    tagline: "Premier centre moderne de toilettage, soins et bien-être canin à Yaoundé.",
    image: "/assets/logo-dogspa.png",
    status: "DÉPLOYÉ & OPÉRATIONNEL",
    liveUrl: "https://dogspa-cm.com",
    architecture: [
      "Site vitrine responsive connecté au standard local de Yaoundé",
      "Module de réservation et prise de rendez-vous en ligne",
      "Catalogue interactif des prestations avec tarifs transparents",
      "Intégration WhatsApp Business pour validation instantanée",
    ],
    techStack: ["Web moderne", "Catalogue dynamique", "SEO local", "Intégration messagerie"],
    features: [
      "Toilettage professionnel, coupe et bain thérapeutique",
      "Soins d'hygiène et bien-être canin spécialisé",
      "Système de localisation et prise de contact rapide",
      "Gestion de la relation client digitalisée",
    ],
  },
  asdo: {
    id: "asdo",
    title: "Solution Décisionnelle ASDO",
    eyebrow: "Data Engineering & Intelligence Artificielle",
    tagline: "Transformer les flux de données brutes en insights actionnables pour les dirigeants.",
    image: "/assets/asdo.jpg",
    status: "R&D ET DÉVELOPPEMENT AVANCÉ",
    liveUrl: "https://tag-service.com",
    architecture: [
      "Connecteurs multi-sources pour bases de données et fichiers métiers",
      "Chaîne d'ingestion et de normalisation automatisée (ETL)",
      "Moteur d'agrégation statistique et détection d'anomalies",
      "Tableaux de bord interactifs orientés prise de décision",
    ],
    techStack: ["Python", "Pandas", "PostgreSQL", "Data Visualization", "Algorithmes prédictifs"],
    features: [
      "Rapports exécutifs synthétiques sans surcharge technique",
      "Alertes proactives sur indicateurs clés (ventes, stocks, coûts)",
      "Modélisation de scénarios prévisionnels",
      "Confidentialité stricte et hébergement sécurisé des données",
    ],
  },
  siba: {
    id: "siba",
    title: "Solution SIBA",
    eyebrow: "Gestion Commerciale & Point de Vente",
    tagline: "Remplacer le papier et le suivi oral par une gestion commerciale claire sur le terrain.",
    image: "/assets/siba.jpg",
    status: "DÉVELOPPEMENT & CONCEPT TESTÉ",
    liveUrl: "https://tag-service.com",
    architecture: [
      "Application web et mobile légère adaptée aux connexions variables",
      "Synchronisation des ventes et des stocks en temps réel",
      "Interface point de vente (POS) ultra-rapide pour caissiers et vendeurs",
      "Console d'administration accessible aux gérants à distance",
    ],
    techStack: ["TypeScript", "API REST", "Bases relationnelles", "Interface tactile réactive"],
    features: [
      "Gestion des stocks, alertes de rupture et inventaires rapides",
      "Enregistrement des ventes quotidiennes et calcul automatique des marges",
      "Suivi des créances clients et règlements fournisseurs",
      "Réduction des erreurs de caisse et pertes non justifiées",
    ],
  },
};

export const trajectoryMilestones: TrajectoryMilestone[] = [
  {
    id: "dfki",
    period: "2010 – 2012",
    continent: "europe",
    location: "Brême, Allemagne",
    flag: "",
    title: "DFKI · Institut Allemand de Recherche en IA",
    role: "Tutoring & Student Assistance en IA",
    typeBadge: "Recherche & IA",
    desc: "Recherche appliquée et tutorat académique en modélisation et intelligence artificielle.",
    achievements: [],
    tags: ["DFKI", "IA Appliquée", "Brême"],
  },
  {
    id: "sikora",
    period: "2012 – 2014",
    continent: "europe",
    location: "Brême, Allemagne",
    flag: "",
    title: "SIKORA AG",
    role: "Software & System Testing Engineer",
    typeBadge: "Industrie & Métrologie",
    desc: "Qualification logicielle et bancs de tests pour instrumentation industrielle de précision.",
    achievements: [],
    tags: ["SIKORA AG", "Métrologie", "Tests Systèmes"],
  },
  {
    id: "bremen-studies",
    period: "2013 / 2016 / 2023",
    highlight: "3 Diplômes d'État",
    continent: "europe",
    location: "Universität Bremen, Allemagne",
    flag: "",
    title: "Universität Bremen",
    role: "BSc Ingénierie · MSc Systèmes Embarqués · MSc Cybersécurité",
    typeBadge: "Formation d'Élite",
    desc: "Double Master of Science : Systèmes Embarqués (2016) & Cybersécurité (2023).",
    achievements: [],
    tags: ["Univ Bremen", "MSc Systèmes Embarqués", "MSc Cybersécurité"],
  },
  {
    id: "honeywell",
    period: "2014 – 2022",
    highlight: "8 ans · Pilier EMEA",
    continent: "europe",
    location: "Bremen · Zürich · Amsterdam · Istanbul",
    flag: "",
    title: "Honeywell Building Solutions",
    role: "Lead Application & System Engineer · Sûreté Critique · VDGS",
    typeBadge: "Multinationale & Systèmes Critiques",
    featured: true,
    desc: "Systèmes d'accostage avionique VDGS (Zürich, Amsterdam, Istanbul) et sûreté RAMS.",
    achievements: [],
    tags: ["Honeywell", "Systèmes VDGS", "Sûreté RAMS", "TwinSAFE"],
  },
  {
    id: "tag-services",
    period: "2021 – Présent",
    highlight: "Fondation & Leadership",
    continent: "africa",
    location: "Yaoundé, Cameroun",
    flag: "",
    title: "TAG Services SARL",
    role: "Fondateur & Directeur Général",
    typeBadge: "Entrepreneuriat & Direction",
    featured: true,
    desc: "Direction générale, ingénierie logicielle et développement des solutions propriétaires.",
    achievements: [],
    tags: ["TAG Services", "Fondateur & DG", "Direction Technique"],
  },
  {
    id: "teaching",
    period: "2022 – 2024",
    continent: "africa",
    location: "Yaoundé, Cameroun",
    flag: "",
    title: "Digital College & Instituts Universitaires",
    role: "Enseignant en Cybersécurité & Architectures Systèmes",
    typeBadge: "Transmission Académique",
    desc: "Enseignement supérieur en cybersécurité opérationnelle, protocoles et défense des SI.",
    achievements: [],
    tags: ["Enseignement", "Cybersécurité", "Mentorat"],
  },
  {
    id: "solutions-scale",
    period: "2024 – Présent",
    highlight: "Déploiement Opérationnel",
    continent: "africa",
    location: "Yaoundé · Douala · Cameroun",
    flag: "",
    title: "Écosystème Produits TAG",
    role: "Industrialisation des Plateformes Propriétaires",
    typeBadge: "Plateformes Métiers",
    desc: "Déploiement à grande échelle des plateformes MOTSOA, DOG SPA, ASDO et SIBA.",
    achievements: [],
    tags: ["MOTSOA", "DOG SPA", "ASDO", "SIBA"],
  },
];

