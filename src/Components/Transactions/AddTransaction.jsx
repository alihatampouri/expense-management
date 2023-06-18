const AddTransaction = () => {  
  return (
    <section className="border rounded py-3 px-4 my-5">
      <h2>Add new transaction</h2>
      <form className="mt-2">
        <select
          id="transaction-type"
          className="rounded border-2 focus:border-gray-400 outline-none w-full my-2 py-1 px-2 transition-all"
          value=""
        >
          <option value="" disabled>
            Select Type
          </option>
          <option value="expence">Expence</option>
          <option value="income">Income</option>
        </select>
        <input
          type="number"
          className="rounded border-2 focus:border-gray-400 outline-none w-full my-2 py-1 px-2 transition-all"
          placeholder="Amount"
        />
        <input
          type="text"
          className="rounded border-2 focus:border-gray-400 outline-none w-full my-2 py-1 px-2 transition-all"
          placeholder="Description"
        />
        <button className="bg-gray-500 text-white rounded pb-2 pt-1 mt-4 w-full">Add transaction</button>
      </form>
    </section>
  );
};

export default AddTransaction;
