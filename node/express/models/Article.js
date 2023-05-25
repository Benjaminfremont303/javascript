const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;