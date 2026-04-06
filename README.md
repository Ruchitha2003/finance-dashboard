# 💰 Finance Dashboard UI

## 📌 Overview

This project is a simple Finance Dashboard UI built as part of an assignment.

The idea was to create a clean and easy-to-understand interface where users can:

* quickly see their financial summary
* explore their transactions
* understand spending patterns

I focused more on **clarity and usability** rather than making the UI overly complex.

---

## 🧠 How I Approached This

Before starting, I tried to think like a user:

> *“If I open a finance dashboard, what do I want to see first?”*

My answer was:

1. My total balance
2. How much I earned and spent
3. Where my money is going
4. A way to explore all transactions

Based on that, I structured the dashboard.

---

## 🏗️ Structure of the Dashboard

I designed the layout in a simple flow:

* **Top → Summary Cards**
  Shows total balance, income, and expenses

* **Middle → Charts**
  Helps understand spending:

  * by category
  * over time

* **Below → Transactions Table**
  Lets users search and filter their data

* **Bottom → Insights**
  Gives quick observations from the data

This way, the user can go from **overview → details → insights** easily.

---

## 🧩 Components

To keep things organized, I split the UI into components:

* `SummaryCards` → shows balance, income, expenses
* `CategoryChart` → spending breakdown
* `LineChart` → trend over time
* `Transactions` → table with search and filters
* `Insights` → simple derived information

This made the code easier to manage and understand.

---

## 🔄 State Management

I used simple React state (`useState`) for:

* filtering transactions
* search input
* role switching (viewer/admin)

Since the app is small, I kept it simple instead of using complex state libraries.

---

## 👤 Role-Based UI

I added a basic role system:

* **Viewer** → can only view data
* **Admin** → sees an option to add transactions

This is just simulated on the frontend to show how UI can change based on roles.

---

## 📊 Data & Logic

* Used mock data for transactions
* Calculated totals using `filter` and `reduce`
* Generated insights (like highest spending category) from the same data

---

## 🎨 Design Choices

I didn’t try to over-design the UI. Instead, I focused on:

* clean layout
* consistent spacing
* readable text
* simple color usage

The goal was to make the dashboard feel **clear and usable**, not complicated.

---

## ⚙️ Tech Stack

* React (Vite)
* Tailwind CSS
* Recharts

---

## 🚀 Features

* Financial summary (balance, income, expenses)
* Spending visualization (category + timeline)
* Transaction list with search and filters
* Role-based UI (viewer/admin)
* Basic insights from data
* Responsive layout

---

## ▶️ How to Run

```bash
npm install
npm run dev
```

---

## 🔮 If I Had More Time

I would:

* connect to a real backend
* allow adding/editing transactions
* improve charts with more interactions
* add authentication
* add dark mode

---

## ✨ Final Thoughts

This project helped me focus on:

* how to structure a UI
* how to present data clearly
* how to keep things simple but useful

I tried to balance **functionality + clarity**, rather than making it overly complex.
