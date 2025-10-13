\# Lab 3 – API Web avec Node.js et Express



\## Description du projet



Ce projet consiste à créer une \*\*API Web\*\* en utilisant \*\*Node.js\*\* et \*\*Express\*\*, avec une base de données codée en dur.  

Il inclut également des \*\*tests unitaires\*\* avec \*\*Mocha\*\* et \*\*SuperTest\*\*, et prépare le terrain pour l’utilisation de \*\*GraphQL\*\*.  



---



\## Objectifs



\- Apprendre la \*\*programmation côté serveur\*\* avec Node.js  

\- Créer un \*\*serveur Web\*\* avec Express  

\- Pratiquer les \*\*tests unitaires\*\* avec Mocha et SuperTest  

\- Découvrir les concepts de \*\*GraphQL\*\*  



---



\## Fonctionnalités de l’API



\### Routes Articles



| Méthode | Route | Description |

|---------|-------|------------|

| GET | `/api/articles` | Lister tous les articles |

| POST | `/api/articles` | Ajouter un nouvel article |

| GET | `/api/articles/:articleId` | Obtenir un article par ID |



\### Routes Commentaires



| Méthode | Route | Description |

|---------|-------|------------|

| GET | `/api/articles/:articleId/comments` | Lister tous les commentaires d’un article |

| POST | `/api/articles/:articleId/comments` | Ajouter un commentaire à un article |

| GET | `/api/articles/:articleId/comments/:commentId` | Obtenir un commentaire spécifique |



---



\## Installation



1\. Cloner le dépôt :



```bash

git clone <URL\_DU\_DEPOT>

cd Lab\_3

````



2\. Installer les dépendances :



```bash

npm install

```



3\. Lancer le serveur en développement :



```bash

npm run dev

```



Le serveur écoute par défaut sur \*\*\[http://localhost:4000](http://localhost:4000)\*\*.



---



\## Tests



Pour exécuter les tests unitaires avec Mocha et SuperTest :



```bash

npm test

```



\* Vérifie les routes articles et commentaires

\* Assure que les réponses HTTP et le format JSON sont corrects



---



\## Utilisation



\* Pour tester l’API, tu peux utiliser :



&nbsp; \* \*\*Postman\*\*

&nbsp; \* \*\*curl\*\*

&nbsp; \* \*\*Swagger Inspector\*\*



Exemple avec curl :



```bash

curl http://localhost:4000/api/articles

```



---



\## Statut



✅ Projet fonctionnel : toutes les routes articles et commentaires sont implémentées et testées.

⚠️ Bonus : intégration de GraphQL à venir.



````



---



Pour créer le fichier dans ton projet :  



```bash

touch README.md

````



Puis colle le contenu ci-dessus dedans.



Après ça, tu peux l’ajouter à Git et faire un commit comme ceci :



```bash

git add README.md

git commit -m "docs(readme): ajouter le README du projet avec objectifs, API et instructions"

```



