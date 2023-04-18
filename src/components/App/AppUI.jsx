import React from "react";

import { TodoContext } from "../TodoContext/TodoContext";

import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoModal } from "../TodoModal/TodoModal";
import { TodoForm } from "../TodoForm/TodoForm";

import { Loading } from "../Loading/Loading";

import "./App.css";

function AppUI() {
  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <div className="containerSearchAndButton">
        <TodoSearch />
        <CreateTodoButton setOpenModal={setOpenModal} icon={"fa-solid fa-plus"}/>
      </div>
      <TodoList>
        {loading && <Loading />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <TodoModal>
          <TodoForm />
        </TodoModal>
      )}
    </React.Fragment>
  );
}

export { AppUI };
