import type { IconName } from '../components/icons';
import type { Text } from '../i18n/utils';

export interface Credential {
  icon: IconName;
  /** Années ou date d'obtention. */
  date: Text;
  title: Text;
  school: Text;
}

export const degrees: Credential[] = [
  {
    icon: 'graduation',
    date: '2023 – 2026',
    title: { fr: "DEC - Techniques de l'informatique", en: 'DEC (Diploma of College Studies) - Computer Science Technology' },
    school: { fr: 'Cégep de Lanaudière à Joliette, QC', en: 'Cégep de Lanaudière in Joliette, QC' },
  },
  {
    icon: 'graduation',
    date: '2021 – 2023',
    title: { fr: 'BTS - Génie logiciel & bases de données', en: 'BTS (Higher Technician Certificate) - Software Engineering & Databases' },
    school: { fr: 'Institut SIANTOU Supérieur, Yaoundé, Cameroun', en: 'Institut SIANTOU Supérieur, Yaoundé, Cameroon' },
  },
  {
    icon: 'book',
    date: '2021',
    title: { fr: "Baccalauréat (diplôme d'études secondaires)", en: 'Baccalauréat (high school diploma)' },
    school: { fr: "Lycée Bilingue d'Ékounou, Yaoundé, Cameroun", en: "Lycée Bilingue d'Ékounou, Yaoundé, Cameroon" },
  },
];

export const certifications: Credential[] = [
  {
    icon: 'award',
    date: { fr: 'Octobre 2026', en: 'October 2026' },
    title: 'Microsoft 365 Platform Support',
    school: 'Coursera (Microsoft)',
  },
];
