// reducer.ts
import { Action, ActionTypes } from './actions';

interface AppState {
  count: number;
}

const initialState: AppState = {
  count: 0,
};

const counterReducer = (state = initialState, action: Action): AppState => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case ActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
