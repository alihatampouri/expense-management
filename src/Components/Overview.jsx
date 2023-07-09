const Overview = ({ expense, income }) => {
  return (
    <>
      <div className="flex justify-between border rounded font-bold text-gray-700 p-2 mb-4">
        <h2>balance:</h2>
        <span>{expense - income}$</span>
      </div>
      <div className="columns-2">
        <div className="border rounded p-2">
          <h3 className="mb-1">Income</h3>
          <span className="text-xl font-bold text-green-500">{income}$</span>
        </div>
        <div className="border rounded p-2">
          <h3 className="mb-1">Expense</h3>
          <span className="text-xl font-bold text-red-500">{expense}$</span>
        </div>
      </div>
    </>
  );
};

export default Overview;
