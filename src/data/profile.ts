import type { L } from '../i18n/utils';

/** Informations personnelles, partagées par le hero, le contact, le pied de page et l'image de partage. */
export const profile = {
  firstName: 'Rita',
  middleName: 'Merveille',
  lastName: 'Matsinkou',
  fullName: 'Rita Merveille Matsinkou',
  location: 'Montréal & Joliette, QC',
  country: 'Canada',
  email: 'ritamerveille22@yahoo.com',
  phone: { display: '579-960-4306', href: 'tel:+15799604306' },
  linkedin: {
    url: 'https://www.linkedin.com/in/rita-merveille-matsinkou-761b46293/',
    label: 'rita-merveille-matsinkou',
  },
  github: {
    url: 'https://github.com/Rita-light?tab=repositories',
    label: 'github.com/Rita-light',
  },
  /** Un seul CV (en français), proposé dans les deux langues. */
  cv: '/uploads/CV_Rita_Merveille_Matsinkou.pdf',
  values: {
    fr: ['Autonome', 'Collaborative', 'Rigoureuse', 'Orientée produit'],
    en: ['Autonomous', 'Collaborative', 'Rigorous', 'Product-minded'],
  } satisfies L<string[]>,
};
