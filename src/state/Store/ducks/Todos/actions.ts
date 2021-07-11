import {
  AddTodoAction,
  ToggleTodoAction,
  ADD_TODO,
  TOGGLE_TODO
} from "./types";

export const addTodo = (id: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: { id }
});

export const toggleTodo = (id: string, show: boolean): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  payload: { id, show }
});
