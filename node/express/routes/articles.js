const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = require('../models/Article');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
// Configurer body-parser comme middleware


// Route pour l'inscription
router.get('/articles/register', (req, res) => {
  res.render('register');
});
router.post('/articles/register', async (req, res) => {
  const { username, mail, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      mail,
      password: hashedPassword
    });
    await user.save();
    console.log('oui');
    req.flash('success_msg', 'Vous êtes maintenant inscrit !');
    res.redirect('/articles/login');
  } catch (err) {
    console.error(err);
    req.flash('error_msg', 'Une erreur s\'est produite lors de l\'inscription.');
    res.redirect('/articles/register');
  }
});
// Route pour la connexion
router.get('/articles/login', (req, res) => {
  res.render('login');
});

router.post('/articles/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      req.flash('error_msg', 'Nom d\'utilisateur ou mot de passe incorrect.');
      return res.redirect('/articles/login');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      req.flash('success_msg', 'Vous êtes maintenant connecté !');
      // Définissez l'ID de l'utilisateur connecté dans la session
      req.session.userId = user._id;
      return res.redirect('/articles/dashboard');
    } else {
      req.flash('error_msg', 'Nom d\'utilisateur ou mot de passe incorrect.');
      res.redirect('/articles/login');
    }
  } catch (err) {
    console.error(err);
    req.flash('error_msg', 'Une erreur s\'est produite lors de la connexion.');
    res.redirect('/articles/login');
  }
});
// Route pour la déconnexion
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});
// Middleware pour vérifier si un utilisateur est connecté avant d'accéder aux pages protégées
const requireLogin = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    req.flash('error_msg', 'Veuillez vous connecter pour accéder à cette page.');
    res.redirect('/login');
  }
};
// Route pour le tableau de bord (exemple de page protégée)
router.get('/articles/dashboard', requireLogin, (req, res) => {
  const Users = User;
  res.render('dashboard', { Users });
});

router.get('/', (req, res) => {
  res.redirect('articles');
});
// Liste des articles
router.get('/articles', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' });
  res.render('index', { articles });
});
// Formulaire de création d'article
 router.get('/articles/edit', async (req, res) => {
  const article = await Article;
  res.render('edit', { article });
});
// Afficher un article
router.get('/articles/:id', async (req, response) => {       
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
  router.post('/edit/', async (req, res) => {
      const { title, content } = req.body;
      console.log(req.body);
      const article = new Article({ title, content });
      await article.save();
      res.redirect('/articles');         
  });

  router.post('/edit/:id', async (req, res) => {
    const articleId = req.params.id.trim();
    const updatedArticle = {
      title: req.body.title,
      content: req.body.content}
    try {
      const updated = await Article.findOneAndUpdate({ _id: articleId }, updatedArticle, { new: true });
      res.redirect('/articles/'+articleId);
    } catch (err) {
      console.log(err);
    }
  });
 // Supprimer un article
router.delete('/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect('/articles');
});   
 
module.exports = router;
