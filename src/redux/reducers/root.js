import { combineReducers } from 'redux';
import launches from './launches';
import launchReducer from './launch';

export default combineReducers({
  launches,
  launch: launchReducer,
});
