import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };
  return (
    <button className="button" onClick={onClickButton}>
      <i class={props.icon}></i>
    </button>
  );
}

export { CreateTodoButton };
