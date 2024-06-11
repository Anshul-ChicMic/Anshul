import { ADD_INCOME } from "./actionTypes";

const initialState = {
  incomes: []
};

const incomeReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case ADD_INCOME:
  return {
    ...state,
    incomes: [...state.incomes, action.payload]
  };
    default:
      return state;
  }
};

export default incomeReducer;