import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { v1 as uuid } from "uuid";

// Initial State
const initialState = {
  transactions: [],
};

// GlobalContext
export const GlobalContext = createContext(initialState);

// GlobalProvider
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Actions

  const addTransaction = (text, amount, transactiontType) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        id: uuid(),
        text: text,
        amount:
          transactiontType === "income" ? parseInt(amount) : -parseInt(amount),
      },
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        dispatchMethod: dispatch,
        addTran: addTransaction,
        delTran: deleteTransaction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
