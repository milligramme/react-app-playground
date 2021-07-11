import { createTodosReducer } from "./reducers";

interface Todo {
  title: string;
  description: string;
  id: string;
  show: boolean;
}

export interface TodosState {
  todos: Todo[];
}

export default createTodosReducer;
