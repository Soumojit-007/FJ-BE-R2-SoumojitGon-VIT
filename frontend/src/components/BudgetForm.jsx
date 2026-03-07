import { useState, useEffect } from "react";
import categoryService from "../services/categoryService";
import budgetService from "../services/budgetService";

const BudgetForm = () => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    categoryId: "",
    monthlyLimit: "",
    month: "",
    year: ""
  });

  useEffect(() => {
    const load = async () => {
      const data = await categoryService.getCategories();
      setCategories(data);
    };
    load();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const payload = {
    ...form,
    month: Number(form.month),
    year: Number(form.year),
    monthlyLimit: Number(form.monthlyLimit)
  };
    await budgetService.setBudget(payload);
    alert("Budget set successfully");
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded shadow w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">Set Monthly Budget</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <select
          name="categoryId"
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <input
          name="monthlyLimit"
          placeholder="Monthly Limit"
          type="number"
          className="border p-2 rounded"
          onChange={handleChange}
          required
        />

        <input
          name="month"
          placeholder="Month (1-12)"
          className="border p-2 rounded"
          onChange={handleChange}
          required
        />

        <input
          name="year"
          placeholder="Year"
          className="border p-2 rounded"
          onChange={handleChange}
          required
        />

        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Set Budget
        </button>

      </form>
    </div>
  );
};

export default BudgetForm;