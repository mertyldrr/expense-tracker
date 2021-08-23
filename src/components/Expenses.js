import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'

const Expenses = ({ items }) => {

  const [selectedYear, setSelectedYear] = useState('2021');

  // We are passing this function to the child component as a props (ExpensesFilter.js) and getting parameter(selectedYear) to this component. Lastly, we are setting state with that information.
  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filterExpenses = items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  })

  const filteredExpenses = filterExpenses.map((item, index) => {
    return (
      <ExpenseItem
        key={index}
        date={item.date}
        amount={item.amount}
        title={item.title}
      />
    )
  })

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={selectedYear} onChangeFilter={filterChangeHandler} />
      {filteredExpenses}
    </Card>
  )
}

export default Expenses;