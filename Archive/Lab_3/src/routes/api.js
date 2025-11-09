import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Base de données codée en dur
const db = {
  articles: [
    {
      id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
      title: 'My first article',
      content: 'Content of the first article.',
      date: '04/10/2022',
      author: 'Liz Gringer'
    }
  ],
  comments: [
    {
      id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      timestamp: 1664835049,
      content: 'First comment on the article.',
      articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
      author: 'Bob McLaren'
    }
  ]
};

// ----------------------------
// ROUTES ARTICLES
// ----------------------------

// Lister tous les articles
router.get('/articles', (req, res) => {
  res.json(db.articles);
});

// Ajouter un nouvel article
router.post('/articles', (req, res) => {
  const { title, content, author } = req.body;
  const newArticle = {
    id: uuidv4(),
    title,
    content,
    date: new Date().toLocaleDateString(),
    author
  };
  db.articles.push(newArticle);
  res.status(201).json(newArticle);
});

// Obtenir un article par ID
router.get('/articles/:articleId', (req, res) => {
  const { articleId } = req.params;
  const article = db.articles.find(a => a.id === articleId);
  if (!article) return res.status(404).json({ message: 'Article non trouvé' });
  res.json(article);
});

// ----------------------------
// ROUTES COMMENTAIRES
// ----------------------------

// Lister tous les commentaires d’un article
router.get('/articles/:articleId/comments', (req, res) => {
  const { articleId } = req.params;
  const comments = db.comments.filter(c => c.articleId === articleId);
  res.json(comments);
});

// Ajouter un commentaire à un article
router.post('/articles/:articleId/comments', (req, res) => {
  const { articleId } = req.params;
  const { content, author } = req.body;

  const article = db.articles.find(a => a.id === articleId);
  if (!article) return res.status(404).json({ message: 'Article non trouvé' });

  const newComment = {
    id: uuidv4(),
    timestamp: Date.now(),
    content,
    articleId,
    author
  };
  db.comments.push(newComment);
  res.status(201).json(newComment);
});

// Obtenir un commentaire par ID
router.get('/articles/:articleId/comments/:commentId', (req, res) => {
  const { articleId, commentId } = req.params;
  const comment = db.comments.find(c => c.articleId === articleId && c.id === commentId);
  if (!comment) return res.status(404).json({ message: 'Commentaire non trouvé' });
  res.json(comment);
});

//Obtenir tous les commentaires d’un article (GET /articles/:articleId/comments)
router.get('/articles/:articleId/comments', (req, res) => {
  const { articleId } = req.params;
  const comments = db.comments.filter(c => c.articleId === articleId);
  res.json(comments);
});

//Ajouter un commentaire à un article (POST /articles/:articleId/comments)
router.post('/articles/:articleId/comments', (req, res) => {
  const { articleId } = req.params;
  const { content, author } = req.body;

  // Vérifier que l'article existe
  const article = db.articles.find(a => a.id === articleId);
  if (!article) return res.status(404).json({ message: 'Article non trouvé' });

  const newComment = {
    id: uuidv4(),
    timestamp: Date.now(),
    content,
    articleId,
    author
  };
  db.comments.push(newComment);
  res.status(201).json(newComment);
});

//2.3.3 Obtenir un commentaire spécifique (GET /articles/:articleId/comments/:commentId)

router.get('/articles/:articleId/comments/:commentId', (req, res) => {
  const { articleId, commentId } = req.params;
  const comment = db.comments.find(c => c.articleId === articleId && c.id === commentId);
  if (!comment) return res.status(404).json({ message: 'Commentaire non trouvé' });
  res.json(comment);
});

export default router;
