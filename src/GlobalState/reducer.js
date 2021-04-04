export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "DELETE_TRANSACTION":
      const updatedTransactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
      return {
        ...state,
        transactions: updatedTransactions,
      };
    default:
      return state;
  }
};
