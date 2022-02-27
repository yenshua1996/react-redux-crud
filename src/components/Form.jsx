import "./Form.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaArrowRight } from "react-icons/fa";
import { createTodo } from "../action/index";

const Form = () => {
  const [todo, setTodo] = useState("");
  const [reminder, setReminder] = useState(false);
  const dispatch = useDispatch();

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const onChangeReminder = () => {
    setReminder(!reminder);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createTodo({ todo, reminder }));

    setTodo("");
    setReminder(false);
  };

  return (
    <div>
      <form className="form-panel" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="todo">Todo</label>
          <input
            type="text"
            id="todo"
            name="todo"
            className="form-input"
            onChange={onChangeTodo}
            value={todo}
          />
        </div>

        <div className="form-group">
          <label htmlFor="reminder">Reminder</label>
          <input
            type="checkbox"
            id="reminder"
            name="reminder"
            className="form-input"
            onChange={onChangeReminder}
          />
        </div>

        <button type="submit" className="btn btn-submit">
          Send
          <FaArrowRight />
        </button>
      </form>
    </div>
  );
};

export default Form;
