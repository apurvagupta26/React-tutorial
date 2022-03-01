import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })




  return (
    <Card className="expenses">
       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        
       <ExpensesList items={filteredExpenses}/>
      {/* {filteredExpenses.length===0  && expensesContent}
      {filteredExpenses.length>0 &&  
       )
       } */}

      
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      /> */}
    </Card>
  );
}

export default Expenses;