import "./app.scss";
import TodoForm from "../todoform/TodoForm";
import Todos from "../todos/Todos";
import React from 'react';


function App() {
  return (
    <div className="App">
      <h1>ToDo List App</h1>
      <div>
        <Todos />
        <TodoForm />
      </div>
    </div>
  );
}

export default App;


