const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const buildReviewPrompt = require('../utils/llmPrompt');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post('/', async (req, res) => {
  const { code, language } = req.body;

  if (!code || !language) {
    return res.status(400).json({ error: 'Code and language are required' });
  }

  try {
    const prompt = buildReviewPrompt(code, language);

    const model = genAI.getGenerativeModel({ model: 'gemini-3.8-flash' });
    const result = await model.generateContent(prompt);
    const rawText = result.response.text();

    const cleaned = rawText.replace(/```json|```/g, '').trim();

    const review = JSON.parse(cleaned);
    res.json(review);

  } catch (error) {
    console.error('AI review error:', error.message);
    res.status(500).json({ error: 'Failed to generate review' });
  }
});

module.exports = router; 