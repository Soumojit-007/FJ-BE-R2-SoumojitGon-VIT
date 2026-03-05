import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-5">

      <h2 className="text-xl font-bold mb-6">
        Menu
      </h2>

      <nav className="flex flex-col gap-3">

        <Link className="hover:bg-gray-700 p-2 rounded" to="/dashboard">
          Dashboard
        </Link>

        <Link className="hover:bg-gray-700 p-2 rounded" to="/transactions">
          Transactions
        </Link>

        <Link className="hover:bg-gray-700 p-2 rounded" to="/categories">
          Categories
        </Link>

        <Link className="hover:bg-gray-700 p-2 rounded" to="/budgets">
          Budgets
        </Link>

        <Link className="hover:bg-gray-700 p-2 rounded" to="/reports">
          Reports
        </Link>

        <Link className="hover:bg-gray-700 p-2 rounded" to="/bank-import">
          Bank Import
        </Link>

        <Link className="hover:bg-gray-700 p-2 rounded" to="/ai-insights">
          AI Insights
        </Link>

      </nav>

    </div>
  );
};

export default Sidebar;