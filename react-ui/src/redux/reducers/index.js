import { combineReducers } from 'redux';
import username from './username';
import initialCandidates from './initialCandidates';

export default combineReducers({ username, initialCandidates });