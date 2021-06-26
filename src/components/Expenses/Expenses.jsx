import Cards from "../UI/Cards";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredyear, setFilteredYear] = useState("2020");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(filteredyear);
  };

  const filterExpense = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear
  })
  return (
    <Cards className="expenses">
      <ExpensesFilter
        selected={filteredyear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpensesChart expenses={filterExpense} />
      <ExpenseList items ={filterExpense}/>
    </Cards>
  );
};
export default Expenses;
