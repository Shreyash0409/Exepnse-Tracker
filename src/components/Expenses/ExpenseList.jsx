import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  //! This type of rendering is called the conditional rendering depending on the condition we return the JSX code which we want to return. 
  if (props.items.length === 0) {
    return <h2 className = 'expenses-list__fallback'>No Expenses Found.</h2>;
  }
  return (
    <ul className = "expenses-list">
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};
export default ExpenseList;
