import { useState } from "react";
import SummaryCards from "./components/SummaryCards";
import CategoryChart from "./components/CategoryChart";
import CustomLineChart from "./components/LineChart";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";

function App() {
  const [role, setRole] = useState("viewer");

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <div className="max-w-6xl mx-auto p-6 space-y-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">
              Finance Dashboard
            </h1>
            <p className="text-sm text-gray-500">
              Track your financial activity
            </p>
          </div>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="bg-white border px-3 py-2 rounded-md"
          >
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <SummaryCards />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CategoryChart />
          <CustomLineChart />
        </div>

        <Transactions role={role} />
        <Insights />
      </div>
    </div>
  );
}

export default App;