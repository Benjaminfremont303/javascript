const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const session = require('express-session');
const flash = require('express-flash');
const ejs = require('ejs');
// Créer une application Express.js
const app = express();

app.use(methodOverride('_method'));
app.get('/favicon.ico', (req, res) => res.status(204));
// Configurer le moteur de template EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/articles/');

// Middleware pour les fichiers statiques
app.use(express.static(__dirname + '/public'));
// Middleware pour le traitement des données POST
app.use(express.urlencoded({ extended: true }));
// Configurer la connexion à la base de données MongoDB avec Mongoose
mongoose.connect('mongodb://127.0.0.1/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connexion à la base de données réussie');
}).catch(err => {
  console.error('Erreur de connexion à la base de données :', err);
  process.exit();
});
// Configuration de la session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
// Configuration des messages flash
app.use(flash());
// Définir les routes
app.use('/', require('./routes/articles'));
app.use('/articles', require('./routes/articles'));

// Port d'écoute du serveur
const port = 3000;

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});