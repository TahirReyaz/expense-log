import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const onAmountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const onDateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      amount,
      date,
    };
    props.onSubmit(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={onTitleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={onAmountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={onDateChangeHandler}
            min="2021-01-01"
            max="2024-12-31"
          />
        </div>
        <div className="new-expense__acitons">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
