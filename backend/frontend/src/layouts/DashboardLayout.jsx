import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Navbar />

        <div className="p-6 overflow-y-auto">
          {children}
        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;