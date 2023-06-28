const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://brieflyadmin:uEObdq1S2Na9Qq2f@briefly.gdsddmd.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'briefly'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

// sets a schema for the 'articles' collection
const articlesSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String },
  publishedOn: { type: Date, required: true },
  text: { type: String, required: true },
  summary: { type: String, default: 'Not yet summarized' }, 
  createdAt: { type: Date, default: Date.now },
})

// create a model for the 'articles' collection to be exported
const Articles = mongoose.model('article', articlesSchema);

// export models for use in the controller
module.exports = {
  Articles,
};