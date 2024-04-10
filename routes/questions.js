const router = require("express").Router();

const {
  getQuestions,
  postNewTest,
  putQuestion,
  patchQuestion,
} = require("../controllers/questions");

router.get("/", getQuestions);
router.post("/", postNewTest);
router.patch("/:_id", patchQuestion);
router.put("/:_id", putQuestion);

module.exports = router;
