import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  /**
   * Set expenses content dynamically based on whether or not there are expenses for the filtered
   * value
   */
  // let expensesContent = <p>No expenses found.</p>;

  // if (props.items.length > 0) {
  //   expensesContent = props.items.map((expense) => (
  //     <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
  //   ));
  // }
  // return expensesContent;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
      ))}
    </ul>
  );
};
export default ExpensesList;
