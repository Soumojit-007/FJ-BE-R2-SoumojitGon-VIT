import { importBankCSV } from "./bank.service.js";

export const importCSV = async (req, res) => {
  try {
    const result = await importBankCSV(
      req.user.userId,
      req.file.path
    );

    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};