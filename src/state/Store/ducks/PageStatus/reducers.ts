import { Action, Reducer } from "redux";

import { PageStatusState } from ".";
import {
  pageStatusActionTypes,
  PageStatusAction,
  SET_PAGE_STATUS,
} from "./types";

const isActionType = (action: Action): action is PageStatusAction =>
  pageStatusActionTypes.some((actionType) => actionType === action.type);

export const createPageStatusReducer =
  (initialState: PageStatusState): Reducer<PageStatusState, Action> =>
  (state = initialState, action) => {
    if (!isActionType(action)) return state;

    switch (action.type) {
      case SET_PAGE_STATUS:
        return {
          ...state,
          status: action.payload.status,
        };
    }
  };
