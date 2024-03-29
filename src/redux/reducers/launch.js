import { SET_LAUNCH } from '../actions/actionTypes';

const launchReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_LAUNCH: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default launchReducer;
