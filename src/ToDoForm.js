import { useState } from "react";
import "./ToDoForm.css";

const ToDoForm = ({ addToDoItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      addToDoItem(inputValue);
      setInputValue("");
    }
  };

  return (
    <div id = "p">
      <form onSubmit={handleSubmit}>
          <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ToDoForm;