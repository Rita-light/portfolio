import type { L, Text } from '../i18n/utils';

export interface Shot {
  src: string;
  alt: Text;
}

/** Galerie d'images qui défilent automatiquement (voir components/Gallery.astro). */
export interface GalleryData {
  /** Délai entre deux images, en millisecondes. */
  interval: number;
  images: Shot[];
  /** Petite étiquette en haut à droite (« Site public »…). */
  label?: Text;
}

export interface FeaturedProject {
  title: string;
  url?: string;
  badge: Text;
  subtitle: Text;
  description: Text;
  highlights: L<string[]>;
  tags: string[];
  /** Captures : fenêtre de navigateur (« web ») ou téléphone (« mobile »). */
  shots: (GalleryData & { frame: 'web' | 'web-tall' | 'mobile' })[];
  /** Captures à gauche et texte à droite. */
  reversed?: boolean;
}

export type Thumb =
  | { kind: 'gallery'; gallery: GalleryData }
  | { kind: 'image'; image: Shot }
  | { kind: 'code'; glyph: string; caption: string };

export interface ProjectCard {
  title: Text;
  description: Text;
  tags: Text[];
  /** Étiquette sur la vignette (« web · gestion »…). */
  label: Text;
  thumb: Thumb;
}

const img = (file: string, fr: string, en: string = fr): Shot => ({ src: `/assets/${file}`, alt: { fr, en } });

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Emhoni',
    url: 'https://emhoni.vercel.app',
    badge: { fr: '★ Projet phare', en: '★ Featured project' },
    subtitle: { fr: 'Gestion de restaurant multi-succursales · Web & Mobile', en: 'Multi-branch restaurant management · Web & Mobile' },
    description: {
      fr: "Une application de gestion complète pour un restaurant à plusieurs succursales, déclinée en version web et en version mobile. Pensée pour piloter toute l'activité au quotidien, d'un seul endroit.",
      en: 'A complete management application for a multi-branch restaurant, available as both a web and a mobile app. Designed to run the whole day-to-day business from a single place.',
    },
    highlights: {
      fr: [
        'Architecture à six rôles, avec accès et permissions séparés par restaurant',
        'Paiement Stripe de bout en bout',
        'Clavardage et suivi des commandes en temps réel (WebSockets)',
        'Zones de livraison géolocalisées, fidélité et promotions',
        "Synchronisation entre l'app web et l'app mobile, statistiques par succursale",
      ],
      en: [
        'Six-role architecture, with access and permissions separated by restaurant',
        'End-to-end Stripe payments',
        'Real-time chat and order tracking (WebSockets)',
        'Geolocated delivery zones, loyalty and promotions',
        'Sync between the web and mobile apps, per-branch statistics',
      ],
    },
    tags: ['Angular', 'NestJS', 'Flutter', 'PostgreSQL', 'Prisma', 'Stripe', 'WebSockets'],
    shots: [
      {
        frame: 'web',
        interval: 3600,
        images: [
          img('emhoni-accueil.png', 'Emhoni - accueil', 'Emhoni - home'),
          img('emhoni-menu.png', 'Emhoni - menu'),
          img('emhoni-restaurants.png', 'Emhoni - gestion des restaurants', 'Emhoni - restaurant management'),
          img('emhoni-compte.png', 'Emhoni - compte administrateur', 'Emhoni - admin account'),
        ],
      },
      {
        frame: 'mobile',
        interval: 3200,
        images: [
          img('emhoni-mob-menu.png', 'Emhoni mobile - menu'),
          img('emhoni-mob-commandes.png', 'Emhoni mobile - mes commandes', 'Emhoni mobile - my orders'),
          img('emhoni-mob-suivi.png', 'Emhoni mobile - suivi de commande', 'Emhoni mobile - order tracking'),
          img('emhoni-mob-livraison.png', 'Emhoni mobile - suivi de livraison GPS', 'Emhoni mobile - GPS delivery tracking'),
        ],
      },
    ],
  },
  {
    title: 'TVA Poubelles',
    badge: { fr: "★ Projet phare · travail d'équipe", en: '★ Featured project · team work' },
    subtitle: {
      fr: "Plateforme de publication d'articles de nouvelles · Contribution Frontend",
      en: 'News article publishing platform · Frontend contribution',
    },
    description: {
      fr: "Une plateforme éditoriale complète pour un média, développée en équipe : un site public de consultation, un portail de gestion pour les journalistes et modérateurs, et une API REST centralisée - inspirée d'un site de nouvelles type TVA. Ma contribution a porté sur le frontend Angular.",
      en: 'A complete editorial platform for a media outlet, built as a team: a public reading site, a management portal for journalists and moderators, and a centralized REST API - inspired by a TVA-style news site. My contribution focused on the Angular frontend.',
    },
    highlights: {
      fr: [
        'Site public : recherche plein texte, filtres, commentaires imbriqués et favoris',
        'Portail éditorial avec éditeur riche TipTap et tableau kanban glisser-déposer',
        'Interface adaptée à cinq niveaux de rôles (RBAC)',
        "Intégration à l'API Go/Echo, PostgreSQL et au déploiement Azure AKS/Terraform réalisés par l'équipe",
      ],
      en: [
        'Public site: full-text search, filters, nested comments and favorites',
        'Editorial portal with a TipTap rich-text editor and a drag-and-drop kanban board',
        'Interface adapted to five role levels (RBAC)',
        'Integration with the Go/Echo API, PostgreSQL and the Azure AKS/Terraform deployment built by the team',
      ],
    },
    tags: ['Angular 21', 'Angular Material', 'Tailwind CSS', 'Angular SSR', 'Go · Echo', 'PostgreSQL 16', 'Azure · AKS'],
    reversed: true,
    shots: [
      {
        frame: 'web-tall',
        interval: 3800,
        label: { fr: 'Site public', en: 'Public site' },
        images: [
          img('tva-accueil.png', 'TVA Poubelles - site public (accueil)', 'TVA Poubelles - public site (home)'),
          img('tva-inscription.png', 'TVA Poubelles - inscription', 'TVA Poubelles - sign-up'),
        ],
      },
      {
        frame: 'web-tall',
        interval: 3800,
        label: { fr: 'Portail éditorial', en: 'Editorial portal' },
        images: [
          img('tva-kanban.png', 'TVA Poubelles - portail (kanban)', 'TVA Poubelles - portal (kanban)'),
          img('tva-dashboard.png', 'TVA Poubelles - portail (tableau de bord)', 'TVA Poubelles - portal (dashboard)'),
        ],
      },
    ],
  },
];

export const projects: ProjectCard[] = [
  {
    title: { fr: 'Gestion de cours', en: 'Course management' },
    description: {
      fr: 'Application web multi-rôles : permissions, cours, groupes et attributions pour étudiants, professeurs, coordonnateurs et administrateurs. Déployée sur cPanel.',
      en: 'Multi-role web application: permissions, courses, groups and assignments for students, teachers, coordinators and administrators. Deployed on cPanel.',
    },
    tags: ['PHP', 'MariaDB', 'HTML/CSS', 'Docker'],
    label: { fr: 'web · gestion', en: 'web · management' },
    thumb: {
      kind: 'gallery',
      gallery: {
        interval: 3000,
        images: [
          img('cours-connexion.png', 'Gestion de cours - connexion', 'Course management - login'),
          img('cours-associations.png', 'Gestion de cours - accueil', 'Course management - home'),
          img('cours-etudiants.png', 'Gestion de cours - gestion des étudiants', 'Course management - student management'),
        ],
      },
    },
  },
  {
    title: { fr: 'Joseph Clean - nettoyage de textile', en: 'Joseph Clean - textile cleaning' },
    description: {
      fr: "Site vitrine multi-pages pour un service de nettoyage de textiles (tapis, canapés, fauteuils), avec formulaire d'estimation en ligne et système d'avis clients. Mandat autonome.",
      en: 'Multi-page showcase website for a textile cleaning service (rugs, sofas, armchairs), with an online quote form and a customer review system. Freelance contract.',
    },
    tags: ['HTML', 'CSS', 'JavaScript'],
    label: 'web · client',
    thumb: {
      kind: 'gallery',
      gallery: {
        interval: 3000,
        images: [
          img('nettoyage-accueil.png', 'Joseph Clean - accueil', 'Joseph Clean - home'),
          img('nettoyage-services.png', 'Joseph Clean - nos services', 'Joseph Clean - our services'),
          img('nettoyage-estimation.png', "Joseph Clean - demande d'estimation", 'Joseph Clean - quote request'),
        ],
      },
    },
  },
  {
    title: { fr: 'Messagerie P2P', en: 'P2P messaging' },
    description: {
      fr: 'Messagerie instantanée pair-à-pair sur réseau local, développée en Go avec une interface Avalonia.',
      en: 'Peer-to-peer instant messaging over a local network, built in Go with an Avalonia interface.',
    },
    tags: ['Go', 'Avalonia', { fr: 'Réseau', en: 'Networking' }, 'P2P'],
    label: { fr: 'réseau · go', en: 'network · go' },
    thumb: { kind: 'image', image: img('messagerie.png', 'Messagerie P2P - interface Avalonia', 'P2P messaging - Avalonia interface') },
  },
  {
    title: { fr: "Jeu d'échecs", en: 'Chess game' },
    description: {
      fr: "Jeu d'échecs complet en C# : règles de déplacement, tours de jeu, score et actions (abandon, nulle).",
      en: 'Complete chess game in C#: movement rules, turns, scoring and actions (resign, draw).',
    },
    tags: ['C#', '.NET', { fr: 'POO', en: 'OOP' }],
    label: 'desktop · c#',
    thumb: { kind: 'image', image: img('echecs.png', "Jeu d'échecs en C#", 'Chess game in C#') },
  },
  {
    title: { fr: 'Simulateur de trafic aérien', en: 'Air traffic simulator' },
    description: {
      fr: 'Simulation événementielle du trafic aérien mondial sur une carte, pilotée par un générateur de scénarios configurable.',
      en: 'Event-driven simulation of global air traffic on a map, driven by a configurable scenario generator.',
    },
    tags: ['C#', '.NET', 'WinForms', { fr: 'POO', en: 'OOP' }],
    label: 'desktop · c#',
    thumb: {
      kind: 'gallery',
      gallery: {
        interval: 3200,
        images: [
          img('sim-carte.png', 'Simulateur - carte du monde', 'Simulator - world map'),
          img('sim-generateur.png', 'Simulateur - générateur de scénarios', 'Simulator - scenario generator'),
        ],
      },
    },
  },
  {
    title: { fr: 'Mini système RAG', en: 'Mini RAG system' },
    description: {
      fr: 'Prototype de recherche augmentée par IA avec interface web, déployé sur Azure.',
      en: 'AI-augmented retrieval prototype with a web interface, deployed on Azure.',
    },
    tags: ['Azure', 'RAG', 'Web'],
    label: { fr: 'ia · prototype', en: 'ai · prototype' },
    thumb: { kind: 'code', glyph: 'RAG', caption: '~/ai · azure' },
  },
  {
    title: { fr: 'API de gestion de cartes', en: 'Card management API' },
    description: {
      fr: 'API REST de gestion de cartes, conçue et implémentée en Go.',
      en: 'Card management REST API, designed and implemented in Go.',
    },
    tags: ['Go', { fr: 'API REST', en: 'REST API' }],
    label: 'api · go',
    thumb: { kind: 'code', glyph: '{ }', caption: 'rest api' },
  },
  {
    title: { fr: 'Jeux mobiles', en: 'Mobile games' },
    description: {
      fr: 'Charivari (iOS / Swift) et Blackjack (Android / Kotlin) - deux jeux mobiles natifs.',
      en: 'Charivari (iOS / Swift) and Blackjack (Android / Kotlin) - two native mobile games.',
    },
    tags: ['Swift', 'Kotlin'],
    label: { fr: 'mobile · jeux', en: 'mobile · games' },
    thumb: { kind: 'code', glyph: '▸ ♠', caption: 'swift · kotlin' },
  },
];
