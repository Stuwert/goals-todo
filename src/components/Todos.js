import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo
} from '../actions/todos';

class Todos extends React.Component {
  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo));
  }
  addItem = (e) => {
    e.preventDefault();
    this.props.dispatch(handleAddTodo(
      this.input.value,
      () => { this.input.value = '' }
    ));
  }

  toggleItem = (todo) => {
    this.props.dispatch(handleToggleTodo(todo.id));
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>

        <input
          type="text"
          placeholder="Add Todo"
          ref={(input) => this.input = input}
        />

        <button onClick={this.addItem}>Add Item</button>

        <List
          items={this.props.todos}
          remove={this.removeItem}
          toggle={this.toggleItem}
        />
      </div>
    )
  }
}

export default connect((state) => ({
  todos: state.todos
}))(Todos);
