import type { IconName } from '../components/icons';
import type { Text } from '../i18n/utils';

export interface SkillGroup {
  icon: IconName;
  title: Text;
  chips: Text[];
  /** Compétences affichées en pointillés (notions). */
  softChips?: Text[];
}

export const skills: SkillGroup[] = [
  {
    icon: 'code',
    title: { fr: 'Développement web', en: 'Web development' },
    chips: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'React', 'Angular', 'NestJS', 'Laravel / Lumen', { fr: 'API REST', en: 'REST APIs' }],
  },
  {
    icon: 'database',
    title: { fr: 'Données & infrastructure', en: 'Data & infrastructure' },
    chips: ['PostgreSQL', 'MySQL', 'SQL Server', 'MariaDB', 'Prisma', 'Docker', 'Git', 'Azure'],
    softChips: [{ fr: 'CI/CD (notions)', en: 'CI/CD (basics)' }],
  },
  {
    icon: 'terminal',
    title: { fr: 'Autres technologies', en: 'Other technologies' },
    chips: ['Flutter', 'Go', 'C#', 'C/C++', 'Java', 'WebSockets', 'JWT', 'Stripe'],
  },
  {
    icon: 'sparkle',
    title: { fr: 'Méthodes & outils', en: 'Methods & tools' },
    chips: ['Agile', 'Scrum', 'Microsoft 365 (Excel, Word, PowerPoint, Outlook, Teams)'],
  },
  {
    icon: 'wrench',
    title: { fr: "Domaines d'intervention", en: 'Areas of expertise' },
    chips: [
      { fr: 'Développement Full-Stack', en: 'Full-Stack development' },
      { fr: "Conception d'API", en: 'API design' },
      { fr: 'Mise en production', en: 'Production deployment' },
      { fr: 'Support technique', en: 'Technical support' },
      { fr: 'Documentation technique', en: 'Technical documentation' },
      { fr: 'Résolution de problèmes métier', en: 'Business problem solving' },
    ],
  },
  {
    icon: 'network',
    title: { fr: 'Langues', en: 'Languages' },
    chips: [
      { fr: 'Français (langue maternelle)', en: 'French (native)' },
      { fr: 'Anglais (intermédiaire)', en: 'English (intermediate)' },
    ],
  },
];
