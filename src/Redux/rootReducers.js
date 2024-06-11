import { combineReducers } from 'redux';
import expenseReducer from './expenseReducer';
import incomeReducer from './incomeReducers';
import pinReducer from './pinReducer';
  const rootReducer = combineReducers({
  pin: pinReducer,
  expense: expenseReducer,
  income:incomeReducer,// Add other reducers here
});

export default rootReducer;

