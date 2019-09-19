import React from 'react';

import { Router } from '@reach/router';
import TodosList from './views/TodosList';
import TodoDetail from './views/TodoDetail';
import NotFound from './views/NotFound';
import {loadTodos} from './store/actions'
import {connect} from 'react-redux';

import './App.scss'



class App extends React.Component {

  componentDidMount() {
     this.props.loadTodos().catch(console.error)
  }

  render() {
    return (
      <div className='App'>
        <main>
          <Router>
            <TodosList
              path='/'

            />
            <TodoDetail
              path='/todo/:id'
            />
            <NotFound path='*' />
          </Router>
        </main>
        <footer>La mejor app de tareas</footer>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  loadTodos: loadTodos(dispatch),
});
export default connect(
  null,
  mapDispatchToProps,
)(App);
