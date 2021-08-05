import {
  GET_GENDER,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SUBMIT_FORM,
} from "./actionTypes";

export const updateGender = (gender) => {
  return {
    type: GET_GENDER,
    payload: {
      gender,
    },
  };
};

export const addFavorite = (id, name, email) => {
  // console.log('id =====> ', id, name);
  return {
    type: ADD_FAVORITE,
    payload: {
      id: id,
      name: name,
      email: email,
    },
  };
};

export const removeFavorite = (id) => {
  // console.log('id =====> ', id, name);
  return {
    type: REMOVE_FAVORITE,
    payload: {
      id: id,
    },
  };
};

export const submitForm = (formData) => {
  return {
    type: SUBMIT_FORM,
    payload: {
      formData,
      isSubmitted: true,
    },
  };
};

export const startOver = () => {
  return {
    type: SUBMIT_FORM,
    payload: {
      formData: {},
      isSubmitted: false,
    }
  }
}

// const blah = () => {
//   return {type: GET_USERNAME}
// };
