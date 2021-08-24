import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import styles from './ExpenseItem.module.css';

const ExpenseItem = ({ title, amount, date }) => {
  return (
      <li>
        <Card className={styles["expense-item"]}>
          <ExpenseDate date={date} />
          <div className={styles["expense-item__description"]}>
            <h2>{title}</h2>
            <div className={styles["expense-item__price"]}>${amount}</div>
          </div>
        </Card>
      </li>
  )
}

export default ExpenseItem;