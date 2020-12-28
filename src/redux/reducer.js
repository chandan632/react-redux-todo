const initialState = {
  todos: [],
  show: false,
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, actions.payload],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== actions.payload),
      };

    default:
      return state;
  }
};

export default reducer;
