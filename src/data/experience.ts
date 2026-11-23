import type { L, Text } from '../i18n/utils';

export interface Job {
  /** Année(s) affichée(s) en grand. */
  year: string;
  /** Mois, par ex. « Août – Aujourd'hui ». */
  period?: Text;
  location: Text;
  title: Text;
  org: string;
  orgUrl?: string;
  /** Poste actuel : pastille animée + badge « En cours ». */
  current?: boolean;
  bullets: L<string[]>;
  /** Liens vers les produits, affichés dans une puce « Produits : … et … ». */
  products?: { name: string; url: string }[];
  stack?: Text;
}

const yaounde: Text = { fr: 'Yaoundé, Cameroun', en: 'Yaoundé, Cameroon' };

/** Expérience en développement, du plus récent au plus ancien. */
export const devJobs: Job[] = [
  {
    year: '2026',
    period: { fr: "Août – Aujourd'hui", en: 'August – Present' },
    location: { fr: 'Québec, QC', en: 'Quebec City, QC' },
    title: { fr: 'Développeuse Web Full-Stack - Collaboration technique sur projet', en: 'Full-Stack Web Developer - Technical project collaboration' },
    org: 'Vendra Studio',
    orgUrl: 'https://vendrastudio.com',
    current: true,
    bullets: {
      fr: [
        "Contribution au développement et à l'amélioration d'une plateforme SaaS de création et de gestion de contenu marketing assistée par intelligence artificielle",
        "Participation à l'évolution des fonctionnalités et à la résolution de problèmes techniques",
        "Collaboration au développement logiciel, à la validation des changements et à l'amélioration de l'expérience utilisateur",
      ],
      en: [
        'Contributing to the development and improvement of an AI-assisted SaaS platform for creating and managing marketing content',
        'Taking part in feature evolution and technical problem solving',
        'Collaborating on software development, change validation and user experience improvements',
      ],
    },
    products: [
      { name: 'Vendra Studio', url: 'https://vendrastudio.com' },
      { name: 'Rinova', url: 'https://rinova.app' },
    ],
    stack: 'React, TypeScript, Vite, shadcn-ui, Tailwind CSS',
  },
  {
    year: '2026',
    period: { fr: 'Mars – Mai', en: 'March – May' },
    location: 'Joliette, QC',
    title: { fr: 'Stage en développement web', en: 'Web Development Intern' },
    org: 'Bio.Enviro.In',
    bullets: {
      fr: [
        "Seule développeuse de l'entreprise, en lien avec l'équipe agronomique",
        'Migration vers une architecture multi-applications (sol / serre) avec authentification centralisée (SSO)',
        "Calculateurs de fertilisation NPK, d'engrais hydroponique et d'amendement calcique",
        "Mise en production de l'architecture, rédaction de guides techniques et accompagnement des utilisateurs",
      ],
      en: [
        'Sole developer at the company, working closely with the agronomy team',
        'Migration to a multi-application architecture (soil / greenhouse) with centralized authentication (SSO)',
        'NPK fertilization, hydroponic fertilizer and calcium amendment calculators',
        'Production rollout of the architecture, technical guides and user support',
      ],
    },
    stack: 'Laravel / Lumen, Angular, MySQL, Docker, JWT',
  },
  {
    year: '2024',
    period: { fr: 'Février – Mars', en: 'February – March' },
    location: 'Joliette, QC',
    title: { fr: 'Développeuse web - mandat autonome', en: 'Web Developer - Freelance contract' },
    org: 'Joseph Clean',
    bullets: {
      fr: [
        "Conception d'un site vitrine pour une entreprise de nettoyage de textiles",
        "Développement d'un formulaire d'estimation et intégration d'un système d'avis clients",
      ],
      en: [
        'Designed a showcase website for a textile cleaning business',
        'Built a quote request form and integrated a customer review system',
      ],
    },
    stack: 'HTML, CSS, JavaScript',
  },
  {
    year: '2023',
    period: { fr: 'Mars – Septembre', en: 'March – September' },
    location: yaounde,
    title: { fr: 'Développeuse de logiciels - temps partiel', en: 'Software Developer - Part-time' },
    org: 'Auto-École COS',
    bullets: {
      fr: [
        'Application de bureau multiplateforme centralisant dossiers, inscriptions, paiements et suivi administratif des élèves',
        "Conception des fonctionnalités CRUD et d'une interface destinée au personnel administratif",
      ],
      en: [
        'Cross-platform desktop application centralizing student records, registrations, payments and administrative follow-up',
        'Designed the CRUD features and an interface for administrative staff',
      ],
    },
    stack: {
      fr: 'TypeScript, Electron, Vite, Prisma, base de données relationnelle',
      en: 'TypeScript, Electron, Vite, Prisma, relational database',
    },
  },
  {
    year: '2022 – 2023',
    period: { fr: 'Octobre – Janvier', en: 'October – January' },
    location: yaounde,
    title: { fr: 'Stage en développement web', en: 'Web Development Intern' },
    org: 'ITS Formation',
    bullets: {
      fr: [
        'Site web du centre avec inscription des étudiants en ligne',
        "Interface de gestion : validation des inscriptions, suivi des étudiants et génération des cartes d'étudiant",
      ],
      en: [
        "Training center website with online student registration",
        'Management interface: registration approval, student follow-up and student ID card generation',
      ],
    },
    stack: 'HTML, CSS, PHP, MySQL',
  },
];

/** Expérience complémentaire et implication (hors développement). */
export const otherJobs: Job[] = [
  {
    year: '2024',
    period: { fr: "Août – Aujourd'hui", en: 'August – Present' },
    location: 'Joliette, QC',
    title: { fr: "Instructrice d'équipier - temps partiel", en: 'Crew Trainer - Part-time' },
    org: "McDonald's",
    current: true,
    bullets: {
      fr: [
        'Formation et intégration des nouveaux employés',
        'Gestion des priorités et du temps en environnement rapide',
        'Communication efficace et service à la clientèle',
      ],
      en: [
        'Training and onboarding new employees',
        'Managing priorities and time in a fast-paced environment',
        'Effective communication and customer service',
      ],
    },
  },
  {
    year: '2021 – 2022',
    location: yaounde,
    title: { fr: 'Secrétaire', en: 'Secretary' },
    org: "Groupe A.C.E Cop'Monde",
    bullets: {
      fr: [
        'Organisation de réunions et rédaction de rapports',
        "Planification d'activités collaboratives et accompagnement d'enfants",
      ],
      en: [
        'Organizing meetings and writing reports',
        'Planning collaborative activities and supporting children',
      ],
    },
  },
];
