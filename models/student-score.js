const mongoose = require("mongoose");

const studentScoreSchema = new mongoose.Schema({
  studentId: {
    type: Number,
    unique: true, // Pastikan studentId unik
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
});

module.exports = mongoose.model("StudentScore", studentScoreSchema);
