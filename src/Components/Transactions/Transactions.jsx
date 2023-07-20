import { useEffect, useState } from "react";
import AddTransaction from "./AddTransaction";

const Transactions = ({ onAdd, transactions }) => {
  useEffect(() => filterTransactions(searchItem), [transactions]);

  const [showInsertForm, setShowInsertForm] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);

  const onAddHandler = (newItem) => {
    onAdd(newItem);
    setShowInsertForm(false);
  };

  const searchChangeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };

  const filterTransactions = (search) => {
    if (search) {
      const filteredItems = transactions.filter((t) =>
        t.description.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredTransactions(filteredItems);
    } else {
      setFilteredTransactions(transactions);
    }
  };

  return (
    <section className="mt-7">
      <div className="flex justify-between">
        <h2 className="font-bold">Transactions</h2>
        <button
          className="border-2 border-gray-300 hover:border-gray-400 rounded-md px-2 pb-1 transition-all"
          onClick={() => setShowInsertForm((status) => !status)}
        >
          {showInsertForm ? `Cancel` : `Add`}
        </button>
      </div>
      {showInsertForm && <AddTransaction onAdd={onAddHandler} />}
      {transactions.length ? (
        <input
          type="text"
          className="rounded border-2 focus:border-gray-400 outline-none w-full my-2 py-1 px-2 transition-all"
          placeholder="Search..."
          value={searchItem}
          onChange={searchChangeHandler}
        />
      ) : (
        <div className="text-center p-2 mt-5 text-gray-400 animate-pulse">transaction not found!</div>
      )}
      <ul>
        {filteredTransactions.map((transaction) => (
          <li
            key={transaction.id}
            className={`flex justify-between py-2 px-3 rounded-md my-2 text-white ${
              transaction.type === "income" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            <span>{transaction.description}</span>
            <span>{transaction.amount}$</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Transactions;
