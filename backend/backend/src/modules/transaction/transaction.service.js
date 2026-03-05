import prisma from "../../config/db.js";
import { detectAnomaly } from "./anomaly.service.js";
import { sendEmail } from "../../config/sendgrid.js";
import { checkBudget } from "../budget/budget.service.js";
export const createTransaction = async (userId, data) => {
  // 1️⃣ Validate category belongs to this user
  const category = await prisma.category.findFirst({
    where: {
      id: data.categoryId,
      userId,
    },
  });

  if (!category) {
    throw new Error("Invalid category for this user");
  }

  // 2️⃣ Fetch past transactions for anomaly detection
  const pastTransactions = await prisma.transaction.findMany({
    where: {
      userId,
      type: data.type,
    },
    select: { amount: true },
  });

  const isAnomaly = detectAnomaly(
    pastTransactions.map((t) => Number(t.amount)),
    Number(data.amount),
  );

  // 3️⃣ Create transaction
  const transaction = await prisma.transaction.create({
    data: {
      type: data.type,
      amount: Number(data.amount),
      currency: data.currency,
      description: data.description || null,
      date: new Date(data.date),
      exchangeRate: Number(data.exchangeRate),
      userId,
      categoryId: data.categoryId,
    },
  });
  if (data.type === "expense") {
    const month = new Date(data.date).getMonth() + 1;
    const year = new Date(data.date).getFullYear();

    const budgetStatus = await checkBudget(
      userId,
      data.categoryId,
      month,
      year,
    );

    if (
      budgetStatus &
      (budgetStatus.totalSpent > budgetStatus.budget.monthlyLimit)
    ) {
      const user = await prisma.user.findUnique({
        where: { id: data.categoryId },
      });

      await sendEmail({
        to: user.email,
        subject: "⚠ Budget Limit Exceeded",
        text: `Your spending for category ${category.name} budget.`,
        html: `<h2>Budget Alert</h2>
          <p>Category: <b>${category.name}</b></p>
          <p>Budget Limit: ₹${budgetStatus.budget.monthlyLimit}</p>
          <p>Total Spent: ₹${budgetStatus.totalSpent}</p>
          <p>Please review your expenses.</p>`,
      });
    }
  }
  return { transaction, isAnomaly };
};

export const getTransactions = async (userId) => {
  return prisma.transaction.findMany({
    where: { userId },
    include: { category: true },
    orderBy: { date: "desc" },
  });
};

export const deleteTransaction = async (userId, id) => {
  const transaction = await prisma.transaction.findFirst({
    where: { id, userId },
  });

  if (!transaction) {
    throw new Error("Transaction not found");
  }

  return prisma.transaction.delete({
    where: { id },
  });
};
