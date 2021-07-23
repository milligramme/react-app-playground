import { SetPageStatusAction, SET_PAGE_STATUS, PageStatus } from "./types";

export const setPageStatus = (status: PageStatus): SetPageStatusAction => ({
  type: SET_PAGE_STATUS,
  payload: { status },
});
