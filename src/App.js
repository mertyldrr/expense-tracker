import React, { useState } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

const App = () => {

  const [expenses, setExpenses] = useState([]);


  return (
    <div>
      <NewExpense 
        expenses={expenses}
        setExpenses={setExpenses} 
      />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
