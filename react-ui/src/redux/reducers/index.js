import { combineReducers } from "redux";
import favorites from "./favorites";
import gender from "./gender";
import username from "./username";

import initialCandidates from "./initialCandidates";

export default combineReducers({ username, initialCandidates, gender, favorites });
