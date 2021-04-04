import React, { useContext } from "react";
import { GlobalContext } from "../GlobalState/GlobalContext";

const Transaction = ({ transaction: { id, text, amount } }) => {
  const sign = amount < 0 ? "-" : "+";
  const classname = amount < 0 ? "minus" : "plus";
  const { delTran } = useContext(GlobalContext);
  return (
    <li className={classname}>
      {text}{" "}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button className="delete-btn" onClick={() => delTran(id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
