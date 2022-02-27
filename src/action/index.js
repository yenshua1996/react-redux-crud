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

export const deleteTodo = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:4000/todo/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });

  const payload = await response.json();

  console.log(payload);

  dispatch({
    type: "DELETE_TODO",
    payload: id,
  });
};

export const updateReminder = (todo) => async (dispatch) => {
  const response = await fetch(`http://localhost:4000/todo/${todo.id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ ...todo, reminder: !todo.reminder }),
  });

  const payload = await response.json();

  console.log(payload);

  dispatch({
    type: "UPDATE_REMINDER",
    payload: todo.id,
  });
};
