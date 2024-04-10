const LearningArticle = require("../models/learningArticle");

module.exports.getLearningArticle = (req, res, next) => {
  LearningArticle.find({})
    .then((learningArticle) => res.send(learningArticle))
    .catch((error) => next(error));
};

module.exports.postLearningArticle = (req, res, next) => {
  const { job, topic, nameArticle, contentArticle } = req.body;

  LearningArticle.create({
    job,
    topic,
    nameArticle,
    contentArticle,
  })
    .then((newLearningArticle) => {
      res.status(201).send(newLearningArticle);
    })
    .catch((error) => {
      if (error.name === "ValidationError") {
        next(new ErrorBadRequest(errorMessage.validationErrorMessage));
      } else {
        next(error);
      }
    });
};

module.exports.patchLearningArticle = (req, res, next) => {
  const { _id, job, topic, nameArticle, contentArticle } = req.body;

  LearningArticle.findByIdAndUpdate(
    _id,
    {
      job,
      topic,
      nameArticle,
      contentArticle,
    },
    { new: true, runValidators: true }
  )
    .then((newLearningArticle) => {
      res.status(201).send(newLearningArticle);
    })
    .catch((error) => {
      if (error.name === "ValidationError") {
        next(new ErrorBadRequest(errorMessage.validationErrorMessage));
      } else {
        next(error);
      }
    });
};

module.exports.deleteLearningArticle = (req, res, next) => {
  const _id = req.params._id;

  LearningArticle.findByIdAndDelete(_id)
    .then((newLearningArticle) => {
      res.status(201).send(newLearningArticle);
    })
    .catch((error) => {
      if (error.name === "ValidationError") {
        next(new ErrorBadRequest(errorMessage.validationErrorMessage));
      } else {
        next(error);
      }
    });
};
