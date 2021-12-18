import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/UI/Card";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Death Note",
      amount: 9324.12,
      date: new Date(2006, 7, 14),
    },
    {
      id: "e3",
      title: "2 kg Vibranium",
      amount: 2342.22,
      date: new Date(2012, 3, 12),
    },
    {
      id: "e4",
      title: "Mind Stone",
      amount: 4.12,
      date: new Date(2023, 6, 25),
    },
  ];

  return (
    <div className="App">
      <Card className="expenses">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default App;
