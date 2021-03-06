import React, { useState, useContext } from "react";
import { GlobalContext } from "../GlobalState/GlobalContext";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("income");

  const incomeSelected = transactionType === "income";
  const expenseSelected = transactionType === "expense";

  // To get access to action add
  const { addTran } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTran(text, amount, transactionType);
    setText("");
    setAmount(0);
    setTransactionType("income");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="transaction-type">Transaction Type</label>
          <select
            id="transaxction-type"
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <option value="expense" selected={expenseSelected}>
              Expense
            </option>
            <option value="income" selected={incomeSelected}>
              Income
            </option>
          </select>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        {text.trim() && amount ? (
          <button className="btn">Add Transaction</button>
        ) : (
          <button className="btn" disabled>
            Add Transaction
          </button>
        )}
      </form>
    </>
  );
};

export default AddTransaction;
