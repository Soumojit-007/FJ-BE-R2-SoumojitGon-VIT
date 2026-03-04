import prisma from "../../config/db.js";

export const getUserProfile = async (userId) => {
  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      provider: true,
      createdAt: true,
    },
  });
};