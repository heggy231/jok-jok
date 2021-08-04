import { GET_USERNAME, GET_GENDER, GET_FAVORITE } from "./actionTypes";

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
  };
};

export const updateFavorite = (id, name) => {
  // console.log('id =====> ', id, name);
  return {
    type: GET_FAVORITE,
    payload: {
      id: id,
      name: name,
    },
  };
};

// const blah = () => {
//   return {type: GET_USERNAME}
// };
