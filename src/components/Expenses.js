import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
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
    <Card className="expenses">
      {allExpenses}
    </Card>
  )
}

export default Expenses;