import { useState } from "react";
import authService from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const change = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
        await authService.register(form);
        toast.success("Registration Successful...")
        navigate("/login");
    } catch (error) {
        toast.error(
            error.response?.data?.message || "Registration failed..."
        )
        
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={submit} className="flex flex-col gap-4">

          <input
            name="name"
            placeholder="Full Name"
            onChange={change}
            className="border p-2 rounded"
            required
          />

          <input
            name="email"
            placeholder="Email"
            onChange={change}
            className="border p-2 rounded"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={change}
            className="border p-2 rounded"
            required
          />

          <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
            Register
          </button>

        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Register;