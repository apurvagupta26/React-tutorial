import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense=(props)=>{

const [isEditing, setIsEditing] = useState(false);


const saveDataExpenseHandler=(enteredExpenseData)=>{
  
  const ExpenseData={
      ...enteredExpenseData,
    id:Math.random().toString()
  }
  console.log(ExpenseData);
  setIsEditing(false);
 props.onAddExpense(ExpenseData)
}

const startEditingHandler = () => {
  setIsEditing(true);
};

const stopEditingHandler = () => {
  setIsEditing(false);
};

return ( 
<div className="new-expense">
    {/* <ExpenseForm  onSaveExpenseData={saveDataExpenseHandler}/> */}
    {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )
    }
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveDataExpenseHandler}
          onCancel={stopEditingHandler}
        />)
      }
</div>
)
}

export default NewExpense;