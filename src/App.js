import { useState } from "react";
import Overview from "./Components/Overview";
import Transactions from "./Components/Transactions/Transactions";

function App() {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const [transactions, setTransactions] = useState([]);

  const AddTransactionHandler = (newItem) => {
    if (newItem.type === "expense") {
      setExpense((val) => val + Number(newItem.amount));
    } else if (newItem.type === "income") {
      setIncome((val) => val + Number(newItem.amount));
    }

    setTransactions([...transactions, { ...newItem, id: Date.now() }]);
  };

  return (
    <div className="container mx-auto w-4/12">
      <header className="p-7">
        <h1 className="text-3xl text-center">Expense manager</h1>
      </header>
      <Overview expense={expense} income={income} />
      <Transactions transactions={transactions} onAdd={AddTransactionHandler} />
    </div>
  );
}

export default App;
