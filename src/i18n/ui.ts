import type { Lang } from './utils';

/*
 * Textes de l'interface, en français et en anglais.
 * Le contenu (projets, expériences, formation, compétences) est dans src/data/.
 * TypeScript vérifie que la version anglaise contient exactement les mêmes clés
 * que la version française : une traduction manquante bloque le build.
 */

const fr = {
  'meta.title': 'Rita Merveille Matsinkou - Développeuse de logiciels Full-Stack',
  'meta.description': 'Rita Merveille Matsinkou - développeuse de logiciels full-stack à Montréal et Joliette (QC). Portfolio : expériences, compétences et projets techniques.',
  'meta.ogDescription': "Portfolio : expérience full-stack, conception d'API et mise en production d'applications.",
  'meta.ogImage': '/assets/og-share.png',
  'meta.ogLocale': 'fr_CA',

  role: 'Développeuse de logiciels Full-Stack',
  skip: 'Aller au contenu',

  'nav.about': 'À propos',
  'nav.skills': 'Compétences',
  'nav.projects': 'Projets',
  'nav.experience': 'Expérience',
  'nav.formation': 'Formation',
  'nav.contact': 'Me contacter',
  'nav.menu': 'Menu',
  'nav.lang': 'Langue du site',

  'hero.lead': "Je conçois des applications web, mobiles et de bureau, des API et des fonctionnalités orientées produit, de l'idée à la mise en production.",
  'hero.ctaProjects': 'Voir mes projets →',
  'hero.ctaCv': 'Télécharger mon CV',
  'hero.metaEducation': 'Formation',
  'hero.metaEducationValue': "DEC en techniques de l'informatique",
  'hero.metaSpecialty': 'Spécialité',
  'hero.metaSpecialtyValue': 'Full-Stack & API',
  'hero.metaLanguages': 'Langues',
  'hero.metaLanguagesValue': 'Français · Anglais (intermédiaire)',
  'hero.tag': 'Ouverte aux opportunités',
  'hero.artLabel': "Illustration abstraite : un noyau RM entouré d'une orbite de sept domaines - code, web, mobile, bureau, données, cloud et support technique",

  'about.title': 'À propos',
  'about.leadBefore': "Diplômée du DEC en techniques de l'informatique, je travaille en ",
  'about.leadStrong': 'développement logiciel full-stack',
  'about.leadAfter': ' (web, mobile et applications de bureau) avec un focus sur les applications utiles au métier.',
  'about.p1': "J'ai développé une expérience pratique en TypeScript, React, Angular, NestJS, Laravel et bases de données SQL, avec des contributions en conception d'API et en déploiement d'applications.",
  'about.p2': "J'évolue autant en autonomie qu'en équipe : je transforme des besoins métier en fonctionnalités concrètes, je résous les problèmes techniques et je participe à l'amélioration continue des produits.",

  'skills.title': 'Compétences & technologies',
  'projects.title': 'Projets sélectionnés',
  'gallery.dot': 'Image {n} sur {total}',

  'experience.title': 'Expérience',
  'experience.dev': 'Développement',
  'experience.other': 'Expérience complémentaire & implication',
  'experience.current': 'En cours',
  'experience.products': 'Produits :',
  'experience.and': 'et',
  'experience.stack': 'Stack :',

  'formation.title': 'Formation',
  'formation.degrees': 'Diplômes',
  'formation.certification': 'Certification',

  'contact.eyebrow': 'Contact',
  'contact.titleBefore': 'Travaillons ',
  'contact.titleEm': 'ensemble',
  'contact.titleAfter': '.',
  'contact.lead': "Je suis à la recherche d'un premier poste en développement logiciel. Une opportunité, une question ? Écrivez-moi - je réponds avec plaisir.",
  'contact.email': 'Email',
  'contact.phone': 'Téléphone',
  'contact.location': 'Localisation',
  'contact.ctaCv': 'Télécharger mon CV ↓',
  'contact.ctaMessage': "M'envoyer un message",

  // Image de partage (scripts/og-image.mjs)
  'og.line1': 'Web, mobile, bureau & API -',
  'og.line2': "de l'idée à la mise en production.",
} as const;

export type UIKey = keyof typeof fr;

const en: Record<UIKey, string> = {
  'meta.title': 'Rita Merveille Matsinkou - Full-Stack Software Developer',
  'meta.description': 'Rita Merveille Matsinkou - full-stack software developer in Montréal and Joliette (QC), Canada. Portfolio: experience, skills and technical projects.',
  'meta.ogDescription': 'Portfolio: full-stack experience, API design and shipping applications to production.',
  'meta.ogImage': '/assets/og-share-en.png',
  'meta.ogLocale': 'en_CA',

  role: 'Full-Stack Software Developer',
  skip: 'Skip to content',

  'nav.about': 'About',
  'nav.skills': 'Skills',
  'nav.projects': 'Projects',
  'nav.experience': 'Experience',
  'nav.formation': 'Education',
  'nav.contact': 'Contact me',
  'nav.menu': 'Menu',
  'nav.lang': 'Site language',

  'hero.lead': 'I build web, mobile and desktop applications, APIs and product-driven features, from idea to production.',
  'hero.ctaProjects': 'See my projects →',
  'hero.ctaCv': 'Download my CV (French)',
  'hero.metaEducation': 'Education',
  'hero.metaEducationValue': 'DEC in Computer Science Technology',
  'hero.metaSpecialty': 'Specialty',
  'hero.metaSpecialtyValue': 'Full-Stack & API',
  'hero.metaLanguages': 'Languages',
  'hero.metaLanguagesValue': 'French · English (intermediate)',
  'hero.tag': 'Open to opportunities',
  'hero.artLabel': 'Abstract illustration: an RM core surrounded by an orbit of seven areas - code, web, mobile, desktop, data, cloud and technical support',

  'about.title': 'About',
  'about.leadBefore': 'A graduate of the DEC in Computer Science Technology, I work in ',
  'about.leadStrong': 'full-stack software development',
  'about.leadAfter': ' (web, mobile and desktop applications), with a focus on applications that solve real business needs.',
  'about.p1': 'I have hands-on experience with TypeScript, React, Angular, NestJS, Laravel and SQL databases, with contributions to API design and application deployment.',
  'about.p2': 'I work just as well on my own as in a team: I turn business needs into concrete features, solve technical problems and contribute to the continuous improvement of products.',

  'skills.title': 'Skills & technologies',
  'projects.title': 'Selected projects',
  'gallery.dot': 'Image {n} of {total}',

  'experience.title': 'Experience',
  'experience.dev': 'Development',
  'experience.other': 'Additional experience & involvement',
  'experience.current': 'Current',
  'experience.products': 'Products:',
  'experience.and': 'and',
  'experience.stack': 'Stack:',

  'formation.title': 'Education',
  'formation.degrees': 'Degrees',
  'formation.certification': 'Certification',

  'contact.eyebrow': 'Contact',
  'contact.titleBefore': "Let's work ",
  'contact.titleEm': 'together',
  'contact.titleAfter': '.',
  'contact.lead': "I'm looking for my first role in software development. An opportunity or a question? Write to me - I'll be happy to reply.",
  'contact.email': 'Email',
  'contact.phone': 'Phone',
  'contact.location': 'Location',
  'contact.ctaCv': 'Download my CV (French) ↓',
  'contact.ctaMessage': 'Send me a message',

  'og.line1': 'Web, mobile, desktop & APIs -',
  'og.line2': 'from idea to production.',
};

export const ui: Record<Lang, Record<UIKey, string>> = { fr, en };
