import axiosInstance from "../api/axios";

const getCategories = async () => {
  const res = await axiosInstance.get("/categories");
  return res.data;
};

const createCategory = async (data) => {
  const res = await axiosInstance.post("/categories", data);
  return res.data;
};

const deleteCategory = async (id) => {
  const res = await axiosInstance.delete(`/categories/${id}`);
  return res.data;
};

export default {
  getCategories,
  createCategory,
  deleteCategory
};