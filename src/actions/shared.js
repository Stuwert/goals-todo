import API from 'goals-todos-api';

// copied from a copy from stack overflow
export const generateId = () => {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString();
}

// App Code

export const RECEIVE_DATA = 'RECEIVE_DATA';

const receiveDataAction = (todos, goals) => {
  return {
    type: RECEIVE_DATA,
    todos,
    goals,
  }
}

export const handleInitialData = () => {
  return (dispatch) => {
    Promise.all([
      API.fetchTodos(),
      API.fetchGoals(),
    ]).then(([todos, goals]) => {
      dispatch(receiveDataAction(
        todos,
        goals
      ));
    });
  }
}
