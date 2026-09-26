function buildReviewPrompt(code, language) {
  return `You are an expert code reviewer. Analyze the following ${language} code and respond ONLY with valid JSON in this exact format, no extra text, no markdown formatting:
{
  "bugs": ["list of bugs or logical errors found, empty array if none"],
  "suggestions": ["list of improvement suggestions"],
  "complexity": {"time": "Big-O notation", "space": "Big-O notation"},
  "qualityScore": a number from 0 to 100
}
Code to review:
${code}`;
}
module.exports = buildReviewPrompt;
