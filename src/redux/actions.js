export const AddTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const DeleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};
