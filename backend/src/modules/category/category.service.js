import prisma from "../../config/db.js";

export const createCategory = async (userId, data) => {
  return prisma.category.create({
    data: {
      name: data.name,
      type: data.type,
      userId,
    },
  });
};

export const getCategories = async (userId) => {
  return prisma.category.findMany({
    where: { userId },
  });
};

export const deleteCategory = async (userId, categoryId) => {
  const existingTransactions = await prisma.transaction.findMany({
    where: { categoryId },
  });

  if (existingTransactions.length > 0) {
    throw new Error("Cannot delete category with transactions");
  }

  return prisma.category.delete({
    where: { id: categoryId },
  });
};