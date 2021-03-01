import { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  console.log(todos);

  return (
    <div className="App">
      <h1>What Todo Today? &#129300; </h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todos todo={todo} key={index} />
      ))}
    </div>
  );
}

export default App;
