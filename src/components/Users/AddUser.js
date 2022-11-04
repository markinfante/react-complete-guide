import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import React, { useRef, useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  /**
   * Use refs instead of state when only need to read values
   */
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({ title: "Invalid Input", message: "Please enter a valid name and age (non-empty values)" });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({ title: "Invalid Age", message: "Please enter a valid age (> 0)" });
      return;
    }

    props.onAddUser({
      id: Math.random().toString(),
      name: enteredName,
      age: enteredUserAge,
    });

    // Should almost never do this,. but used here for example
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input ref={nameInputRef} id="username" type="text" />
          <label htmlFor="age">Age</label>
          <input ref={ageInputRef} id="age" type="number" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
