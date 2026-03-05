import axiosInstance from "../api/axios";

const getTransactions = async () => {
  const res = await axiosInstance.get("/transactions");
  return res.data;
};

const createTransaction = async (data) => {
  const res = await axiosInstance.post("/transactions", data);
  return res.data;
};

const deleteTransaction = async (id) => {
  const res = await axiosInstance.delete(`/transactions/${id}`);
  return res.data;
};

export default {
  getTransactions,
  createTransaction,
  deleteTransaction
};