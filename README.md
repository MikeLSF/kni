# KNI - Site Web

Site web d'entreprise construit avec Next.js, TypeScript et Tailwind CSS.

## Technologies utilisées

- **Next.js 14** - Framework React avec rendu côté serveur
- **TypeScript** - Typage statique pour JavaScript
- **Tailwind CSS** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI réutilisables

## Installation

Prérequis : Node.js 18+ et npm

```bash
# Cloner le repository
git clone <URL_DU_REPO>

# Naviguer dans le dossier du projet
cd kni

# Installer les dépendances
npm install
```

## Développement

```bash
# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Build et Production

```bash
# Créer un build de production
npm run build

# Lancer le serveur de production
npm start
```

## Structure du projet

```
├── app/              # Routes et pages Next.js
├── src/
│   ├── components/   # Composants React
│   ├── assets/      # Images et ressources
│   ├── hooks/       # Hooks personnalisés
│   └── lib/         # Utilitaires
├── lib/             # Constantes et configuration
└── public/          # Fichiers statiques
```

## Licence

© 2025 KNI. Tous droits réservés.
