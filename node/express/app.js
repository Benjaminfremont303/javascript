const express = require('express');
const mongoose = require('mongoose');

// Créer une application Express.js
const app = express();

// Configurer le moteur de template EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/');

// Middleware pour les fichiers statiques
app.use(express.static(__dirname + '/public'));

// Middleware pour le traitement des données POST
app.use(express.urlencoded({ extended: true }));

// Configurer la connexion à la base de données MongoDB avec Mongoose
mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connexion à la base de données réussie');
}).catch(err => {
  console.error('Erreur de connexion à la base de données :', err);
  process.exit();
});

// Définir les routes
app.use('/', require('./routes/articles'));
app.use('/articles', require('./routes/articles'));

// Port d'écoute du serveur
const port = 3000;

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});