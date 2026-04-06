# 💰 Finance Dashboard UI

## 📸 Preview

<img width="588" height="691" alt="image" src="https://github.com/user-attachments/assets/99e1497b-666c-4fc0-8cdd-42db93831dff" />


## 📌 Overview

This project is a simple Finance Dashboard UI built as part of an assignment.

The goal was to create a clean and easy-to-understand interface where users can:

* quickly view their financial summary
* explore their transactions
* understand spending patterns

I focused more on clarity and usability rather than making the UI overly complex.

---

## 🧠 Approach

Before starting, I tried to think from a user’s perspective:

**“If I open a finance dashboard, what would I want to see first?”**

The answer was:

* Total balance
* Income vs expenses
* Where the money is going
* A way to explore transactions

Based on this, I structured the dashboard accordingly.

---

## 🏗️ Layout Structure

The dashboard follows a simple top-to-bottom flow:

* **Top → Summary Cards**
  Shows total balance, income, and expenses

* **Middle → Charts**
  Helps understand spending:

  * by category
  * over time

* **Below → Transactions Table**
  Allows searching and filtering

* **Bottom → Insights**
  Displays quick observations from the data

This flow helps users move from overview → details → insights smoothly.

---

## 🧩 Components

To keep the code organized, I split the UI into reusable components:

* `SummaryCards` → balance, income, expenses
* `CategoryChart` → spending breakdown
* `LineChart` → spending trend
* `Transactions` → table with search & filters
* `Insights` → derived information

This made the code easier to maintain and scale.

---

## 🔄 State Management

I used simple React state (`useState`) for:

* filtering transactions
* search input
* role switching (viewer/admin)

Since the application is small, I avoided adding unnecessary complexity.

---

## 👤 Role-Based UI

I implemented a basic role system:

* **Viewer** → can only view data
* **Admin** → can add transactions

This is simulated on the frontend to demonstrate role-based UI behavior.

---

## 📊 Data & Logic

* Used mock transaction data
* Calculated totals using `filter` and `reduce`
* Generated insights (e.g., highest spending category)

---

## 🎨 Design Choices

Instead of over-designing, I focused on:

* clean layout
* consistent spacing
* readable typography
* simple color usage

The goal was to keep the dashboard clear and user-friendly.

---

## ⚙️ Tech Stack

* React (Vite)
* Tailwind CSS
* Recharts

---

## 🚀 Features

* Financial summary (balance, income, expenses)
* Spending visualization (category & timeline)
* Transactions table with search & filters
* Role-based UI
* Basic insights
* Responsive layout

---

## ▶️ How to Run

```bash
npm install
npm run dev
```

---

## 🔮 Future Improvements

If given more time, I would:

* connect to a real backend
* allow adding/editing transactions
* enhance chart interactivity
* add authentication
* implement dark mode

---

## ✨ Final Thoughts

This project helped me focus on:

* structuring a UI properly
* presenting data clearly
* keeping things simple but effective

I aimed to balance functionality and clarity without overcomplicating the implementation.

* how to keep things simple but useful

I tried to balance **functionality + clarity**, rather than making it overly complex.
