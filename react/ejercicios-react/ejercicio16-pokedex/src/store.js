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

export const updatePokemon = (name, img) => (dispatch) => {
  return dispatch({
    type: 'updatePokemon',
    pokemonName: name,
    pokemonImg: img
  })
}

export function initializeStore() {
  return createStore(
    combineReducers({ user, pokemon }),
    InitialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}