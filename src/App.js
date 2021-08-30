import "./style/main.scss";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
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


