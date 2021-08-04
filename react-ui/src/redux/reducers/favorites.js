import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actionTypes";

const initialState = [];

export default function (state = initialState, action) {
  console.log("action ====> ", action);
  console.log("state ====> ", state);
  switch (action.type) {
    case ADD_FAVORITE:

      const { id, name, email } = action.payload;
      const copyAdd = state.slice();
      copyAdd.push(action.payload);
      return copyAdd;

    case REMOVE_FAVORITE:
      const copy = state.find((element) => element.id === action.payload.id);
      console.log("copy ===>", copy);
      state.slice(copy);
      console.log("state ===>", state);
      return {
        copy,
      };
    default:
      return state;
  }
}
