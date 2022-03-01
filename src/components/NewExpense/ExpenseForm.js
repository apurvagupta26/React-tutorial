import React,{useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {

  const [enteredTitle,setEnteredTitle]=useState('')
// const [userInput,setUserInput]=useState(
//     {
//         enteredTitle:'',
//         enteredAmount:'',
//         enteredDate:''
//     }
// );

    const TitleChangeHandler=(event)=>{
        let InputValue=event.target.value;
        setEnteredTitle(InputValue);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:InputValue
        // })

        // setUserInput((prevState)=>{
        //     return {...prevState,InputValue}
        // })
    }

    const [enteredAmount,setEnteredAmount]=useState('');
    const AmountChangeHandler=(event)=>{
        let amountValue=event.target.value;
        setEnteredAmount(amountValue);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:amountValue
        // })

        // setUserInput((prevState)=>{
        //     return {...prevState,amountValue}
        // })
    }

    const [enteredDate, setEnteredDate]=useState('');
    const dateChangeHandler=(event)=>{
        let dateValue=event.target.value;
        setEnteredDate(dateValue);
        // setUserInput({
        //     ...userInput,
        //     enteredDate:dateValue
        // })
        // setUserInput((prevState)=>{
        //     return {...prevState,dateValue}
        // })
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        // const expenseData={
        //     InputValue: userInput.InputValue,
        //     amountValue: userInput.amountValue,
        //     dateValue: userInput.dateValue
        // }

        const expenseData={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        
        props.onSaveExpenseData(expenseData);

        // console.log(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={TitleChangeHandler} />
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type='text' min="0.01" step="0.01" value={enteredAmount}  onChange={AmountChangeHandler} />
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit"> Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;