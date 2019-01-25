import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import { createOrder, createOrderSuccess, cancelOrder } from "./actions";

const status = handleActions(
  {
    [createOrder]: () => false,
    [createOrderSuccess]: (_state, action) => true,
    [cancelOrder]: () => false
  },
  false
);

export default combineReducers({ status });
