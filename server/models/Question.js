const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  category: { type: String, enum: ["Dogs", "Cats", "Rabbits"], required: true },
  text: { type: String, required: true },
  createdBy: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Question", QuestionSchema);
