export interface PinState {
  pins: { [email: string]: string };
}

import rootReducer from './rootReducers'; // Import your combined reducers here

export type RootState = ReturnType<typeof rootReducer>;

