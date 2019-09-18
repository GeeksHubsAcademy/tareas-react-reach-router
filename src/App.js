import React from 'react';

import { Router } from '@reach/router';
import TodosList from './views/TodosList';
import TodoDetail from './views/TodoDetail';
import NotFound from './views/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <TodosList path="/" />
        <TodoDetail path="/todo/:id" />
        <NotFound path="*"/>
      </Router>
      <footer>
        <h1>   La mejor app de tareas  </h1>

      </footer>
    </div>
  );
}

export default App;
