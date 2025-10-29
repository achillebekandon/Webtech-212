# 🧪 Lab 4 — Prise en main de React et Next.js

Dans ce laboratoire, nous allons apprendre à créer une application web en utilisant **React** et **Next.js**.  
À partir de ce lab, nous commençons la construction du **squelette de ton projet de cours** : un site web de type **blog**.

---

## 🎯 Objectifs

- Initialiser une application **Next.js**
- Créer un **squelette de site web** pour un blog
- Mettre en place des **routes dynamiques** pour les articles

---

## 📋 Prérequis

Avant de commencer ce laboratoire :

1. Vérifie que le lab précédent est terminé.  
2. Crée un **tag Git** pour ton dernier commit du lab précédent, afin de pouvoir revenir facilement à cet état si nécessaire :
   ```bash
   git tag lab3
   git push origin lab3
    ```

3. Assure-toi que **Node.js (version 18 ou supérieure)** et **npm** sont installés sur ton ordinateur.

---

## 🚀 Étape 1 — Initialiser l’application Next.js

1. Ouvre ton terminal et place-toi à la **racine de ton dépôt**.
2. Exécute la commande suivante pour créer une nouvelle application Next.js nommée `client` :

   ```bash
   npx create-next-app@latest
   ```
3. Accepte les options par défaut. Une fois la création terminée, un nouveau dossier `client` doit apparaître :

   ```
   /client
   ```
4. Lance le serveur de développement pour vérifier que tout fonctionne :

   ```bash
   cd client
   npm run dev
   ```
5. Ouvre ton navigateur à l’adresse suivante : [http://localhost:3000](http://localhost:3000)

Tu devrais voir la page d’accueil par défaut de Next.js s’afficher.

---

## 🧩 Étape 2 — Construire le squelette du site web

Avant de coder, familiarise-toi avec ces notions :

* [Les composants React](https://reactjs.org/docs/components-and-props.html)
* [Les pages dans Next.js](https://nextjs.org/docs/basic-features/pages)
* [Le routage dans Next.js](https://nextjs.org/docs/routing/introduction)

Ensuite, crée plusieurs pages contenant quelques informations basiques.

Ton site doit inclure au minimum :

| Chemin      | Fichier             | Description                                  |
| ----------- | ------------------- | -------------------------------------------- |
| `/`         | `index.js`          | Page d’accueil                               |
| `/about`    | `about.js`          | Page « À propos »                            |
| `/contacts` | `contacts.js`       | Page de contact                              |
| `/articles` | `articles/index.js` | Liste d’articles (avec des données fictives) |

**Arborescence recommandée :**

```
client/
├── pages/
│   ├── index.js
│   ├── about.js
│   ├── contacts.js
│   └── articles/
│       └── index.js
```

Chaque page peut simplement contenir un titre et un paragraphe décrivant son contenu.

---

## 🧱 Étape 3 — Créer des composants partagés

Pour éviter de répéter le même code sur plusieurs pages, crée des **composants réutilisables** dans un dossier `components`.

| Composant    | Fichier                    | Description                                  |
| ------------ | -------------------------- | -------------------------------------------- |
| `Header`     | `components/Header.js`     | Contient le titre du site ou le logo         |
| `Footer`     | `components/Footer.js`     | Contient le pied de page                     |
| `Navigation` | `components/Navigation.js` | Contient les liens de navigation entre pages |

Utilise le composant [`Link`](https://nextjs.org/docs/routing/introduction#linking-between-pages) de Next.js pour créer la navigation interne.

**Exemple de composant `Navigation.js` :**

```jsx
import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Accueil</Link> |{" "}
      <Link href="/about">À propos</Link> |{" "}
      <Link href="/contacts">Contacts</Link> |{" "}
      <Link href="/articles">Articles</Link>
    </nav>
  );
}
```

Ensuite, importe et affiche ces composants (`Header`, `Navigation`, `Footer`) sur toutes les pages pour assurer une présentation cohérente.

> 💡 *Remarque :* Ne passe pas trop de temps sur la mise en page ou le design pour l’instant. Nous apprendrons à utiliser **Tailwind CSS** dans un prochain lab pour améliorer le style.

---

## 🧭 Étape 4 — Mettre en place des routes dynamiques

Next.js permet de créer facilement des routes dynamiques grâce à la **notation entre crochets** (`[ ]`).

1. Lis la documentation sur le [routage dynamique](https://nextjs.org/docs/routing/dynamic-routes).
2. Crée un fichier nommé `[articleId].js` dans le dossier `pages/articles/`.

**Nouvelle arborescence :**

```
client/
└── pages/
    └── articles/
        ├── index.js
        └── [articleId].js
```

3. Dans ce fichier, utilise le hook `useRouter()` pour récupérer l’identifiant de l’article depuis l’URL.

**Exemple de code :**

```jsx
import { useRouter } from "next/router";

export default function ArticlePage() {
  const router = useRouter();
  const { articleId } = router.query;

  return (
    <div>
      <h1>Article ID : {articleId}</h1>
      <p>Ceci est une page d’article fictive avec l’identifiant {articleId}.</p>
    </div>
  );
}
```

Désormais, tu peux accéder à des routes comme :

```
http://localhost:3000/articles/1
http://localhost:3000/articles/react-intro
```

Chaque page affichera dynamiquement le contenu correspondant à l’ID.

---

## ✅ Résultat attendu

À la fin de ce lab, tu devrais obtenir :

* Une application **Next.js fonctionnelle** dans le dossier `client`
* Un **site web de type blog** avec plusieurs pages (Accueil, À propos, Contacts, Articles)
* Une **navigation entre pages**
* Une **route dynamique** pour afficher les articles individuellement

---

## 🧠 Conseils

* Démarre ton application avec :

  ```bash
  npm run dev
  ```
* Consulte la [documentation officielle de Next.js](https://nextjs.org/docs) pour approfondir.
* Pense à **commiter régulièrement** avec des messages clairs :

  ```bash
  git add .
  git commit -m "Ajout du squelette du blog et des routes dynamiques"
  ```