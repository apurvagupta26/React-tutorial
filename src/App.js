import './App.css';
import Expenses  from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES=[
  {title:'Car Insurance',date:new Date(2020, 7, 14),amount:294.67},
  {title:'TV Insurance',date:new Date(2021, 2, 28),amount:200.67},
  {title:'Medical Insurance',date:new Date(2021, 5, 12),amount:287.67} 
]

const App=()=> {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);

  const addExpenseHandler=(expense)=>{
  // console.log("In App.js")
  // console.log(expense);
  setExpenses((prevExpenses)=>{
    console.log([expense,...prevExpenses])
   return [expense,...prevExpenses];  
  });
}

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses} /> 
    </div> 
  );
}

export default App;
