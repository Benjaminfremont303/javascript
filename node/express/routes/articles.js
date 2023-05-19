const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = require('../models/Article');

// Configurer body-parser comme middleware

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
router.get('/:id', async (req, response) => {
 /*  const article = await Article.findById(req.params.id.trim()).exec;
  res.render('articles/show', { article }); */
  try {
    const id = req.params.id.trim();
    console.log("gbnnn");

    console.log(req.body.title);
    console.log("gbnnn");

    console.log(req.params);

    if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('invalid id') // validating `id`

    const article = await Article.findById(id)
    if (!article) return response.status(404).send('No course found with the given id.')
    
    response.render('articles/show', { article });

    } catch (error) {
    console.error(error)
    // next(error)
    response.status(501).send('internal server error')
  }
});


// Formulaire de mise à jour d'article
router.get('/:id/edit', async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.render('articles/edit', { article });
});

// Mettre à jour l'article
router.put('/:id', async (req, res) => {
  const articleId = req.params.id.trim();

  const updatedArticle = {
    title: req.body.title,
    content: req.body.content
  };

  // Mettez à jour l'article dans la base de données
  try {
    await Article.findByIdAndUpdate(articleId, updatedArticle);
    res.redirect('/articles/' + articleId);
  } catch (err) {
    console.log(err);
    res.redirect('/articles/' + articleId + '/edit');
  }
});



 // Supprimer un article
router.delete('/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect('/articles');
});
 
module.exports = router;
