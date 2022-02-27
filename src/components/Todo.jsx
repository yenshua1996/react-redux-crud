import "./Todo.css";
import { useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { deleteTodo, updateReminder } from "../action/index";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  let reminder = todo.reminder === true ? "todo-card reminder" : "todo-card";

  const onClick = (id) => {
    dispatch(deleteTodo(id));
  };

  const onDbClick = (todo) => {
    dispatch(updateReminder(todo));
  };

  return (
    <div className={reminder}>
      <span>
        <h5
          className="todo-title"
          onDoubleClick={() => {
            onDbClick(todo);
          }}
        >
          {todo.todo}
        </h5>
      </span>

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
