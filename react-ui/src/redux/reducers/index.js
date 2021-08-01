import { combineReducers } from "redux";
import gender from "./gender";
import username from "./username";
import initialCandidates from "./initialCandidates";

export default combineReducers({ username, initialCandidates, gender });
