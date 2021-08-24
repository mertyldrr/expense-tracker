import React, { useState } from 'react';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import styles from './Expenses.module.css';

const Expenses = ({ items }) => {

  const [selectedYear, setSelectedYear] = useState('2021');

  // We are passing this function to the child component as a props (ExpensesFilter.js) and getting parameter(selectedYear) to this component. Lastly, we are setting state with that information.
  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  // filter returns a new array
  const filterExpenses = items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  })



  return (
    <Card className={styles.expenses}>
      <ExpensesFilter selectedYear={selectedYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList items={filterExpenses} />
    </Card>
  )
}

export default Expenses;