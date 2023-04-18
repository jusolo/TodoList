import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onClose = () => {
    setOpenModal(false);
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <div>
      <button className="btn-close" onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
      <form onSubmit={onSubmit}>
        <div className="form-content">
          <label htmlFor="">Escribe tu Tarea:</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={newTodoValue}
            onChange={onChange}
          ></textarea>
        </div>
        <button type="submit" className="btn-submit">Añadir</button>
      </form>
    </div>
  );
}

export { TodoForm };
