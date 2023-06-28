const express = require('express');

const dbController = require('../controllers/dbController');

const router = express.Router();

router.get('/fulltext', dbController.getArticleText, (req, res) => {
    return res.status(200).json(res.locals.articleText);
});

router.get('/summary', dbController.getArticleSummary, (req, res) => {
    return res.status(200).json(res.locals.articleSummary);
});

module.exports = router;
