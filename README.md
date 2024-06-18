# Introduction

Ce projet a pour but de tester les divers outils pour déployer une application :
- Cloudflare
- Jenkins

Ce projet est une application très simple en javascript (type helloworld).

## Installation 

1. Cloner le projet
2. Installer les dépendances avec ``npm install``

## Cloudflare

Cloudflare est un outil permettant d'héberger le site et de gérer le déploiement automatique.

### Déploiement avec Cloudflare pages

1. Build le site avec la commande ``npm run build``.
2. Aller sur le site de cloudflare, sélectionner **Account Home**, puis **Workers & Pages**
3. Create application > Pages > Connect to Git
4. Sélectionner le projet Git et cliquer sur Terminé.

Le site sera déployé à chaque *push* sur la branche principale (ou celle configurée dans le projet).

## Jenkins

Jenkins est un outil de CI/CD pour déployer automatiquement le projet à partir du code source. Mêlé à Cloudflare, il permet d'apporter une solution pour automatiser les tests; tests unitaires, d'intégration, ainsi que de gérer les multiples environnements (dev, prod) et d'ajouter des critères pour le déploiement (réussite des tests, etc).

