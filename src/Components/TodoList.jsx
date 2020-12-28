import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos.length > 0 ? (
        <>
          List Of Todo's
          {todos.map((todo, index) => (
            <TodoItem key={todo.id} todo={todo} no={index} />
          ))}
        </>
      ) : (
        "No todo item found!"
      )}
    </div>
  );
}

export default TodoList;
