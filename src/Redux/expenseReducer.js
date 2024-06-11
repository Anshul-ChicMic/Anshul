import { ADD_EXPENSE } from './actionTypes';

const initialState = {
  expenses: []
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      };
    default:
      return state;
  }
};

export default expenseReducer;
