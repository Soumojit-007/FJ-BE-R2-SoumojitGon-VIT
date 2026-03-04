import prisma from "../../config/db.js";
import { detectAnomaly } from "./anomaly.service.js";

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
    pastTransactions.map(t => Number(t.amount)),
    Number(data.amount)
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