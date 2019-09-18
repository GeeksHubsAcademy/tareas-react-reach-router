import React from 'react';

import { Router } from '@reach/router';
import TodosList from './views/TodosList';
import TodoDetail from './views/TodoDetail';
import NotFound from './views/NotFound';
import './App.scss'

class App extends React.Component {
  state = {
    todos: [
      {
        text: 'aprender React',
        completed: false,
        id: 2
      },
      {
        text: 'aprender Express',
        completed: true,
        id: 1
      },
    ]
  }

  addTodo = (text) => {
    const newTodo = {
      text,
      completed: false,
      id: Date.now()
    }
    this.setState({ todos: [newTodo, ...this.state.todos] })
  }
  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;

        }
        return todo;
      })
    })

  }

  editTodo = (todo) =>  {

    this.setState({
      todos: this.state.todos.map( _todo => _todo.id === todo.id ? todo : _todo  )
    })

  }


  render() {
    return (
      <div className="App">
        <main>
          <Router>
            <TodosList
              path="/"
              todos={this.state.todos}
              onNewTodo={this.addTodo}
              onCompleted={this.toggleCompleted} />
            <TodoDetail path="/todo/:id" todos={this.state.todos}  onEditTodo={this.editTodo}/>
            <NotFound path="*" />
          </Router>
        </main>
        <footer>
          La mejor app de tareas
      </footer>
      </div>
    );
  }
}

export default App;
