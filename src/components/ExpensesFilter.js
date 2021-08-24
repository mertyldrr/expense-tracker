import React from 'react';
import styles from './ExpensesFilter.module.css';

const ExpensesFilter = ({ selectedYear, onChangeFilter }) => {
  // Controlled component by Expenses.js
  const filterChangeHandler = (e) => {
    onChangeFilter(e.target.value);
  }

  return (
    <div className={styles["expenses-filter"]}>
      <div className={styles["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select value={selectedYear} onChange={filterChangeHandler}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  )

}

export default ExpensesFilter;