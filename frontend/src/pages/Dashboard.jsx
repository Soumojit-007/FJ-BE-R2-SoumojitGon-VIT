import { useEffect, useState } from "react";
import reportService from "../services/reportService";

const Dashboard = () => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    const load = async () => {
      const month = new Date().getMonth() + 1;
      const year = new Date().getFullYear();
      const data = await reportService.getMonthlyReport(month, year);
      setReport(data);
    };
    load();
  }, []);

  if (!report) return <div className="p-6">Loading...</div>;

  return (
    <div className="grid grid-cols-3 gap-6">

      <div className="bg-white shadow rounded p-6">
        <h3 className="text-gray-500">Income</h3>
        <p className="text-2xl font-bold text-green-600">
          ₹ {report.totalIncome}
        </p>
      </div>

      <div className="bg-white shadow rounded p-6">
        <h3 className="text-gray-500">Expense</h3>
        <p className="text-2xl font-bold text-red-600">
          ₹ {report.totalExpense}
        </p>
      </div>

      <div className="bg-white shadow rounded p-6">
        <h3 className="text-gray-500">Savings</h3>
        <p className="text-2xl font-bold text-blue-600">
          ₹ {report.savings}
        </p>
      </div>

    </div>
  );
};

export default Dashboard;