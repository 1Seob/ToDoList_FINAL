import "./ToDoItem.css";

const ToDoItem = ({ item, removeToDoItem }) => {
  //자바스크립트
  return (
    <li>
      {item}
      <button onClick={removeToDoItem}>Remove</button>
    </li>
  );
};

export default ToDoItem;