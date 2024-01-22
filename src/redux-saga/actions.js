// actions.js
export const ActionTypes = {
    INCREMENT: 'INCREMENT',
    INCREMENT_ASYNC: 'INCREMENT_ASYNC',
    INCREMENT_ASYNC_SUCCESS: 'INCREMENT_ASYNC_SUCCESS',
  };
  
  export const increment = () => ({
    type: ActionTypes.INCREMENT,
  });
  
  export const incrementAsync = () => ({
    type: ActionTypes.INCREMENT_ASYNC,
  });
  
  export const incrementAsyncSuccess = () => ({
    type: ActionTypes.INCREMENT_ASYNC_SUCCESS,
  });
  