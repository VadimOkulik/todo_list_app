import { useRef } from "react";
import PropTypes from "prop-types";
import React from 'react';
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import "./todoitem.scss";



const TodoItem = (props) => {
  const { item, updateTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, event) => {
    if (event.charCode === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li
      key={item.id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <button
          onClick={changeFocus}
        >
          <AiFillEdit />
        </button>
        {item.completed === false && (
          <button
            style={{ color: "green" }}
            onClick={props.completeTodo.bind(this, item.id)}
          >
            <IoCheckmarkDoneSharp />
          </button>
        )}
        <button
          style={{ color: "red" }}
          onClick={props.removeTodo.bind(this, item.id)}
        >
          <IoClose />
        </button>
      </div>
      {item.completed && <span className="completed">done</span>}
    </li>
  );
};

TodoItem.propTypes = {

  updateTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
}


export default TodoItem;
