import { ui, type UIKey } from './ui';

/** Langues du site. Le français est la langue par défaut (servie à la racine « / »). */
export const languages = { fr: 'Français', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';

/** Valeur qui change selon la langue, par ex. { fr: 'Projets', en: 'Projects' }. */
export type L<T = string> = Record<Lang, T>;
/** Texte identique dans les deux langues (string) ou traduit (L). */
export type Text = string | L;

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && value in languages;
}

/** Langue de la page courante, à partir de Astro.currentLocale. */
export function getLang(locale: string | undefined): Lang {
  return isLang(locale) ? locale : defaultLang;
}

/** Texte dans la langue demandée (les textes non traduits sont renvoyés tels quels). */
export function tr(text: Text, lang: Lang): string {
  return typeof text === 'string' ? text : text[lang];
}

/** Valeur bilingue quelconque (liste, objet…) dans la langue demandée. */
export function pick<T>(value: L<T>, lang: Lang): T {
  return value[lang];
}

/**
 * Traducteur des textes de l'interface (src/i18n/ui.ts).
 * Les variables s'écrivent {nom} dans le texte : t('gallery.dot', { n: 1, total: 4 }).
 */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey, vars: Record<string, string | number> = {}): string {
    return ui[lang][key].replace(/\{(\w+)\}/g, (_, name: string) => String(vars[name] ?? `{${name}}`));
  };
}
