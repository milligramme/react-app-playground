import {
  connectRouter,
  LocationChangeAction,
  RouterState
} from "connected-react-router";
import { combineReducers, Reducer } from "redux";
import { History } from "history";

import createTodosReducer, { TodosState } from "./Todos";

export interface GlobalState {
  router: RouterState;
  todos: TodosState;
}

export const createReducer = (
  history: History
): Reducer<GlobalState, LocationChangeAction> =>
  combineReducers({
    router: connectRouter(history),
    todos: createTodosReducer({ todos: [] })
  });
