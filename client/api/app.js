import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur l’API Liga Santander intégrée au client !');
});

app.use('/api', apiRoutes);

export default app;
