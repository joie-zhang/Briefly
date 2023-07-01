const models = require('../models/brieflyModels');

const dbController = {};

dbController.addArticle = (req, res, next) => {
  // get all the info for the article from req.body
  const { url } = req.body;
  // get the article summary from res.locals
  const { summary } = res.locals;
  // if url or summary are undefined, return error
  if (!url || !summary) {
    return next({
      log: `dbController.addArticle ERROR: url or summary is not defined for this article`,
      status: 500,
      message: { error: 'An error occurred in dbController.addArticle. See log for more info.' },
    });
  }
  // add the article to the database
  models.Articles.create({ url, summary })
    .then(console.log('Article summary successfully stored in database'))
    .then(() => next())
    // catch errors
    .catch((err) => next({
      log: `dbController.addArticle ERROR: ${err}`,
      status: 500,
      message: { error: 'An error occurred in dbController.addArticle. See log for more info.' },
    }));
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
  // get the url from req.query
  // const url = 'https://apnews.com/article/connecticut-state-police-false-traffic-stop-reporting-eb5bd9d5a5ff8a37b98fcb469a7babd0';
  const { url } = req.query;
  // console.log('GET request received, in dbController rn: ', req.query);
  // models.Articles.findOne({ _id: '649cb96dfae6795fd699d150' })
  models.Articles.findOne({ url })
    .then(article => {
      // if article not found, return error for not found
      if (!article) {
        return next({
          log: `dbController.getArticleSummary ERROR: article URL not found`,
          status: 400,
          message: 'An error occurred in dbController.getArticleSummary. See log for more info.'
        });
      } else {
        // if article summary found, store in res.locals.articleSummary
        console.log('article summary found: ', article.summary);
        res.locals.summary = article.summary;
        return next();
      }
    })
    // catch errors
    .catch(err => {
      return next({
        log: `dbController.getArticleSummary ERROR: ${err}`,
        status: 500,
        message: 'An error occurred in dbController.getArticleSummary. See log for more info.'
      });
    });
};

module.exports = dbController;
