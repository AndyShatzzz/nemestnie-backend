const ResultTest = require("../models/resultTest");

module.exports.postResultTest = (req, res, next) => {
  const { name, result, questionList } = req.body;

  ResultTest.create({
    name,
    result,
    questionList,
  })
    .then((newAnswer) => {
      if (questionList.correctAnswer === newAnswer.result) {
        res.status(201).send("true");
      } else {
        res.status(201).send("false");
      }
      // res.status(201).send(newQuestion);
    })
    .catch((error) => {
      if (error.name === "ValidationError") {
        next(new ErrorBadRequest(errorMessage.validationErrorMessage));
      } else {
        next(error);
      }
    });
};
