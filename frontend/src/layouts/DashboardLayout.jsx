import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Navbar />

        <div className="p-4 md:p-6overflow-y-auto">
          {children}
        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;