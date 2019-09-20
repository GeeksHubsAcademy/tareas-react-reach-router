import Axios from 'axios';

const API_URL = 'http://localhost:3001';

export const loadTodos = dispatch => async () => {
  const { data } = await Axios.get(API_URL + '/todos');


  dispatch({
    type: 'LOAD_TODOS',
    payload: data.todos,
  });
};

export const addTodo = dispatch => async (text) => {
  const newTodo = {
    text: text,
    completed: false,
    fakeId: Date.now()
  };

   dispatch({
     type: 'ADD_TODO_OPTIMISTICALLY',
     payload: newTodo,
   });

  try {
     const { data } = await Axios.post(API_URL + '/todos', newTodo, {
       timeout: 30000,
     });
      dispatch({
        type: 'ADD_TODO_SUCCESS',
        payload: data,
      });

  } catch (error) {
      dispatch({
        type: 'ADD_TODO_FAIL',
        payload: newTodo,
      });
      throw 'no se ha podido guardar'
  }



};



export const completeTodo = dispatch => async (todo) => {
  todo.completed = !todo.completed;
  const { data } = await Axios.put(API_URL + '/todos', todo);

  dispatch({
    type: 'LOAD_TODOS',
    payload: data.todos,
  });
};


export const deleteTodo = dispatch => async (id) => {

  const { data } = await Axios.delete(API_URL + '/todos/'+ id );

  dispatch({
    type: 'LOAD_TODOS',
    payload: data.todos,
  });
};
