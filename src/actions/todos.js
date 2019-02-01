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
export const toggleTodoAction = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  }
}


export const handleDeleteTodo = (todo) {
  return (dispatch) => {
    dispatch(removeTodoAction(todo.id));
    return API.deleteTodo(todo.id)
      .catch(() => {
        dispatch(addTodoAction(todo));
        alert('an error occurred.  Try again.')
      })
  }
}

export const handleAddTodo = (name, callback) => {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodoAction(todo));
        callback();
      })
      .catch(() => alert('There was an error.  Try again.'))
  }
}

export const handleToggleTodo = (id) => {
  return (dispatch) => {
    dispatch(toggleTodoAction(id));
    return API.toggleTodo(id)
      .catch(() => {
        dispatch(toggleTodoAction(id));
        alert('There was an error. Try again');
      });
  }
}
