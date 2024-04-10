const router = require("express").Router();

const {
  getLearningArticle,
  postLearningArticle,
  patchLearningArticle,
  deleteLearningArticle,
} = require("../controllers/learningArticles");

router.get("/", getLearningArticle);
router.post("/", postLearningArticle);
router.patch("/", patchLearningArticle);
router.delete("/:_id", deleteLearningArticle);

module.exports = router;
