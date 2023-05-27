import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);

  const formDisplayHandler = () => {
    isFormDisplayed === false
      ? setIsFormDisplayed(true)
      : setIsFormDisplayed(false);
  };

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {isFormDisplayed === false ? (
        <button onClick={formDisplayHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={formDisplayHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
