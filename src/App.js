import React from 'react';

import { Router } from '@reach/router';
import TodosList from './views/TodosList';
import TodoDetail from './views/TodoDetail';
import NotFound from './views/NotFound';
import './App.scss'

function App() {
  return (
    <div className="App">
     <main>
        <Router>
          <TodosList path="/" />
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

export default App;
