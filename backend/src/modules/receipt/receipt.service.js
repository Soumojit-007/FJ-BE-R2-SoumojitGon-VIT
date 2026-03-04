import prisma from "../../config/db.js";

export const attachReceipt = async (transactionId, fileUrl) => {
  return prisma.receipt.create({
    data: {
      transactionId,
      fileUrl,
    },
  });
};

export const getReceipt = async (transactionId) => {
  return prisma.receipt.findUnique({
    where: { transactionId },
  });
};