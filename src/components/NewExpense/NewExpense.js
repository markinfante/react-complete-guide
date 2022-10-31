import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formShown, setFormShown] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const toggleForm = (event) => {
    setFormShown((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="new-expense">
      {formShown ? (
        <ExpenseForm onCancelExpenseData={toggleForm} onSaveExpenseData={saveExpenseDataHandler} />
      ) : (
        <button type="button" onClick={toggleForm}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
