import { transactions } from "../data/mockData";

function Insights() {
  const expenses = transactions.filter(t => t.type === "expense");

  const map = {};
  expenses.forEach(t => {
    map[t.category] = (map[t.category] || 0) + t.amount;
  });

  let top = "";
  let max = 0;

  for (let k in map) {
    if (map[k] > max) {
      max = map[k];
      top = k;
    }
  }

  const total = expenses.reduce((a, t) => a + t.amount, 0);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-medium text-gray-700 mb-3">
        Insights
      </h2>

      <p>
        Highest spending category:{" "}
        <span className="font-semibold text-indigo-600">{top}</span>
      </p>

      <p>
        Total expenses:{" "}
        <span className="font-semibold">
          ₹ {total.toLocaleString("en-IN")}
        </span>
      </p>
    </div>
  );
}

export default Insights;