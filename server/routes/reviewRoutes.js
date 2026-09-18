const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { code, language } = req.body;

  if (!code || !language) {
    return res.status(400).json({ error: 'Code and language are required' });
  }

  // Dummy response for now — real AI review comes in Day 5
  const dummyReview = {
    bugs: [
      'This is a placeholder bug — real analysis coming soon',
    ],
    suggestions: [
      'Consider adding comments to explain complex logic',
    ],
    complexity: {
      time: 'O(n)',
      space: 'O(1)',
    },
    qualityScore: 75,
  };

  res.json(dummyReview);
});

module.exports = router;