import React, { useState } from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpenseFilter";
import ExpensesChart from "./components/Expenses/ExpensesChart";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Death Note",
      amount: 9324.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: "e3",
      title: "2 kg Vibranium",
      amount: 2342.22,
      date: new Date(2022, 3, 12),
    },
    {
      id: "e4",
      title: "Mind Stone",
      amount: 4343.12,
      date: new Date(2022, 7, 25),
    },
  ]);
  const [filteredYear, setFilteredYear] = useState("2021");
  const filtedredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [...prevState, expense]);
  };

  return (
    <div className="App">
      <NewExpense addExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filtedredExpenses} />
        {filtedredExpenses.length === 0 ? (
          <h2 className="expenses-list__fallback">
            No expenses found in this year
          </h2>
        ) : (
          filtedredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
}

export default App;
