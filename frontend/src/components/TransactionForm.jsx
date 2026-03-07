import { useState, useEffect } from "react";
import transactionService from "../services/transactionService";
import categoryService from "../services/categoryService";
const TransactionForm = ({ refresh }) => {
  const [categories, setCategories] = useState([]);

  const [form, setForm] = useState({
    type: "expense",
    amount: "",
    currency: "INR",
    description: "",
    date: "",
    categoryId: "",
    exchangeRate: 1,
  });

  useEffect(() => {
    const loadCategories = async () => {
      const data = await categoryService.getCategories();
      setCategories(data);
    };

    loadCategories();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      amount: Number(form.amount),
      exchangeRate: Number(form.exchangeRate),
    };

    console.log("Transaction data:", payload);
    try {
      await transactionService.createTransaction(payload);
      refresh();
    } catch (error) {
      console.error(error.response?.data);
      alert(error.response?.data?.error || "Transaction failed");
    }
  };
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">Add Transaction</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          name="type"
          className="border p-2 rounded"
          onChange={handleChange}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          className="border p-2 rounded"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          className="border p-2 rounded md:col-span-2"
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          className="border p-2 rounded"
          onChange={handleChange}
          required
        />

        <select
          name="categoryId"
          className="border p-2 rounded"
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>

          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <button className="bg-blue-600 text-white py-2 rounded md:col-span-2 hover:bg-blue-700">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
