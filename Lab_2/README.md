# 🧪 Atelier : Prise en main de Node.js et Git

Cet atelier a pour objectif de te familiariser avec **Node.js** et **Git** en construisant pas à pas un **serveur web simple**.  
Ce projet servira de **base pour les cours suivants** et évoluera chaque semaine jusqu’à devenir une application complète.

---

## 🎯 Objectifs

- Se préparer au démarrage avec **Node.js**
- Initialiser un projet et un dépôt **Git**
- Créer un **serveur web** basique en Node.js
- Intégrer **Nodemon** pour le rechargement automatique
- Créer une **application avec plusieurs routes**
- Lire un **fichier JSON** depuis le serveur
- Publier le projet sur **GitHub**

---

## 🧠 Notes importantes

> Ce laboratoire marque le **début d’un projet Node.js** qui évoluera à chaque séance.  
> La **note finale** tiendra compte :
> - du projet final rendu,
> - et de **l’historique Git** (qualité et régularité des commits).

---

## ⚙️ Prérequis

### 🟢 Installation de Node.js

**Ne pas** utiliser le programme d’installation standard ni le gestionnaire de paquets système.  
Nous utiliserons **n-install** pour permettre la gestion de plusieurs versions.

1. Installez `n-install` :
   ```bash
   curl -L https://git.io/n-install | bash
    ```

2. Redémarrez le terminal, puis vérifiez :

   ```bash
   node -v
   npm -v
   ```

Node.js est désormais installé dans votre répertoire personnel, **sans droits sudo**.

---

## 🚀 Étape 1 — Démarrer un projet Node.js

1. Créez un dossier de projet :

   ```bash
   mkdir node-lab1
   cd node-lab1
   ```

2. Ouvrez-le dans votre éditeur (exemples) :

   ```bash
   code .
   # ou
   vim .
   ```

---

## 🧩 Étape 2 — Créer un script Node.js simple

1. Créez un fichier `index.js` :

   ```js
   console.log("Hello Node.js!");
   ```

2. Exécutez le script :

   ```bash
   node index.js
   ```

   ✅ Résultat attendu :

   ```
   Hello Node.js!
   ```

---

## 📦 Étape 3 — Initialiser un projet NPM

1. Exécutez :

   ```bash
   npm init
   ```

   Cela génère un fichier `package.json`.

2. Complétez les champs :

   * `author`
   * `description`

3. Ajoutez un script `start` :

   ```json
   "scripts": {
     "start": "node index.js"
   }
   ```

4. Testez :

   ```bash
   npm start
   ```

---

## 🔧 Étape 4 — Initialiser un dépôt Git

1. Créez le dépôt :

   ```bash
   git init
   ```

2. Créez un fichier `.gitignore` :

   ```
   .DS_Store
   /node_modules
   ```

3. Faites un premier commit :

   ```bash
   git add .
   git commit -m "Initial commit"
   ```

---

## 🌐 Étape 5 — Créer un serveur HTTP simple

1. Modifiez `index.js` :

   ```js
   const http = require('http');

   http.createServer((req, res) => {
     res.writeHead(200, { 'Content-Type': 'text/plain' });
     res.end('Hello World\n');
   }).listen(8080);
   ```

2. Lancez le serveur :

   ```bash
   npm start
   ```

3. Testez dans le navigateur :
   👉 [http://localhost:8080](http://localhost:8080)

---

## 🧠 Étape 6 — Structurer le code et gérer les routes

### 🔹 Afficher du HTML

```js
const content = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>ECE AST</title>
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>`;

const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(content);
  res.end();
}).listen(8080);
```

### 🔹 Gérer les chemins (URL)

```js
const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;
  console.log(path);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`Chemin actuel : ${path}`);
  res.end();
}).listen(8080);
```

### 🔹 Gérer les paramètres de requête

```js
const url = require('url');
const qs = require('querystring');

http.createServer((req, res) => {
  const queryParams = qs.parse(url.parse(req.url).query);
  console.log(queryParams);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`Bonjour ${queryParams.name || 'anonyme'} !`);
  res.end();
}).listen(8080);
```

---

## ⚙️ Étape 7 — Créer un routage de base

```js
const url = require('url');
const qs = require('querystring');

const serverHandle = (req, res) => {
  const route = url.parse(req.url);
  const path = route.pathname;
  const params = qs.parse(route.query);

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (path === '/hello' && 'name' in params) {
    res.write('Hello ' + params.name);
  } else if (path === '/hello') {
    res.write('Hello anonymous');
  } else {
    res.writeHead(404);
    res.write('Erreur 404 : page non trouvée');
  }

  res.end();
};

const http = require('http');
http.createServer(serverHandle).listen(8080);
```

---

## 🧱 Étape 8 — Modulariser le code

**Structure :**

```
project/
├── index.js
└── handles.js
```

**handles.js**

```js
module.exports = {
  serverHandle: function (req, res) {
    // ...
  }
};
```

**index.js**

```js
const http = require('http');
const handles = require('./handles');

http.createServer(handles.serverHandle).listen(8080);
```

---

## 🔁 Étape 9 — Intégrer Nodemon

1. Installez Nodemon :

   ```bash
   npm install nodemon
   ```

2. Ajoutez un script dans `package.json` :

   ```json
   "scripts": {
     "dev": "nodemon index.js"
   }
   ```

3. Lancez le serveur en mode développement :

   ```bash
   npm run dev
   ```

✅ Nodemon redémarrera automatiquement le serveur à chaque sauvegarde.

---

## 📚 Étape 10 — Lecture d’un fichier JSON

1. Créez un dossier `content` :

   ```
   content/about.json
   ```

2. Exemple de contenu :

   ```json
   {
     "title": "About",
     "content": "Example content here.",
     "author": "Your Name",
     "date": "27/09/2022"
   }
   ```

3. Ajoutez une route `/about` pour afficher ce contenu :

   ```js
   const about = require('./content/about.json');
   // ...
   if (path === '/about') {
     res.writeHead(200, { 'Content-Type': 'application/json' });
     res.write(JSON.stringify(about));
   }
   ```

4. Bonus : ajoutez un **routage dynamique** pour afficher d’autres fichiers JSON selon le chemin demandé.

---

## 🧭 Étape 11 — Publier sur GitHub

1. Vérifiez vos commits :

   ```bash
   git status
   git add .
   git commit -m "Version finale du Lab 1"
   ```

2. Ajoutez un dépôt distant :

   ```bash
   git remote add origin <url-du-repo>
   git push -u origin main
   ```

3. Créez un tag :

   ```bash
   git tag lab1
   git push origin lab1
   ```

---

## 📘 Documentation à inclure dans ton propre README

Ton fichier `README.md` de projet sur GitHub doit contenir :

* 📌 **Titre du projet**
* 💬 **Brève introduction**
* ⚙️ **Prérequis**
* 🪜 **Instructions d’installation**
* ▶️ **Instructions d’exécution avec exemples**
* 👥 **Liste des contributeurs**
* 🔗 **Lien vers le dépôt GitHub**

---

## 🧰 Pour aller plus loin

* Apprends la syntaxe **Markdown** pour rédiger des documentations lisibles.
* Consulte la documentation officielle :

  * [Node.js Documentation](https://nodejs.org/en/docs)
  * [Git Documentation](https://git-scm.com/docs)
  * [NPM Documentation](https://docs.npmjs.com/)

---

✅ **Résultat attendu :**

* Un projet Node.js fonctionnel avec plusieurs routes
* Un serveur HTTP dynamique
* Nodemon intégré
* Un dépôt Git propre et bien documenté
* Le tag `lab1` créé et poussé sur GitHub