const express = require('express');

const apiController = require('../controllers/apiController');
const dbController = require('../controllers/dbController');

const router = express.Router();

router.post('/url', apiController.summarizeArticle,
  dbController.addArticle, (req, res) => {
    return res.status(200).json(res.locals.summary);
  });

router.post('/text', apiController.summarizeText,
  dbController.addArticle, (req, res) => {
    return res.status(200).json(res.locals.summary);
  });

module.exports = router;
