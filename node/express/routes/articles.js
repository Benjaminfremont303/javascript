const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = require('../models/Article');
const User = require('../models/User');
const bcrypt = require('bcryptjs');


// Route pour l'inscription
router.get('/articles/register', (req, res) => {
  const username = req.session.username;
  const mail =  req.session.mail;
  res.render('register', {username, mail})
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
  const username = req.session.username;
  const mail =  req.session.mail;
  res.render('login', {username, mail})
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
      req.session.username = user.username;
      req.session.mail = user.mail;
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
  res.redirect('/articles/');
});
// Middleware pour vérifier si un utilisateur est connecté avant d'accéder aux pages protégées
const requireLogin = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    req.flash('error_msg', 'Veuillez vous connecter pour accéder à cette page.');
    res.redirect('/articles/login');
  }
};
// Route pour le tableau de bord (exemple de page protégée)
router.get('/articles/dashboard', requireLogin, (req, res) => {  
  const username =req.session.username;
  const mail =  req.session.mai;
  res.render('dashboard', {username, mail});
});

router.get('/', (req, res) => {
  res.redirect('articles');
});
// Liste des articles
router.get('/articles', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' });
  const username = req.session.username;
  const mail =  req.session.mail;
  res.render('index', { articles, username, mail });
});
// Formulaire de création d'article
 router.get('/articles/add/', async (req, res) => {
  const article = await Article;
  const username = req.session.username;
  const mail =  req.session.mail;
  res.render('add', {article, username, mail})
});  
router.post('/add/', async (req, res) => {
      const { title, content } = req.body;
      console.log(req.body);
      const article = new Article({ title, content });
      await article.save();
      res.redirect('/articles');         
  });
// Afficher un article
router.get('/articles/:id', async (req, res) => {       
  try {
    const id = req.params.id.trim();
    if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('invalid id') // validating `id`
    const article = await Article.findById(id)
    if (!article) return response.status(404).send('No course found with the given id.')
    const username = req.session.username;
    const mail =  req.session.mail;
    res.render('show', {article, username, mail})
    } catch (error) {
    console.error(error)
    // next(error)
    res.status(501).send('internal server error')
  }
});
// Formulaire de mise à jour d'article
router.get('/:id/edit', async (req, res) => {
  const article = await Article.findById(req.params.id);
  const username = req.session.username;
  const mail =  req.session.mail;
  res.render('edit', {article, username, mail});
});


  router.put('/edit/:id', async (req, res) => {
    const articleId = req.params.id.trim();
    const updatedArticle = {
      title: req.body.title,
      content: req.body.content
    }
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
