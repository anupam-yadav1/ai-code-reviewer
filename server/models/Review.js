const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  bugs: [String],
  suggestions: [String],
  complexity: {
    time: String,
    space: String,
  },
  qualityScore: Number,
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);