const router = require("express").Router();
// const auth = require("../middlewares/auth");

// const { createUsers, login } = require("../controllers/users");

// router.post("/signin", login);
// router.post("/signup", createUsers);

router.use("/questions", require("./questions"));
router.use("/articles", require("./learningArticles"));
router.use("/test", require("./test"));

module.exports = router;
