import { GET_FAVORITE } from "../actionTypes";

const initialState = '';

export default function(state=initialState, action) {
  console.log("action ====> ", action);
  switch (action.type) {
    case GET_FAVORITE:
      const {id, name} = action.payload;
      return {
        ...state,
        id: id,
        name: name,
      }
    default:
      return state;
  }
}