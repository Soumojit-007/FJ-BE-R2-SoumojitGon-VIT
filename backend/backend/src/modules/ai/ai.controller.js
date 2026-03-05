import { generateFinancialSummary } from "./ai.service.js";

export const getAISummary = async (req, res) => {
  try {
    const summary = await generateFinancialSummary(req.user.userId);
    res.json({ summary });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};