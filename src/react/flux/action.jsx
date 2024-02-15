// actions.js
import dispatcher from "./dispatcher";;

export const ActionTypes = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
};

export const addTodo = (text) => {
  dispatcher.dispatch({
    type: ActionTypes.ADD_TODO,
    payload: text,
  });
};

export const removeTodo = (id) => {
  dispatcher.dispatch({
    type: ActionTypes.REMOVE_TODO,
    payload: id,
  });
};
