import React, { useContext } from "react";
import { GlobalContext } from "../GlobalState/GlobalContext";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // Calculate Balance
  const balance = transactions
    .map((transaction) => transaction.amount)
    .reduce((pre, curr) => pre + curr, 0);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${balance.toFixed(2)}</h1>
    </div>
  );
};

export default Balance;
