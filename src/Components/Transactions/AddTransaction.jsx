import { useRef, useState } from "react";

const AddTransaction = ({ onAdd }) => {
  const typeInput = useRef(null);

  const initForm = {
    type: "",
    amount: "",
    description: "",
  };

  const [form, setForm] = useState(initForm);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm(initForm);
    typeInput.current.focus();
  };

  return (
    <section className="border rounded py-3 px-4 my-5">
      <h2>Add new transaction</h2>
      <form className="mt-2" onSubmit={onSubmitHandler}>
        <select
          name="type"
          className="rounded border-2 focus:border-gray-400 outline-none w-full my-2 py-1 px-2 transition-all"
          onChange={changeHandler}
          value={form.type}
          ref={typeInput}
        >
          <option value="" disabled>
            Select Type
          </option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          name="amount"
          type="number"
          className="rounded border-2 focus:border-gray-400 outline-none w-full my-2 py-1 px-2 transition-all"
          placeholder="Amount"
          onChange={changeHandler}
          value={form.amount}
        />
        <input
          name="description"
          type="text"
          className="rounded border-2 focus:border-gray-400 outline-none w-full my-2 py-1 px-2 transition-all"
          placeholder="Description"
          onChange={changeHandler}
          value={form.description}
        />
        <button className="bg-gray-500 hover:bg-gray-700 text-white rounded pb-2 pt-1 mt-4 w-full transition-all">
          Add transaction
        </button>
      </form>
    </section>
  );
};

export default AddTransaction;
