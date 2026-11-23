# Portfolio - Rita Merveille Matsinkou

Site portfolio personnel de développeuse de logiciels Full-Stack (Montréal & Joliette, QC) : expérience, formation, compétences et projets en développement web, mobile, applications de bureau, API et support technique.

**En ligne :** [porfolio-rita-merveille.vercel.app](https://porfolio-rita-merveille.vercel.app) (français) · [/en/](https://porfolio-rita-merveille.vercel.app/en/) (anglais)

Site bilingue construit avec [Astro](https://astro.build) et TypeScript : un seul code source génère deux pages HTML statiques, sans JavaScript de framework envoyé au visiteur.

## Développement

Prérequis : Node.js 22.23 ou plus récent.

```bash
npm install       # installe les dépendances
npm run dev       # site en local sur http://localhost:4321 (rechargement automatique)
npm run build     # vérifie les types et les traductions, puis génère le site dans dist/
npm run og        # régénère les images de partage FR et EN
```

Les textes de l'interface sont dans `src/i18n/ui.ts`, le contenu (projets, expériences, formation, compétences) dans `src/data/`. Chaque texte existe en français et en anglais ; le build échoue si une traduction manque.

## Déploiement automatique (CI/CD)

Chaque `push` sur la branche `master` déclenche un pipeline GitHub Actions qui :
1. **Construit** le site et vérifie le code TypeScript et les traductions
2. **Valide** le HTML généré et vérifie qu'aucun lien ou image local n'est cassé
3. **Déploie automatiquement** la nouvelle version en production sur Vercel, uniquement si la validation réussit

Si la validation échoue, le déploiement est bloqué et le site en ligne n'est pas affecté.

Suivi des déploiements : [github.com/Rita-light/portfolio/actions](https://github.com/Rita-light/portfolio/actions)
