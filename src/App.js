import React from 'react';

import { Router } from '@reach/router';
import TodosList from './views/TodosList';
import TodoDetail from './views/TodoDetail';
import NotFound from './views/NotFound';
import './App.scss'

class App extends React.Component {
  state = JSON.parse(localStorage.getItem('state')) || {
    todos: [],
  };

  saveToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(this.state));
  };

  addTodo = text => {
    const newTodo = {
      text,
      completed: false,
      id: Date.now(),
    };
    this.setState(
      { todos: [newTodo, ...this.state.todos] },
      this.saveToLocalStorage,
    );
  };
  toggleCompleted = id => {
    this.setState(
      {
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      },
      this.saveToLocalStorage,
    );
  };
  deleteTodo = id => {
    this.setState(
      {
        todos: this.state.todos.filter(todo => todo.id !== id)
      },
      this.saveToLocalStorage,
    );
  };

  editTodo = todo => {
    this.setState(
      {
        todos: this.state.todos.map(_todo =>
          _todo.id === todo.id ? todo : _todo,
        ),
      },
      this.saveToLocalStorage,
    );
  };

  render() {
    return (
      <div className='App'>
        <main>
          <Router>
            <TodosList
              path='/'
              todos={this.state.todos}
              onNewTodo={this.addTodo}
              onCompleted={this.toggleCompleted}
              onDeleteTodo={this.deleteTodo}
            />
            <TodoDetail
              path='/todo/:id'
              todos={this.state.todos}
              onEditTodo={this.editTodo}
            />
            <NotFound path='*' />
          </Router>
        </main>
        <footer>La mejor app de tareas</footer>
      </div>
    );
  }
}

export default App;
