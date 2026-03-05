import { useState } from "react";
import authService from "../services/authService";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
        const data = await authService.login(form);
        setToken(data.token);
        toast.success("Logged in successfully");
        navigate("/dashboard");
    } catch (error) {
        toast.error(
            error.response?.data?.message || "Login failed.."
        )
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Finance Tracker Login
        </h2>

        <form onSubmit={submit} className="flex flex-col gap-4">

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Login
          </button>

          <button
            type="button"
            onClick={authService.googleLogin}
            className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            Login with Google
          </button>

        </form>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Login;