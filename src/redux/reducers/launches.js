import { FETCH_LAUNCH_BEGIN, FETCH_LAUNCH_SUCCESS, FETCH_LAUNCH_FAILURE } from '../actions/actionTypes';

const initialState = {
  loading: false,
  launches: [],
  error: '',
};

const launches = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LAUNCH_BEGIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_LAUNCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        launches: action.payload,
      };
    }
    case FETCH_LAUNCH_FAILURE: {
      return {
        ...state,
        loading: false,
        launches: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default launches;
