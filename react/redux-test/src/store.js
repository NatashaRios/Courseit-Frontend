import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  counter: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
};

export const addCounter = () => dispatch => {
  return dispatch({
    type: 'ADD_COUNTER'
  });
};

export function initializeStore(){
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
}