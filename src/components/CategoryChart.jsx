import { transactions } from "../data/mockData";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

function CategoryChart() {
  const map = {};

  transactions
    .filter(t => t.type === "expense")
    .forEach(t => {
      map[t.category] = (map[t.category] || 0) + t.amount;
    });

  const data = Object.keys(map).map(k => ({
    name: k,
    value: map[k],
  }));

  const COLORS = ["#6366f1", "#10b981", "#f59e0b"];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-medium text-gray-700 mb-3">
        Spending by Category
      </h2>

      <PieChart width={320} height={260}>
        <Pie data={data} dataKey="value" outerRadius={90}>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default CategoryChart;