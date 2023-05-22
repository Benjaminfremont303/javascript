const express = require('express');
const router = express.Router();

// Page d'accueil
router.get('/', (req, res) => {
  res.redirect('articles');
});

module.exports = router;
