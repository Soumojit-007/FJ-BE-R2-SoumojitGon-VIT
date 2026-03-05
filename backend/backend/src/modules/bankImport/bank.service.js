import prisma from "../../config/db.js";
import fs from "fs";
import csv from "csv-parser";
import { isDuplicateTransaction } from "../../utils/duplicateDetection.js";

export const importBankCSV = async (userId, filePath) => {
  const results = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", async () => {
        const existing = await prisma.transaction.findMany({
          where: { userId },
        });

        for (const row of results) {
          const incoming = {
            date: row.date,
            amount: parseFloat(row.amount),
            description: row.description,
          };

          const duplicate = isDuplicateTransaction(existing, incoming);

          if (!duplicate) {
            await prisma.transaction.create({
              data: {
                userId,
                type: incoming.amount > 0 ? "income" : "expense",
                amount: Math.abs(incoming.amount),
                currency: "INR",
                exchangeRate: 1,
                description: incoming.description,
                date: new Date(incoming.date),
                categoryId: null, // later auto-categorize
              },
            });
          }
        }

        resolve({ message: "Bank data imported successfully" });
      })
      .on("error", reject);
  });
};