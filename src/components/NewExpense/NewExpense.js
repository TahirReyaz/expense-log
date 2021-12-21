import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveData = (data) => {
    const expenseData = {
      ...data,
      date: new Date(data.date),
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmit={saveData} />
    </div>
  );
};

export default NewExpense;
