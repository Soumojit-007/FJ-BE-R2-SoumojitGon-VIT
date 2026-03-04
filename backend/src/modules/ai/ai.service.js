import { getGeminiModel } from "../../config/genai.js";
import prisma from "../../config/db.js";

export const generateFinancialSummary = async (userId) => {
  const transactions = await prisma.transaction.findMany({
    where: { userId },
  });

  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalExpense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const model = getGeminiModel();

  const prompt = `
  Analyze this financial data:
  Income: ${totalIncome}
  Expense: ${totalExpense}
  Give insights and improvement suggestions.
  `;

  const result = await model.generateContent(prompt);
  return result.response.text();
};