import { combineReducers } from 'redux';
import pinReducer from './pinReducer';

const rootReducer = combineReducers({
  pin: pinReducer,
  // Add other reducers here
});

export default rootReducer;

