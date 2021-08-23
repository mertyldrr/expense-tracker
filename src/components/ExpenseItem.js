import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

import './ExpenseItem.css'

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <div>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </div>
  )
}

export default ExpenseItem;