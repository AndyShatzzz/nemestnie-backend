const router = require("express").Router();

const { postResultTest } = require("../controllers/resultTest");

// router.get("/", getQuestions);
router.post("/", postResultTest);

module.exports = router;
