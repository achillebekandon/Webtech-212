import express from 'express';
import apiRoutes from './routes/api.js'; // import des routes articles et commentaires

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Route racine
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API Express !');
});

// Toutes les routes de l'API préfixées par /api
app.use('/api', apiRoutes);

export default app;
