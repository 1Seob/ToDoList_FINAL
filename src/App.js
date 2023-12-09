import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import ToDoForm from "./ToDoForm.js";
import ToDoList from "./ToDoList.js";

document.write("ToDoList");

function App() {
  const [toDoItems, setToDoItems] = useState([]);

  const addToDoItem = (item) => {
    setToDoItems([...toDoItems, item]);
  };

  const removeToDoItem = (index) => {
    const newToDoItems = [...toDoItems];
    newToDoItems.splice(index, 1);
    setToDoItems(newToDoItems);
  };

  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/"></Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ToDoForm addToDoItem={addToDoItem} />
                <ToDoList
                  toDoItems={toDoItems}
                  removeToDoItem={removeToDoItem}
                />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;