import axiosInstance from "../api/axios";

const register = async (data) => {
  const res = await axiosInstance.post("/auth/register", data);
  return res.data;
};

const login = async (data) => {
  const res = await axiosInstance.post("/auth/login", data);
  return res.data;
};

const googleLogin = () => {
  window.location.href = "http://localhost:5000/api/auth/google";
};

export default {
  register,
  login,
  googleLogin
};