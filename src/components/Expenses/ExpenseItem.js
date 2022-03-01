import '../Expenses/ExpenseItem.css'
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
import React,{useState} from 'react';

function ExpenseItem(props){ 
    // let title=props.title;
const [title,setTitle]=useState(props.title);
    const ClickHandler=()=>{
        setTitle('updatedValue')
    }
    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={ClickHandler}>Change Title</button>
        </Card>
        </li>
    );
}

export default ExpenseItem;