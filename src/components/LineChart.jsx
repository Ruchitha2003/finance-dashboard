import { transactions } from "../data/mockData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function CustomLineChart() {
  const map = {};

  transactions.forEach(t => {
    map[t.date] = (map[t.date] || 0) + t.amount;
  });

  const data = Object.keys(map).map(date => ({
    date,
    amount: map[date],
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-medium text-gray-700 mb-3">
        Spending Over Time
      </h2>

      <LineChart width={450} height={260} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line dataKey="amount" stroke="#6366f1" />
      </LineChart>
    </div>
  );
}

export default CustomLineChart;