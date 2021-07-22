import { Action } from "redux";

export const SET_PAGE_STATUS = "pageStatus/SET_PAGE_STATUS";

export type PageStatus = "idle" | "loading" | "success" | "error";

export interface SetPageStatusAction extends Action {
  type: typeof SET_PAGE_STATUS;
  payload: {
    status: PageStatus;
  };
}

export const pageStatusActionTypes = [SET_PAGE_STATUS];
export type PageStatusAction = SetPageStatusAction;
