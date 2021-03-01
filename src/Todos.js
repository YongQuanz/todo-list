import React, { useState } from "react";

function Todos({ todo }) {
  const [checked, setChecked] = useState(true);

  return (
    <div className="todo-container">
      <div className="todo-item">
        <input
          type="checkbox"
          value={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <label
          style={
            checked
              ? { textDecoration: "none" }
              : { textDecoration: "line-through" }
          }
        >
          {todo}
        </label>
      </div>
    </div>
  );
}

export default Todos;
