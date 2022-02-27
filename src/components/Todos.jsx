import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { readTodos } from "../action/index";
import { useEffect } from "react";
import Todo from "./Todo";
import "./Todos.css";

const Todos = () => {
  const [effect, setEffect] = useState(false);

  //Redux State
  const todos = useSelector((state) => state.todos);

  //React Redux Dispatcher
  const dispatch = useDispatch();

  useEffect(() => {
    //Dispatch action
    dispatch(readTodos());

    setEffect(!effect);
  }, []);

  console.log(todos);

  return (
    <div className="todos-container">
      {!todos.length && <h3 className="initial-prompt">Start Adding Todo</h3>}

      {effect && todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
    </div>
  );
};

export default Todos;
