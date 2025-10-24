# Web Technologies 

Ce dépôt regroupe l’ensemble des travaux pratiques réalisés dans le cadre du cours **Technologies Web**.  
Chaque laboratoire illustre une étape clé du développement web moderne : du serveur Node.js à la création d’une application complète avec **React** et **Next.js**.


# 🧭 Table des matières

- [Présentation du projet](#présentation-du-projet)
- [Structure du dépôt](#structure-du-dépôt)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Labs détaillés](#labs-détaillés)
  - [Lab 2 – Node.js & Git](#lab-2--nodejs--git)
  - [Lab 3 – Web API avec Express](#lab-3--web-api-avec-express)
  - [Lab 4 – React & Next.js](#lab-4--react--nextjs)
- [Conventions de commits](#conventions-de-commits)
- [Auteurs](#auteurs)


# 💡 Présentation du projet

Ce projet a pour objectif de découvrir et maîtriser progressivement les technologies utilisées dans le développement web moderne :

1. **Node.js** pour la création de serveurs HTTP et la manipulation de routes.
2. **Express** pour la mise en place d’API REST.
3. **React & Next.js** pour le développement d’interfaces dynamiques et de sites web modernes.

Chaque lab est indépendant mais s’appuie sur le précédent pour construire une application complète à la fin du cours.


# 🗂️ Structure du dépôt

```bash
Webtech-212/
├── Lab_2/           # Démarrage avec Node.js et Git
│   ├── index.js
│   ├── handles.js
│   ├── content/
│   └── package.json
│
├── Lab_3/           # Développement d'une API avec Express
│   ├── src/
│   ├── test/
│   └── package.json
│
└── Lab_4/           # Application web avec React et Next.js
    └── client/
        ├── app/
        ├── public/
        ├── package.json
        └── tsconfig.json


# ⚙️ Prérequis

Avant de commencer, assurez-vous d’avoir installé :

Node.js
 (v18 ou supérieure)

npm
 ou yarn

Git

(Facultatif) Postman
 pour tester les APIs

(Facultatif) VS Code
 ou un éditeur équivalent

# 🚀 Installation

Clonez le dépôt et installez les dépendances :

```bash
git clone https://github.com/achillebekandon/Webtech-212.git
cd Webtech-212

Pour le Lab 2 :
cd Lab_2
npm install
npm run dev

Pour le Lab 3 :
cd Lab_3
npm install
npm start

Pour le Lab 4 :
cd Lab_4/client
npm install
npm run dev

🧪 Labs détaillés
🧩 Lab 2 – Node.js & Git

Objectif : Se familiariser avec Node.js et la gestion de version avec Git.

Travaux réalisés :

Initialisation d’un projet Node.js avec npm init

Création d’un serveur HTTP basique avec le module http

Mise en place de routes dynamiques et gestion des paramètres d’URL

Lecture de fichiers JSON et génération de contenu dynamique

Ajout de nodemon pour le rechargement automatique

Publication du projet sur GitHub avec un .gitignore adapté

Résultat attendu :
Un serveur Node.js fonctionnel capable de gérer plusieurs routes et de lire des fichiers JSON.

⚙️ Lab 3 – Web API avec Express

Objectif : Apprendre à créer une API REST en utilisant le framework Express.js.

Travaux réalisés :

Refactorisation du code précédent en utilisant Express et le routeur intégré

Création d’une API REST pour gérer des articles et leurs commentaires

Mise en place des routes :

GET /articles → liste les articles

POST /articles → ajoute un article

GET /articles/:id → retourne un article spécifique

GET /articles/:id/comments → liste les commentaires d’un article

POST /articles/:id/comments → ajoute un commentaire

Introduction aux tests unitaires avec Mocha et SuperTest

Découverte du concept GraphQL

Résultat attendu :
Une API RESTful en Node.js/Express avec endpoints pour manipuler articles et commentaires.

⚛️ Lab 4 – React & Next.js

Objectif : Construire une interface web moderne à l’aide de React et Next.js.

Travaux réalisés :

Initialisation d’une application Next.js avec npx create-next-app

Création des pages principales :

/ (Accueil)

/about (À propos)

/contacts

/articles (Liste d’articles)

Ajout de composants réutilisables : Header, Footer, Navigation

Implémentation du routing dynamique avec /articles/[articleId]

Découverte des composants React et des props

Résultat attendu :
Un squelette de site de blog complet avec pages, navigation et routage dynamique.

🧱 Conventions de commits

Les commits suivent la norme Conventional Commits
, par exemple :

Type	Exemple	Description
feat	feat(lab3): ajout des routes articles	Nouvelle fonctionnalité
fix	fix(api): correction du bug sur POST /articles	Correction de bug
docs	docs(readme): mise à jour du guide d’installation	Documentation
chore	chore: suppression des fichiers inutiles	Tâches non liées au code applicatif