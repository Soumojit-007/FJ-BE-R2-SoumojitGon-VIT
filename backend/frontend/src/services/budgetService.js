import axiosInstance from "../api/axios";

const setBudget = async (data) => {
  const res = await axiosInstance.post("/budgets", data);
  return res.data;
};

const getBudgetStatus = async (categoryId, month, year) => {
  const res = await axiosInstance.get(
    `/budgets/status?categoryId=${categoryId}&month=${month}&year=${year}`
  );
  return res.data;
};

export default {
  setBudget,
  getBudgetStatus
};