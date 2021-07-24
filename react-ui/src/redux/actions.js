import { GET_USERNAME } from "./actionTypes";

export const updateUsername = (username) => {
  return {
    type: GET_USERNAME,
    payload: {
      username,
    },
  };
};

// const blah = () => {
//   return {type: GET_USERNAME}
// };
