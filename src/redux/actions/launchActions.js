import { SET_LAUNCH } from './actionTypes';

const setLaunch = launch => (
  {
    type: SET_LAUNCH,
    payload: launch,
  }
);

export default setLaunch;
