import { SUBMIT_FORM } from "../actionTypes";

const initialState = { isSubmitted: false };

function submitFormReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_FORM:
      return {
        formData: action.payload.formData,
        isSubmitted: action.payload.isSubmitted,
      };
    default:
      return state;
  }
}

export default submitFormReducer;