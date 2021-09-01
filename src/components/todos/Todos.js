import { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../../redux/reducer";
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import "./todos.scss";


const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "")  {
      alert("Если хотите добавить задачу, введите значение");
    } else {
      props.addTodo({
        id: uuidv4(),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  const keyPress = (event) => {
    if (event.code === 'Enter') {
        add();
    }
};
 
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={handleChange}
        className="todo-input"
        value={todo}
        onKeyPress={(event) => keyPress(event)} 
      />

      <button 
      title="Add ToDo Task" 
      className="add-btn" 
      onClick={() => add()}
      >
        +
      </button>
      <br />
    </div>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(Todos);