import "./ExpenseForm.css";
import React, { useState } from "react";

/**
 * Note two way data binding example!
 */
const ExpenseForm = (props) => {
  // Multistate approach
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //   // Dont do this ! this is bad code !
    //   // Never update state that depends on previous state this way
    //   setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    //   });

    //   // Do this instead, to operate on the latest state snapshot
    //   setUserInput((prevState) => {
    //     return {
    //       ...prevState,
    //       enteredTitle: event.target.value,
    //     };
    //   });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    // Prevents the page from reloading on submit
    // PAge will auto send request to server without this
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // Bottom-up communication   child -> parent
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={enteredTitle} type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input value={enteredAmount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input value={enteredDate} type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
