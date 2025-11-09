import express from 'express';
import fs from 'fs';
const router = express.Router();
const dataPath = './api/data/teams.json';

router.get('/teams', (req, res) => {
  const teams = JSON.parse(fs.readFileSync(dataPath));
  res.json(teams);
});

router.get('/teams/:id', (req, res) => {
  const teams = JSON.parse(fs.readFileSync(dataPath));
  const team = teams.find(t => t.id === parseInt(req.params.id));
  team ? res.json(team) : res.status(404).json({ message: 'Équipe non trouvée' });
});

router.post('/teams', (req, res) => {
  const teams = JSON.parse(fs.readFileSync(dataPath));
  const newTeam = { id: teams.length + 1, ...req.body };
  teams.push(newTeam);
  fs.writeFileSync(dataPath, JSON.stringify(teams, null, 2));
  res.status(201).json(newTeam);
});

export default router;
