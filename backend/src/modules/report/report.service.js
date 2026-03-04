import prisma from "../../config/db.js";

export const monthlyReport = async (userId, month, year) => {
  const income = await prisma.transaction.aggregate({
    where: { userId, type: "income" },
    _sum: { amount: true },
  });

  const expense = await prisma.transaction.aggregate({
    where: { userId, type: "expense" },
    _sum: { amount: true },
  });

  return {
    totalIncome: income._sum.amount || 0,
    totalExpense: expense._sum.amount || 0,
    savings:
      (income._sum.amount || 0) -
      (expense._sum.amount || 0),
  };
};