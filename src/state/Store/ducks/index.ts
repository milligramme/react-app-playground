import {
  connectRouter,
  LocationChangeAction,
  RouterState,
} from "connected-react-router";
import { combineReducers, Reducer } from "redux";
import { History } from "history";

import createTodosReducer, { TodosState } from "./Todos";
import createPageStatusReducer, { PageStatusState } from "./PageStatus";

export interface GlobalState {
  router: RouterState;
  todos: TodosState;
  pageStatus: PageStatusState;
}

export const createReducer = (
  history: History,
): Reducer<GlobalState, LocationChangeAction> =>
  combineReducers({
    router: connectRouter(history),
    todos: createTodosReducer({ todos: [] }),
    pageStatus: createPageStatusReducer({ status: "idle" }),
  });
