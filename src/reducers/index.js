import { combineReducers } from "redux";

const appReducer = (state = [], action) => {
  if (action.type === "READ_TODO") {
    return action.payload;
  }

  if (action.type === "CREATE_TODO") {
    return [...state, action.payload];
  }

  return state;
};

export default combineReducers({
  todos: appReducer,
});
