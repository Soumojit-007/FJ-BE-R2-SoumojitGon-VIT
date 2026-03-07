import { useState, useEffect } from "react";
import reportService from "../services/reportService";

const Reports = () => {

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [report, setReport] = useState(null);

  const loadReport = async () => {
    const data = await reportService.getMonthlyReport(month, year);
    setReport(data);
  };

  useEffect(() => {
    loadReport();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    loadReport();
  };

  return (
    <div className="space-y-6">

      {/* Filter Card */}
      <div className="bg-white shadow rounded p-6">

        <h2 className="text-lg font-semibold mb-4">
          Generate Monthly Report
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 md:items-end"
        >

          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Month</label>
            <input
              type="number"
              min="1"
              max="12"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Year</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="border p-2 rounded"
            />
          </div>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Generate
          </button>

        </form>

      </div>

      {/* Report Result */}
      {report && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

          <div className="bg-white shadow rounded p-6">
            <h3 className="text-gray-500">Total Income</h3>
            <p className="text-2xl font-bold text-green-600">
              ₹ {report.totalIncome}
            </p>
          </div>

          <div className="bg-white shadow rounded p-6">
            <h3 className="text-gray-500">Total Expense</h3>
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
      )}

    </div>
  );
};

export default Reports;