import {
  ADD_GOAL,
  REMOVE_GOAL
} from '../actions/goals';

import { RECEIVE_DATA } from '../actions/shared';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal])
    case REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.id)
    case TOGGLE_GOAL:
      return state.map((goal) => goal.id !== action.id ? goal :
        Object.assign({}, goal, { complete: !goal.complete })
      )
    case RECEIVE_DATA:
      // Will override existing data.
      return action.goals;
    default:
      return state
  }
}
