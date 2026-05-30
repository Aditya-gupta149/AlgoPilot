const generateResponse = require("../services/geminiService");

const askAI = async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await generateResponse(prompt);

    res.json({ response });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { askAI };