const mongoose = require("mongoose");

// const answersSchema = new mongoose.Schema({
//   counter: {
//     type: Number,
//   },
//   answer: {
//     type: String,
//   },
// });

const oneQuestionListSchema = new mongoose.Schema({
  question: {
    type: String,
  },
  answers: [String],
  correctAnswer: {
    type: String,
  },
});

const questionListSchema = new mongoose.Schema({
  job: {
    type: String,
  },
  nameTest: {
    type: String,
  },
  questions: {
    type: [
      {
        type: oneQuestionListSchema,
      },
    ],
    default: [],
  },
});

module.exports = mongoose.model("question", questionListSchema);
