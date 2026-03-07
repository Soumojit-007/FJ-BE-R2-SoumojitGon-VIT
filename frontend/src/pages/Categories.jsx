import { useEffect, useState } from "react";
import categoryService from "../services/categoryService";
import CategoryForm from "../components/CategoryForm";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const load = async () => {
    const data = await categoryService.getCategories();
    setCategories(data);
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id) => {
    await categoryService.deleteCategory(id);
    load();
  };

  return (
    <div className="space-y-6">

      <CategoryForm refresh={load} />

      <div className="bg-white shadow rounded md:p-6">

        <h2 className="text-lg font-semibold mb-4">
          Categories
        </h2>

        {categories.length === 0 ? (
          <p className="text-gray-500">No categories created yet.</p>
        ) : (
          <ul className="flex flex-col gap-3">

            {categories.map((c) => (
              <li
                key={c.id}
                className="flex justify-between items-center border-b pb-2"
              >

                <div className="flex items-center gap-3">

                  <span className="font-medium">
                    {c.name}
                  </span>

                  {c.type && (
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        c.type === "income"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {c.type}
                    </span>
                  )}

                </div>

                <button
                  onClick={() => remove(c.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>

              </li>
            ))}

          </ul>
        )}

      </div>

    </div>
  );
};

export default Categories;