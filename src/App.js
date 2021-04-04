import React from "react";
import "./App.css";
import { GlobalProvider } from "./GlobalState/GlobalContext";
import {
  AddTransaction,
  Header,
  IncomeExpense,
  TransactionList,
  Balance,
} from "./components";

const App = () => {
  return (
    <div className="container">
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
};

export default App;
