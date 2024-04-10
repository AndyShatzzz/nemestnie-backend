const mongoose = require("mongoose");

// const resultSchema = new mongoose.Schema({
//   counter: {
//     type: Boolean,
//   },
// });

const answersSchema = new mongoose.Schema({
  counter: {
    type: Number,
  },
  answer: {
    type: String,
  },
});

const resultTestSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  result: {
    type: String,
  },
  questionList: {
    question: {
      type: String,
    },
    answers: [answersSchema],
    correctAnswer: {
      type: String,
    },
  },
});

module.exports = mongoose.model("resultTest", resultTestSchema);
