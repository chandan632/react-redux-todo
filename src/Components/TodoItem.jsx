import React from "react";
import { useDispatch } from "react-redux";
import { DeleteTodo } from "./../redux/actions";

function TodoItem(props) {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };
  return (
    <div>
      <span>{props.no + 1}</span>
      <span>{props.todo.todo}</span>
      <button onClick={() => deleteHandler(props.todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
