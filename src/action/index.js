export const readTodos = () => async (dispatch) => {
  const response = await fetch("http://localhost:4000/todo");

  const todos = await response.json();

  dispatch({
    type: "READ_TODO",
    payload: todos,
  });
};

export const createTodo = (todo) => async (dispatch) => {
  const response = await fetch("http://localhost:4000/todo", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(todo),
  });

  const payload = await response.json();

  console.log(payload);

  dispatch({
    type: "CREATE_TODO",
    payload: payload,
  });
};
