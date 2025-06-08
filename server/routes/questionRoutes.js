const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

router.get("/:category", async (req, res) => {
  const { category } = req.params;
  const questions = await Question.find({ category });
  res.json(questions);
});

router.post("/", async (req, res) => {
  const { category, text, createdBy } = req.body;
  const newQuestion = new Question({ category, text, createdBy });
  await newQuestion.save();
  res.json(newQuestion);
});

module.exports = router;
