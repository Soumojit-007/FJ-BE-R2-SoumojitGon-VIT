import Joi from "joi";
Joi.date()
import {
  createTransaction,
  getTransactions,
  deleteTransaction,
} from "./transaction.service.js";

export const create = async (req, res) => {
  try {
    const data = {
        ...req.body,
        date : new Date(req.body.date)
    }
    const result = await createTransaction(req.user.userId, data);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const transactions = await getTransactions(req.user.userId);
    res.json(transactions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    await deleteTransaction(req.user.userId, req.params.id);
    res.json({ message: "Transaction deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};