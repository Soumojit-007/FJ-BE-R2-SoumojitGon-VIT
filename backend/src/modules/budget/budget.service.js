import prisma from "../../config/db.js";

export const setBudget = async (userId, data) => {
  const categoryId = data.categoryId;
  const monthlyLimit = parseFloat(data.monthlyLimit);
  const month = parseInt(data.month);
  const year = parseInt(data.year);

  return prisma.budget.upsert({
    where: {
      userId_categoryId_month_year: {
        userId,
        categoryId,
        month,
        year,
      },
    },
    update: {
      monthlyLimit,
    },
    create: {
      userId,
      categoryId,
      monthlyLimit,
      month,
      year,
    },
  });
};

export const checkBudget = async (userId, categoryId, month, year) => {
  month = parseInt(month);
  year = parseInt(year);

  const budget = await prisma.budget.findUnique({
    where: {
      userId_categoryId_month_year: {
        userId,
        categoryId,
        month,
        year,
      },
    },
  });

  // If no budget exists
  if (!budget) {
    return {
      budget: null,
      totalSpent: 0,
      remaining: null,
    };
  }

  const totalSpentResult = await prisma.transaction.aggregate({
    where: {
      userId,
      categoryId,
      type: "expense",
      date: {
        gte: new Date(year, month - 1, 1),
        lt: new Date(year, month, 1),
      },
    },
    _sum: {
      amount: true,
    },
  });

  const totalSpent = totalSpentResult._sum.amount || 0;

  return {
    budget,
    totalSpent,
    remaining: budget.monthlyLimit - totalSpent,
  };
};