// actions.js
import { SET_PIN } from './actionTypes';

export const setPin = ({ email, pin }) => ({
  type: SET_PIN,
  payload: { email, pin },
});
