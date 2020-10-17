const InitialState = {
  isLogged: false
 };
 
 export const user = (state = InitialState, action) => {
   switch (action.type) {
     case "updateUserData":
       const { button, input } = state;
       return {
         ...state,
         isLogged: action.value
       };
     default:
       return state;
   }
 };