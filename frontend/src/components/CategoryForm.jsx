import { useState } from "react";
import categoryService from "../services/categoryService";

const CategoryForm = ({ refresh }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await categoryService.createCategory({
      name,
      type
    });

    setName("");
    refresh();
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">

      <h3 className="font-semibold mb-3">Add Category</h3>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">

        <input
          className="border p-2 rounded flex-1"
          placeholder="Category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <select
          className="border p-2 rounded"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button className="bg-green-600 text-white px-4 rounded hover:bg-green-700">
          Add
        </button>

      </form>
    </div>
  );
};

export default CategoryForm;