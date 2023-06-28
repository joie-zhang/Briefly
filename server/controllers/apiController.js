const apiController = {};

apiController.summarizeArticle = (req, res, next) => {
    // throw error if the length of the article is longer than 500 words
    // formulate POST request to API
    // capture response
    // catch errors
    // store article summary in res.locals.articleSummary
    res.locals.articleSummary = 'here is a great article summary';
    next();
};

module.exports = apiController;
