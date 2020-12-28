import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { v4 as uuid } from "uuid";
import { AddTodo } from "./../redux/actions";

function TodoInput() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();

    dispatch(AddTodo({ id: uuid(), todo }));
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Todo ...."
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TodoInput;
