const initialState = {
  todos: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_TODOS':
      return {
        ...state,
        todos: action.payload,
      };

    case 'ADD_TODO_OPTIMISTICALLY':
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case 'ADD_TODO_FAIL':
      return {
        ...state,
        todos: state.todos.filter(
          todo => todo.fakeId !== action.payload.fakeId,
        ),
      };
    case 'ADD_TODO_SUCCESS':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.fakeId === action.payload.fakeId) {
            delete todo.fakeId;
            todo.id = action.payload.id;

          }
          return todo;
        }),
      };

    default:
      return state;
  }
}

export default reducer;
