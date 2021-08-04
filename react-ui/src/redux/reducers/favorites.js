import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actionTypes";

const initialState = [];

export default function(state=initialState, action) {
  console.log("action ====> ", action);
  switch (action.type) {
    case ADD_FAVORITE:
      const {id, name, email} = action.payload;
      const copyAdd = state.slice();
      copyAdd.push(action.payload);
      return (
        copyAdd
        // copy, push into array
        // ...state,
        // id: id,
        // name: name,
        // email: email,
      )
    case REMOVE_FAVORITE:
      const copy = state.find(element => element.id === action.payload.id);
      console.log('copy ===>', copy)
      state.slice(copy);
      console.log('state ===>', state)
      return {
        copy
      }
    default:
      return state;
  }
}