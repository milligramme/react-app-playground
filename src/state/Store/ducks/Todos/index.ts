import { createTodosReducer } from "./reducers";

interface Todo {
  title: string;
  description: string;
  id: string;
  completed: boolean;
}

export interface TodosState {
  todos: Todo[];
}

export default createTodosReducer;
