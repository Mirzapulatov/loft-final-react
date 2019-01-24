import { createAction } from "redux-actions";

export const createOrder = createAction("CREATE_ORDER");
export const createOrderSuccess = createAction("CREATE_ORDER_SUCCESS");
export const cancelOrder = createAction("CANCEL_ORDER");
