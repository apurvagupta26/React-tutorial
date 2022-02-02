import './App.css';
import Expenses  from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App=()=> {

  const expenses=[
    {title:'Car Insurance',date:new Date(2020, 7, 14),amount:294.67},
    {title:'TV Insurance',date:new Date(2021, 2, 28),amount:200.67},
    {title:'Medical Insurance',date:new Date(2021, 5, 12),amount:287.67}
     
  ]

  const addExpenseHandler=(expenses)=>{
  console.log("In App.js")
  console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses} /> 
    </div> 
  );
}

export default App;
