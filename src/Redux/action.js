// actions.js
import { ADD_EXPENSE, ADD_INCOME, SET_PIN } from './actionTypes';

export const setPin = ({ email, pin }) => ({
  type: SET_PIN,
  payload: { email, pin },
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense
});
export const addIncome = (incomeData) => {
  return {
    type: ADD_INCOME,
    payload: incomeData
  };
};