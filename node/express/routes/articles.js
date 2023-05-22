const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = require('../models/Article');

// Configurer body-parser comme middleware
router.get('/', (req, res) => {
  res.redirect('articles');
});
// Liste des articles
router.get('/articles', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' });
  res.render('index', { articles });
});

// Formulaire de création d'article
 router.get('/create', (req, res) => {
  res.render('create');
}); 

// Créer un nouvel article   
router.post('/articles/create', async (req, res) => {
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
    if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('invalid id') // validating `id`
    const article = await Article.findById(id)
    if (!article) return response.status(404).send('No course found with the given id.')
    response.render('show', { article });

    } catch (error) {
    console.error(error)
    // next(error)
    response.status(501).send('internal server error')
  }
});
// Formulaire de mise à jour d'article
router.get('/:id/edit', async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.render('edit', { article });
});
// Mettre à jour l'article
/* router.put('/:id', async (req, res) => {
  const articleId = req.params.id.trim();
 res.write(articleId);
  const updatedArticle = {
    title: req.body.title,
    content: req.body.content
  }; */
  router.post('/:id', async (req, res) => {
    const articleId = req.params.id.trim();
    const updatedArticle = {
      title: req.body.title,
      content: req.body.content
    };
  
    if (req.body._method === 'PUT') {
      // Effectuez la mise à jour de l'article ici
      try {
        const updated = await Article.findOneAndUpdate({ _id: articleId }, updatedArticle, { new: true });
        console.log('ehejhej');
      } catch (err) {
        console.log(articleId);
        console.log(err);
      }
    } else {
      // Autres actions de routage si nécessaire
    }
  });
  

/*  // Supprimer un article
router.delete('/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect('/articles');
}); */
 
module.exports = router;
