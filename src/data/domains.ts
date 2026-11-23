import type { IconName } from '../components/icons';
import type { Text } from '../i18n/utils';

/**
 * Domaines affichés en orbite autour du noyau « RM » (components/HeroArt.astro)
 * et sur l'image de partage (scripts/og-image.mjs).
 * Ordre : dans le sens des aiguilles d'une montre à partir du haut ; le premier est mis en avant.
 */
export const domains: { icon: IconName; label: Text }[] = [
  { icon: 'code', label: 'Code' },
  { icon: 'globe', label: 'Web' },
  { icon: 'smartphone', label: 'Mobile' },
  { icon: 'monitor', label: { fr: 'Bureau', en: 'Desktop' } },
  { icon: 'database', label: { fr: 'Données', en: 'Data' } },
  { icon: 'cloud', label: 'Cloud' },
  { icon: 'wrench', label: 'Support' },
];
