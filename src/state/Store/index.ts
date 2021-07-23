import { createStore, applyMiddleware, Store, compose } from "redux";
import { LocationChangeAction } from "connected-react-router";
import { createBrowserHistory, History } from "history";

import { createReducer, GlobalState } from "./ducks";

export const history = createBrowserHistory();

export const configureStore = (
  history: History,
): { store: Store<GlobalState, LocationChangeAction> } => {
  const store = createStore(createReducer(history), compose(applyMiddleware()));

  return { store };
};
