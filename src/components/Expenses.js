import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

const Expenses = ({ items }) => {
  const allExpenses = items.map((item) => {
    return (
      <ExpenseItem 
        date={item.date}
        amount={item.amount}
        title={item.title}
      />
    )
  })

  return (
    <div className="expenses">
      {allExpenses}
    </div>
  )
}

export default Expenses;