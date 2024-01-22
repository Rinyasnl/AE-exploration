// store.ts
import { configureStore, Middleware } from '@reduxjs/toolkit';
import { Action } from './actions';
import counterReducer from './reducer';

export interface RootState {
  counter: ReturnType<typeof counterReducer>;
}

const middleware: Middleware<{}, RootState>[] = [
  // Add any middleware you need here
];

const store = configureStore<RootState, Action>({
    reducer: {
      counter: counterReducer,
    },
  });
  
  export default store;