const InitialState = {
  pokemon: []
 };
 
 export const pokemon = (state = InitialState, action) => {
   switch (action.type) {
     case "updatePokemon":
       return {
         ...state,
         pokemon: [...state.pokemon]
       };
     default:
       return state;
   }
 };