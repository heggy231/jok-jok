import { combineReducers } from "redux";
import favorites from "./favorites";
import formData from "./formData";
import gender from "./gender";

export default combineReducers({ formData, gender, favorites });
