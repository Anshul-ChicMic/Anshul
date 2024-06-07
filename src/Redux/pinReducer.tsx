// pinReducer.js
import { Action } from 'redux';
import { SET_PIN } from './actionTypes';
import { PinState } from './type';

interface PinAction extends Action {
  type: string;
  payload: { email: string; pin: string };
}
const initialState: PinState = {
  pins: {},
};

const pinReducer = (state = initialState, action: PinAction) => {
  switch (action.type) {
    case SET_PIN:
      return {
        ...state,
        pins: {
          ...state.pins,
          [action.payload.email]: action.payload.pin,
        },
      };
    default:
      return state;
  }
};

export default pinReducer;




// Export the pinReducer function



