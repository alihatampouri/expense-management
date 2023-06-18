import { useState } from "react";
import Overview from "./Components/Overview";
import Transactions from "./Components/Transactions/Transactions";

function App() {
  const [expence, setExpence] = useState(10000);
  const [income, setIncome] = useState(20);

  const [transactions, setTransactions] = useState([]);

  return (
    <div className="container mx-auto w-4/12">
      <header className="p-7">
        <h1 className="text-3xl text-center">Expence manager</h1>
      </header>
      <Overview expence={expence} income={income} />
      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;
