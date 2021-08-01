import { GET_USERNAME, GET_GENDER } from "./actionTypes";

export const updateUsername = (username) => {
  return {
    type: GET_USERNAME,
    payload: {
      username,
    },
  };
};

export const updateGender = (gender) => {
  return {
    type: GET_GENDER,
    payload: {
      gender,
    },
  }
}

// const blah = () => {
//   return {type: GET_USERNAME}
// };
