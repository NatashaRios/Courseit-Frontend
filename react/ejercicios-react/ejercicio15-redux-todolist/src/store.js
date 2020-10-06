import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  input: '',
  button: []
};

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_INPUTVALUE':
      return{
        ...state,
        input: action.inputValue
      }
      case 'ADD_BUTTONINFO':
        return{
          ...state,
          button: action.buttonInfo
        }
    default:
      return state;
  }
};

export const addInputValue = (value) => dispatch => {
  return dispatch({
    type: 'ADD_INPUTVALUE',
    inputValue: value
  });
};

export const addButtonInfo = () => dispatch => {
  return dispatch({
    type: 'ADD_BUTTONINFO',
    
  });
};


export function initializeStore(){
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
}