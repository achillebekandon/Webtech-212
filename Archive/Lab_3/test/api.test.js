import request from 'supertest';
import app from '../src/app.js';
import { expect } from 'chai';

describe('API Express', () => {

  // Test route racine
  it('GET / devrait renvoyer un message de bienvenue', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Bienvenue sur mon API Express !');
  });

  // Test route /api/articles
  it('GET /api/articles devrait renvoyer une liste d\'articles', async () => {
    const res = await request(app).get('/api/articles');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  // Test POST /api/articles
  it('POST /api/articles devrait créer un nouvel article', async () => {
    const newArticle = {
      title: 'Test Article',
      content: 'Contenu test',
      author: 'Moi'
    };
    const res = await request(app).post('/api/articles').send(newArticle);
    expect(res.status).to.equal(201);
    expect(res.body).to.include({ title: 'Test Article', author: 'Moi' });
  });

  // Test GET /api/articles/:articleId/comments
  it('GET /api/articles/:articleId/comments devrait renvoyer les commentaires de l\'article', async () => {
    const resArticles = await request(app).get('/api/articles');
    const articleId = resArticles.body[0].id;

    const res = await request(app).get(`/api/articles/${articleId}/comments`);
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

});
