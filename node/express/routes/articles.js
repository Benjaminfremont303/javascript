const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// Liste des articles
router.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' });
  res.render('articles/index', { articles });
});

// Formulaire de création d'article
router.get('/create', (req, res) => {
  res.render('articles/create');
});

// Créer un nouvel article
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const article = new Article({ title, content });
  await article.save();
  res.redirect('/articles');
});

// Afficher un article
router.get('/:id', async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.render('articles/show', { article });
});

// Formulaire de mise à jour d'article
router.get('/:id/edit', async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.render('articles/edit', { article });
});

// Mettre à jour un article
router.put('/:id', async (req, res) => {
  const { title, content } = req.body;
  await Article.findByIdAndUpdate(req.params.id, { title, content });
  res.redirect(`/articles/${req.params.id}`);
});

// Supprimer un article
router.delete('/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect('/articles');
});

module.exports = router;
