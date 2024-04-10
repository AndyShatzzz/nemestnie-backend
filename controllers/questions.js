const Question = require("../models/question");

module.exports.getQuestions = (req, res, next) => {
  Question.find({})
    .then((questions) => res.send(questions))
    .catch((error) => next(error));
};

module.exports.postNewTest = (req, res, next) => {
  const { job, nameTest } = req.body;

  Question.create({
    job,
    nameTest,
  })
    .then((newTest) => {
      res.status(201).send(newTest);
    })
    .catch((error) => {
      if (error.name === "ValidationError") {
        next(new ErrorBadRequest(errorMessage.validationErrorMessage));
      } else {
        next(error);
      }
    });
};

module.exports.putQuestion = (req, res, next) => {
  const { _id } = req.params;
  const { questions } = req.body;

  Question.findByIdAndUpdate(
    _id,
    { $addToSet: { questions: questions } },
    { new: true }
  )
    .then((question) => {
      if (!question) {
        next(new ErrorNotFound(errorMessage.cardNotFoundMessage));
      } else {
        res.send({ data: question });
      }
    })
    .catch((error) => {
      if (error.name === "CastError") {
        next(new ErrorBadRequest(errorMessage.cardBadRequestMessage));
      } else {
        next(error);
      }
    });
};

// module.exports.patchQuestion = (req, res, next) => {
//   const { _id } = req.params;
//   const { questions } = req.body;

//   Question.findByIdAndUpdate(
//     _id,
//     {
//       questions,
//     },
//     { new: true, runValidators: true }
//   )
//     .then((newQuestion) => {
//       res.status(201).send(newQuestion);
//     })
//     .catch((error) => {
//       if (error.name === "ValidationError") {
//         next(new ErrorBadRequest(errorMessage.validationErrorMessage));
//       } else {
//         next(error);
//       }
//     });
// };

module.exports.patchQuestion = (req, res, next) => {
  const { _id } = req.params;
  const { questions } = req.body;

  // Найдем соответствующий документ по _id
  Question.findByIdAndUpdate(
    { _id: _id }, // Обновляем по конкретному _id
    {
      $set: { "questions.$[elem]": questions }, // Обновляем вопрос в массиве questions
    },
    {
      new: true,
      runValidators: true,
      arrayFilters: [{ "elem._id": questions._id }], // Фильтр по _id вопроса
    }
  )
    .then((newQuestion) => {
      res.status(201).send(newQuestion);
    })
    .catch((error) => {
      if (error.name === "ValidationError") {
        next(new ErrorBadRequest(errorMessage.validationErrorMessage));
      } else {
        next(error);
      }
    });
};
