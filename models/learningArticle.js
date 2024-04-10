const mongoose = require("mongoose");

const learningArticleSchema = new mongoose.Schema({
  job: {
    type: String,
  },
  topic: {
    type: String,
  },
  nameArticle: {
    type: String,
  },
  contentArticle: {
    type: String,
  },
});

module.exports = mongoose.model("learningArticle", learningArticleSchema);
