import { GET_FAVORITE } from "../actionTypes";

const initialState = [];

export default function(state=initialState, action) {
  switch (action.type) {
    case GET_FAVORITE:
      const copy = state.slice()
      copy.push(action.payload);
      return copy;
    default:
      return state;
  }
}