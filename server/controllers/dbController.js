const models = require('../models/brieflyModels');

const dbController = {};

dbController.addArticle = (req, res, next) => {
  // get all the info for the article from req.body
  // get the article summary from res.locals
  // add the article to the database
  // models.Articles.create()
  // catch errors
  next();
};

// dbController.getArticleText = (req, res, next) => {
//   // get the title and publication date from req.body
//   // query database for article text
//   // models.Articles.findOne()
//   // catch errors
//   // if article not found, return error for not found
//   // if article text found, store in res.locals.articleText
//   res.locals.articleText = 'here is the article\'s fulltext';
//   next();
// };

dbController.getArticleSummary = (req, res, next) => {
  // get the title and publication date from req.body
  // query database for article summary
  // models.Articles.findOne()
  // catch errors
  // if article not found, return error for not found
  // if article summary found, store in res.locals.articleSummary
  res.locals.articleSummary = 'here is the article summary retrieved from db';
  next();
};

module.exports = dbController;
