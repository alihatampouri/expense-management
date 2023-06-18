import { useState } from "react";
import AddTransaction from "./AddTransaction";

const Transactions = () => {
  const [showInsertForm, setShowInsertForm] = useState(0);

  const ClickHandler = () => {
    setShowInsertForm((val) => !val);
  };

  return (
    <section className="mt-7">
      <div className="flex justify-between">
        <h2 className="font-bold">Transactions</h2>
        <button
          className="bg-gray-700 hover:bg-black text-white px-2 pb-1 rounded-md transition-all"
          onClick={ClickHandler}
        >
          {showInsertForm ? `Cancel` : `Add`}
        </button>
      </div>
      {showInsertForm ? <AddTransaction /> : ``}
      <input
        type="text"
        className="rounded border-2 focus:border-gray-400 outline-none w-full my-2 py-1 px-2 transition-all"
        placeholder="Search..."
      />
    </section>
  );
};

export default Transactions;
