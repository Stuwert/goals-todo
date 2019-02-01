import API from 'goals-todos-api';

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

export const addGoal = (goal) => ({
  type: ADD_GOAL,
  goal
});

export const removeGoal = (id) => ({
  type: REMOVE_GOAL,
  id
});

export const handleAddGoal = (name, callback) => {
  return (dispatch) => {
    return API.saveGoal(name)
      .then((goal) => {
        dispatch(addGoalAction(goal));
        callback();
      })
      .catch(() => alert('There was an error.  Try again.'))
  }
}

export const handleDeleteGoal = (goal) => {
  return (dispatch) => {
    dispatch(removeGoalAction(goal.id));
    return API.deleteGoal(goal.id)
      .catch(() => {
        dispatch(addGoalAction(goal));
        alert('an error occured');
      })
  }
}
