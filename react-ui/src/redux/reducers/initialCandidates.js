import { GET_USERNAME } from "../actionTypes";

const initialState = [
  {
    url: "https://placekitten.com/g/300/200",
    name: "heggy",
    gender: "female",
    isSelected: false,
  },
];

export default function (state = initialState, action) {
  if (action.type === GET_USERNAME) {
    return action.payload.username;
  }
  return state;
}
