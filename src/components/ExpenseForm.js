import React, { useState } from 'react';
import styles from './ExpenseForm.module.css';

const ExpenseForm = ({ setExpenses, setClickFlag }) => {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // Alternative version with single state
  // const [singleState, setSingleState] = useState({
  //   title: "",
  //   amount: "",
  //   date: ""
  // });

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  }

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  }

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const newExpense = {
      title: title,
      amount: amount,
      date: new Date(date)
    }
    setExpenses((prevState) => {
      return [newExpense, ...prevState]
    })
    // To clear inputs after form submission, added value attribute to each input
    setTitle("");
    setAmount("");
    setDate("");
    setClickFlag(false);
  }

  const cancelHandler = (e) => {
    e.preventDefault();
    setClickFlag(false);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["new-expense__controls"]}>
        <div className={styles["new-expense__control"]}>
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>

        <div className={styles["new-expense__control"]}>
          <label>Amount</label>
          <input type="number" value={amount} onChange={amountChangeHandler} min="0.01" step="0.01" />
        </div>

        <div className={styles["new-expense__control"]}>
          <label>Date</label>
          <input type="date" value={date} onChange={dateChangeHandler} min="2021-01-01" max="2023-12-31" />
        </div>
      </div>
      <div className={styles["new-expense__actions"]}>
        <button type="button" onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;