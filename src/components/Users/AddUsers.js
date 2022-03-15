import React, { useState,useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUsers = (props) => {

  // using refs instead so commenting
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");


  const [error, setError] = useState();

const nameInputRef=useRef();

const ageInputRef=useRef();

  const addUserHandler = (event) => {
    const enteredUsername=nameInputRef.current.value;
    const enteredAge= ageInputRef.current.value;
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please Enter a valid age (>0).",
      });
      return;
    }

    // console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);

    // using refs instead so commenting
    // setEnteredAge("");
    // setEnteredUsername("");

    // resetting the value when refs used 
    nameInputRef.current.value='';
    ageInputRef.current.value='';
     
  };


  // using refs instead so commenting
  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  const closeModalHandler = () => {
    setError(null);
  };

   // using refs instead so commenting
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={closeModalHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
              // using refs instead so commenting
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            // using refs instead so commenting
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUsers;
