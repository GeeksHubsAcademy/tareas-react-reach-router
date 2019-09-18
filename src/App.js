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
        text:'aprender React',
        completed:false,
        id:0
      },
      {
        text: 'aprender Express',
        completed: true,
        id:1
      },
    ]
  }

  addTodo = (text) => {
    const newTodo = {
      text,
      completed:false,
      id: Date.now()
    }
    this.setState({ todos: [newTodo, ...this.state.todos ]      })
  }



  render() {
    return (
      <div className="App">
        <main>
          <Router>
            <TodosList path="/" todos={this.state.todos} onNewTodo={this.addTodo}/>
            <TodoDetail path="/todo/:id" />
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
