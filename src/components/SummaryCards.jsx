import { transactions } from "../data/mockData";

function SummaryCards() {
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, t) => a + t.amount, 0);

  const expenses = transactions
    .filter(t => t.type === "expense")
    .reduce((a, t) => a + t.amount, 0);

  const balance = income - expenses;

  const cards = [
    { title: "Total Balance", value: balance, color: "text-indigo-600" },
    { title: "Income", value: income, color: "text-green-600" },
    { title: "Expenses", value: expenses, color: "text-red-600" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((c, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-sm text-gray-500">{c.title}</p>
          <h2 className={`text-3xl font-bold mt-1 ${c.color}`}>
            ₹ {c.value.toLocaleString("en-IN")}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;