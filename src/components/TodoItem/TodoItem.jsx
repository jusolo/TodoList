import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="itemList">
      <input type="checkbox" onClick={props.onComplete} defaultChecked={props.completed && true} />
      <p className={`itemText ${props.completed && "itemText--completed"}`}>
        {props.text}
      </p>
      <span className="itemDelete" onClick={props.onDelete}>
        <i class="fa-solid fa-trash"></i>
      </span>
    </li>
  );
}

export { TodoItem };
