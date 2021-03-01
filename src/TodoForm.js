import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [todoItem, setTodoItem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoItem) {
      addTodo(todoItem);
      setTodoItem("");
    } else {
      alert("No Todos Found!");
    }
  };

  const handleChange = (event) => {
    setTodoItem(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="form-input" type="text" value={todoItem} onChange={handleChange} />
        <button className="add-btn">ADD</button>
      </form>
    </div>
  );
}

export default TodoForm;
