import { createPageStatusReducer } from "./reducers";

import { PageStatus } from "./types";

export interface PageStatusState {
  status: PageStatus;
}

export default createPageStatusReducer;
