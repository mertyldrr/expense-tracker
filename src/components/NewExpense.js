import React, { useState } from 'react';
import NewExpenseForm from './ExpenseForm';
import styles from './NewExpense.module.css';

const NewExpense = ({ setExpenses }) => {

  const [clickFlag, setClickFlag] = useState(false);

  const onClickHandler = () => {
    setClickFlag(true);
  }

  return (
    <div>
      <div className={styles["new-expense"]}>
        {!clickFlag && <button onClick={onClickHandler}>Add New Expense</button>}
        {clickFlag && <NewExpenseForm setClickFlag={setClickFlag} setExpenses={setExpenses} />}
      </div>
    </div>

  )
}

export default NewExpense;