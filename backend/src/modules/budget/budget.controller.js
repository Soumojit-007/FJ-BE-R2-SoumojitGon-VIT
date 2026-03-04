import { setBudget, checkBudget } from "./budget.service.js";

export const createOrUpdate = async (req, res) => {
  try {
    const budget = await setBudget(req.user.userId, req.body);
    res.json(budget);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getStatus = async (req, res) => {
  try {
    const { categoryId, month, year } = req.query;
    const result = await checkBudget(
      req.user.userId,
      categoryId,
      Number(month),
      Number(year)
    );
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};