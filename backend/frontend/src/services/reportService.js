import axiosInstance from "../api/axios";

const getMonthlyReport = async (month, year) => {
  const res = await axiosInstance.get(
    `/reports/monthly?month=${month}&year=${year}`
  );
  return res.data;
};

export default {
  getMonthlyReport
};