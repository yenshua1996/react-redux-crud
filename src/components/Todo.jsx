import "./Todo.css";
import { FaTimes } from "react-icons/fa";

const Todo = ({ todo }) => {
  let reminder = todo.reminder === true ? "todo-card reminder" : "todo-card";

  const onClick = (id) => {
    console.log(id);
  };

  return (
    <div className={reminder}>
      <h5 className="todo-title">{todo.todo}</h5>

      <div className="todo-panel">
        <span
          onClick={() => {
            onClick(todo.id);
          }}
        >
          <FaTimes />
        </span>
      </div>
    </div>
  );
};

export default Todo;
