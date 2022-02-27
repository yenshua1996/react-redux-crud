import { combineReducers } from "redux";

const appReducer = (state = [], action) => {
  if (action.type === "READ_TODO") {
    return action.payload;
  }

  if (action.type === "CREATE_TODO") {
    return [...state, action.payload];
  }

  if (action.type === "DELETE_TODO") {
    return state.filter((item) => item.id !== action.payload);
  }

  if (action.type === "UPDATE_REMINDER") {
    return state.map((item) =>
      item.id === action.payload ? { ...item, reminder: !item.reminder } : item
    );
  }

  return state;
};

export default combineReducers({
  todos: appReducer,
});
