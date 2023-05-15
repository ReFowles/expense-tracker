import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

function Expenses(props) {
  const items = props.items;

  const [filteredYear, setFilteredYear] = useState('2022');

  const onChangedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangedYear={onChangedYearHandler}
        />
        {items
          .filter((expense) => expense.date.getFullYear().toString() === filteredYear )
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
