import { GET_GENDER } from "../actionTypes";

const initialState = '';

export default function(state=initialState, action) {
  switch (action.type) {
    case GET_GENDER:
      const { gender } = action.payload;
      return {
        ...state,
        gender,
      }
    default:
      return state;
  }
}