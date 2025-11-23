import app from './app.js';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Serveur Express en cours sur http://localhost:${PORT}`);
});