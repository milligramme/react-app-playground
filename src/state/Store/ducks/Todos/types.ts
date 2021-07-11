import { Action } from "redux";

export const ADD_TODO = "Todos/ADD_TODO";
export const TOGGLE_TODO = "Todos/TOGGLE_TODO";

export interface AddTodoAction extends Action {
  type: typeof ADD_TODO;
  payload: {
    id: string;
  };
}

export interface ToggleTodoAction extends Action {
  type: typeof TOGGLE_TODO;
  payload: {
    id: string;
    show: boolean;
  };
}

export const todosActionTypes = [ADD_TODO, TOGGLE_TODO];
export type TodosAction = AddTodoAction | ToggleTodoAction;
