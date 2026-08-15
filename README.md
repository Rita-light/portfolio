# Portfolio — Rita Merveille Matsinkou

Site portfolio personnel présentant mon parcours, mes compétences et mes projets en développement web & mobile.

**En ligne :** [porfolio-rita-merveille.vercel.app](https://porfolio-rita-merveille.vercel.app)

Site 100 % statique (HTML/CSS/JS), sans framework ni dépendances.

## Déploiement automatique (CI/CD)

Chaque `push` sur la branche `master` déclenche un pipeline GitHub Actions qui :
1. **Valide** le HTML et vérifie qu'aucun lien ou image local n'est cassé
2. **Déploie automatiquement** la nouvelle version en production sur Vercel — uniquement si la validation réussit

Si la validation échoue, le déploiement est bloqué et le site en ligne n'est pas affecté.

Suivi des déploiements : [github.com/Rita-light/portfolio/actions](https://github.com/Rita-light/portfolio/actions)
