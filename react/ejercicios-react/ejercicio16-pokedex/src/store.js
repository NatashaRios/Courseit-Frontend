import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { user } from './reducers/user';
import { pokemon } from './reducers/pokemon';

const InitialState = {};

export const updateUserData = (isLogged) => (dispatch) => {
  return dispatch({
    type: 'updateUserData',
    value: isLogged
  })
}

export const updatePokemon = () => (dispatch) => {
  return dispatch({
    type: 'updatePokemon'
  })
}

export function initializeStore() {
  return createStore(
    combineReducers({ user, pokemon }),
    InitialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}