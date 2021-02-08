import { FETCH_LAUNCH_BEGIN, FETCH_LAUNCH_SUCCESS, FETCH_LAUNCH_FAILURE } from './actionTypes';
import launchData from '../../helpers/launchData';

const fetchLaunchBegin = () => (
  {
    type: FETCH_LAUNCH_BEGIN,
  }
);

const fetchLaunchSuccess = launches => (
  {
    type: FETCH_LAUNCH_SUCCESS,
    payload: launches,
  }
);

const fetchLaunchFailure = error => (
  {
    type: FETCH_LAUNCH_FAILURE,
    payload: error,
  }
);

const fetchLaunches = (category = '') => dispatch => {
  dispatch(fetchLaunchBegin());
  return launchData(category)
    .then(res => {
      if (res.status === 200) {
        dispatch(fetchLaunchSuccess(res.data));
      }
    })
    .catch(error => {
      dispatch(fetchLaunchFailure(error));
    });
};

export default fetchLaunches;
