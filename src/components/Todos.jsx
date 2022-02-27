import { useSelector, useDispatch } from "react-redux";
import { readTodos } from "../action/index";
import { useEffect } from "react";
import Todo from "./Todo";

const Todos = () => {
  //Redux State
  const todos = useSelector((state) => state.todos);

  //React Redux Dispatcher
  const dispatch = useDispatch();

  useEffect(() => {
    //Dispatch action
    dispatch(readTodos());
  }, []);

  console.log(todos);

  return (
    <div className="todos-container">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default Todos;
