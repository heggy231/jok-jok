import { GET_USERNAME } from "../actionTypes";

const initialState = "";

export default function (state = initialState, action) {
  if (action.type === GET_USERNAME) {
    const { username } = action.payload;
    return {
      ...state,
      username,
    };
  }
  return state;
}
