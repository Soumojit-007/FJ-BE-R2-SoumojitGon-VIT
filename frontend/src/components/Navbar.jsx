import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { logout, user } = useAuth();

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 md:px-6 py-4 bg-gray-900 text-white shadow gap-2">

      <h1 className="text-xl font-semibold">
        Finance Tracker
      </h1>

      <div className="flex items-center gap-4">

        <div className="bg-gray-700 px-3 py-1 rounded text-sm">
          {user?.email || "User"}
        </div>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded"
        >
          Logout
        </button>

      </div>

    </div>
  );
};

export default Navbar;