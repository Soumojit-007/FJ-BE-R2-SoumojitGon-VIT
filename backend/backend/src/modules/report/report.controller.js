import { monthlyReport } from "./report.service.js";

export const getMonthlyReport = async (req, res) => {
  try {
    const { month, year } = req.query;

    const report = await monthlyReport(
      req.user.userId,
      Number(month),
      Number(year)
    );

    res.json(report);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};