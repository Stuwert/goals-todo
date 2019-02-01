import {
  ADD_GOAL,
  REMOVE_GOAL
} from '../actions/goals';

export default (state = true, action) => {
  const suffix = action.type.split('/');
  switch (suffix) {
    case RECEIVE_DATA:
      return false;
    default:
      return state;
  }
}
