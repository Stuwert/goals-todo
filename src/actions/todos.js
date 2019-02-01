import API from 'goals-todos-api';

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo,
  }
}

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id,
  }
}

// Actions return object representations of an event
// Abstraction layer
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  }
}


export const handleDeleteTodo = (todo) => {
  return (dispatch) => {
    dispatch(removeTodo(todo.id));
    return API.deleteTodo(todo.id)
      .catch(() => {
        dispatch(addTodo(todo));
        alert('an error occurred.  Try again.')
      })
  }
}

export const handleAddTodo = (name, callback) => {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo));
        callback();
      })
      .catch(() => alert('There was an error.  Try again.'))
  }
}

export const handleToggleTodo = (id) => {
  return (dispatch) => {
    dispatch(toggleTodo(id));
    return API.toggleTodo(id)
      .catch(() => {
        dispatch(toggleTodo(id));
        alert('There was an error. Try again');
      });
  }
}
