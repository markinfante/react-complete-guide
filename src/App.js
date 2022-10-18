import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  // Dummy data
  const expenses = [
    { id: 1, title: "Car insurance", amount: 294.72, date: new Date(2022, 10, 18) },
    { id: 2, title: "Toilet paper", amount: 10.23, date: new Date(2022, 10, 18) },
    { id: 3, title: "Tickets", amount: 294.72, date: new Date(2022, 10, 18) },
    { id: 4, title: "Car insurance", amount: 294.72, date: new Date(2022, 10, 18) },
  ];
  return (
    <div className="App">
      <h2>Lets get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
    </div>
  );
}

export default App;
