import { useState } from "react";
import axios from "../api/axios";

const AIInsights = () => {
  const [insight, setInsight] = useState("");

  const generate = async () => {
    const res = await axios.get("/ai/insights");
    setInsight(res.data);
  };

  return (
    <div className="bg-white shadow rounded p-4 md:p-6 w-full max-w-lg">

      <h2 className="font-semibold mb-4">
        AI Financial Insights
      </h2>

      <button
        onClick={generate}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Generate Insights
      </button>

      {insight && (
        <p className="mt-4 text-gray-700">
          {insight}
        </p>
      )}

    </div>
  );
};

export default AIInsights;