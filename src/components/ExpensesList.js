import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ items }) => {

  let expenseContent = <h2 className="expenses-list__fallback">Found no expenses.</h2>

  if (items.length > 0) {
    expenseContent = items.map((item, index) => (
      <ExpenseItem
        key={index}
        date={item.date}
        amount={item.amount}
        title={item.title}
      />
    ))
  }

  return (
    <ul className="expenses-list">
      {expenseContent}
    </ul>
  )

}

export default ExpensesList;