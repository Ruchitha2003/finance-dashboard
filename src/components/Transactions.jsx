import { useState } from "react";
import { transactions as data } from "../data/mockData";

function Transactions({ role }) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const filtered = data
    .filter(t =>
      t.category.toLowerCase().includes(search.toLowerCase())
    )
    .filter(t =>
      type === "all" ? true : t.type === type
    );

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-medium text-gray-700 mb-4">
        Transactions
      </h2>

      {role === "admin" && (
        <button className="mb-4 bg-indigo-600 text-white px-4 py-2 rounded-md">
          + Add Transaction
        </button>
      )}

      <div className="flex gap-3 mb-4">
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded-md w-full"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border px-3 py-2 rounded-md"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <table className="w-full text-sm">
        <thead className="text-xs uppercase text-gray-500 border-b bg-gray-50">
          <tr>
            <th className="text-left py-2">Date</th>
            <th className="text-left">Category</th>
            <th className="text-left">Type</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map(t => (
            <tr key={t.id} className="border-b hover:bg-gray-50">
              <td className="py-2">{t.date}</td>
              <td>{t.category}</td>
              <td className="capitalize">{t.type}</td>
              <td className="text-right">
                ₹ {t.amount.toLocaleString("en-IN")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;