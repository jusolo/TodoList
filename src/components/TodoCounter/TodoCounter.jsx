import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <div>
      <h1 className="title">TODO</h1>
      <h2 className="subtitle">
        Has completado {completedTodos} de {totalTodos} Todo's
      </h2>
    </div>
  );
}

export { TodoCounter };
